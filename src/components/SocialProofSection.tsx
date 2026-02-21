import { Globe, Eye, Clock, Star } from "lucide-react";

const metrics = [
  { icon: Globe, value: "1.000+", label: "Web sitesi" },
  { icon: Eye, value: "50M+", label: "Sayfa görüntüleme" },
  { icon: Clock, value: "%99.9", label: "Uptime" },
];

const testimonials = [
  {
    quote: "İKE'yi entegre ettikten sonra erişilebilirlik uyumluluk oranımız %95'e çıktı. Kurulum gerçekten 5 dakika sürdü.",
    name: "Ahmet Yılmaz",
    role: "CTO, TechCorp Türkiye",
  },
  {
    quote: "WCAG 2.1 uyumluluğunu sağlamak için aylarca uğraştık. İKE ile tek satır kodla çözdük. Mükemmel bir ürün.",
    name: "Elif Kaya",
    role: "Dijital Pazarlama Müdürü, FinansPlus",
  },
];

const logoPlaceholders = ["TechCorp", "FinansPlus", "SağlıkNet", "EduPortal", "MediaHub", "GovTech"];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Binlerce Web Sitesi İKE'ye Güveniyor
          </h2>
          <p className="text-muted-foreground text-lg">
            Türkiye ve Avrupa'daki kurumsal müşterilerimizle birlikte dijital erişilebilirliği yaygınlaştırıyoruz.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <m.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-foreground mb-1">{m.value}</div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 py-6 border-y border-border">
          {logoPlaceholders.map((name) => (
            <div
              key={name}
              className="text-lg font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border p-8">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
