import { Code, Globe, Zap, EyeOff, ShieldCheck, Clock } from "lucide-react";

const cards = [
  { icon: Code, title: "Tek Satır JS", desc: "Tek satır JavaScript ile kolay entegrasyon" },
  { icon: Globe, title: "Global CDN", desc: "Dünya genelinde hızlı dağıtım" },
  { icon: Zap, title: "Hız Etkisi Yok", desc: "Asenkron yükleme ile site hızınızı korur" },
  { icon: EyeOff, title: "Veri Toplamaz", desc: "Kullanıcı verisi saklamaz veya paylaşmaz" },
  { icon: ShieldCheck, title: "KVKK Uyumlu", desc: "Kişisel verilerin korunması kanununa tam uyum" },
  { icon: Clock, title: "%99.9 Uptime", desc: "Yüksek erişilebilirlik ve güvenilirlik garantisi" },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 gradient-dark text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performans ve Güvenlik</h2>
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
              <p className="text-sm text-white/50">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
