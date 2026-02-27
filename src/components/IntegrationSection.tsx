import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "WordPress", color: "bg-blue-500" },
  { name: "Shopify", color: "bg-green-500" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Angular", color: "bg-red-500" },
  { name: "Vue.js", color: "bg-emerald-500" },
  { name: "Next.js", color: "bg-foreground" },
  { name: "Wix", color: "bg-yellow-500" },
  { name: "Squarespace", color: "bg-foreground" },
];

const IntegrationSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <div>
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
              Kolay Entegrasyon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Tüm Platformlarla Uyumlu
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              İKE, popüler tüm web platformları ve framework'lerle sorunsuz çalışır.
              Tek satır JavaScript kodu ile hemen başlayın.
            </p>

            <div className="bg-card rounded-xl border p-4 mb-6 font-mono text-sm">
              <div className="text-muted-foreground mb-1">{'<!-- İKE Widget Kodu -->'}</div>
              <div className="text-primary">
                {'<script src="https://cdn.ike.com.tr/widget.js" async></script>'}
              </div>
            </div>

            <Button className="gradient-primary text-white border-0 hover:opacity-90 gap-2">
              Kurulum Kılavuzu <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="bg-card rounded-xl border p-5 flex items-center gap-3 hover:border-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
