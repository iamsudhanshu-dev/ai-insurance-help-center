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

    if (!relevantArticles.length) {
        return NextResponse.json({
            answer:
            "I couldn’t find relevant information for your question. Please ask about insurance topics like claims, policies, payments, or coverage."
        });
    }

    if (!apiKey) {
      return NextResponse.json({
        answer:
          "AI is not configured. Showing best available guidance:\n\n" +
          context
      });
    }

    const prompt = `
        You are an insurance help assistant.

        STRICT RULES:
        - Answer ONLY from the provided context
        - If answer is not clearly found → say "I don’t have enough information"
        - Do NOT guess
        - Do NOT combine unrelated content

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

    return NextResponse.json({
        answer,
        sources: relevantArticles.map(a => a.title)
    });

  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}