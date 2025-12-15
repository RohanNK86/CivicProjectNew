import { GoogleGenAI, Type } from "@google/genai";
import { AIAnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Helper to convert file to base64
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data URL prefix (e.g. "data:image/jpeg;base64,")
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const analyzeIssue = async (description: string, imageFile: File | null): Promise<AIAnalysisResult> => {
  try {
    const parts: any[] = [];
    
    // Add text prompt
    parts.push({
      text: `Analyze this civic issue report. Determine the category (e.g., Pothole, Streetlight, Graffiti, Sanitation, Safety), severity, responsible department, a brief professional summary, and an estimated response time based on severity. Report: "${description}"`
    });

    // Add image if present
    if (imageFile) {
      const imagePart = await fileToGenerativePart(imageFile);
      parts.push(imagePart);
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            severity: { type: Type.STRING, enum: ["Low", "Medium", "High", "Critical"] },
            department: { type: Type.STRING },
            summary: { type: Type.STRING },
            estimatedActionTime: { type: Type.STRING, description: "e.g., '24-48 hours' or '1 week'" }
          },
          required: ["category", "severity", "department", "summary", "estimatedActionTime"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIAnalysisResult;

  } catch (error) {
    console.error("Error analyzing issue:", error);
    // Fallback for demo purposes if API fails or key is missing
    return {
      category: "General Inquiry",
      severity: "Medium",
      department: "Customer Service",
      summary: "We received your report but could not automatically categorize it due to a connection issue.",
      estimatedActionTime: "3-5 Business Days"
    };
  }
};