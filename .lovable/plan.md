

# İKE Erişilebilirlik Landing Page — React'e Dönüşüm & Stratejik Optimizasyon

Mevcut HTML/CSS/JS landing page'iniz React + Tailwind CSS'e dönüştürülecek ve promptunuzdaki tüm eksik stratejik bloklar eklenecektir. Mevcut section sırası korunacak, hiçbir içerik silinmeyecektir.

---

## 1. Hero Alanı Güçlendirme
- **Sonuç odaklı başlık**: "Web Sitenizi 5 Dakikada WCAG 2.1 Uyumlu Hale Getirin" gibi net bir vaat
- **Güven rozetleri**: WCAG 2.1, ADA, EAA 2025, EN 301 549 badge'leri hero altına eklenecek
- **Micro trust metinleri**: "Kurulum 5 dakika", "Site hızını etkilemez", "Developer gerektirmez" etiketleri
- **Yasal uyumluluk referansı**: "EAA 2025 yürürlüğe giriyor — hazır mısınız?" alt mesajı
- Mevcut mockup animasyonu ve CTA butonları korunacak

## 2. Problem Bölümü (Yeni — Hero Sonrası)
- **EAA 2025 zorunluluğu** açıklaması
- Hukuki risk kısa bilgilendirmesi (agresif olmayan, bilgi verici ton)
- "Erişilebilir olmayan site = müşteri kaybı" mesajı
- Türkiye ve Avrupa bağlamında regülasyon bilgisi
- 3-4 kısa madde ile sorunun boyutunu gösteren blok

## 3. Mevcut Bölümler (Korunacak & Güçlendirilecek)
- **Teknoloji Çözümleri** bölümü aynen korunacak
- **Simülasyon/Empati bölümü** güçlendirilecek:
  - "Gerçek kullanıcı deneyimi" açıklama metni ekleme
  - Kısa senaryo metni (duygusal ama manipülatif olmayan)
  - "Bir görme engelli kullanıcı sitenizi ziyaret ettiğinde ne yaşar?" gibi empati cümlesi
- **İstatistikler** bölümü aynen korunacak
- **Standartlar** bölümü genişletilecek (aşağıda detay)

## 4. Özellikler Alanına Ek Bilgiler
- Mevcut 9 özellik kartı korunacak
- Her karta veya bölüm altına ek bilgiler:
  - Site hızına etkisi yok
  - SEO uyumlu yapı
  - Core Web Vitals'a etkisi yok
  - prefers-reduced-motion desteği
  - Veri gizliliği / KVKK uyumlu
- Teknik şeffaflık mini bloğu

## 5. Yasal Uyumluluk Bölümü Genişletme
- Mevcut 4 standart kartına ek olarak:
  - WCAG 2.1 A / AA / AAA seviyeleri tablo formatında
  - EAA 2025 kartı ekleme
  - Her standart için kısa açıklama
  - "Uyumluluk Sertifikası Alın" CTA butonu

## 6. Nasıl Çalışır Bölümü (Yeni Section)
- 3 adımlı görsel akış:
  1. Tek satır JavaScript kodu ekleyin
  2. İKE otomatik olarak sitenizi tarar
  3. Erişilebilirlik paneli aktif olur
- "Ortalama kurulum süresi: 5 dakika"
- "Teknik bilgi veya developer gerektirmez"
- "Mevcut sitenizde hiçbir değişiklik yapmadan"

## 7. Sosyal Kanıt Bölümü (Yeni Section)
- Referans logo şeridi (placeholder logolar)
- 2 kısa müşteri testimonial kartı
- Sayısal başarı metrikleri: "1000+ web sitesi", "50M+ sayfa görüntüleme", "%99.9 uptime"

## 8. Performans ve Güvenlik Bölümü (Yeni Mini Section)
- Başlık: "Performans ve Güvenlik"
- 6 güven kartı:
  - Tek satır JS ile entegrasyon
  - Global CDN dağıtımı
  - Site hızını etkilemez
  - Kullanıcı verisi toplamaz
  - KVKK uyumlu
  - %99.9 uptime garantisi

## 9. Fiyatlandırma Optimizasyonu
- Mevcut 3 plan korunacak
- Profesyonel plan "En Popüler" olarak vurgulanacak (zaten var, güçlendirilecek)
- ROI mesajı ekleme: "Erişilebilirlik yatırımınız, yasal risklerden korunmanızı sağlar"
- Her plan altına mikro güven metni
- Yıllık/Aylık toggle seçeneği

## 10. Final CTA Güçlendirme
- Mevcut iletişim formu korunacak
- Üst kısma aciliyet mesajı: "EAA 2025 yürürlüğe giriyor — harekete geçme zamanı"
- 2 ana CTA: "Ücretsiz Erişilebilirlik Analizi Yap" + "Demo Talep Et"
- Güçlü kapanış metni
- Buton altı mikro metinler: "Kredi kartı gerektirmez", "5 dakikada sonuç"

## Genel Tasarım & Teknik
- Tüm bölümler React componentleri olarak yapılandırılacak
- Mevcut renk paleti (mor-mavi gradient) korunacak
- Tailwind CSS ile responsive tasarım
- Boxicons yerine Lucide React ikonları
- Outfit fontu korunacak
- Tüm metinler Türkçe, WCAG uyumlu dilde
- Kısa paragraflar, kolay okunabilir yapı
- H1 tek, H2-H3 hiyerarşisi korunacak

