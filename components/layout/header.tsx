const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            I
          </div>
          <div>
            <p className="font-semibold text-slate-900">InsureHelp AI</p>
            <p className="text-xs text-slate-500">
              Customer support portal
            </p>
          </div>
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Ask AI
        </button>
      </div>
    </header>
  );
};

export default Header;