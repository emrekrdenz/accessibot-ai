import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Ürün: [
    { label: "Özellikler", href: "#features" },
    { label: "Fiyatlandırma", href: "#pricing" },
    { label: "Entegrasyon", href: "#" },
    { label: "Güncellemeler", href: "#" },
  ],
  Kaynaklar: [
    { label: "Bilgi Bankası", href: "#" },
    { label: "Kurulum Kılavuzu", href: "#" },
    { label: "API Dokümantasyon", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Şirket: [
    { label: "Hakkımızda", href: "#" },
    { label: "İletişim", href: "#contact" },
    { label: "Kariyer", href: "#" },
    { label: "Basın Kiti", href: "#" },
  ],
  Yasal: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
    { label: "KVKK", href: "#" },
    { label: "Çerez Politikası", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-3">
              İKE<span className="text-secondary">*</span>
            </h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              AI destekli erişilebilirlik widget'ı ile web sitenizi herkes için erişilebilir kılın.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Sosyal medya"
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/40 hover:text-white/70 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <span>© 2026 İKE. Tüm hakları saklıdır.</span>
          <span>Türkiye'de tasarlanıp geliştirilmiştir.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
