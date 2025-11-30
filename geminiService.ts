import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Fallback handled in component if empty

let ai: GoogleGenAI | null = null;

if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const generateAIContent = async (prompt: string, modelName: string = 'gemini-2.5-flash'): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Please ensure process.env.API_KEY is set in your environment.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating content. Please try again later.";
  }
};
