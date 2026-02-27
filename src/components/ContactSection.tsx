import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Globe } from "lucide-react";
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
    <section id="contact" className="py-24 bg-background">
      <div className="container">
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

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "info@ike.com.tr", label: "E-posta" },
                { icon: Phone, text: "+90 (212) 000 00 00", label: "Telefon" },
                { icon: MapPin, text: "İstanbul, Türkiye", label: "Lokasyon" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <span className="text-foreground font-medium text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-5 border">
              <h4 className="font-semibold text-foreground text-sm mb-2">Hızlı Destek</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>Canlı Chat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Bilgi Bankası</span>
                </div>
              </div>
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
            <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 h-11">
              Ücretsiz Değerlendirme Talep Et
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Bilgileriniz gizli tutulur. KVKK uyumlu.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
