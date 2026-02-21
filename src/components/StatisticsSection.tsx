import { Eye, Headphones, PersonStanding, Brain, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Eye, label: "Görme Engelliler", value: "215.000+", percentage: 4.4, color: "hsl(207 98% 65%)", desc: "Türkiye'de yaşayan görme engelli birey" },
  { icon: Headphones, label: "İşitme Engelliler", value: "350.000+", percentage: 7.2, color: "hsl(231 77% 66%)", desc: "Ülkemizde bulunan işitme engelli birey" },
  { icon: PersonStanding, label: "Ortopedik Engelliler", value: "650.000+", percentage: 13.3, color: "hsl(270 40% 72%)", desc: "Bedensel engelli olarak yaşayan birey" },
  { icon: Brain, label: "Zihinsel Engelliler", value: "450.000+", percentage: 9.2, color: "hsl(350 80% 75%)", desc: "Zihinsel engelli olarak hayatını sürdüren birey" },
  { icon: User, label: "Albino Hastaları", value: "25.000+", percentage: 1, color: "hsl(310 60% 80%)", desc: "Türkiye'deki albinizm hastası birey" },
];

const StatisticsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Türkiye'deki Engelli İstatistikleri
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Erişilebilirlik konusunda farkındalığı artırmak için Türkiye'deki engelli bireyler hakkında güncel istatistikler sunuyoruz.
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto space-y-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-center mb-2 font-semibold text-foreground">
                <stat.icon className="w-5 h-5 mr-3 text-muted-foreground" />
                <span className="flex-1">{stat.label}</span>
                <span className="font-bold">{stat.value}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${stat.percentage}%` : "0%",
                    backgroundColor: stat.color,
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground ml-8">{stat.desc}</p>
            </div>
          ))}

          <p className="text-center text-sm text-muted-foreground/70 mt-10">
            Kaynak: Aile ve Sosyal Hizmetler Bakanlığı & Türkiye İstatistik Kurumu (TÜİK) 2022 verileri
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
