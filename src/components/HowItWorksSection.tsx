import { UserPlus, Code, Sparkles, Clock, Wrench, Monitor } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Hesap Oluşturun",
    desc: "Web siteniz için ücretsiz bir hesap oluşturarak başlayın.",
  },
  {
    number: "2",
    icon: Code,
    title: "Kodu Ekleyin",
    desc: "Size verilen tek satırlık JavaScript kodunu sitenize ekleyin.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Erişilebilirsiniz!",
    desc: "Yapay zeka modülü sitenizi otomatik olarak tarar ve uyumlu hale getirir.",
  },
];

const trustPoints = [
  { icon: Clock, text: "Ortalama kurulum süresi: 5 dakika" },
  { icon: Wrench, text: "Teknik bilgi veya developer gerektirmez" },
  { icon: Monitor, text: "Mevcut sitenizde hiçbir değişiklik yapmadan" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nasıl Çalışır?</h2>
          <p className="text-muted-foreground text-lg">
            3 basit adımda web sitenizi erişilebilir hale getirin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              <div className="bg-card rounded-2xl p-8 border shadow-sm hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-muted-foreground/30 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {trustPoints.map((point) => (
            <div key={point.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <point.icon className="w-5 h-5 text-primary" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
