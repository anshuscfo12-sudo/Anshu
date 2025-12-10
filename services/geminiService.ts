import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: This requires process.env.API_KEY to be set in the environment
const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const refineMessage = async (draft: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key is missing. Returning original draft.");
    return draft; // Fallback if no API key
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `You are a professional business communication assistant. 
    Refine the following message to be more professional, clear, and concise suitable for a business inquiry.
    Keep the tone polite and business-casual.
    
    Original Message: "${draft}"
    
    Return ONLY the refined message text.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text?.trim() || draft;
  } catch (error) {
    console.error("Error refining message with Gemini:", error);
    return draft; // Fallback on error
  }
};