"use client";

import {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef
} from "react";
import { starterQuestions, type ChatMessage } from "./chat-types";

export type ChatPanelRef = {
  sendMessage: (question: string) => void;
};

const ChatPanel = forwardRef<ChatPanelRef>((_, ref) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I can help with insurance questions about claims, policies, travel coverage, payments, and deductibles."
    }
  ]);

  const hasMounted = useRef(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!hasMounted.current) {
        hasMounted.current = true;
        return;
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = async (question?: string) => {
    const userQuestion = (question || input).trim();
    if (!userQuestion) return;

    setLoading(true);

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userQuestion
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: userQuestion })
      });

      const data = await res.json();

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.answer || "No response"
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Something went wrong. Please try again."
        }
      ]);
    }

    setLoading(false);
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

      <div className="min-h-65 space-y-4 px-6 py-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-slate-500">
            AI is thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="flex flex-wrap gap-2 px-6 pb-4">
        {starterQuestions.slice(0, 3).map((q) => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            disabled={loading}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200 disabled:opacity-50"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="flex gap-3 border-t border-slate-100 px-6 py-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
          placeholder="Type your question..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          onClick={() => handleSend()}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </section>
  );
});

ChatPanel.displayName = "ChatPanel";
export default ChatPanel;