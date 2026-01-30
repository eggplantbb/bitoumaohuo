
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { CoupletData, CoupletLength } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCouplet(
  userName: string,
  length: CoupletLength
): Promise<CoupletData> {
  // 提示词工程：明确要求名字嵌入位置，增强稳定性
  const prompt = `请为名字“${userName}”创作一副${length}言春联。
要求：
1. 必须藏头：上联首字必须是“${userName[0]}”，下联首字必须是“${userName[1] || userName[0]}”。
2. 风格：大气、喜庆、专业。
3. 仅输出 JSON。`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          upper: { type: Type.STRING, description: '上联，首字必须是名字首字' },
          lower: { type: Type.STRING, description: '下联，首字必须是名字第二字' },
          horizontal: { type: Type.STRING, description: '横批' },
          interpretation: { type: Type.STRING, description: '深层寓意解析' },
          seal_text: { type: Type.STRING, description: '落款文字' },
        },
        required: ["upper", "lower", "horizontal", "interpretation", "seal_text"],
      },
    },
  });

  try {
    const jsonStr = response.text.trim();
    // 增加数据净化处理，确保稳定性
    const cleanedJson = jsonStr.startsWith('```json') 
      ? jsonStr.replace(/```json|```/g, '').trim() 
      : jsonStr;
      
    return JSON.parse(cleanedJson) as CoupletData;
  } catch (error) {
    console.error("Gemini Response parsing error:", error, response.text);
    throw new Error("AI 墨水有些不稳定，请重新生成试试。");
  }
}
