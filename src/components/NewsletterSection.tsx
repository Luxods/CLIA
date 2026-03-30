import { useState } from "react";

const NewsletterSection = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section
      id="newsletter"
      className="px-8 md:px-16 w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ minHeight: "110vh" }}
    >
      {/* Heading */}
      <div className="text-center mb-8 max-w-4xl">
        <h2
          className="font-bold font-display leading-[1.1] mb-6 text-white/60"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Soyez informé en premier
          <br />
          du <span className="italic text-white">prochain hackathon</span>
        </h2>
      </div>

      {/* Form */}
      <div className="w-full flex justify-center">
        <div
          className="relative flex flex-col md:flex-row items-stretch gap-0 w-full max-w-lg"
          style={{
            border: `1px solid rgba(255,255,255,${isFocused ? 0.7 : 0.1})`,
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.3)",
            transition: "border-color 0.4s ease",
          }}
        >
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none"
            style={{
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.02em",
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="hidden md:block w-px self-stretch bg-white/10 my-3" />
          <button
            type="button"
            className="m-1.5 px-7 py-3 rounded-[10px] text-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.05em",
              background: "rgba(255,255,255,1)",
              color: "#0a0a0a",
              boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(230,230,230,1)";
              e.currentTarget.style.boxShadow =
                "0 4px 30px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(255,255,255,0.15)";
            }}
          >
            Valider →
          </button>
        </div>
      </div>

      {/* Bottom note */}
      <p
        className="mt-6 text-white/20 text-xs tracking-widest"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Désabonnement en un clic - Aucun spam
      </p>
    </section>
  );
};

export default NewsletterSection;