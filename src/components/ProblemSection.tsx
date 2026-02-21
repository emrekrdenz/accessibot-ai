import { AlertTriangle, Scale, Users, Globe } from "lucide-react";

const problems = [
  {
    icon: Scale,
    title: "EAA 2025 Zorunluluğu",
    desc: "Avrupa Erişilebilirlik Yasası (European Accessibility Act) 2025 itibarıyla yürürlüğe girdi. Uyumsuz web siteleri yasal yaptırımlarla karşı karşıya kalabilir.",
  },
  {
    icon: Users,
    title: "Müşteri Kaybı Riski",
    desc: "Dünya nüfusunun %15'i bir engel ile yaşıyor. Erişilebilir olmayan web siteniz, potansiyel müşterilerinizin önemli bir bölümünü kaybetmenize neden olur.",
  },
  {
    icon: Globe,
    title: "Türkiye'de 5378 Sayılı Kanun",
    desc: "Türkiye'de Engelliler Hakkında Kanun kapsamında kamu ve özel sektör web siteleri erişilebilir olmak zorundadır.",
  },
  {
    icon: AlertTriangle,
    title: "Artan Hukuki Talepler",
    desc: "Erişilebilirlik davaları dünya genelinde her yıl artış gösteriyor. Proaktif çözüm, reaktif çözümden çok daha düşük maliyetlidir.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-primary mb-4 bg-primary/5 px-5 py-2 rounded-full border border-primary/15">
            Neden Erişilebilirlik?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Erişilebilir Olmayan Web Sitenizin Maliyeti
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dijital erişilebilirlik artık bir tercih değil, yasal bir zorunluluk. Erişilebilir olmayan web sitesi hem müşteri kaybına hem de hukuki risklere yol açar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
