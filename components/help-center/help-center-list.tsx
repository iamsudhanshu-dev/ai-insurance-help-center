"use client";

import { articles } from "@/data/articles";
import ArticleCard from "./article-card";
import type { HelpArticle } from "@/data/articles";

type Props = {
  selectedCategory: string;
};

const HelpCenterList = ({ selectedCategory }: Props) => {
  const filteredArticles: HelpArticle[] =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default HelpCenterList;