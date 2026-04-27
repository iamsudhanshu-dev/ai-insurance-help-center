"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import Banner from "@/components/help-center/Banner";
import HelpCenterList from "@/components/help-center/help-center-list";
import PopularQuestions from "@/components/help-center/popular-questions";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">
        <div className="hidden lg:block">
          <Sidebar selected={selectedCategory} onChange={setSelectedCategory} />
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
        </div>
      </div>
    </main>
  );
};

export default Home;