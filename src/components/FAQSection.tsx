import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Kurulum ne kadar sürer?", a: "Kurulum sadece bir JavaScript kodunu sitenize eklemekten ibarettir ve genellikle 2 dakikadan az sürer." },
  { q: "Sitemin hızını etkiler mi?", a: "Hayır, İKE asenkron olarak yüklenir ve sitenizin açılış performansına etkisi yok denecek kadar azdır." },
  { q: "Hangi erişilebilirlik standartlarını destekliyorsunuz?", a: "İKE; WCAG 2.1 (AA ve AAA seviyesi), ADA, EN 301 549 ve Section 508 standartlarına tam uyumluluk sağlar. Ayrıca Türkiye'deki 5378 sayılı kanun gereksinimlerini de karşılar." },
  { q: "Mevcut web sitem ile uyumlu mu?", a: "Evet, İKE WordPress, Shopify, React, Angular, Vue.js ve diğer tüm popüler platformlar ile sorunsuz çalışır." },
  { q: "Erişilebilirlik yasal bir zorunluluk mu?", a: "Evet, Türkiye'de 5378 sayılı kanun ve AB'de European Accessibility Act (EAA) kapsamında web siteleri erişilebilir olmak zorundadır." },
  { q: "Ücretsiz deneme süresi var mı?", a: "Evet, 14 günlük ücretsiz deneme süremiz bulunmaktadır. Kredi kartı bilgisi gerekmez." },
  { q: "Ekran okuyucularla uyumlu mu?", a: "Kesinlikle. İKE; NVDA, JAWS, VoiceOver ve TalkBack gibi tüm popüler ekran okuyucularla tam uyumlu çalışır." },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sıkça Sorulan Sorular</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
