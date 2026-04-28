"use client";

import { articles } from "@/data/articles";
import ArticleCard from "./article-card";
import type { HelpArticle } from "@/data/articles";

type Props = {
  selectedCategory: string;
  searchQuery: string;
  onAskAI: (question: string) => void;
};

const HelpCenterList = ({ selectedCategory, searchQuery, onAskAI }: Props) => {
  const normalizedQuery = searchQuery?.toLowerCase().trim();

  const filteredArticles: HelpArticle[] = articles?.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;

    const searchableText = [
      article.title,
      article.category,
      article.summary,
      article.content,
      article.tags.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = !normalizedQuery || searchableText?.includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600">Browse articles</p>
          <h2 className="text-xl font-bold text-slate-900">
            {selectedCategory === "All" ? "All topics" : selectedCategory}
          </h2>
        </div>

        <p className="text-sm text-slate-500">
          {filteredArticles?.length} results
        </p>
      </div>
      {filteredArticles?.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h3 className="text-lg font-semibold text-slate-950">
            No articles found
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Try another keyword or ask the AI assistant for help.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles?.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onAskAI={onAskAI}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HelpCenterList;