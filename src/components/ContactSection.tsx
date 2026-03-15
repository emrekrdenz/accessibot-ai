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
    <section id="contact" className="py-28 bg-background relative section-glow">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <div className="text-xs font-bold tracking-[2px] uppercase text-secondary mb-4">
              İletişim
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground mb-5 leading-tight">
              Erişilebilirlik Yolculuğunuza{" "}
              <span className="text-gradient">Bugün</span>{" "}
              Başlayın
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Web sitenizin erişilebilirlik durumunu öğrenmek ve size en uygun çözümü bulmak için bizimle iletişime geçin.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, text: "info@ike.com.tr", label: "E-posta" },
                { icon: Phone, text: "+90 (212) 000 00 00", label: "Telefon" },
                { icon: MapPin, text: "İstanbul, Türkiye", label: "Lokasyon" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                    <span className="text-foreground font-semibold text-sm">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/40 rounded-2xl p-6 border border-border/50">
              <p className="font-bold text-foreground text-sm mb-3">Hızlı Destek</p>
              <div className="flex items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <span>Canlı Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <span>Bilgi Bankası</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 space-y-5 shadow-[0_8px_40px_hsla(265,82%,44%,0.04)]">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-foreground mb-2 block">Ad Soyad</label>
              <Input id="name" placeholder="Adınızı girin" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-11 bg-muted/30 border-border/50 focus:border-primary/30" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-foreground mb-2 block">E-posta</label>
              <Input id="email" type="email" placeholder="E-posta adresinizi girin" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-11 bg-muted/30 border-border/50 focus:border-primary/30" />
            </div>
            <div>
              <label htmlFor="website" className="text-sm font-semibold text-foreground mb-2 block">Web Sitesi URL</label>
              <Input id="website" type="url" placeholder="https://www.siteniz.com" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="h-11 bg-muted/30 border-border/50 focus:border-primary/30" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">Mesajınız</label>
              <Textarea id="message" rows={4} placeholder="Erişilebilirlik ihtiyaçlarınızı açıklayın..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-muted/30 border-border/50 focus:border-primary/30" />
            </div>
            <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 h-12 font-semibold shadow-[0_4px_16px_hsla(265,82%,44%,0.25)]">
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
