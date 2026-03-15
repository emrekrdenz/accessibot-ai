import { useState } from "react";
import { Check, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Başlangıç",
    monthlyPrice: 499,
    yearlyPrice: 399,
    desc: "Küçük ölçekli web siteleri için",
    features: [
      "WCAG 2.1 AA Uyumluluğu",
      "Temel erişilebilirlik widget'ı",
      "Aylık erişilebilirlik raporu",
      "1 web sitesi",
      "E-posta desteği",
      "14 gün ücretsiz deneme",
    ],
    cta: "Ücretsiz Deneyin",
    featured: false,
    trustText: "Kredi kartı gerektirmez",
  },
  {
    name: "Profesyonel",
    monthlyPrice: 999,
    yearlyPrice: 799,
    desc: "Orta ve büyük ölçekli siteler için",
    features: [
      "WCAG 2.1 AA & AAA Uyumluluğu",
      "Gelişmiş erişilebilirlik paneli",
      "Haftalık otomatik AI tarama",
      "5 web sitesine kadar",
      "Öncelikli destek",
      "AI destekli ARIA etiketleme",
      "Yasal uyumluluk sertifikası",
      "Özelleştirilebilir widget tasarımı",
    ],
    cta: "Ücretsiz Deneyin",
    featured: true,
    trustText: "En çok tercih edilen plan",
  },
  {
    name: "Kurumsal",
    monthlyPrice: null,
    yearlyPrice: null,
    desc: "Büyük kuruluşlar ve kamu kurumları",
    features: [
      "Tüm standartlara tam uyumluluk",
      "Özelleştirilebilir erişilebilirlik paneli",
      "Gerçek zamanlı izleme & uyarılar",
      "Sınırsız web sitesi",
      "7/24 özel destek hattı",
      "SLA garantisi",
      "Özel entegrasyon desteği",
      "Dedicated account manager",
    ],
    cta: "İletişime Geçin",
    featured: false,
    trustText: "Özel çözüm ve fiyatlandırma",
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-background relative section-glow">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Fiyatlandırma
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            İhtiyacınıza Uygun{" "}
            <span className="text-gradient">Plan</span>{" "}
            Seçin
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Her ölçekteki web sitesi için uygun fiyatlı erişilebilirlik çözümleri.
          </p>

          <div className="inline-flex items-center gap-1 bg-muted/60 rounded-full p-1 border border-border/50" role="group" aria-label="Fiyatlandırma periyodu">
            <button
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                !isYearly ? "gradient-primary text-white shadow-[0_2px_8px_hsla(265,82%,44%,0.3)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isYearly ? "gradient-primary text-white shadow-[0_2px_8px_hsla(265,82%,44%,0.3)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yıllık <span className="text-xs opacity-80 ml-1">%20 indirim</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-primary/30 shadow-[0_20px_60px_hsla(265,82%,44%,0.12)] scale-[1.03] z-10"
                  : "border-border/50 hover:border-primary/15 hover:shadow-[0_8px_30px_hsla(265,82%,44%,0.06)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-[0_4px_12px_hsla(265,82%,44%,0.3)]">
                    En Popüler
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">
                      ₺{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">/ay</span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-foreground">Özel Teklif</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-11 font-semibold ${
                  plan.featured
                    ? "gradient-primary text-white border-0 hover:opacity-90 shadow-[0_4px_16px_hsla(265,82%,44%,0.25)]"
                    : "bg-muted/60 text-foreground border border-border/50 hover:bg-muted"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
                {plan.featured && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">{plan.trustText}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 flex items-center justify-center gap-2.5">
          <Shield className="w-5 h-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            Tüm planlar 14 gün ücretsiz deneme ile gelir. Memnun kalmazsanız iptal edin, ödeme yapılmaz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
