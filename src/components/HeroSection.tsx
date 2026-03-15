import { ArrowRight, ShieldCheck, Timer, Blocks, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroMockup from "./HeroMockup";

const HeroSection = () => {
  const trustBadges = [
    { label: "WCAG 2.1", color: "bg-primary/10 text-primary border-primary/20" },
    { label: "ADA", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { label: "EAA 2025", color: "bg-primary/10 text-primary border-primary/20" },
    { label: "EN 301 549", color: "bg-primary/10 text-primary border-primary/20" },
  ];

  const microTrust = [
    { icon: Timer, text: "Kurulum 5 dakika" },
    { icon: Blocks, text: "58+ erişilebilirlik özelliği" },
    { icon: Terminal, text: "Tek satır kod" },
  ];

  return (
    <section id="home" className="relative gradient-hero overflow-hidden min-h-[70vh] lg:min-h-[85vh] flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16">
      <div className="container px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/15">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">EAA 2025 yürürlüğe giriyor — hazır mısınız?</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-foreground leading-tight mb-5 sm:mb-6">
              Web Sitenizi 5 Dakikada{" "}
              <span className="text-gradient">WCAG 2.1 Uyumlu</span>{" "}
              Hale Getirin
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg leading-relaxed">
              İKE, 58+ erişilebilirlik özelliği ve 6 hazır profil ile web sitenizi WCAG 2.1, ADA, EAA 2025 ve EN 301 549 standartlarına uyumlu hale getirir. Shadow DOM izolasyonu ile tek satır kodla başlayın.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12">
                Tüm Özellikler
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-border bg-background hover:bg-muted">
                Demo Talep Et
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {trustBadges.map((badge) => (
                <Badge
                  key={badge.label}
                  variant="outline"
                  className={`${badge.color} text-xs font-semibold px-3 py-1`}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Micro trust */}
            <div className="flex flex-wrap gap-6">
              {microTrust.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mockup */}
          <div className="relative">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
