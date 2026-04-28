import { articles } from "@/data/articles";

type Article = typeof articles[number];

export function retrieveRelevantArticles(query: string, topK = 3) {
  const q = query.toLowerCase();

  const scored = articles.map((article) => {
    const text = [
      article.title,
      article.summary,
      article.content,
      article.tags.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    let score = 0;

    q.split(" ").forEach((word) => {
      if (text.includes(word)) score += 1;
    });

    return { article, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((item) => item.article);
}

export function buildContext(articles: Article[]) {
  return articles
    .map(
      (a) =>
        `Title: ${a.title}\nSummary: ${a.summary}\nContent: ${a.content}`
    )
    .join("\n\n");
}