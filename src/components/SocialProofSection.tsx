import { Globe, Eye, Clock, Star, Quote } from "lucide-react";

const metrics = [
  { icon: Globe, value: "1.000+", label: "Aktif Web Sitesi" },
  { icon: Eye, value: "50M+", label: "Erişilebilir Sayfa Görüntüleme" },
  { icon: Clock, value: "%99.9", label: "Uptime Garantisi" },
];

const testimonials = [
  {
    quote: "İKE'yi entegre ettikten sonra erişilebilirlik uyumluluk oranımız %95'e çıktı. Kurulum gerçekten 5 dakika sürdü. Müşteri şikayetlerinde ciddi düşüş yaşadık.",
    name: "Ahmet Yılmaz",
    role: "CTO, TechCorp Türkiye",
    rating: 5,
  },
  {
    quote: "WCAG 2.1 uyumluluğunu sağlamak için aylarca uğraştık. İKE ile tek satır kodla çözdük. Uyumluluk sertifikası da yasal süreçlerde büyük avantaj sağladı.",
    name: "Elif Kaya",
    role: "Dijital Pazarlama Müdürü, FinansPlus",
    rating: 5,
  },
  {
    quote: "Devlet ihalesine katılırken erişilebilirlik uyumu şart koşuldu. İKE sayesinde 2 günde tüm gereksinimlerimi karşıladım. Mükemmel destek ekibi.",
    name: "Murat Demir",
    role: "Genel Müdür, GovTech Solutions",
    rating: 5,
  },
];

const logoPlaceholders = ["TechCorp", "FinansPlus", "SağlıkNet", "EduPortal", "MediaHub", "GovTech"];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Güvenilirlik
          </span>
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
              className="text-lg font-bold text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border p-7 flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">"{t.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
