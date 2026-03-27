import { ArrowRight, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-8 md:px-16">
      <p className="text-[whitesmoke] text-xs font-medium tracking-[0.2em] uppercase mb-6">Contact</p>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Envie de nous rejoindre ?
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
            placeholder="Votre nom"
            className="w-full bg-secondary border border-border rounded-lg px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full bg-secondary border border-border rounded-lg px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            rows={4}
            placeholder="Votre message"
            className="w-full bg-secondary border border-border rounded-lg px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
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
