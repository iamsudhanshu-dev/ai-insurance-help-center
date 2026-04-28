"use client";

import { useState, useRef } from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import Banner from "@/components/help-center/Banner";
import PopularQuestions from "@/components/help-center/popular-questions";
import HelpCenterList from "@/components/help-center/help-center-list";
import ChatPanel, { type ChatPanelRef } from "@/components/chat/chat-panel";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const chatRef = useRef<ChatPanelRef>(null);
  const chatSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToChat = () => {
    chatSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleAskAI = (question?: string) => {
    scrollToChat();

    if (question?.trim()) {
      setTimeout(() => {
        chatRef.current?.sendMessage(question);
      }, 400);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header onAskAI={scrollToChat} />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-6">
          <div className="hidden w-64 shrink-0 lg:block">
            <Sidebar
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            <Banner
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onAskAI={() => handleAskAI(searchQuery)}
            />

            <PopularQuestions onSelect={(q) => setSearchQuery(q)} />

            <HelpCenterList
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onAskAI={handleAskAI}
            />

            <div ref={chatSectionRef}>
              <ChatPanel ref={chatRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;