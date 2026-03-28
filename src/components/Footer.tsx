import logoCLIA from "@/assets/logoCLIA.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black bg-white">
      <a href="#" className="flex items-center gap-2">
        <img src={logoCLIA} alt="Centrale Lyon IA" className="h-12 w-auto rounded" />
      </a>
      <p>© 2026 Centrale Lyon IA. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
