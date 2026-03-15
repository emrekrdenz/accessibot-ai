import { TrendingUp, Users, Search } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4.8M+",
    label: "Engelli Birey",
    desc: "Türkiye'de erişilebilir sitelere ihtiyaç duyan potansiyel kullanıcı",
  },
  {
    icon: TrendingUp,
    value: "%30",
    label: "Dönüşüm Artışı",
    desc: "Erişilebilir web sitelerinin ortalama dönüşüm oranı artışı",
  },
  {
    icon: Search,
    value: "%15",
    label: "SEO İyileşmesi",
    desc: "Erişilebilirlik optimizasyonunun organik trafiğe etkisi",
  },
];

const ROISection = () => {
  return (
    <section className="py-24 gradient-dark text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-accent-blue bg-accent-blue/10 px-5 py-2 rounded-full border border-accent-blue/20 mb-5">
            Yatırım Getirisi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Erişilebilirlik Bir Maliyet Değil, Yatırımdır
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Erişilebilir web siteniz daha geniş kitlelere ulaşır, SEO performansını artırır ve yasal risklerden korur.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-blue/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent-blue" />
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
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
