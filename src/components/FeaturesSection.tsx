import { useState } from "react";
import {
  Eye, SlidersHorizontal, Keyboard, Volume2, Captions,
  LinkIcon, Monitor, Type, PauseCircle,
  Zap, Search, ShieldCheck, Gauge, EyeOff
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Yazı Büyütme/Küçültme",
    desc: "Metin boyutunu kullanıcı ihtiyaçlarına göre ayarlama imkanı sunar",
    benefit: "Görme zorluğu yaşayan kullanıcılar için içeriği daha okunabilir hale getirir",
    demo: "text-resize",
  },
  {
    icon: SlidersHorizontal,
    title: "Renk Kontrast Artırma",
    desc: "Ön plan ve arka plan renkleri arasındaki kontrastı artırır",
    benefit: "Renk körü veya düşük görüşlü kullanıcıların içeriği daha kolay ayırt etmesini sağlar",
    demo: "contrast",
  },
  {
    icon: Keyboard,
    title: "Klavye ile Gezinme Desteği",
    desc: "Tüm site içeriğine sadece klavye kullanarak erişim sağlar",
    benefit: "Motor engelli veya fare kullanamayan kişilerin site içinde gezinmesini kolaylaştırır",
    demo: "keyboard",
  },
  {
    icon: Volume2,
    title: "Metin Okuma (Screen Reader Uyumu)",
    desc: "Ekran okuyucularla tam uyumlu, anlamlı ARIA etiketleri içeren yapı",
    benefit: "Görme engelli kullanıcıların site içeriğine sesli olarak erişmesini sağlar",
    demo: "screen-reader",
  },
  {
    icon: Captions,
    title: "Alt Yazı / Açıklama İyileştirmeleri",
    desc: "Video içerikler için geliştirilmiş alt yazılar ve görseller için zengin açıklamalar",
    benefit: "İşitme engelli kullanıcıların video içeriklere erişimini sağlar",
    demo: "captions",
  },
  {
    icon: LinkIcon,
    title: "Link Altı Çizgi / Vurgulama",
    desc: "Tüm bağlantıları açıkça ayırt edilebilir şekilde vurgulama seçeneği",
    benefit: "Bilişsel engelleri olan kullanıcıların tıklanabilir öğeleri daha kolay tanımasını sağlar",
    demo: "link-highlight",
  },
  {
    icon: Monitor,
    title: "Siyah-Beyaz (Yüksek Kontrast) Mod",
    desc: "Tüm site içeriğini maksimum kontrast için siyah-beyaz modda görüntüleme",
    benefit: "Düşük görüşlü kullanıcılar için içeriği daha belirgin hale getirir",
    demo: "grayscale",
  },
  {
    icon: Type,
    title: "Disleksi Dostu Font",
    desc: "Disleksi dostu fontlara geçiş imkanı sunan tipografi seçenekleri",
    benefit: "Disleksi sorunu yaşayan kullanıcıların metinleri daha rahat okumasını sağlar",
    demo: "dyslexia",
  },
  {
    icon: PauseCircle,
    title: "Animasyonları Kapatma",
    desc: "Tüm hareketli öğeler ve animasyonları devre dışı bırakma seçeneği",
    benefit: "Hareket duyarlılığı olan kullanıcılar için daha istikrarlı bir deneyim sunar",
    demo: "stop-animation",
  },
];

const techInfo = [
  { icon: Zap, text: "Site hızına etkisi yok" },
  { icon: Search, text: "SEO uyumlu yapı" },
  { icon: Gauge, text: "Core Web Vitals'a etkisi yok" },
  { icon: EyeOff, text: "prefers-reduced-motion desteği" },
  { icon: ShieldCheck, text: "Veri gizliliği / KVKK uyumlu" },
];

const FeatureDemo = ({ type }: { type: string }) => {
  switch (type) {
    case "text-resize":
      return (
        <div className="space-y-1.5">
          <div className="text-[10px] text-muted-foreground leading-tight">Aa — Küçük metin</div>
          <div className="text-sm font-medium text-foreground leading-tight">Aa — Normal metin</div>
          <div className="text-xl font-bold text-primary leading-tight">Aa — Büyük metin</div>
          <div className="flex items-center gap-1 mt-1">
            <div className="h-1 flex-1 rounded-full bg-primary/20" />
            <div className="h-1 flex-1 rounded-full bg-primary/40" />
            <div className="h-1 flex-1 rounded-full bg-primary" />
          </div>
        </div>
      );
    case "contrast":
      return (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1 rounded-lg p-2 bg-gray-200 text-gray-400 text-[10px] font-medium text-center">Düşük</div>
            <div className="flex-1 rounded-lg p-2 bg-white text-black text-[10px] font-bold text-center border-2 border-primary">Yüksek</div>
          </div>
          <div className="flex gap-1">
            <div className="h-6 flex-1 rounded bg-gray-100" />
            <div className="h-6 flex-1 rounded bg-gray-300" />
            <div className="h-6 flex-1 rounded bg-gray-600" />
            <div className="h-6 flex-1 rounded bg-black" />
          </div>
        </div>
      );
    case "keyboard":
      return (
        <div className="space-y-1.5">
          <div className="flex gap-1.5 justify-center">
            {["Tab", "↑", "↓"].map((key) => (
              <span key={key} className="inline-flex items-center justify-center w-8 h-6 rounded bg-muted border border-border text-[9px] font-mono font-bold text-foreground shadow-sm">{key}</span>
            ))}
          </div>
          <div className="rounded-lg border-2 border-primary p-1.5 bg-primary/5">
            <div className="h-1.5 w-3/4 bg-primary/30 rounded mb-1" />
            <div className="h-1.5 w-1/2 bg-primary/20 rounded" />
          </div>
          <div className="rounded-lg border border-border p-1.5">
            <div className="h-1.5 w-3/4 bg-muted-foreground/15 rounded mb-1" />
            <div className="h-1.5 w-1/2 bg-muted-foreground/10 rounded" />
          </div>
        </div>
      );
    case "screen-reader":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 border border-primary/20">
            <Volume2 className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-[10px] text-primary font-medium">"Ana sayfa bağlantısı"</span>
          </div>
          <div className="flex gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-1 rounded-full bg-primary/60" style={{ height: `${8 + Math.sin(i * 0.8) * 6}px` }} />
            ))}
          </div>
        </div>
      );
    case "captions":
      return (
        <div className="relative">
          <div className="bg-muted rounded-lg h-14 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[10px] border-l-primary border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-black/80 rounded-b-lg px-2 py-1">
            <p className="text-[9px] text-white text-center font-medium">Merhaba, hoş geldiniz...</p>
          </div>
        </div>
      );
    case "link-highlight":
      return (
        <div className="space-y-1.5 text-[11px]">
          <p className="text-muted-foreground">Normal metin içinde <span className="text-primary underline underline-offset-2 decoration-2 decoration-primary font-semibold bg-primary/10 px-0.5 rounded">vurgulu link</span> örneği</p>
          <p className="text-muted-foreground">Bir başka <span className="text-primary underline underline-offset-2 decoration-2 decoration-primary font-semibold bg-primary/10 px-0.5 rounded">tıklanabilir bağlantı</span> burada</p>
        </div>
      );
    case "grayscale":
      return (
        <div className="flex gap-2">
          <div className="flex-1 space-y-1">
            <div className="text-[8px] text-muted-foreground mb-1 text-center">Önce</div>
            <div className="h-3 rounded bg-blue-500" />
            <div className="h-3 rounded bg-green-500" />
            <div className="h-3 rounded bg-red-500" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-[8px] text-muted-foreground mb-1 text-center">Sonra</div>
            <div className="h-3 rounded bg-gray-500" />
            <div className="h-3 rounded bg-gray-400" />
            <div className="h-3 rounded bg-gray-600" />
          </div>
        </div>
      );
    case "dyslexia":
      return (
        <div className="space-y-2">
          <div className="p-1.5 rounded bg-muted/50">
            <p className="text-[10px] text-muted-foreground leading-relaxed" style={{ fontFamily: "serif", letterSpacing: "-0.02em" }}>Standart font ile okuması zor metin</p>
          </div>
          <div className="p-1.5 rounded bg-primary/5 border border-primary/20">
            <p className="text-[10px] text-foreground font-medium leading-loose" style={{ letterSpacing: "0.05em", wordSpacing: "0.15em" }}>Disleksi dostu font ile okunabilir metin</p>
          </div>
        </div>
      );
    case "stop-animation":
      return (
        <div className="flex items-center gap-3 justify-center">
          <div className="text-center">
            <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto mb-1" />
            <span className="text-[8px] text-muted-foreground">Açık</span>
          </div>
          <div className="text-muted-foreground text-lg">→</div>
          <div className="text-center">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-1">
              <PauseCircle className="w-4 h-4 text-primary" />
            </div>
            <span className="text-[8px] text-primary font-medium">Durduruldu</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card rounded-2xl border p-6 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg transition-all group relative overflow-hidden"
    >
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>

      <div className={`transition-all duration-300 ${isHovered ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-40"}`}>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{feature.desc}</p>
        <div className="flex items-start gap-2 text-xs bg-primary/5 rounded-lg p-3">
          <span className="font-semibold text-primary shrink-0">Fayda:</span>
          <span className="text-muted-foreground">{feature.benefit}</span>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isHovered ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <div className="pt-1 pb-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Canlı Önizleme</div>
          <FeatureDemo type={feature.demo} />
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Erişilebilirlik Çözümlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Herkes İçin Engelsiz Web Deneyimi
          </h2>
          <p className="text-muted-foreground text-lg">
            Platformunuzu tüm engel gruplarına uyumlu hale getiren kapsamlı erişilebilirlik özellikleri sunuyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 border">
          <h3 className="text-lg font-bold text-foreground mb-5 text-center">Teknik Şeffaflık</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techInfo.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
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
