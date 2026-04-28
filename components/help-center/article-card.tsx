import type { HelpArticle } from "@/data/articles";

type ArticleCardProps = {
  article: HelpArticle;
  onAskAI?: (question: string) => void;
};

const ArticleCard = ({ article, onAskAI }: ArticleCardProps) => {
  const aiQuestion = `Explain this article step by step: ${article.title}`;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        {article.category}
      </span>

      <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">
        {article.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {article.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => onAskAI?.(aiQuestion)}
        className=" cursor-pointer mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Ask AI about this
      </button>
    </article>
  );
}

export default ArticleCard;