"use client";

import { categories } from "@/data/articles";

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

const Sidebar = ({ selected, onChange }: Props) => {
  return (
    <aside className="w-64 shrink-0">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Categories
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => onChange("All")}
            className={`rounded-lg px-3 py-2 text-left text-sm ${
              selected === "All"
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            All
          </button>

          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={`rounded-lg px-3 py-2 text-left text-sm ${
                selected === category
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;