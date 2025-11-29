import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: In a real production environment, never expose keys in client-side code.
// For this demo, we assume the environment variable is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateContent = async (prompt: string, type: 'blog' | 'caption' | 'summary' = 'blog'): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Error: API Key is missing. Please configure process.env.API_KEY.";
    }

    const modelName = 'gemini-2.5-flash';
    
    let systemInstruction = "You are a helpful AI assistant.";
    if (type === 'blog') systemInstruction = "You are a professional tech blogger. Write engaging, SEO-optimized content with proper HTML formatting (p, h2, ul, li tags only).";
    if (type === 'caption') systemInstruction = "You are a social media expert. Write catchy, viral captions.";

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating content. Please try again later.";
  }
};
