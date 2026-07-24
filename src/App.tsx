import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
