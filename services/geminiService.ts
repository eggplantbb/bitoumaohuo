
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { CoupletData, CoupletLength, CoupletStyle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateCouplet(
  userName: string,
  length: CoupletLength,
  style: CoupletStyle
): Promise<CoupletData> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `请为名字“${userName}”生成一副${length}言的“${style}”风格藏头春联。`,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          upper: { type: Type.STRING, description: '上联内容' },
          lower: { type: Type.STRING, description: '下联内容' },
          horizontal: { type: Type.STRING, description: '横批' },
          interpretation: { type: Type.STRING, description: '对联寓意简述' },
          seal_text: { type: Type.STRING, description: '印章文字(通常为姓氏+“氏”或“制”)' },
        },
        required: ["upper", "lower", "horizontal", "interpretation", "seal_text"],
      },
    },
  });

  try {
    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr) as CoupletData;
  } catch (error) {
    console.error("JSON parsing error:", error);
    throw new Error("生成结果解析失败，请重试。");
  }
}
