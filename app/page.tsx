import HelpCenterList from "@/components/help-center/help-center-list";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          AI Insurance Help Center
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Get insurance help faster with guided articles and AI assistance.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Browse help topics, search common insurance questions, and ask an AI
          assistant for step-by-step guidance.
        </p>
      </section>

      <HelpCenterList />
    </main>
  );
};

export default Home;