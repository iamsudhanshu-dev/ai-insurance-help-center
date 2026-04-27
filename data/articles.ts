export type HelpArticle = {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
};

export const articles: HelpArticle[] = [
  {
    id: "car-accident-claim",
    title: "How do I submit a car accident claim?",
    category: "Claims",
    summary: "Step-by-step guide to submit a motor accident claim.",
    tags: ["claim", "car", "accident", "motor", "documents"],
    content:
      "If you are involved in a car accident, first ensure everyone is safe and contact emergency services if needed. Take clear photos of the damage, exchange details with other parties, and note the accident location and time. Report the incident to your insurer as soon as possible. Submit your claim with your policy number, accident report, photos, repair estimate, and any supporting documents."
  },
  {
    id: "deductible-meaning",
    title: "What does deductible mean in my policy?",
    category: "Policy",
    summary: "Understand how deductibles affect your insurance claim.",
    tags: ["deductible", "policy", "coverage", "claim"],
    content:
      "A deductible is the amount you pay out of pocket before your insurance coverage starts paying for a covered claim. For example, if your approved claim is 2,000 and your deductible is 500, the insurer may pay 1,500. Deductibles can vary by policy type, coverage, and claim situation."
  },
  {
    id: "lost-luggage-travel",
    title: "Am I covered if my luggage is lost during travel?",
    category: "Travel",
    summary: "Learn how travel insurance may help with lost luggage.",
    tags: ["travel", "luggage", "lost baggage", "coverage"],
    content:
      "Travel insurance may cover lost luggage depending on your policy terms. You should report the lost luggage to the airline or transport provider immediately and obtain a written report. Keep receipts for essential purchases and submit the claim with your policy details, travel documents, baggage report, and purchase receipts."
  },
  {
    id: "claim-processing-time",
    title: "How long does it take to process a claim?",
    category: "Claims",
    summary: "Understand common claim processing timelines.",
    tags: ["claim", "timeline", "processing", "documents"],
    content:
      "Claim processing time depends on the claim type, completeness of documents, and whether further investigation is needed. Simple claims may be processed faster when all required documents are submitted. Delays can happen if documents are missing, details are unclear, or third-party verification is required."
  },
  {
    id: "term-vs-whole-life",
    title: "What is the difference between term and whole life insurance?",
    category: "Life Insurance",
    summary: "Compare term life and whole life insurance at a high level.",
    tags: ["life insurance", "term", "whole life", "policy"],
    content:
      "Term life insurance provides coverage for a specific period, such as 10, 20, or 30 years. Whole life insurance usually provides lifelong coverage and may include a cash value component. Term life is often simpler and more affordable, while whole life can be more complex and long-term focused."
  },
  {
    id: "change-payment-method",
    title: "How do I change my premium payment method?",
    category: "Payments",
    summary: "Steps to update payment method for insurance premiums.",
    tags: ["payment", "premium", "billing", "card", "bank"],
    content:
      "To change your premium payment method, log in to your insurance account and go to billing or payment settings. Select the policy you want to update, choose a new payment method such as card or bank account, and confirm the change. Make sure the new payment method is active before the next premium due date."
  }
];

export const categories = Array.from(
  new Set(articles.map((article) => article.category))
);