import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "İKE widget'ı nasıl çalışır?",
    a: "İKE, web sitenize eklediğiniz tek satır JavaScript kodu ile çalışır. AI motorumuz sitenizi otomatik tarar, erişilebilirlik eksikliklerini tespit eder ve kullanıcılara özelleştirilebilir bir erişilebilirlik paneli sunar. Yazı boyutu, kontrast, renk filtreleri, klavye navigasyonu gibi 9+ özellik ile siteniz tüm engel gruplarına uyumlu hale gelir.",
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Kurulum ortalama 5 dakika sürer. Hesap oluşturun, size verilen tek satır JavaScript kodunu sitenizin <head> bölümüne ekleyin. Teknik bilgi veya developer gerektirmez. WordPress, Shopify ve diğer CMS'lerde eklenti olarak da kurulabilir.",
  },
  {
    q: "Sitemin hızını etkiler mi?",
    a: "Hayır. İKE tamamen asenkron olarak yüklenir ve sitenizin açılış performansına etkisi yoktur. Global CDN altyapımız sayesinde widget dünya genelinde hızlı yüklenir. Lighthouse ve Core Web Vitals skorlarınız etkilenmez.",
  },
  {
    q: "Hangi erişilebilirlik standartlarını destekliyorsunuz?",
    a: "İKE; WCAG 2.1 (A, AA ve AAA seviyesi), ADA (Americans with Disabilities Act), EN 301 549 (AB standardı), Section 508 (ABD federal) ve EAA 2025 (Avrupa Erişilebilirlik Yasası) standartlarına tam uyumluluk sağlar. Türkiye'deki 5378 sayılı kanun gereksinimlerini de karşılar.",
  },
  {
    q: "Hangi platformlarla uyumlu?",
    a: "İKE; WordPress, Shopify, Wix, Squarespace, React, Angular, Vue.js, Next.js ve diğer tüm web platformları ile sorunsuz çalışır. Tek satır JavaScript kodu ile herhangi bir web sitesine entegre edilebilir.",
  },
  {
    q: "KVKK ve GDPR'a uyumlu mu?",
    a: "Evet. İKE kullanıcı verisi toplamaz, saklamaz veya paylaşmaz. Widget tamamen istemci tarafında çalışır. KVKK (Türkiye) ve GDPR (Avrupa Birliği) düzenlemelerine tam uyumludur.",
  },
  {
    q: "Ücretsiz deneme süresi var mı?",
    a: "Evet, tüm planlar 14 günlük ücretsiz deneme süresi ile gelir. Kredi kartı bilgisi gerekmez. Deneme süresinde tüm özellikler aktiftir.",
  },
  {
    q: "Uyumluluk sertifikası alabilir miyim?",
    a: "Evet. Profesyonel ve Kurumsal planlarda WCAG 2.1 uyumluluk sertifikası otomatik oluşturulur. Bu sertifika yasal süreçlerde, devlet ihalelerinde ve müşteri güvencesinde kullanılabilir.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
            SSS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-muted-foreground text-lg">
            İKE hakkında merak ettikleriniz
          </p>
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
