import { starterQuestions } from "@/components/chat/chat-types";

type Props = {
  onSelect: (question: string) => void;
};

const PopularQuestions = ({ onSelect }: Props) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-900">
        Popular questions
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {starterQuestions?.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
          >
            {question}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularQuestions;