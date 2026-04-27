"use client";

import { articles } from "@/data/articles";
import ArticleCard from "./article-card";
import type { HelpArticle } from "@/data/articles";

type Props = {
  selectedCategory: string;
  searchQuery: string;
};

const HelpCenterList = ({ selectedCategory, searchQuery }: Props) => {
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
    <section className="mx-auto max-w-6xl px-6 pb-16">
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
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HelpCenterList;