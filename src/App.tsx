import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MainBio } from "./components/MainBio";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";
import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <>
      <CustomCursor />

      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      <div className="min-h-screen flex flex-col bg-[#121212] text-[#f4f4f5] font-sans selection:bg-[#ff8a00] selection:text-neutral-900">
        <Navbar />

        <div className="flex-1 w-full mx-auto flex flex-col relative shadow-2xl">
          <main className="relative flex-1 flex flex-col overflow-x-hidden">
            <Hero />
            <MainBio />
            <Projects />
            <Contact onShowToast={handleShowToast} />
          </main>

          <Footer />
        </div>

        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    </>
  );
}

export default App;

