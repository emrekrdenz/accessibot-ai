import { ShieldCheck, Globe, Flag, BookMarked, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const standards = [
  { icon: ShieldCheck, title: "WCAG 2.1", desc: "Web İçeriği Erişilebilirlik Kılavuzu — AA ve AAA" },
  { icon: Globe, title: "ADA", desc: "Americans with Disabilities Act" },
  { icon: Flag, title: "EN 301 549", desc: "AB Erişilebilirlik Standardı" },
  { icon: BookMarked, title: "Section 508", desc: "ABD Federal Gereksinim" },
  { icon: Scale, title: "EAA 2025", desc: "Avrupa Erişilebilirlik Yasası" },
];

const wcagLevels = [
  { level: "A", desc: "Temel erişilebilirlik", criteria: "30 başarı kriteri", status: "Tam uyumlu" },
  { level: "AA", desc: "Standart erişilebilirlik", criteria: "20 ek kriter", status: "Tam uyumlu" },
  { level: "AAA", desc: "Gelişmiş erişilebilirlik", criteria: "28 ek kriter", status: "Destekleniyor" },
];

const StandardsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            Standartlar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uluslararası Erişilebilirlik Standartları
          </h2>
          <p className="text-muted-foreground text-lg">
            İKE, dünya genelinde kabul gören tüm erişilebilirlik standartlarına tam uyumluluk sağlar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {standards.map((s) => (
            <div
              key={s.title}
              className="bg-card p-7 rounded-2xl text-center border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_hsla(265,82%,44%,0.1)] transition-all"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl border overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-foreground">WCAG 2.1 Uyumluluk Seviyeleri</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seviye</TableHead>
                <TableHead>Açıklama</TableHead>
                <TableHead>Kriter Sayısı</TableHead>
                <TableHead>İKE Durumu</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wcagLevels.map((l) => (
                <TableRow key={l.level}>
                  <TableCell className="font-bold text-primary">Seviye {l.level}</TableCell>
                  <TableCell>{l.desc}</TableCell>
                  <TableCell>{l.criteria}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {l.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90">
            Uyumluluk Sertifikası Alın
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
