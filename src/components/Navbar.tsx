import { ChevronRight } from "lucide-react";
import logoCLIA from "@/assets/logoCLIA.jpg";

const navItems = ["Activités", "Projets", "À Propos", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 md:px-20 pt-[20px] pb-3 md:pb-4">
      <a href="#" className="flex items-center gap-2">
        <img src={logoCLIA} alt="Centrale Lyon IA" className="h-16 w-auto rounded" />
      </a>

      <div className="rounded-full px-10 py-4 hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2"
        style={{
          background: 'rgba(20, 35, 60, 0.35)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "-").replace("à-", "a-")}`}
            className="text-[15px] text-white hover:text-white/80 transition-colors font-body tracking-wide"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-3 font-body transition-all hover:shadow-lg bg-primary text-primary-foreground hover:opacity-90"
      >
        Rejoignez-nous
        <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
