import { Twitter, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";

const socialLinks = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Mail, label: "E-posta", href: "mailto:info@ike.com.tr" },
];

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
    <footer className="bg-foreground text-white pt-20 pb-8 relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />

      <div className="container relative">
        {/* Newsletter CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-14 mb-14 border-b border-white/[0.08]">
          <div>
            <p className="text-xl font-bold mb-1">Erişilebilirlik güncellemelerinden haberdar olun</p>
            <p className="text-white/40 text-sm">Yeni özellikler, yasal değişiklikler ve rehberler hakkında bilgi alın.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm flex-1 md:w-64 focus:outline-none focus:border-white/20 transition-colors"
              aria-label="E-posta adresi"
            />
            <button className="h-11 px-5 rounded-xl gradient-primary text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-[0_4px_12px_hsla(225,84%,55%,0.3)]">
              Abone Ol
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-extrabold mb-3 tracking-tight">
              İKE<span className="text-secondary">*</span>
            </p>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              AI destekli erişilebilirlik widget'ı ile web sitenizi herkes için erişilebilir kılın.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center transition-all hover:border-white/10"
                  aria-label={social.label}
                >
                  <social.Icon className="w-4 h-4 text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-semibold text-white/80 text-xs uppercase tracking-[1.5px] mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/35 hover:text-white/60 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <span>&copy; 2026 İKE. Tüm hakları saklıdır.</span>
          <span>Türkiye'de tasarlanıp geliştirilmiştir.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
