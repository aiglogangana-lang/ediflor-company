import { GoogleGenAI, Modality } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function getSearchGroundingResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Search Grounding Error:", error);
    return "Désolé, je n'ai pas pu obtenir d'informations en temps réel pour le moment.";
  }
}

export async function generateProfessionalImage(prompt: string, size: "1K" | "2K" | "4K" = "1K") {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image-preview",
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: size,
        },
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return null;
  }
}

export async function improveText(text: string, context: string, lang: string = 'fr') {
  try {
    const prompt = lang === 'fr' 
      ? `Améliore ce texte pour un contexte professionnel (${context}). Rends-le plus percutant, clair et élégant en français :\n\n${text}`
      : `Improve this text for a professional context (${context}). Make it more impactful, clear, and elegant in English:\n\n${text}`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Text Improvement Error:", error);
    return text;
  }
}

export async function translateObject(obj: any, targetLang: string) {
  try {
    const prompt = `Translate the following JSON object from French to ${targetLang}. 
    Maintain the exact same JSON structure. 
    Only translate the values, not the keys. 
    Return ONLY the valid JSON object, no markdown formatting, no explanations.
    
    JSON to translate:
    ${JSON.stringify(obj, null, 2)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Translation Error:", error);
    throw error;
  }
}
