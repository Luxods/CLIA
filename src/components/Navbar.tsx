import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import logoCLIA from "@/assets/logoCLIA.jpg";

const navLinks: { label: string; to: string }[] = [
  { label: "Activités", to: "/#activités" },
  { label: "Projets", to: "/#projets" },
  { label: "Galerie", to: "/galerie" },
  { label: "À Propos", to: "/#à-propos" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-20 pt-[20px] pb-3 md:pb-4">
      <Link to="/" className="flex items-center gap-2">
        <img src={logoCLIA} alt="Centrale Lyon IA" className="h-16 w-auto rounded" />
      </Link>

      <div className="rounded-full px-6 md:px-9 py-4 hidden md:flex items-center gap-5 md:gap-6 absolute left-1/2 -translate-x-1/2"
        style={{
          background: 'rgba(20, 35, 60, 0.35)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {navLinks.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="text-[15px] text-white hover:text-white/80 transition-colors font-body tracking-wide whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </div>

      <Link
        to="/#contact"
        className="rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-3 font-body transition-all hover:shadow-lg bg-primary text-primary-foreground hover:opacity-90"
      >
        Rejoignez-nous
        <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
