import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Anasayfa" },
    { href: "#features", label: "Özellikler" },
    { href: "#pricing", label: "Fiyatlandırma" },
    { href: "#about", label: "Hakkında" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass shadow-[0_1px_0_0_hsl(var(--border))]"
          : "py-5 bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Ana içeriğe geç
      </a>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold text-foreground tracking-tight" aria-label="İKE Ana Sayfa">
          İKE<span className="text-secondary">*</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Giriş Yap
          </Button>
          <Button className="gradient-primary text-white border-0 hover:opacity-90 shadow-[0_4px_16px_hsla(265,82%,44%,0.3)] text-sm h-10 px-6">
            Ücretsiz Deneyin
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-foreground hover:bg-muted/60 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü aç/kapat"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t mt-2 shadow-lg">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobil menü">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t">
              <Button variant="ghost" className="justify-start text-sm">Giriş Yap</Button>
              <Button className="gradient-primary text-white border-0 text-sm">Ücretsiz Deneyin</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
