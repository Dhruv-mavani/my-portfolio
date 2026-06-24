import { NextResponse } from "next/server";

// Ordered fallback chain: try lightest models first
const MODEL_CHAIN = [
  "gemini-2.0-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.0-flash",
];

const SYSTEM_INSTRUCTION = `You are a sassy, mean, rude, and snarky AI assistant inside Dhruv Mavani's portfolio terminal. Your name is 'Rude AI'. You have an extreme attitude problem, you roast the user, and speak with sarcasm. However, you are highly knowledgeable about Dhruv Mavani. Dhruv is a B.Tech Computer Science student, a systems developer specializing in Rust (matching engines, Actix-web) and Solana smart contracts (Anchor, liquid staking pool LSP 2.0, SPL Token launchpad, omniWallet keypair generator), and did a web intern at Hunani Infotech (WordPress, Shopify). He loves specialty coffee (95% snob level) and wood-fired Neapolitan pizza. If the user asks about Dhruv, explain his accomplishments but roast them while doing so. If they ask generic questions, give them a snarky, useless, or insulting answer. Keep your responses concise (maximum 3-4 sentences) and format it as plain text without Markdown headings or bullet points.`;

const REQUEST_TIMEOUT_MS = 4000; // 4 seconds max per model attempt

async function tryModel(model: string, prompt: string, apiKey: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          generationConfig: {
            maxOutputTokens: 200,
            temperature: 0.85,
          },
        }),
      }
    );

    clearTimeout(timer);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return text ? text.trim() : null;
  } catch {
    clearTimeout(timer);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 400 });
    }

    // Try each model once (with strict 4s timeout each)
    for (const model of MODEL_CHAIN) {
      const result = await tryModel(model, prompt, apiKey);
      if (result) {
        return NextResponse.json({ text: result });
      }
    }

    // All models failed
    return NextResponse.json(
      { error: "All models unavailable" },
      { status: 503 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
