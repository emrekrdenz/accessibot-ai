import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", website: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mesajınız başarıyla gönderildi!", description: "En kısa sürede sizinle iletişime geçeceğiz." });
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container">
        {/* Urgency banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/15">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">EAA 2025 yürürlüğe giriyor — harekete geçme zamanı</span>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-base px-8 h-12">
              Ücretsiz Erişilebilirlik Analizi Yap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12">
              Demo Talep Et
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-xs text-muted-foreground">
            <span>Kredi kartı gerektirmez</span>
            <span>5 dakikada sonuç</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
              İletişim
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Erişilebilirlik Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Web sitenizin erişilebilirlik durumunu öğrenmek ve size en uygun çözümü bulmak için bizimle iletişime geçin.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@ike.com" },
                { icon: Phone, text: "+90 (212) 000 00 00" },
                { icon: MapPin, text: "İstanbul, Türkiye" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border p-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Ad Soyad</label>
              <Input id="name" placeholder="Adınızı girin" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">E-posta</label>
              <Input id="email" type="email" placeholder="E-posta adresinizi girin" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="website" className="text-sm font-medium text-foreground mb-1.5 block">Web Sitesi URL</label>
              <Input id="website" type="url" placeholder="https://www.siteniz.com" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Mesajınız</label>
              <Textarea id="message" rows={4} placeholder="Erişilebilirlik ihtiyaçlarınızı açıklayın..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>
            <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90">
              Ücretsiz Değerlendirme Talep Et
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
