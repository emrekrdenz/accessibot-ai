import { useState } from "react";
import {
  RotateCcw, EyeOff, Image, Palette, Type, Brain,
  Activity, Target, Accessibility, Info
} from "lucide-react";

const simProfiles = [
  { id: "default", icon: RotateCcw, title: "Varsayılan", desc: "Normal görünüm - tüm efektleri sıfırla" },
  { id: "vision-loss", icon: EyeOff, title: "Görme Engelli", desc: "Bulanıklaştırma ile düşük görüş simülasyonu" },
  { id: "visual-desc", icon: Image, title: "Görsel Betimleme", desc: "Görseller için metin açıklamaları" },
  { id: "color-blind", icon: Palette, title: "Renk Körü", desc: "Renk körlüğü filtre simülasyonu" },
  { id: "dyslexia", icon: Type, title: "Disleksi Modu", desc: "Okuma zorluğu ve harf titreşimi" },
  { id: "cognitive", icon: Brain, title: "Bilişsel ve Öğrenme", desc: "Odak tüneli ve dikkat sınırlaması" },
  { id: "epilepsy", icon: Activity, title: "Nöbet ve Epileptik", desc: "Düşük parlaklık ve azaltılmış hareket" },
  { id: "adhd", icon: Target, title: "DEHB Modu", desc: "Aşırı uyaran ve dikkat dağılması" },
  { id: "motor", icon: Accessibility, title: "Motor Engelli", desc: "Büyük hedefler ve yakınlaştırma" },
];

const simDescriptions: Record<string, { overlay: string; info: string }> = {
  default: {
    overlay: "Varsayılan görünüm. Bir profil seçerek simülasyonu başlatın.",
    info: "Sağdaki profillerden birini seçerek, o engel grubunun web deneyimini simüle edebilirsiniz.",
  },
  "vision-loss": {
    overlay: "Görme Engelli: Ekran okuyucular, sesli geri bildirim ve yüksek kontrast modları ile web içeriğine erişim sağlanır.",
    info: "Bu simülasyon düşük görüş seviyesini bulanıklaştırma ile gösterir. Gerçek hayatta ekran okuyucular ve sesli geri bildirim kullanılır.",
  },
  "visual-desc": {
    overlay: "Görsel Betimleme: Her görsel için detaylı metin açıklamaları sağlanır.",
    info: "Alt metinler ve ARIA etiketleri ile görseller sesli olarak tanımlanır.",
  },
  "color-blind": {
    overlay: "Renk Körü: Renk körlüğü olan kullanıcılar için özel filtreler uygulanır.",
    info: "Dünya nüfusunun yaklaşık %8'i renk körlüğünden etkilenir. Renklere bağımlı olmayan tasarım kritik önem taşır.",
  },
  dyslexia: {
    overlay: "Disleksi: Harflerin karışması ve odaklanma zorluğu simüle edilmektedir.",
    info: "Disleksi dostu fontlar, artırılmış satır aralığı ve kelime vurgulama ile okuma kolaylığı sağlanabilir.",
  },
  cognitive: {
    overlay: "Bilişsel Engel: Odak tüneli efekti ile dikkat sınırlaması gösterilmektedir.",
    info: "Basitleştirilmiş arayüz, net navigasyon ve dikkat dağıtıcı öğelerin azaltılması bilişsel yükü hafifletir.",
  },
  epilepsy: {
    overlay: "Epilepsi: Düşük parlaklık modu ile güvenli görüntüleme sağlanır.",
    info: "Yanıp sönen içerikler ve hızlı animasyonlar nöbetleri tetikleyebilir.",
  },
  adhd: {
    overlay: "DEHB: Aşırı uyaran ve yüksek doygunluk ile dikkat dağılması simüle edilir.",
    info: "Dikkat dağıtıcı öğelerin gizlenmesi, odak vurgusu ve yapılandırılmış içerik DEHB'li kullanıcılara yardımcı olur.",
  },
  motor: {
    overlay: "Motor Engelli: Yakınlaştırma ile büyük tıklama hedefleri simüle edilir.",
    info: "Büyük tıklama alanları, klavye navigasyonu ve sesli komut desteği motor engelli kullanıcılar için kritiktir.",
  },
};

const SimulationSection = () => {
  const [activeSim, setActiveSim] = useState("default");
  const desc = simDescriptions[activeSim];

  const getSimFilter = () => {
    switch (activeSim) {
      case "vision-loss": return "blur-[6px]";
      case "color-blind": return "grayscale contrast-125";
      case "dyslexia": return "animate-[shake_0.5s_infinite]";
      case "epilepsy": return "brightness-[0.4] sepia-[0.3]";
      case "adhd": return "saturate-[3] contrast-[1.3]";
      case "motor": return "scale-125 origin-top-left";
      default: return "";
    }
  };

  return (
    <section id="settings" className="gradient-dark py-24 text-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-accent-blue bg-accent-blue/10 px-5 py-2 rounded-full border border-accent-blue/20 mb-5">
            Erişilebilirlik Deneyimi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Farklı Engel Gruplarının Web Deneyimini Keşfedin
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Bir görme engelli kullanıcı sitenizi ziyaret ettiğinde ne yaşar? Her profil, belirli bir engel grubunun web'de karşılaştığı zorlukları simüle eder.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          {/* Browser mockup */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/10">
              <div className="bg-[hsl(217,33%,15%)] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white/40">
                  www.ornek-site.com
                </div>
              </div>
              <div className="relative bg-[hsl(210,30%,98%)] min-h-[350px] overflow-hidden">
                <div className={`p-4 transition-all duration-500 ${getSimFilter()}`}>
                  {/* Mini site */}
                  <div className="flex justify-between items-center p-2.5 bg-white rounded-lg mb-4 shadow-sm">
                    <div className="w-14 h-2.5 bg-foreground rounded" />
                    <div className="flex gap-3">
                      <div className="w-10 h-2 bg-muted-foreground/30 rounded" />
                      <div className="w-10 h-2 bg-muted-foreground/30 rounded" />
                      <div className="w-10 h-2 bg-muted-foreground/30 rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-[1.2fr_1fr] gap-4 mb-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="flex flex-col gap-2 justify-center">
                      <div className="h-3.5 w-[90%] bg-foreground/70 rounded" />
                      <div className="h-3 w-3/4 bg-foreground/50 rounded" />
                      <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                      <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                      <div className="w-20 h-6 gradient-primary rounded-md mt-1" />
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl min-h-[120px]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10" />
                        <div className="h-2 w-4/5 bg-muted-foreground/15 rounded" />
                        <div className="h-2 w-3/5 bg-muted-foreground/10 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual desc overlay */}
                {activeSim === "visual-desc" && (
                  <div className="absolute bottom-0 left-0 w-full bg-foreground/90 text-white p-5 backdrop-blur-sm">
                    <p className="text-sm leading-relaxed">{desc.overlay}</p>
                  </div>
                )}

                {/* Cognitive tunnel */}
                {activeSim === "cognitive" && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{
                    background: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.85) 70%)"
                  }} />
                )}
              </div>
            </div>

            {/* Info panel */}
            <div className="flex items-start gap-3 p-4 bg-accent-blue/10 border border-accent-blue/15 rounded-xl">
              <Info className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/60 leading-relaxed">{desc.info}</p>
            </div>
          </div>

          {/* Profile cards */}
          <div className="flex flex-col gap-2.5">
            {simProfiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveSim(profile.id)}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl border text-left transition-all w-full ${
                  activeSim === profile.id
                    ? "bg-accent-blue/12 border-accent-blue shadow-[0_0_20px_hsla(207,98%,65%,0.15)]"
                    : "bg-white/4 border-white/8 hover:bg-white/8 hover:border-white/15 hover:translate-x-1"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  activeSim === profile.id ? "bg-accent-blue" : "bg-white/6"
                }`}>
                  <profile.icon className={`w-5 h-5 ${activeSim === profile.id ? "text-white" : "text-white/50"}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{profile.title}</h4>
                  <p className="text-xs text-white/40">{profile.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
