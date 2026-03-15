import { UserPlus, Code, Sparkles, Clock, Wrench, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Hesap Oluşturun",
    desc: "30 saniyede ücretsiz hesap oluşturun. Kredi kartı gerekmez.",
    detail: "E-posta ile kayıt → Plan seçimi → Hazır",
  },
  {
    number: "2",
    icon: Code,
    title: "Tek Satır Kod Ekleyin",
    desc: "Size verilen JavaScript kodunu sitenizin <head> bölümüne yapıştırın.",
    detail: '<script src="cdn.ike.com.tr/widget.js" async>',
  },
  {
    number: "3",
    icon: Sparkles,
    title: "AI Taramayı Başlatın",
    desc: "AI motorumuz sitenizi tarar, eksiklikleri tespit eder ve widget aktif olur.",
    detail: "Otomatik WCAG taraması → Widget aktif → Raporlama başlar",
  },
];

const trustPoints = [
  { icon: Clock, text: "Ortalama kurulum: 5 dakika" },
  { icon: Wrench, text: "Teknik bilgi gerektirmez" },
  { icon: Monitor, text: "Sitenizde değişiklik yapmaz" },
];

const HowItWorksSection = () => {
  return (
    <section className="pt-10 pb-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Nasıl Çalışır?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">3 Adımda Erişilebilirlik</h2>
          <p className="text-muted-foreground text-lg">
            Karmaşık geliştirme süreçlerine gerek yok. 3 basit adımda web sitenizi erişilebilir hale getirin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              <div className="bg-card rounded-2xl p-8 border shadow-sm hover:-translate-y-1 transition-all h-full">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <div className="bg-muted/50 rounded-lg px-3 py-2">
                  <code className="text-[11px] text-primary font-mono break-all">{step.detail}</code>
                </div>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-muted-foreground/30 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {trustPoints.map((point) => (
            <div key={point.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <point.icon className="w-5 h-5 text-primary" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12">
            Ücretsiz Deneyin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
