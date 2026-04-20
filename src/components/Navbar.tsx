import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, GraduationCap, Menu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNavUnderlayLight } from "@/hooks/use-nav-underlay-light";

const navLinks: { label: string; to: string }[] = [
  { label: "Hackathon", to: "/#hackathon" },
  { label: "À Propos", to: "/#à-propos" },
  { label: "Projets", to: "/#projets" },
  { label: "Équipe", to: "/#équipe" },
];

const Navbar = () => {
  const underlayLight = useNavUnderlayLight();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:justify-end",
        "pb-3 lg:pb-4",
        "pt-[max(1.25rem,env(safe-area-inset-top))]",
        "pl-[max(2rem,env(safe-area-inset-left))] pr-[max(2rem,env(safe-area-inset-right))]",
        "lg:pl-[max(4rem,env(safe-area-inset-left))] lg:pr-[max(4rem,env(safe-area-inset-right))]",
      )}
    >
      <div className="lg:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className={cn(
                "rounded-lg p-3 font-body backdrop-blur-sm transition-[background-color,border-color,box-shadow,color] duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                underlayLight
                  ? cn(
                      "border border-slate-800/30 bg-slate-900/[0.08] text-slate-800 shadow-sm shadow-slate-900/5",
                      "hover:bg-slate-900/12 focus-visible:ring-slate-800/40 focus-visible:ring-offset-white",
                    )
                  : cn(
                      "border border-white/25 bg-white/[0.08] text-white",
                      "hover:bg-white/15 focus-visible:ring-white/45 focus-visible:ring-offset-transparent",
                    ),
              )}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            overlayClassName={cn(
              "!bg-black/10 backdrop-blur-[2px]",
              "supports-[backdrop-filter]:!bg-black/5 supports-[backdrop-filter]:backdrop-blur-md",
            )}
            className={cn(
              "overflow-hidden !inset-y-auto !h-auto !max-h-[min(520px,calc(100svh-2rem))] !w-[min(86vw,280px)]",
              "!left-[max(0.75rem,env(safe-area-inset-left))] !top-[max(0.75rem,env(safe-area-inset-top))]",
              "rounded-[1.5rem]",
              "!border-0",
              "bg-[rgba(20,35,60,0.35)]",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_50px_rgba(0,0,0,0.25)]",
              "backdrop-blur-[20px] backdrop-saturate-[1.6]",
              "text-white",
              "origin-top-left",
              "data-[state=open]:![--tw-enter-translate-x:0px] data-[state=closed]:![--tw-exit-translate-x:0px]",
              "data-[state=open]:![--tw-enter-translate-y:-0.5rem] data-[state=closed]:![--tw-exit-translate-y:-0.5rem]",
              "data-[state=open]:![--tw-enter-scale:0.96] data-[state=closed]:![--tw-exit-scale:0.96]",
              "data-[state=open]:![--tw-enter-opacity:0] data-[state=closed]:![--tw-exit-opacity:0]",
              "data-[state=open]:[animation-duration:260ms] data-[state=closed]:[animation-duration:200ms]",
              "data-[state=open]:[animation-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              "[&>button]:right-3 [&>button]:top-3 [&>button]:rounded-full [&>button]:border-0 [&>button]:bg-transparent [&>button]:p-1.5 [&>button]:opacity-70 [&>button]:shadow-none [&>button]:transition-opacity [&>button]:hover:bg-white/10 [&>button]:hover:opacity-100 [&>button]:focus-visible:ring-1 [&>button]:focus-visible:ring-white/40 [&>button]:focus-visible:ring-offset-0 [&_svg]:h-3.5 [&_svg]:w-3.5 [&_svg]:text-white/80",
            )}
          >
            <SheetTitle className="sr-only">Navigation du site</SheetTitle>
            <nav className="mt-3 flex flex-col gap-0.5 pr-6">
              {navLinks.map(({ label, to }) => (
                <SheetClose asChild key={label}>
                  <Link
                    to={to}
                    className="rounded-lg px-3 py-2.5 text-[15px] font-medium font-body tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-white active:bg-white/15"
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-full px-6 lg:px-9 py-4 hidden lg:flex items-center gap-5 lg:gap-6 absolute left-1/2 -translate-x-1/2"
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

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <Link
          to="/#contact"
          className="rounded-lg px-4 py-3 sm:px-6 text-sm font-medium inline-flex items-center gap-2 sm:gap-3 font-body transition-all hover:shadow-lg bg-primary text-primary-foreground hover:opacity-90"
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
                "rounded-lg px-4 py-3 text-sm font-medium font-body flex items-center gap-2 backdrop-blur-sm",
                "transition-[background-color,border-color,box-shadow,transform,color] duration-300 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                underlayLight
                  ? cn(
                      "border border-slate-800/20 bg-slate-900/[0.05] text-slate-800",
                      "hover:bg-slate-900/[0.09] hover:border-slate-800/32 hover:shadow-md hover:shadow-black/10",
                      "focus-visible:ring-slate-800/35 focus-visible:ring-offset-white",
                    )
                  : cn(
                      "border border-white/20 bg-white/[0.06] text-white",
                      "hover:bg-white/12 hover:border-white/35 hover:shadow-md hover:shadow-black/20",
                      "focus-visible:ring-white/40 focus-visible:ring-offset-transparent",
                    ),
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
