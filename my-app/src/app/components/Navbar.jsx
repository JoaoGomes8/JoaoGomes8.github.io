export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:px-6 sm:py-4 md:px-10 lg:px-16">
        <a className="navbar-fade-in-up navbar-delay-1 text-lg font-semibold tracking-wide text-white sm:text-xl md:text-2xl" href="#home">
          João Gomes
        </a>

        <div className="flex w-full items-center justify-center gap-3 text-sm text-slate-200 sm:w-auto sm:gap-4 md:gap-6 md:text-base">
          <a className="navbar-slide-right navbar-delay-1 nav-link" href="#about">
            About
          </a>
          <a className="navbar-slide-right navbar-delay-2 nav-link" href="#experience">
            Experience
          </a>
          <a className="navbar-slide-right navbar-delay-3 nav-link" href="#skills">
            Skills
          </a>
          <a className="navbar-slide-right navbar-delay-4 nav-link" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
