import { Code, Globe, Zap, EyeOff, ShieldCheck, Clock, Server, Lock } from "lucide-react";

const cards = [
  { icon: Code, title: "Tek Satır Entegrasyon", desc: "Tek satır JavaScript ile tüm özellikler aktif. CMS veya framework fark etmez." },
  { icon: Globe, title: "Global CDN", desc: "200+ lokasyondan hızlı dağıtım. Türkiye'de özel edge sunucuları." },
  { icon: Zap, title: "Sıfır Performans Etkisi", desc: "Asenkron yükleme ile Lighthouse ve Core Web Vitals skorlarınız etkilenmez." },
  { icon: Lock, title: "Veri Toplamaz", desc: "Kullanıcı verisi saklamaz, paylaşmaz. Hiçbir kişisel bilgi sunucularımıza iletilmez." },
  { icon: ShieldCheck, title: "KVKK & GDPR Uyumlu", desc: "Kişisel Verilerin Korunması Kanunu ve Avrupa GDPR düzenlemelerine tam uyum." },
  { icon: Server, title: "%99.9 Uptime SLA", desc: "Yüksek erişilebilirlik garantisi. 7/24 izleme ve otomatik yedekleme." },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 gradient-dark text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-accent-blue bg-accent-blue/10 px-5 py-2 rounded-full border border-accent-blue/20 mb-5">
            Altyapı
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Performans ve Güvenlik</h2>
          <p className="text-white/60 text-lg">
            İKE, performansınızdan ödün vermeden tam güvenlik ve gizlilik sağlar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-blue/15 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-accent-blue" />
              </div>
              <h3 className="font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
