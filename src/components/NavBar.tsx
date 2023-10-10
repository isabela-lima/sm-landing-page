import ThemeToggle from "./ThemeToggle";

export function NavBar(): JSX.Element {
  return (
    <div className="navbar bg-base-100 flex items-center justify-between p-4">
      <div className="flex-1">
        <a href="/">
          <p className="text-2xl text-secondary">
            <span className="text-2xl font-bold text-primary">Siga</span>
            Municipal
          </p>
        </a>
      </div>
      <nav className="flex gap-4">
        <a href="/about-us" className="btn btn-ghost text-primary">
          Sobre nós
        </a>
        <a href="/contact" className="btn btn-ghost text-primary">
          Contato
        </a>
      </nav>
      <div className="flex-none m-5">
        <ThemeToggle />
      </div>
    </div>
  );
}
