import { Accessibility, Layers, ShieldCheck, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Sparkles,
    title: "AI Destekli Tarama",
    desc: "Yapay zeka motorumuz sitenizi otomatik tarar, eksiklikleri tespit eder ve anında düzeltir.",
    highlight: "Otomatik düzeltme",
  },
  {
    icon: Accessibility,
    title: "Kişiselleştirilebilir Widget",
    desc: "Kullanıcılar kendi ihtiyaçlarına göre yazı boyutu, kontrast, renk filtresi gibi ayarları özelleştirir.",
    highlight: "9+ erişilebilirlik aracı",
  },
  {
    icon: ShieldCheck,
    title: "Uyumluluk Sertifikası",
    desc: "WCAG 2.1, ADA, EN 301 549 ve EAA standartlarına uyum sertifikanızı otomatik alın.",
    highlight: "Yasal koruma",
  },
  {
    icon: Layers,
    title: "Gerçek Zamanlı İzleme",
    desc: "Dashboard üzerinden erişilebilirlik skorunuzu, kullanıcı etkileşimlerini ve iyileşme trendlerini takip edin.",
    highlight: "Canlı raporlama",
  },
];

const TechSolutions = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4 block">
            Çözüm Yaklaşımımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            AI Destekli Erişilebilirlik Çözümü
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            İKE, yapay zeka ve otomasyon teknolojileri ile web sitenizi tarar, eksiklikleri tespit eder ve tek satır kodla erişilebilir hale getirir.
          </p>
          <Button className="gradient-primary text-white border-0 hover:opacity-90 gap-2">
            Detaylı Bilgi <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl p-7 border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-[0_10px_30px_hsla(265,82%,44%,0.1)] transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
              <span className="inline-block text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">
                {card.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
