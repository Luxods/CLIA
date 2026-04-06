import { Link } from "react-router-dom";
import { ChevronRight, GraduationCap } from "lucide-react";
import logoCLIA from "@/assets/logo/logoCLIA.jpg";
import { useHomeLogoClick } from "@/hooks/use-home-logo-click";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navLinks: { label: string; to: string }[] = [
  { label: "Hackathon", to: "/#hackathon" },
  { label: "À Propos", to: "/#à-propos" },
  { label: "Projets", to: "/#projets" },
  { label: "Équipe", to: "/#équipe" },
];

const Navbar = () => {
  const onLogoClick = useHomeLogoClick();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 pt-[20px] pb-3 md:pb-4">
      <Link to="/" onClick={onLogoClick} className="flex items-center gap-2">
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

      <div className="flex items-center gap-3 shrink-0">
        <Link
          to="/#contact"
          className="rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-3 font-body transition-all hover:shadow-lg bg-primary text-primary-foreground hover:opacity-90"
        >
          Contactez-nous
          <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Link
              to="/espace-etudiant"
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium font-body flex items-center gap-2",
                "border border-white/20 bg-white/[0.06] text-white backdrop-blur-sm",
                "transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out",
                "hover:bg-white/12 hover:border-white/35 hover:shadow-md hover:shadow-black/20",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
              )}
            >
              <GraduationCap className="h-5 w-5 shrink-0 opacity-95" strokeWidth={2} aria-hidden />
            </Link>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            sideOffset={8}
            className={cn(
              "border-white/15 bg-slate-900/95 text-white shadow-lg backdrop-blur-md",
              "px-3 py-2 text-xs font-medium tracking-wide duration-300 ease-out",
              "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
              "data-[state=instant-open]:animate-in data-[state=instant-open]:fade-in-0 data-[state=instant-open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200",
            )}
          >
            Accès espace étudiant
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
