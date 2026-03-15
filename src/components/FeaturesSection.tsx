import { useState } from "react";
import {
  AArrowUp, Contrast, Navigation, AudioLines, VolumeX, Volume2,
  Link2, CircleOff, ALargeSmall, CirclePause, Blend,
  Gauge, ShieldCheck, EyeOff,
  SunDim, BookOpenText, MousePointerClick, MousePointer, Pipette, Crosshair,
  ImageOff, WrapText, MicVocal, ZoomIn, BookA
} from "lucide-react";

const features = [
  {
    icon: AArrowUp,
    title: "Yazı Boyutu Ayarı (%80-200)",
    desc: "Metin boyutunu %80'den %200'e kadar kullanıcı ihtiyaçlarına göre ayarlama",
    benefit: "WCAG 1.4.4 — Görme zorluğu yaşayanlar için içeriği okunabilir hale getirir",
    demo: "text-resize",
  },
  {
    icon: Contrast,
    title: "5 Farklı Kontrast Modu",
    desc: "Yüksek, karanlık, aydınlık, düşük ve normal kontrast modları arasında geçiş",
    benefit: "WCAG 1.4.3 — Her kullanıcıya uygun kontrast seviyesi sunar",
    demo: "contrast",
  },
  {
    icon: Blend,
    title: "Renk Körlüğü Filtreleri",
    desc: "Protanopi, Deuteranopi ve Tritanopi için özel renk filtreleri",
    benefit: "WCAG 1.4.1 — Dünya nüfusunun %8'ini etkileyen renk körlüğüne çözüm",
    demo: "colorblind",
  },
  {
    icon: Navigation,
    title: "Gelişmiş Klavye Navigasyonu",
    desc: "Tüm site içeriğine sadece klavye ile erişim ve akıllı navigasyon modu",
    benefit: "WCAG 2.1.1 — Motor engelli kullanıcıların fare olmadan gezinmesini sağlar",
    demo: "keyboard",
  },
  {
    icon: AudioLines,
    title: "Metinden Sese (TTS)",
    desc: "Web Speech API ile sayfa içeriğini sesli okuma, hız kontrolü ve kelime vurgulama",
    benefit: "Görme engelli kullanıcılar içeriğe sesli olarak erişir",
    demo: "screen-reader",
  },
  {
    icon: ALargeSmall,
    title: "Disleksi Dostu Font",
    desc: "OpenDyslexic font, artırılmış harf/kelime aralığı ve sola hizalama",
    benefit: "WCAG 3.1 — Disleksi sorunu yaşayanlar metinleri daha rahat okur",
    demo: "dyslexia",
  },
  {
    icon: Link2,
    title: "Link & Buton Vurgulama",
    desc: "Tüm bağlantıları ve butonları sayfada belirgin şekilde işaretleme",
    benefit: "WCAG 2.4.4 — Tıklanabilir öğeleri kolayca tanımayı sağlar",
    demo: "link-highlight",
  },
  {
    icon: CircleOff,
    title: "Renk Filtreleri",
    desc: "Ters çevirme, gri tonlama, yüksek/düşük doygunluk filtreleri",
    benefit: "WCAG 1.4.8 — Farklı görsel ihtiyaçlara uyum sağlar",
    demo: "grayscale",
  },
  {
    icon: CirclePause,
    title: "Animasyonları Durdurma",
    desc: "Tüm CSS animasyonlarını ve geçişleri devre dışı bırakma",
    benefit: "WCAG 2.3.1 — Epilepsi ve hareket hassasiyeti olan kullanıcıları korur",
    demo: "stop-animation",
  },
  {
    icon: BookOpenText,
    title: "Okuma Maskesi & Satır Kılavuzu",
    desc: "Spotlight okuma maskesi ve satır takip eden görsel rehber çizgisi",
    benefit: "DEHB ve disleksi yaşayan kullanıcıların odaklanmasını artırır",
    demo: "reading-mask",
  },
  {
    icon: MousePointerClick,
    title: "Büyük İmleç & Vurgulama",
    desc: "Büyük beyaz/siyah imleç seçenekleri ve imleç çevresi vurgulama",
    benefit: "WCAG 2.4.7 — Düşük görüşlü kullanıcılar imleci kolayca takip eder",
    demo: "cursor",
  },
  {
    icon: WrapText,
    title: "Satır & Harf Aralığı Kontrolü",
    desc: "Satır yüksekliği (%100-250), harf aralığı (0-5px), kelime aralığı (0-10px)",
    benefit: "WCAG 1.4.12 — Metin aralıkları bilişsel erişilebilirliği artırır",
    demo: "spacing",
  },
  {
    icon: VolumeX,
    title: "Sesleri Susturma",
    desc: "Sayfadaki tüm ses ve video öğelerini otomatik susturma",
    benefit: "WCAG 1.4.2 — İşitme hassasiyeti olan kullanıcılar için sessiz deneyim",
    demo: "mute",
  },
  {
    icon: Pipette,
    title: "Özel Metin & Arka Plan Rengi",
    desc: "Kullanıcılar kendi metin ve arka plan renklerini seçebilir",
    benefit: "WCAG 1.4.8 — Kişiye özel renk kombinasyonları ile okunabilirlik",
    demo: "custom-colors",
  },
  {
    icon: Crosshair,
    title: "Odak & Hover Vurgulama",
    desc: "Odaklanan ve üzerine gelinen öğeleri görsel olarak vurgulama",
    benefit: "WCAG 2.4.7 — Aktif öğeyi net şekilde ayırt etmeyi sağlar",
    demo: "focus",
  },
  {
    icon: ZoomIn,
    title: "Metin Büyüteç",
    desc: "İmleç yakınındaki metni anlık büyüten hover büyüteç",
    benefit: "Düşük görüşlü kullanıcılar için detaylı metin inceleme imkanı",
    demo: "magnifier",
  },
  {
    icon: ImageOff,
    title: "Görselleri Gizleme",
    desc: "Görselleri gizleyerek metin tabanlı içerik görünürlüğünü artırma",
    benefit: "Bilişsel yükü azaltarak metin odaklı okuma deneyimi sunar",
    demo: "hide-images",
  },
  {
    icon: SunDim,
    title: "Parlaklık Kontrolü",
    desc: "%70, %100 ve %130 parlaklık seviyeleri arasında ayarlama",
    benefit: "Işığa hassas kullanıcılar için ekran parlaklığını kontrol eder",
    demo: "brightness",
  },
  {
    icon: MicVocal,
    title: "Sesli Komutlar",
    desc: "Ses tanıma ile widget'ı ve sayfayı sesli kontrol etme",
    benefit: "Motor engelli kullanıcılar el kullanmadan web'de gezinebilir",
    demo: "voice",
  },
  {
    icon: BookA,
    title: "Sözlük",
    desc: "Çift tıklama ile kelime anlamını gösteren pop-up sözlük",
    benefit: "Bilişsel engelli kullanıcılar için kelime anlamlarına hızlı erişim",
    demo: "dictionary",
  },
];

const techInfo = [
  { icon: CirclePause, text: "Site hızına etkisi yok" },
  { icon: Gauge, text: "Core Web Vitals uyumlu" },
  { icon: EyeOff, text: "prefers-reduced-motion desteği" },
  { icon: ShieldCheck, text: "KVKK & GDPR uyumlu" },
];

const FeatureDemo = ({ type }: { type: string }) => {
  switch (type) {
    case "text-resize":
      return (
        <div className="space-y-1.5">
          <div className="text-[10px] text-muted-foreground leading-tight">Aa — %80</div>
          <div className="text-sm font-medium text-foreground leading-tight">Aa — %100</div>
          <div className="text-xl font-bold text-primary leading-tight">Aa — %200</div>
          <div className="flex items-center gap-1 mt-1">
            {[20, 40, 60, 80, 100].map((w) => (
              <div key={w} className="h-1 flex-1 rounded-full" style={{ backgroundColor: `hsl(225 84% ${100 - w / 2}%)` }} />
            ))}
          </div>
        </div>
      );
    case "contrast":
      return (
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Yüksek", bg: "bg-white", text: "text-black", border: "border-2 border-primary" },
            { label: "Karanlık", bg: "bg-gray-900", text: "text-gray-100", border: "" },
            { label: "Düşük", bg: "bg-gray-100", text: "text-gray-400", border: "" },
          ].map((m) => (
            <div key={m.label} className={`rounded-lg p-2 ${m.bg} ${m.text} ${m.border} text-[9px] font-bold text-center`}>{m.label}</div>
          ))}
        </div>
      );
    case "colorblind":
      return (
        <div className="space-y-1">
          {[
            { label: "Protanopi", colors: ["bg-yellow-400", "bg-blue-500", "bg-gray-400"] },
            { label: "Deuteranopi", colors: ["bg-amber-500", "bg-indigo-500", "bg-stone-400"] },
            { label: "Tritanopi", colors: ["bg-rose-400", "bg-teal-400", "bg-slate-400"] },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-1.5">
              <span className="text-[8px] text-muted-foreground w-16 shrink-0">{f.label}</span>
              {f.colors.map((c, i) => <div key={i} className={`h-3 flex-1 rounded ${c}`} />)}
            </div>
          ))}
        </div>
      );
    case "keyboard":
      return (
        <div className="space-y-1.5">
          <div className="flex gap-1.5 justify-center">
            {["Tab", "↑", "↓", "Enter"].map((key) => (
              <span key={key} className="inline-flex items-center justify-center px-1.5 h-5 rounded bg-muted border border-border text-[8px] font-mono font-bold text-foreground shadow-sm">{key}</span>
            ))}
          </div>
          <div className="rounded-lg border-2 border-primary p-1.5 bg-primary/5">
            <div className="h-1.5 w-3/4 bg-primary/30 rounded mb-1" />
            <div className="h-1.5 w-1/2 bg-primary/20 rounded" />
          </div>
        </div>
      );
    case "screen-reader":
      return (
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-primary/5 border border-primary/20">
            <Volume2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-[9px] text-primary font-medium">"Ana sayfa bağlantısı"</span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-1 rounded-full bg-primary/60" style={{ height: `${6 + Math.sin(i * 0.8) * 5}px` }} />
            ))}
          </div>
        </div>
      );
    case "dyslexia":
      return (
        <div className="space-y-1.5">
          <div className="p-1.5 rounded bg-muted/50">
            <p className="text-[9px] text-muted-foreground" style={{ fontFamily: "serif", letterSpacing: "-0.02em" }}>Standart font ile okuması zor</p>
          </div>
          <div className="p-1.5 rounded bg-primary/5 border border-primary/20">
            <p className="text-[9px] text-foreground font-medium" style={{ letterSpacing: "0.05em", wordSpacing: "0.15em", lineHeight: "1.8" }}>OpenDyslexic — kolay okuma</p>
          </div>
        </div>
      );
    case "link-highlight":
      return (
        <div className="space-y-1.5 text-[10px]">
          <p className="text-muted-foreground">Metin <span className="text-primary underline decoration-2 font-semibold bg-primary/10 px-0.5 rounded">vurgulu link</span></p>
          <div className="flex gap-1">
            <span className="px-2 py-0.5 rounded border-2 border-primary bg-primary/10 text-primary text-[8px] font-bold">Buton</span>
            <span className="px-2 py-0.5 rounded border-2 border-primary bg-primary/10 text-primary text-[8px] font-bold">CTA</span>
          </div>
        </div>
      );
    case "grayscale":
      return (
        <div className="flex gap-2">
          <div className="flex-1 space-y-0.5">
            <div className="h-3 rounded bg-blue-500" />
            <div className="h-3 rounded bg-green-500" />
            <div className="h-3 rounded bg-red-500" />
          </div>
          <span className="text-muted-foreground text-[10px] self-center">→</span>
          <div className="flex-1 space-y-0.5">
            <div className="h-3 rounded bg-gray-500" />
            <div className="h-3 rounded bg-gray-400" />
            <div className="h-3 rounded bg-gray-600" />
          </div>
        </div>
      );
    case "stop-animation":
      return (
        <div className="flex items-center gap-3 justify-center">
          <div className="text-center">
            <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto mb-1" />
            <span className="text-[7px] text-muted-foreground">Açık</span>
          </div>
          <span className="text-muted-foreground text-sm">→</span>
          <div className="text-center">
            <CirclePause className="w-5 h-5 text-primary mx-auto mb-1" />
            <span className="text-[7px] text-primary font-medium">Kapalı</span>
          </div>
        </div>
      );
    case "reading-mask":
      return (
        <div className="relative rounded-lg overflow-hidden h-14 bg-muted/50">
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute left-0 right-0 top-4 h-6 bg-transparent" style={{ boxShadow: "0 0 0 100px rgba(0,0,0,0.7)" }}>
            <div className="h-full bg-white/90 rounded px-2 flex items-center">
              <div className="h-1.5 w-full bg-foreground/30 rounded" />
            </div>
          </div>
        </div>
      );
    case "cursor":
      return (
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <MousePointer className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
            <span className="text-[7px] text-muted-foreground">Normal</span>
          </div>
          <span className="text-muted-foreground text-sm">→</span>
          <div className="text-center">
            <MousePointer className="w-8 h-8 text-primary mx-auto mb-1" />
            <span className="text-[7px] text-primary font-medium">Büyük</span>
          </div>
        </div>
      );
    case "spacing":
      return (
        <div className="space-y-1.5">
          <p className="text-[9px] text-muted-foreground" style={{ lineHeight: "1.2", letterSpacing: "0" }}>Sıkışık satır aralığı ve harf</p>
          <p className="text-[9px] text-foreground font-medium" style={{ lineHeight: "2", letterSpacing: "2px", wordSpacing: "3px" }}>Geniş aralıklı metin</p>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center h-10">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Gauge className="w-4 h-4 text-primary" />
          </div>
        </div>
      );
  }
};

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-card rounded-2xl border border-border/50 p-5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_12px_40px_hsla(225,84%,55%,0.08)] overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-[0_4px_12px_hsla(225,84%,55%,0.2)]">
          <feature.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-sm font-bold text-foreground mb-1.5">{feature.title}</h3>

        <div className={`transition-all duration-300 ${isHovered ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-32"}`}>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{feature.desc}</p>
          <div className="flex items-start gap-2 text-[10px] bg-muted/50 rounded-lg p-2 border border-border/50">
            <span className="font-semibold text-primary shrink-0">Fayda:</span>
            <span className="text-muted-foreground">{feature.benefit}</span>
          </div>
        </div>

        <div className={`transition-all duration-300 ${isHovered ? "opacity-100 max-h-32" : "opacity-0 max-h-0 overflow-hidden"}`}>
          <div className="pt-1">
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary mb-1.5">Canlı Önizleme</div>
            <FeatureDemo type={feature.demo} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-28 bg-background relative section-glow">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Erişilebilirlik Çözümlerimiz
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Herkes İçin{" "}
            <span className="text-gradient">Engelsiz</span>{" "}
            Web Deneyimi
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            7 kategoride 58'den fazla erişilebilirlik özelliği ile web sitenizi tüm engel gruplarına uyumlu hale getirin. Kartların üzerine gelerek canlı önizlemeyi görün.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <div className="bg-muted/40 rounded-2xl p-5 sm:p-8 border border-border/50">
          <h3 className="text-sm font-bold text-foreground mb-6 text-center tracking-wide uppercase">Teknik Şeffaflık</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {techInfo.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
