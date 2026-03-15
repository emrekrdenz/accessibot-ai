import { ScanSearch, LayoutGrid, FileCheck, Activity, ArrowRight, Braces, HardDrive, Globe, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: ScanSearch,
    title: "AI Destekli Tarama",
    desc: "Yapay zeka motorumuz sitenizi otomatik tarar, WCAG eksikliklerini tespit eder ve anında düzeltir.",
    highlight: "Otomatik düzeltme",
    span: "lg:col-span-2",
  },
  {
    icon: LayoutGrid,
    title: "58+ Erişilebilirlik Özelliği",
    desc: "7 kategoride 58'den fazla özellik: metin, renk, okuma, navigasyon, içerik, profiller ve gelişmiş araçlar.",
    highlight: "6 hazır profil",
    span: "",
  },
  {
    icon: FileCheck,
    title: "Uyumluluk Sertifikası",
    desc: "WCAG 2.1, ADA, EN 301 549, EAA 2025 ve 5378 sayılı kanuna uyum sertifikanızı otomatik alın.",
    highlight: "Yasal koruma",
    span: "",
  },
  {
    icon: Activity,
    title: "Gerçek Zamanlı İzleme",
    desc: "Özellik kullanım analitiği, oturum takibi, heartbeat monitoring ve event queue sistemi ile canlı raporlama.",
    highlight: "Canlı analytics",
    span: "lg:col-span-2",
  },
];

const techSpecs = [
  { icon: Braces, label: "Shadow DOM", desc: "Tam stil izolasyonu" },
  { icon: HardDrive, label: "283 KB", desc: "Optimize edilmiş bundle" },
  { icon: Globe, label: "Global CDN", desc: "Hızlı yükleme" },
  { icon: KeyRound, label: "API Key + Domain", desc: "Güvenli doğrulama" },
];

const TechSolutions = () => {
  return (
    <section className="py-28 bg-muted/30 relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
              Çözüm Yaklaşımımız
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground leading-tight">
              Kurumsal Seviye{" "}
              <span className="text-gradient">Erişilebilirlik</span>{" "}
              Widget'ı
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground leading-relaxed mb-5">
              İKE, Shadow DOM ile izole çalışan, modüler mimariye sahip, API key ve domain doğrulaması yapan kurumsal seviye bir erişilebilirlik çözümüdür.
            </p>
            <Button className="gradient-primary text-white border-0 hover:opacity-90 gap-2 shadow-[0_4px_16px_hsla(225,84%,55%,0.25)] h-11 px-6">
              Detaylı Bilgi <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group relative bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_12px_40px_hsla(225,84%,55%,0.06)] overflow-hidden ${card.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-indigo-500/10 flex items-center justify-center mb-5 group-hover:shadow-[0_4px_12px_hsla(225,84%,55%,0.12)] transition-shadow">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  {card.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {techSpecs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border/50">
              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                <spec.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{spec.label}</div>
                <div className="text-[10px] text-muted-foreground">{spec.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
