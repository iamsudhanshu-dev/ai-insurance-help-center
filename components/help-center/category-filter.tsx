"use client";

import { categories } from "@/data/articles";

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

const CategoryFilter = ({ selected, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 px-6 pb-6">
      <button
        onClick={() => onChange("All")}
        className={`rounded-full px-4 py-2 text-sm ${
          selected === "All"
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm ${
            selected === category
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;