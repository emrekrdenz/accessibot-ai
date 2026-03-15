import { ArrowUpRight, UsersRound, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: UsersRound,
    value: "4.8M+",
    label: "Engelli Birey",
    desc: "Türkiye'de erişilebilir sitelere ihtiyaç duyan potansiyel kullanıcı",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: ArrowUpRight,
    value: "%30",
    label: "Dönüşüm Artışı",
    desc: "Erişilebilir web sitelerinin ortalama dönüşüm oranı artışı",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Globe,
    value: "%15",
    label: "SEO İyileşmesi",
    desc: "Erişilebilirlik optimizasyonunun organik trafiğe etkisi",
    gradient: "from-primary to-primary/70",
  },
];

const ROISection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-28 gradient-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-accent-blue bg-accent-blue/10 px-5 py-2.5 rounded-full border border-accent-blue/15 mb-5">
            Yatırım Getirisi
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-5 leading-tight">
            Erişilebilirlik Bir Maliyet Değil,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-violet-400 bg-clip-text text-transparent">Yatırımdır</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Erişilebilir web siteniz daha geniş kitlelere ulaşır, SEO performansını artırır ve yasal risklerden korur.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-dark border border-white/[0.08] rounded-2xl p-8 text-center hover:border-white/15 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} bg-opacity-15 flex items-center justify-center mx-auto mb-5`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`text-4xl font-extrabold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white/80 mb-2">{stat.label}</div>
              <p className="text-xs text-white/40 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
