import { Check, X, Minus } from "lucide-react";

const rows = [
  { label: "Kurulum Süresi", ike: "5 dakika", manual: "3-6 ay", nothing: "—" },
  { label: "Maliyet", ike: "Aylık ₺499'dan başlayan", manual: "₺50.000+ geliştirme", nothing: "Dava maliyeti ₺200.000+" },
  { label: "WCAG 2.1 Kapsamı", ike: "AA & AAA seviye", manual: "Kısmi (ekibe bağlı)", nothing: "Uyumsuz" },
  { label: "Bakım & Güncelleme", ike: "Otomatik", manual: "Manuel (ek maliyet)", nothing: "Yok" },
  { label: "Yasal Koruma", ike: "Uyumluluk sertifikası", manual: "Kısmi", nothing: "Risk altında" },
  { label: "Güncel Standartlar", ike: "Otomatik güncelleme", manual: "Manuel takip", nothing: "Yok" },
  { label: "AI Destekli Tarama", ike: true, manual: false, nothing: false },
  { label: "Teknik Bilgi Gereksinimi", ike: "Gerektirmez", manual: "Uzman ekip gerekli", nothing: "—" },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
  if (value === "—") return <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span>{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Karşılaştırma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neden İKE?
          </h2>
          <p className="text-muted-foreground text-lg">
            İKE widget çözümünü manuel geliştirme ve hiçbir şey yapmama seçenekleriyle karşılaştırın.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-medium text-muted-foreground w-1/4" />
                <th className="py-4 px-4 w-1/4">
                  <div className="gradient-primary text-white rounded-xl px-4 py-3 font-bold text-base">
                    İKE Widget
                  </div>
                </th>
                <th className="py-4 px-4 text-foreground font-semibold w-1/4">Manuel Geliştirme</th>
                <th className="py-4 px-4 text-foreground font-semibold w-1/4">Hiçbir Şey Yapmamak</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={`border-b border-border ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                  <td className="py-4 px-4 font-medium text-foreground">{row.label}</td>
                  <td className="py-4 px-4 text-center text-primary font-medium">
                    <CellValue value={row.ike} />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    <CellValue value={row.manual} />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    <CellValue value={row.nothing} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
