import { Accessibility, Layers, ShieldCheck, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Accessibility,
    title: "Bilgiye Eşit Erişim",
    desc: "Herkesin eşit şartlarda kamu bilgilendirme içeriklerine ulaşmasını sağlamak.",
  },
  {
    icon: Layers,
    title: "Kapsayıcılık",
    desc: "Hiçbir bireyin fiziksel ya da bilişsel engeli nedeniyle dışlanmadığı, herkesi içine alan bir dijital deneyim sunar.",
  },
  {
    icon: ShieldCheck,
    title: "Yasal Uyumluluk",
    desc: "WCAG 2.1, ADA ve EN 301 549 gibi erişilebilirlik standartlarına uygun dijital altyapılar ile mevzuata tam uyum sağlar.",
  },
  {
    icon: Lightbulb,
    title: "Güçlü Kurumsal İmaj",
    desc: "Toplumsal sorumluluğunu yerine getiren, duyarlı ve çağdaş bir kurum olarak algılanarak marka değerini yükseltir.",
  },
];

const TechSolutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4 block">
            ÖNE ÇIKAN ÖZELLİKLER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
            Erişilebilir Teknoloji Çözümlerimiz
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            İKE Erişilebilirlik teknoloji çözümlerinizin hakkında daha detaylı bilgilere ulaşın ve özel ihtiyaçlarınıza uygun çözümlerimizi keşfedin.
          </p>
          <Button className="bg-foreground text-background hover:bg-primary gap-2">
            Daha Fazlası İçin <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-muted/50 rounded-xl p-8 border border-transparent hover:border-primary hover:-translate-y-1 hover:shadow-[0_10px_30px_hsla(265,82%,44%,0.1)] transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
