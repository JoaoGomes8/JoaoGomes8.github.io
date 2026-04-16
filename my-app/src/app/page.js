import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="main-page">
      <div className="noise-layer" aria-hidden="true" />
      <ScrollReveal />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

    </div>
  );
}
