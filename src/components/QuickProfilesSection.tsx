import { useState } from "react";
import {
  EyeOff, Blend, BookOpenText, Focus, HeartHandshake, ShieldAlert,
  Check
} from "lucide-react";

const profiles = [
  {
    id: "vision",
    icon: EyeOff,
    title: "Görme Engelli Profili",
    desc: "Düşük görüşlü kullanıcılar için optimize edilmiş deneyim",
    color: "from-primary to-primary/80",
    features: [
      "%150 yazı boyutu",
      "Yüksek kontrast modu",
      "İmleç vurgulama",
      "Odak vurgulama",
    ],
  },
  {
    id: "colorblind",
    icon: Blend,
    title: "Renk Körü Profili",
    desc: "Renk körlüğü olan kullanıcılar için özel filtreler",
    color: "from-primary to-primary/80",
    features: [
      "Deuteranopi filtresi",
      "Link vurgulama",
      "%110 yazı boyutu",
      "Renk bağımsız tasarım",
    ],
  },
  {
    id: "dyslexia",
    icon: BookOpenText,
    title: "Disleksi Profili",
    desc: "Okuma zorluğu yaşayan kullanıcılar için düzenlemeler",
    color: "from-primary to-primary/80",
    features: [
      "OpenDyslexic font",
      "%120 yazı boyutu",
      "Artırılmış harf aralığı",
      "Sola hizalama",
    ],
  },
  {
    id: "adhd",
    icon: Focus,
    title: "DEHB Profili",
    desc: "Dikkat dağınıklığı yaşayan kullanıcılar için odak araçları",
    color: "from-primary to-primary/80",
    features: [
      "Animasyonlar durdurulur",
      "Okuma maskesi aktif",
      "Odak vurgulama",
      "%110 yazı boyutu",
    ],
  },
  {
    id: "senior",
    icon: HeartHandshake,
    title: "Yaşlı Dostu Profil",
    desc: "Yaşlı kullanıcılar için büyütülmüş ve sade arayüz",
    color: "from-primary to-primary/80",
    features: [
      "%140 yazı boyutu",
      "Okunabilir font",
      "Büyük beyaz imleç",
      "Link & buton vurgulama",
    ],
  },
  {
    id: "epilepsy",
    icon: ShieldAlert,
    title: "Epilepsi Güvenli Profil",
    desc: "Nöbet riski olan kullanıcılar için güvenli deneyim",
    color: "from-primary to-primary/80",
    features: [
      "Animasyonlar durdurulur",
      "Sesler kapatılır",
      "Doygunluk azaltılır",
      "Güvenli görüntüleme",
    ],
  },
];

const QuickProfilesSection = () => {
  const [activeProfile, setActiveProfile] = useState("vision");
  const active = profiles.find((p) => p.id === activeProfile)!;

  return (
    <section className="py-16 sm:py-28 bg-muted/30 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Hazır Profiller
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            <span className="text-gradient">6 Hazır</span> Erişilebilirlik Profili
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tek tıkla aktif olan hazır profiller, farklı engel gruplarının ihtiyaçlarına göre önceden yapılandırılmış ayar kombinasyonlarını uygular.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-5xl mx-auto">
          {/* Profile selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(profile.id)}
                aria-pressed={activeProfile === profile.id}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border text-center transition-all ${
                  activeProfile === profile.id
                    ? "border-primary/30 bg-card shadow-[0_8px_30px_hsla(225,84%,55%,0.1)]"
                    : "border-border/50 bg-card/50 hover:border-primary/15 hover:bg-card"
                }`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-lg ${
                  activeProfile === profile.id ? "" : "opacity-60"
                }`}>
                  <profile.icon className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xs font-bold ${activeProfile === profile.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {profile.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </button>
            ))}
          </div>

          {/* Profile detail */}
          <div className="bg-card rounded-2xl border border-border/50 p-5 sm:p-8 shadow-[0_8px_30px_hsla(225,84%,55%,0.05)]">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-lg`}>
                <active.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{active.title}</h3>
                <p className="text-sm text-muted-foreground">{active.desc}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Bu profilde aktif olan özellikler:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {active.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 bg-muted/40 rounded-xl px-4 py-3 border border-border/50">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-4 border border-border/30">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Tek tıkla aktif:</span>{" "}
                Kullanıcı widget panelinden profili seçtiğinde tüm ayarlar otomatik uygulanır. Her profil birden fazla erişilebilirlik özelliğini koordineli şekilde çalıştırır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickProfilesSection;
