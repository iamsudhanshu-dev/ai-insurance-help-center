"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import Banner from "@/components/help-center/Banner";
import PopularQuestions from "@/components/help-center/popular-questions";
import HelpCenterList from "@/components/help-center/help-center-list";
import ChatPanel from "@/components/chat/chat-panel";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

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
            />

            <PopularQuestions onSelect={(q) => setSearchQuery(q)} />

            <HelpCenterList
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />

            <ChatPanel />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;