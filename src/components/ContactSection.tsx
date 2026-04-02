import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const glassInputStyle = {
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.3)",
  transition: "border-color 0.4s ease",
  fontFamily: "'DM Mono', monospace",
  letterSpacing: "0.02em",
};

const glassInputFocusStyle = {
  ...glassInputStyle,
  border: "1px solid rgba(255,255,255,0.7)",
};

const ContactSection = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 px-8 md:px-16 mt-24">
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Contact</p>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Envie de construire quelque chose avec nous ?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[whitesmoke]" />
              <span>contact@centralelyon-ia.fr</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[whitesmoke]" />
              <span>École Centrale de Lyon, Écully</span>
            </div>
          </div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Votre prénom et nom"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none"
            style={focusedField === "name" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none"
            style={focusedField === "email" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
          <textarea
            rows={6}
            placeholder="Votre message"
            className="w-full bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/25 focus:outline-none resize-none"
            style={focusedField === "message" ? glassInputFocusStyle : glassInputStyle}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-sm font-medium transition-all duration-300"
            style={{
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.05em",
              background: "rgba(255,255,255,1)",
              color: "#0a0a0a",
              boxShadow: "0 4px 20px rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(230,230,230,1)";
              e.currentTarget.style.boxShadow = "0 4px 30px rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.15)";
            }}
          >
            Envoyer
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
