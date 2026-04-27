import type { HelpArticle } from "@/data/articles";

type ArticleCardProps = {
  article: HelpArticle;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {article.category}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-950">
        {article.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {article.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ArticleCard;