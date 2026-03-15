import { Scale, Users, Globe, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Scale,
    title: "EAA 2025 Yürürlükte",
    desc: "Avrupa Erişilebilirlik Yasası yürürlüğe girdi. Uyumsuz web siteleri yasal yaptırımlarla karşı karşıya.",
    stat: "28 Haziran 2025",
    statLabel: "Son tarih",
    gradient: "from-red-500 to-orange-500",
    bgGlow: "bg-red-500/10",
  },
  {
    icon: Users,
    title: "Müşteri Kaybı Riski",
    desc: "Dünya nüfusunun %15'i bir engelle yaşıyor. Erişilebilir olmayan siteniz büyük bir kitleyi kaybediyor.",
    stat: "%15",
    statLabel: "Dünya nüfusu",
    gradient: "from-orange-500 to-amber-500",
    bgGlow: "bg-orange-500/10",
  },
  {
    icon: Globe,
    title: "5378 Sayılı Kanun",
    desc: "Türkiye'de kamu ve özel sektör web siteleri erişilebilir olmak zorunda. İhlal durumunda idari para cezası uygulanıyor.",
    stat: "₺200K+",
    statLabel: "Ortalama ceza",
    gradient: "from-amber-500 to-yellow-500",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: TrendingUp,
    title: "Artan Erişilebilirlik Davaları",
    desc: "Dünya genelinde erişilebilirlik davaları yılda %30 artıyor. Proaktif çözüm çok daha düşük maliyetlidir.",
    stat: "%30",
    statLabel: "Yıllık artış",
    gradient: "from-purple-500 to-violet-500",
    bgGlow: "bg-purple-500/10",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-28 bg-background relative section-glow">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-primary mb-5 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Neden Erişilebilirlik?
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Erişilebilir Olmayan Web Sitenizin{" "}
            <span className="text-gradient">Maliyeti</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dijital erişilebilirlik artık bir tercih değil, yasal bir zorunluluk. Erişilebilir olmayan web sitesi hem müşteri kaybına hem de hukuki risklere yol açar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative bg-card rounded-2xl border border-border/60 p-7 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_8px_40px_hsla(265,82%,44%,0.08)] overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 ${problem.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative flex gap-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-foreground text-[15px]">{problem.title}</h3>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-lg font-extrabold bg-gradient-to-r ${problem.gradient} bg-clip-text text-transparent leading-none`}>
                        {problem.stat}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{problem.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
