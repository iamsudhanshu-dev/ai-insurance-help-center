"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBox = ({ value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search help articles
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search claims, policy, travel, payments..."
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchBox;