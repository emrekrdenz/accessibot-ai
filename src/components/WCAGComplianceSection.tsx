import { CheckCircle2, ShieldCheck } from "lucide-react";

const wcagCriteria = [
  {
    category: "Algılanabilirlik",
    level: "Seviye A & AA",
    color: "from-blue-500 to-indigo-500",
    items: [
      { code: "1.1.1", title: "Metin Dışı İçerik", desc: "Görsel betimleme, görselleri gizleme", met: true },
      { code: "1.2.1", title: "Ses & Video", desc: "Sesleri susturma, alt yazı desteği", met: true },
      { code: "1.3.1", title: "Bilgi ve İlişkiler", desc: "ARIA etiketleri, ekran okuyucu modu", met: true },
      { code: "1.4.1", title: "Renk Kullanımı", desc: "3 renk körlüğü filtresi (protanopi, deuteranopi, tritanopi)", met: true },
      { code: "1.4.3", title: "Kontrast (Minimum)", desc: "5 farklı kontrast modu", met: true },
      { code: "1.4.4", title: "Metin Boyutlandırma", desc: "%80-200 yazı boyutu ayarı", met: true },
      { code: "1.4.8", title: "Görsel Sunum", desc: "Satır yüksekliği, harf/kelime aralığı, özel renkler", met: true },
      { code: "1.4.12", title: "Metin Aralığı", desc: "Harf aralığı (0-5px), kelime aralığı (0-10px)", met: true },
    ],
  },
  {
    category: "Çalıştırılabilirlik",
    level: "Seviye A & AA",
    color: "from-emerald-500 to-teal-500",
    items: [
      { code: "2.1.1", title: "Klavye Erişimi", desc: "Gelişmiş klavye navigasyonu, akıllı navigasyon", met: true },
      { code: "2.2.2", title: "Duraklatma/Durdurma", desc: "Animasyonları durdurma özelliği", met: true },
      { code: "2.3.1", title: "Üç Flaş", desc: "Epilepsi güvenli profil, animasyon durdurma", met: true },
      { code: "2.4.4", title: "Link Amacı", desc: "Link & buton vurgulama", met: true },
      { code: "2.4.7", title: "Görünür Odak", desc: "Odak vurgulama, hover vurgulama, büyük imleç", met: true },
    ],
  },
  {
    category: "Anlaşılabilirlik",
    level: "Seviye A & AA",
    color: "from-violet-500 to-purple-500",
    items: [
      { code: "3.1.1", title: "Sayfa Dili", desc: "Çoklu dil desteği (TR/EN)", met: true },
      { code: "3.1.5", title: "Okuma Seviyesi", desc: "Disleksi fontu, metin okuma (TTS), sözlük", met: true },
      { code: "3.2.1", title: "Odaklanma", desc: "Focus trap yönetimi, ARIA live regions", met: true },
    ],
  },
  {
    category: "Sağlamlık",
    level: "Seviye A & AA",
    color: "from-amber-500 to-orange-500",
    items: [
      { code: "4.1.2", title: "Ad, Rol, Değer", desc: "Ekran okuyucu modu, ARIA etiketleme", met: true },
      { code: "4.1.3", title: "Durum Mesajları", desc: "ARIA live regions ile anlık bildirimler", met: true },
    ],
  },
];

const WCAGComplianceSection = () => {
  return (
    <section className="py-28 bg-background relative section-glow">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-primary mb-5 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10">
            <ShieldCheck className="w-4 h-4" />
            WCAG 2.1 Uyumluluk
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Widget'ımızın Karşıladığı{" "}
            <span className="text-gradient">WCAG Kriterleri</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            İKE widget'ı WCAG 2.1 A ve AA seviyesi kriterlerinin büyük çoğunluğunu karşılar. Cumhurbaşkanlığı Genelgesi 2025/10 ve 5378 sayılı kanun gereksinimlerini destekler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12">
          {wcagCriteria.map((group) => (
            <div key={group.category} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className={`bg-gradient-to-r ${group.color} px-6 py-4 flex items-center justify-between`}>
                <h3 className="text-white font-bold">{group.category}</h3>
                <span className="text-white/80 text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {group.level}
                </span>
              </div>
              <div className="p-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item.code} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">
                          {item.code}
                        </span>
                        <span className="text-sm font-semibold text-foreground">{item.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legal badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "WCAG 2.1 AAA", desc: "Tam uyumluluk" },
            { label: "EAA 2025", desc: "Avrupa Erişilebilirlik Yasası" },
            { label: "5378 Sayılı Kanun", desc: "Türkiye yasal gereksinim" },
            { label: "EN 301 549", desc: "AB erişilebilirlik standardı" },
            { label: "Genelge 2025/10", desc: "Cumhurbaşkanlığı genelgesi" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 bg-muted/40 rounded-xl px-5 py-3 border border-border/50">
              <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-foreground">{badge.label}</div>
                <div className="text-[10px] text-muted-foreground">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WCAGComplianceSection;
