import { Scale, Users, Globe, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Scale,
    title: "EAA 2025 Yürürlükte",
    desc: "Avrupa Erişilebilirlik Yasası yürürlüğe girdi. Uyumsuz web siteleri yasal yaptırımlarla karşı karşıya.",
    stat: "28 Haziran 2025",
    statLabel: "Son tarih",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    icon: Users,
    title: "Müşteri Kaybı Riski",
    desc: "Dünya nüfusunun %15'i bir engelle yaşıyor. Erişilebilir olmayan siteniz büyük bir kitleyi kaybediyor.",
    stat: "%15",
    statLabel: "Dünya nüfusu",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Globe,
    title: "5378 Sayılı Kanun",
    desc: "Türkiye'de kamu ve özel sektör web siteleri erişilebilir olmak zorunda. İhlal durumunda idari para cezası uygulanıyor.",
    stat: "₺200K+",
    statLabel: "Ortalama ceza",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    icon: TrendingUp,
    title: "Artan Erişilebilirlik Davaları",
    desc: "Dünya genelinde erişilebilirlik davaları yılda %30 artıyor. Proaktif çözüm çok daha düşük maliyetlidir.",
    stat: "%30",
    statLabel: "Yıllık artış",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
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
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center flex-shrink-0`}>
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                  <div className="text-right ml-3">
                    <div className="text-lg font-extrabold text-primary leading-none">{problem.stat}</div>
                    <div className="text-[10px] text-muted-foreground">{problem.statLabel}</div>
                  </div>
                </div>
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
