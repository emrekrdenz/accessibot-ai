import { useState } from "react";
import {
  Moon, SlidersHorizontal, Search, Link, Palette, AlignLeft,
  Volume2, MousePointer, PauseCircle, Accessibility
} from "lucide-react";

const effects = [
  { id: "grayscale", icon: Moon, label: "Gri Tonlama" },
  { id: "contrast", icon: SlidersHorizontal, label: "Kontrast" },
  { id: "zoom", icon: Search, label: "Büyüt" },
  { id: "highlight", icon: Link, label: "Bağlantı Vurgula" },
  { id: "colorblind", icon: Palette, label: "Renk Körü" },
  { id: "align", icon: AlignLeft, label: "Metin Hizala" },
  { id: "reading", icon: Volume2, label: "Sesli Okuma" },
  { id: "cursor", icon: MousePointer, label: "Büyük İmleç" },
  { id: "no-animation", icon: PauseCircle, label: "Animasyon Durdur" },
];

const HeroMockup = () => {
  const [activeEffect, setActiveEffect] = useState<string>("grayscale");

  const getContentClass = () => {
    switch (activeEffect) {
      case "grayscale": return "grayscale";
      case "contrast": return "contrast-150 invert";
      case "zoom": return "scale-110 origin-top-left";
      case "colorblind": return "grayscale-[60%] sepia-[30%]";
      default: return "";
    }
  };

  return (
    <div className="animate-float">
      <div className="relative max-w-[650px] mx-auto">
        {/* Browser frame */}
        <div className="bg-background rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] overflow-hidden relative z-10">
          {/* Browser bar */}
          <div className="bg-muted px-4 py-3 flex items-center gap-3 border-b">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-accent/80" />
              <span className="w-3 h-3 rounded-full bg-secondary/60" />
            </div>
            <div className="flex-1 bg-background px-3 py-1.5 rounded-md text-sm text-muted-foreground border text-center">
              www.siteniz.com
            </div>
          </div>

          {/* Browser content */}
          <div className="relative min-h-[420px] bg-gradient-to-br from-muted/50 to-secondary/5 p-6">
            {/* Website preview (background) */}
            <div className={`opacity-35 transition-all duration-500 ${getContentClass()}`}>
              {/* Mini nav */}
              <div className="flex justify-between items-center p-2 bg-background/80 rounded-lg mb-3">
                <div className="w-12 h-2 bg-foreground/70 rounded" />
                <div className="flex gap-2">
                  <div className="w-8 h-1.5 bg-muted-foreground/30 rounded" />
                  <div className="w-8 h-1.5 bg-muted-foreground/30 rounded" />
                  <div className="w-8 h-1.5 bg-primary/60 rounded" />
                </div>
              </div>
              {/* Mini hero */}
              <div className="grid grid-cols-[1.3fr_1fr] gap-3 mb-3 p-4 bg-background/60 rounded-lg">
                <div className="flex flex-col gap-1.5 justify-center">
                  <div className="h-3 w-4/5 bg-foreground/50 rounded" />
                  <div className="h-2.5 w-3/5 bg-foreground/30 rounded" />
                  <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                  <div className="h-2 w-3/5 bg-muted-foreground/10 rounded" />
                  <div className="flex gap-1.5 mt-1.5">
                    <div className="h-5 w-14 rounded gradient-primary" />
                    <div className="h-5 w-14 rounded border-2 border-muted-foreground/20" />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg min-h-[100px]" />
              </div>
              {/* Mini cards */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-background/70 rounded-lg p-3 flex flex-col gap-1.5">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-secondary/10 to-primary/10" />
                    <div className="h-1.5 w-4/5 bg-muted-foreground/12 rounded" />
                    <div className="h-1.5 w-3/5 bg-muted-foreground/8 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accessibility panel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-2xl p-5 shadow-[0_20px_60px_hsla(265,82%,44%,0.25)] w-[90%] max-w-[380px]">
              <div className="flex items-center gap-2.5 mb-5 font-bold text-foreground">
                <Accessibility className="w-5 h-5 text-primary" />
                <span>Erişilebilirlik Ayarları</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {effects.map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => setActiveEffect(effect.id)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all cursor-pointer text-center ${
                      activeEffect === effect.id
                        ? "gradient-primary text-white border-primary shadow-lg scale-105"
                        : "bg-muted/50 border-transparent hover:border-primary/30 hover:-translate-y-1"
                    }`}
                  >
                    <effect.icon className="w-5 h-5" />
                    <span className="text-[0.7rem] font-medium leading-tight">{effect.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Floating trigger */}
            <div className="absolute bottom-6 right-6 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white shadow-[0_8px_24px_hsla(265,82%,44%,0.4)] animate-pulse cursor-pointer">
              <Accessibility className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Decorations */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 animate-float" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default HeroMockup;
