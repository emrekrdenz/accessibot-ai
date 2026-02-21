import { useState } from "react";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    ],
    cta: "Başlayın",
    featured: false,
    trustText: "14 gün ücretsiz deneme",
  },
  {
    name: "Profesyonel",
    monthlyPrice: 999,
    yearlyPrice: 799,
    desc: "Orta ve büyük ölçekli siteler için",
    features: [
      "WCAG 2.1 AA & AAA Uyumluluğu",
      "Gelişmiş erişilebilirlik paneli",
      "Haftalık otomatik tarama",
      "5 web sitesine kadar",
      "Öncelikli destek",
      "AI destekli ARIA etiketleme",
      "Yasal uyumluluk sertifikası",
    ],
    cta: "Başlayın",
    featured: true,
    trustText: "En çok tercih edilen plan",
  },
  {
    name: "Kurumsal",
    monthlyPrice: null,
    yearlyPrice: null,
    desc: "Büyük kuruluşlar ve kamu kurumları için",
    features: [
      "Tüm standartlara tam uyumluluk",
      "Özelleştirilebilir erişilebilirlik paneli",
      "Gerçek zamanlı izleme",
      "Sınırsız web sitesi",
      "7/24 özel destek",
      "SLA garantisi",
      "Özel entegrasyon desteği",
    ],
    cta: "İletişime Geçin",
    featured: false,
    trustText: "Özel çözüm ve fiyatlandırma",
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Fiyatlandırma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            İhtiyacınıza Uygun Plan Seçin
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Her ölçekteki web sitesi için uygun fiyatlı erişilebilirlik çözümleri sunuyoruz.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-card rounded-full p-1.5 border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "gradient-primary text-white" : "text-muted-foreground"
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "gradient-primary text-white" : "text-muted-foreground"
              }`}
            >
              Yıllık <span className="text-xs opacity-80">(%20 indirim)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border-2 p-8 transition-all ${
                plan.featured
                  ? "border-primary shadow-[0_20px_60px_hsla(265,82%,44%,0.15)] scale-105 z-10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white border-0 px-4">
                  En Popüler
                </Badge>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-2">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-4xl font-extrabold text-foreground">
                      ₺{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/ay</span>
                  </>
                ) : (
                  <span className="text-3xl font-extrabold text-foreground">Özel Teklif</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured ? "gradient-primary text-white border-0 hover:opacity-90" : ""
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">{plan.trustText}</p>
            </div>
          ))}
        </div>

        {/* ROI message */}
        <div className="text-center mt-12 flex items-center justify-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            Erişilebilirlik yatırımınız, yasal risklerden korunmanızı ve daha geniş kitlelere ulaşmanızı sağlar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
