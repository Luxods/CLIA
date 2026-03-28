const NewsletterSection = () => {
    return (
      <section
        id="newsletter"
        className="px-8 md:px-16 w-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ minHeight: "110vh" }}
      >
        {/* Glow orb */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
  
        {/* Heading */}
        <div className="text-center mb-8 max-w-3xl">
          <h2
            className="font-bold leading-[1.1] mb-6 text-white/60"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Soyez informé en premier
            <br />
            du
            <span className="italic text-white"> prochain hackathon</span>
          </h2>
        </div>
  
        {/* Form */}
        <div className="w-full flex justify-center">
          <div
            className="relative flex flex-col md:flex-row items-stretch gap-0 w-full max-w-lg"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.3)",
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