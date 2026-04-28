"use client";

import { useState } from "react";
import { starterQuestions, type ChatMessage } from "./chat-types";

const ChatPanel = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I can help with insurance questions about claims, policies, travel coverage, payments, and deductibles.",
    }
  ]);

  const [input, setInput] = useState("");

  const handleSend = (question?: string) => {
    const userQuestion = (question || input).trim();

    if (!userQuestion) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userQuestion,
    };

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "AI response will be connected in the next step. For now, this confirms the chat UI is working.",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      assistantMessage
    ]);

    setInput("");
  };

  return (
    <section className="flex h-[calc(100vh-120px)] flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="border-b border-slate-100 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          AI Assistant
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-950">
          Ask follow-up questions
        </h2>

        <p className="mt-1 text-xs leading-5 text-slate-600">
          Get practical guidance based on help-center articles.
        </p>
      </div>

      <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        {starterQuestions.slice(0, 3).map((question) => (
          <button
            key={question}
            onClick={() => handleSend(question)}
            className="rounded-full bg-blue-50 px-3 py-2 text-left text-xs font-medium text-blue-700 hover:bg-blue-100"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask about claims, coverage..."
          className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          onClick={() => handleSend()}
          className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default ChatPanel;