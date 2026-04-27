import { articles } from "@/data/articles";
import ArticleCard from "./article-card";

const HelpCenterList = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default HelpCenterList;