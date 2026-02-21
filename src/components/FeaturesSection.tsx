import {
  Eye, SlidersHorizontal, Keyboard, Volume2, Captions,
  LinkIcon, Monitor, Type, PauseCircle,
  Zap, Search, ShieldCheck, Gauge, EyeOff
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Eye,
    title: "Yazı Büyütme/Küçültme",
    desc: "Metin boyutunu kullanıcı ihtiyaçlarına göre ayarlama imkanı sunar",
    benefit: "Görme zorluğu yaşayan kullanıcılar için içeriği daha okunabilir hale getirir",
  },
  {
    icon: SlidersHorizontal,
    title: "Renk Kontrast Artırma",
    desc: "Ön plan ve arka plan renkleri arasındaki kontrastı artırır",
    benefit: "Renk körü veya düşük görüşlü kullanıcıların içeriği daha kolay ayırt etmesini sağlar",
  },
  {
    icon: Keyboard,
    title: "Klavye ile Gezinme Desteği",
    desc: "Tüm site içeriğine sadece klavye kullanarak erişim sağlar",
    benefit: "Motor engelli veya fare kullanamayan kişilerin site içinde gezinmesini kolaylaştırır",
  },
  {
    icon: Volume2,
    title: "Metin Okuma (Screen Reader Uyumu)",
    desc: "Ekran okuyucularla tam uyumlu, anlamlı ARIA etiketleri içeren yapı",
    benefit: "Görme engelli kullanıcıların site içeriğine sesli olarak erişmesini sağlar",
  },
  {
    icon: Captions,
    title: "Alt Yazı / Açıklama İyileştirmeleri",
    desc: "Video içerikler için geliştirilmiş alt yazılar ve görseller için zengin açıklamalar",
    benefit: "İşitme engelli kullanıcıların video içeriklere erişimini sağlar",
  },
  {
    icon: LinkIcon,
    title: "Link Altı Çizgi / Vurgulama",
    desc: "Tüm bağlantıları açıkça ayırt edilebilir şekilde vurgulama seçeneği",
    benefit: "Bilişsel engelleri olan kullanıcıların tıklanabilir öğeleri daha kolay tanımasını sağlar",
  },
  {
    icon: Monitor,
    title: "Siyah-Beyaz (Yüksek Kontrast) Mod",
    desc: "Tüm site içeriğini maksimum kontrast için siyah-beyaz modda görüntüleme",
    benefit: "Düşük görüşlü kullanıcılar için içeriği daha belirgin hale getirir",
  },
  {
    icon: Type,
    title: "Disleksi Dostu Font",
    desc: "Disleksi dostu fontlara geçiş imkanı sunan tipografi seçenekleri",
    benefit: "Disleksi sorunu yaşayan kullanıcıların metinleri daha rahat okumasını sağlar",
  },
  {
    icon: PauseCircle,
    title: "Animasyonları Kapatma",
    desc: "Tüm hareketli öğeler ve animasyonları devre dışı bırakma seçeneği",
    benefit: "Hareket duyarlılığı olan kullanıcılar için daha istikrarlı bir deneyim sunar",
  },
];

const techInfo = [
  { icon: Zap, text: "Site hızına etkisi yok" },
  { icon: Search, text: "SEO uyumlu yapı" },
  { icon: Gauge, text: "Core Web Vitals'a etkisi yok" },
  { icon: EyeOff, text: "prefers-reduced-motion desteği" },
  { icon: ShieldCheck, text: "Veri gizliliği / KVKK uyumlu" },
];

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

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl border p-6 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{feature.desc}</p>
              <div className="flex items-start gap-2 text-xs bg-primary/5 rounded-lg p-3">
                <span className="font-semibold text-primary shrink-0">Fayda:</span>
                <span className="text-muted-foreground">{feature.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical transparency */}
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
