import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { OpenSourceHighlights } from "./components/OpenSourceHighlights";
import { Projects } from "./components/Projects";
import { GithubActivity } from "./components/GithubActivity";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";

function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary text-ink font-sans selection:bg-accent selection:text-white">
      <Navbar />

      {/* Main Container Frame with Outer Vertical Grid Borders like adityajha.tech */}
      <div className="flex-1 w-full md:max-w-7xl mx-auto flex flex-col relative border-x border-border/50 shadow-2xl">
        {/* Ambient Top Subtle Background Overlay */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0.01) 60%, transparent 100%)",
          }}
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full max-w-6xl -translate-x-1/2 overflow-visible blur-3xl"
        />

        <main className="relative flex-1 flex flex-col overflow-x-hidden">
          <Hero onShowToast={handleShowToast} />
          <About onShowToast={handleShowToast} />
          <OpenSourceHighlights />
          <TechStack />
          <Projects />
          <GithubActivity />
          <Contact onShowToast={handleShowToast} />
        </main>

        <Footer />
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
