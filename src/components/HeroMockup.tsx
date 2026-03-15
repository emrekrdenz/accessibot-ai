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
  const [activeEffect, setActiveEffect] = useState<string>("cursor");
  const [isReading, setIsReading] = useState(false);

  const handleEffectClick = (effectId: string) => {
    setActiveEffect(effectId);
    
    // Sesli okuma özelliği
    if (effectId === "reading") {
      if (!isReading) {
        const text = "Erişilebilirlik ayarları aktif. Web sitenizi herkes için daha erişilebilir hale getirin.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'tr-TR';
        utterance.onend = () => setIsReading(false);
        window.speechSynthesis.speak(utterance);
        setIsReading(true);
      } else {
        window.speechSynthesis.cancel();
        setIsReading(false);
      }
    }
  };

  const getContentClass = () => {
    switch (activeEffect) {
      case "grayscale": return "grayscale";
      case "contrast": return "contrast-150 brightness-110";
      case "zoom": return "scale-125 origin-top-left";
      case "highlight": return "brightness-105";
      case "colorblind": return "hue-rotate-180 saturate-150";
      case "align": return "text-left";
      case "reading": return "brightness-95";
      case "cursor": return "";
      case "no-animation": return "";
      default: return "";
    }
  };

  const getBackgroundDemo = () => {
    switch (activeEffect) {
      case "cursor":
        return (
          <div className="absolute top-1/2 left-16 -translate-y-1/2 pointer-events-none z-0">
            <div className="text-left space-y-4 bg-background/95 p-8 rounded-2xl shadow-2xl border-2 border-primary/30 max-w-[360px]">
              <MousePointer className="w-20 h-20 text-primary animate-bounce" />
              <p className="text-xl font-bold text-foreground">Büyük İmleç Aktif</p>
              <p className="text-base text-muted-foreground">İmleci hareket ettirin ve büyük imleci görün</p>
            </div>
          </div>
        );
      case "highlight":
        return (
          <div className="absolute top-1/2 left-16 -translate-y-1/2 pointer-events-none z-0">
            <div className="space-y-4 bg-background/95 p-8 rounded-2xl shadow-2xl border-2 border-primary/30 max-w-[360px]">
              <p className="text-lg font-bold text-foreground mb-3">Bağlantı Vurgulama</p>
              <div className="space-y-3">
                <a href="#" className="block text-primary underline text-base font-semibold ring-2 ring-primary/60 rounded-lg px-4 py-3 bg-primary/15">
                  Ana Sayfa
                </a>
                <a href="#" className="block text-primary underline text-base font-semibold ring-2 ring-primary/60 rounded-lg px-4 py-3 bg-primary/15">
                  Hakkımızda
                </a>
                <a href="#" className="block text-primary underline text-base font-semibold ring-2 ring-primary/60 rounded-lg px-4 py-3 bg-primary/15">
                  İletişim
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Bağlantılar vurgulanır</p>
            </div>
          </div>
        );
      case "align":
        return (
          <div className="absolute bottom-8 left-8 pointer-events-none z-0">
            <div className="bg-background/95 px-5 py-3 rounded-xl shadow-xl border border-primary/20">
              <div className="flex items-center gap-3">
                <AlignLeft className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">Metin Hizalama Aktif</p>
                  <p className="text-xs text-muted-foreground">Tüm metinler sola hizalandı</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "zoom":
        return (
          <div className="absolute top-1/2 left-16 -translate-y-1/2 pointer-events-none z-0">
            <div className="bg-background/95 p-8 rounded-2xl shadow-2xl border-2 border-primary/30">
              <div className="text-left space-y-3 scale-125 origin-top-left">
                <p className="text-2xl font-bold text-foreground">Büyütme Aktif</p>
                <p className="text-base text-muted-foreground">%125 büyütülmüş içerik</p>
              </div>
            </div>
          </div>
        );
      case "reading":
        return (
          <div className="absolute top-1/2 left-16 -translate-y-1/2 pointer-events-none z-0">
            <div className="bg-background/95 p-8 rounded-2xl shadow-2xl border-2 border-primary/30 max-w-[340px]">
              <div className="text-left space-y-4">
                <Volume2 className="w-16 h-16 text-primary animate-pulse" />
                <p className="text-xl font-bold text-foreground">Sesli Okuma</p>
                <p className="text-base text-muted-foreground">Metin sesli olarak okunuyor</p>
              </div>
            </div>
          </div>
        );
      case "no-animation":
        return (
          <div className="absolute top-1/2 left-16 -translate-y-1/2 pointer-events-none z-0">
            <div className="bg-background/95 p-8 rounded-2xl shadow-2xl border-2 border-primary/30 max-w-[340px]">
              <div className="text-left space-y-4">
                <PauseCircle className="w-16 h-16 text-primary" />
                <p className="text-xl font-bold text-foreground">Animasyon Durdur</p>
                <p className="text-base text-muted-foreground">Tüm hareketler durduruldu</p>
              </div>
            </div>
          </div>
        );
      case "grayscale":
        return (
          <div className="absolute bottom-8 left-8 pointer-events-none z-0">
            <div className="bg-background/95 px-5 py-3 rounded-xl shadow-xl border border-primary/20 flex items-center gap-3">
              <Moon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-bold text-foreground">Gri Tonlama Aktif</p>
                <p className="text-xs text-muted-foreground">Tüm renkler gri tonlara çevrildi</p>
              </div>
            </div>
          </div>
        );
      case "contrast":
        return (
          <div className="absolute bottom-8 left-8 pointer-events-none z-0">
            <div className="bg-background/95 px-5 py-3 rounded-xl shadow-xl border border-primary/20 flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-bold text-foreground">Yüksek Kontrast Aktif</p>
                <p className="text-xs text-muted-foreground">Kontrast %150 artırıldı</p>
              </div>
            </div>
          </div>
        );
      case "colorblind":
        return (
          <div className="absolute bottom-8 left-8 pointer-events-none z-0">
            <div className="bg-background/95 px-5 py-3 rounded-xl shadow-xl border border-primary/20 flex items-center gap-3">
              <Palette className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-bold text-foreground">Renk Körü Modu Aktif</p>
                <p className="text-xs text-muted-foreground">Renkler uyumlu hale getirildi</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={activeEffect === "no-animation" ? "" : "animate-float"}>
      <div className="relative max-w-[1100px] mx-auto">
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
          <div 
            className={`relative min-h-[550px] bg-gradient-to-br from-muted/50 to-secondary/5 p-12`}
            style={activeEffect === "cursor" ? {
              cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" fill="none"><path d="M4 4 L4 28 L12 20 L16 28 L20 26 L16 18 L28 18 Z" fill="%23000" stroke="%23fff" stroke-width="2"/></svg>') 8 8, auto`
            } : {}}
          >
            {/* Website preview (background) */}
            <div className={`${activeEffect === "grayscale" || activeEffect === "contrast" || activeEffect === "colorblind" ? "opacity-70" : "opacity-35"} transition-all duration-500 ${getContentClass()} ${activeEffect === "no-animation" ? "[&_*]:!animate-none" : ""}`}>
              {/* Mini nav */}
              <div className="flex justify-between items-center p-2 bg-background/80 rounded-lg mb-3">
                <div className="w-12 h-2 bg-blue-600 rounded" />
                <div className="flex gap-2">
                  <div className="w-8 h-1.5 bg-foreground/40 rounded" />
                  <div className="w-8 h-1.5 bg-foreground/40 rounded" />
                  <div className="w-8 h-1.5 bg-primary rounded" />
                </div>
              </div>
              {/* Mini hero */}
              <div className={`grid grid-cols-[1.3fr_1fr] gap-3 mb-3 p-4 bg-background/60 rounded-lg ${activeEffect === "highlight" ? "ring-2 ring-primary/50" : ""}`}>
                <div className={`flex flex-col gap-1.5 justify-center ${activeEffect === "align" ? "items-start" : ""}`}>
                  <div className="h-3 w-4/5 bg-foreground/60 rounded" />
                  <div className="h-2.5 w-3/5 bg-secondary rounded" />
                  <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                  <div className="h-2 w-3/5 bg-muted-foreground/20 rounded" />
                  <div className="flex gap-1.5 mt-1.5">
                    <div className="h-5 w-14 rounded gradient-primary" />
                    <div className="h-5 w-14 rounded bg-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-orange-300/40 to-blue-400/40 rounded-lg min-h-[100px]">
                  <div className="w-10 h-10 rounded-full bg-red-400/60" />
                </div>
              </div>
              {/* Mini cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { bg: "from-blue-400/30 to-purple-400/30", bar: "bg-blue-500" },
                  { bg: "from-green-400/30 to-teal-400/30", bar: "bg-green-500" },
                  { bg: "from-orange-400/30 to-red-400/30", bar: "bg-orange-500" },
                ].map((card, i) => (
                  <div key={i} className="bg-background/70 rounded-lg p-3 flex flex-col gap-1.5">
                    <div className={`w-6 h-6 rounded bg-gradient-to-br ${card.bg}`} />
                    <div className={`h-1.5 w-4/5 ${card.bar} rounded opacity-60`} />
                    <div className="h-1.5 w-3/5 bg-muted-foreground/15 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Demo overlay for specific effects */}
            {getBackgroundDemo()}

            {/* Floating accessibility panel */}
            <div className="absolute top-1/2 right-16 -translate-y-1/2 bg-background rounded-2xl p-6 shadow-[0_20px_60px_hsla(265,82%,44%,0.25)] w-[440px] z-20">
              <div className="flex items-center gap-2.5 mb-5 font-bold text-foreground">
                <Accessibility className="w-5 h-5 text-primary" />
                <span>Erişilebilirlik Ayarları</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {effects.map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => handleEffectClick(effect.id)}
                    aria-pressed={activeEffect === effect.id}
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
            <div 
              className={`absolute bottom-8 right-8 w-14 h-14 gradient-primary rounded-full flex items-center justify-center text-white shadow-[0_8px_24px_hsla(265,82%,44%,0.4)] cursor-pointer z-20 ${activeEffect === "no-animation" ? "" : "animate-pulse"}`}
              onClick={() => setActiveEffect("cursor")}
            >
              <Accessibility className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Decorations */}
        <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 ${activeEffect === "no-animation" ? "" : "animate-float"}`} />
        <div className={`absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-secondary/10 ${activeEffect === "no-animation" ? "" : "animate-float"}`} style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default HeroMockup;
