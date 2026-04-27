import SearchBox from "./search-box";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const Banner = ({ searchQuery, onSearchChange }: Props) => {
  return (
    <section className="rounded-3xl bg-linear-to-br from-blue-950 to-blue-600 p-8 text-white shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
        Insurance Help Center
      </p>

      <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
        How can we help you today?
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50">
        Browse support topics, search common insurance questions, or use the AI
        assistant for step-by-step guidance.
      </p>

      <div className="mt-8 flex flex-col gap-3 md:flex-row">
        <div className="flex-1">
          <SearchBox value={searchQuery} onChange={onSearchChange} />
        </div>

        <button className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-blue-700 hover:bg-blue-50">
          Ask AI with this
        </button>
      </div>
    </section>
  );
};

export default Banner;