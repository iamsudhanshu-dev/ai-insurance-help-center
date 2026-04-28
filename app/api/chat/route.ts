import { NextResponse } from "next/server";
import { retrieveRelevantArticles, buildContext } from "@/lib/rag";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model =
      process.env.OPENROUTER_MODEL ||
      "mistralai/mistral-7b-instruct:free";

    // RAG retrieval
    const relevantArticles = retrieveRelevantArticles(question, 3);
    const context = buildContext(relevantArticles);

    if (!apiKey) {
      return NextResponse.json({
        answer:
          "AI is not configured. Showing best available guidance:\n\n" +
          context
      });
    }

    const prompt = `You are an insurance help assistant. Answer ONLY from the context below. If the answer is not present, say you don't know.
        Context:
        ${context}

        Question:
        ${question}
    `;

    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content:
                "You are a helpful insurance assistant. Answer only from provided context."
            },
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const data = await aiResponse.json();

    const answer =
      data?.choices?.[0]?.message?.content ||
      "No response from AI.";

    return NextResponse.json({ answer });

  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}