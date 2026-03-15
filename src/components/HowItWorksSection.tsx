import { UserRoundPlus, SquareTerminal, Workflow, Timer, Puzzle, ScreenShare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: UserRoundPlus,
    title: "Hesap Oluşturun",
    desc: "30 saniyede ücretsiz hesap oluşturun. Kredi kartı gerekmez.",
    detail: "E-posta ile kayıt → Plan seçimi → Hazır",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "2",
    icon: SquareTerminal,
    title: "Tek Satır Kod Ekleyin",
    desc: "Size verilen JavaScript kodunu sitenizin <head> bölümüne yapıştırın.",
    detail: '<script src="cdn.ike.com.tr/widget.js" async>',
    color: "from-amber-500 to-orange-600",
  },
  {
    number: "3",
    icon: Workflow,
    title: "AI Taramayı Başlatın",
    desc: "AI motorumuz sitenizi tarar, eksiklikleri tespit eder ve widget aktif olur.",
    detail: "Otomatik WCAG taraması → Widget aktif → Raporlama başlar",
    color: "from-rose-500 to-pink-600",
  },
];

const trustPoints = [
  { icon: Timer, text: "Ortalama kurulum: 5 dakika" },
  { icon: Puzzle, text: "Teknik bilgi gerektirmez" },
  { icon: ScreenShare, text: "Sitenizde değişiklik yapmaz" },
];

const HowItWorksSection = () => {
  return (
    <section className="pt-10 pb-28 bg-background relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Nasıl Çalışır?
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            <span className="text-gradient">3 Adımda</span> Erişilebilirlik
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Karmaşık geliştirme süreçlerine gerek yok. 3 basit adımda web sitenizi erişilebilir hale getirin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14 relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-indigo-500/20" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-[0_12px_40px_hsla(225,84%,55%,0.08)] transition-all duration-300 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-lg relative z-10`}>
                  {step.number}
                </div>
                <step.icon className="w-7 h-7 text-primary mx-auto mb-4 opacity-60" />
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
                <div className="bg-muted/50 rounded-xl px-4 py-2.5 border border-border/50">
                  <code className="text-[11px] text-primary/80 font-mono break-all">{step.detail}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {trustPoints.map((point) => (
            <div key={point.text} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                <point.icon className="w-4 h-4 text-primary" />
              </div>
              <span>{point.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12 shadow-[0_4px_20px_hsla(225,84%,55%,0.3)]">
            Ücretsiz Deneyin
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
