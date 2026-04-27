import HelpCenterList from "@/components/help-center/help-center-list";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl font-bold text-slate-950">Insurance Help Center</h1>
          <p className="mt-2 text-lg text-slate-600">Find answers to common insurance questions and get support.</p>
        </div>
      </header>

      <HelpCenterList />
    </main>
  );
};

export default HomePage;