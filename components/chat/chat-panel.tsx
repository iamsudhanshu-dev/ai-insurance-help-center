"use client";

import {
  forwardRef,
  useImperativeHandle,
  useState
} from "react";
import { starterQuestions, type ChatMessage } from "./chat-types";

export type ChatPanelRef = {
  sendMessage: (question: string) => void;
};

const ChatPanel = forwardRef<ChatPanelRef>((_, ref) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I can help with claims, policy terms, travel cover, payments, life and health insurance questions."
    }
  ]);

  const handleSend = (question?: string) => {
    const userQuestion = (question || input).trim();

    if (!userQuestion) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userQuestion
    };

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "AI response will be connected in the next step. For now, this confirms the chat UI is working."
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
  };

  useImperativeHandle(ref, () => ({
    sendMessage: handleSend
  }));

  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          AI Assistant
        </p>

        <h2 className="mt-1 text-xl font-bold text-slate-950">
          Ask insurance questions
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Get practical guidance based on help-center articles.
        </p>
      </div>

      <div className="min-h-55 space-y-4 px-6 py-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-6 ${
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

      <div className="flex flex-wrap gap-2 px-6 pb-4">
        {starterQuestions.slice(0, 3).map((question) => (
          <button
            key={question}
            onClick={() => handleSend(question)}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="flex gap-3 border-t border-slate-100 px-6 py-5">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type your question..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          onClick={() => handleSend()}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </section>
  );
});

ChatPanel.displayName = "ChatPanel";

export default ChatPanel;