import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Anasayfa" },
    { href: "#features", label: "Erişilebilirlik" },
    { href: "#pricing", label: "Fiyatlandırma" },
    { href: "#about", label: "Hakkında" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <header className="absolute top-0 w-full z-50 py-5">
      <div className="container flex items-center justify-between">
        <a href="#" className="text-3xl font-bold text-foreground">
          İKE<span className="text-secondary">*</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            Giriş Yap
          </Button>
          <Button className="gradient-primary text-white border-0 hover:opacity-90">
            Ücretsiz Deneme Talebi
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü aç/kapat"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background shadow-lg border-t mt-2">
          <nav className="container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <Button variant="outline">Giriş Yap</Button>
              <Button className="gradient-primary text-white border-0">Ücretsiz Deneme Talebi</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
