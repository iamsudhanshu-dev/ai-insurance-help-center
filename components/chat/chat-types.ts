export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt?: number;
};

export const starterQuestions: string[] = [
  "How do I submit a car accident claim?",
  "What does deductible mean in my policy?",
  "Am I covered if my luggage is lost during travel?",
  "How long does it take to process a claim?",
  "What is the difference between term and whole life insurance?"
];