import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              İKE<span className="text-secondary">*</span>
            </h3>
            <p className="text-white/60 text-sm">Web sitenizi herkes için erişilebilir kılın.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {["Anasayfa", "Özellikler", "Fiyatlandırma", "İletişim"].map((link) => (
              <a
                key={link}
                href={`#${link === "Anasayfa" ? "home" : link === "Özellikler" ? "features" : link === "Fiyatlandırma" ? "pricing" : "contact"}`}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Sosyal medya">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © 2026 İKE. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
