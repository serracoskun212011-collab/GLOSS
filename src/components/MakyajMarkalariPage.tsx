import React, { useState } from "react";
import { Sparkles, ArrowLeft, Award, Flame, Search, Check, Layers, UserCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  featuredCategories: string[];
  suitableFor: string;
  budgetLevel: "Ekonomik (Drugstore)" | "Orta / Yüksek" | "Lüks (High-End)";
  budgetColor: string;
  glossRecommendation: string;
}

interface MakyajMarkalariPageProps {
  onBackToBag: () => void;
}

export default function MakyajMarkalariPage({ onBackToBag }: MakyajMarkalariPageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [searchTerm, setSearchTerm] = useState("");

  const brands: Brand[] = [
    {
      id: "maybelline",
      name: "Maybelline New York",
      logo: "M",
      description: "New York'un enerjisinden ve sokak modasından ilham alan, dünya genelinde en çok satan, yenilikçi ve yüksek performanslı kozmetikleriyle bilinen ikonik simge marka.",
      featuredCategories: ["Maskara (Lash Sensational)", "Kapatıcı (Instant Anti Age Eraser)", "Mat Rujlar (SuperStay Matte Ink)"],
      suitableFor: "Günlük makyajda kalıcılık, yüksek pigmentasyon ve uygun fiyata her an hazır pratikliği arayan her yaştan makyaj sever için mükemmel.",
      budgetLevel: "Ekonomik (Drugstore)",
      budgetColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      glossRecommendation: "Yorgun gözleri anında dinç ve parlak gösteren Instant Eraser Kapatıcıyı fırçasız, sünger başlığıyla tamponlayarak uygulayın."
    },
    {
      id: "loreal",
      name: "L’Oréal Paris",
      logo: "L",
      description: "\"Çünkü siz buna değersiniz\" felsefesiyle, cilt bakımından ilham alan içerikleri üstün makyaj formülleriyle buluşturarak her kadına asalet ve özgüven aşılayan dünya devi.",
      featuredCategories: ["Serum Fondöten (True Match)", "Hacim Veren Maskara (Telescopic)", "Dudak Dolgunlaştırıcı Glosslar"],
      suitableFor: "Makyaj yaparken cildini beslemek, parlak ve pürüzsüz bir satin bitiş elde etmek isteyen elegant tarz sahipleri için biçilmiş kaftan.",
      budgetLevel: "Orta / Yüksek",
      budgetColor: "text-blue-450 bg-blue-500/10 border-blue-500/30",
      glossRecommendation: "True Match Hyalüronik Asitli Serum Fondöteni parmak uçlarınızla cildinizi ısıtarak yedirin; içeriden gelen kusursuz bir ışıltı yakalayacaksınız."
    },
    {
      id: "mac",
      name: "MAC Cosmetics",
      logo: "MAC",
      description: "Profesyonel makyaj artistlerinin kulis sırlarını sokağa taşıyan, her ırka, her cinsiyete ve her yaşa hitap eden, geniş renk skalasıyla trendleri belirleyen devleşmiş marka.",
      featuredCategories: ["Mat Ruj (Ruby Woo, Velvet Teddy)", "Sabitleyici Sprey (Prep + Prime Fix+)", "Matlaştırıcı Fondöten (Studio Fix Liquid)"],
      suitableFor: "Yüksek pigment gücü, stüdyo flaşları altında kusursuz matlık ve profesyonel kalitede kalıcı bir görünüme ulaşmak isteyenler.",
      budgetLevel: "Lüks (High-End)",
      budgetColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      glossRecommendation: "Makyajdan önce cildinize ve makyaj bittikten sonra tüm yüze Fix+ sprey sıkın. Pudralı görünümü kırıp cilde zengin, canlı bir bütünlük verir."
    },
    {
      id: "nars",
      name: "NARS",
      logo: "N",
      description: "Fransız şıklığı ve modern tasarım felsefesiyle François Nars tarafından kurulan, cesur, kışkırtıcı renk tonları ve cilde kadifemsi ipeklik veren ikonik pudra formülleriyle ünlü lüks marka.",
      featuredCategories: ["Allık (Orgasm)", "Kapatıcı (Radiant Creamy Concealer)", "Yarı Mat Işıltılı Fondöten (Sheer Glow)"],
      suitableFor: "Hafif ama ultra kapatıcı dokunuşlar, elmacık kemiklerinde doğal şeftali-pembe altın yansımaları ve lüks ambalaj asaletini hissetmek isteyenler.",
      budgetLevel: "Lüks (High-End)",
      budgetColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      glossRecommendation: "Çok satan Orgasm allığı, elmacık kemiğinizin tam üzerine fırçanın ucundaki fazlalığı üfledikten sonra dairesel hareketlerle dağıtın."
    },
    {
      id: "fenty",
      name: "Fenty Beauty by Rihanna",
      logo: "F",
      description: "Ünlü müzisyen Rihanna tarafından 'herkesi kapsayan güzellik' vizyonuyla kurulan, 40'tan fazla fondöten tonuyla kozmetikte bir devrim başlatan, yenilikçi magnetik stick ambalajlarıyla ünlü vizyoner marka.",
      featuredCategories: ["Aydınlatıcı (Killawatt, Diamond Bomb)", "Likit Ruj (Stunna Lip Paint)", "Işıltılı Dudak Parlatıcısı (Gloss Bomb)"],
      suitableFor: "Sınır tanımayan göz alıcı simler, 3D dudak dolgunluğu ve tüm gece sürecek cesur, yüksek flaşlı, iddialı kontür hatları yaratmayı sevenler.",
      budgetLevel: "Lüks (High-End)",
      budgetColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      glossRecommendation: "Göz pınarlarına ve elmacık kemiklerine parmak ucunuzla azıcık Diamond Bomb dokundurun; zayıf ışıkta dahi gümüş kristal gibi parlayacaksınız."
    },
    {
      id: "rare",
      name: "Rare Beauty by Selena Gomez",
      logo: "R",
      description: "Selena Gomez tarafından zihinsel sağlığı desteklemek ve gerçekçi olmayan mükemmeliyetçi güzellik kalıplarını kırmak için kurulan, cilde ağırlık yapmayan, vegan tüy yumuşaklığındaki likit allıklarıyla viral olan sevgi dolu marka.",
      featuredCategories: ["Likit Allık (Soft Pinch Liquid Blush)", "Yüz Yağı & Nemli Aydınlatıcı", "Hafif Dudak Yağı (Soft Pinch Tinted Lip Oil)"],
      suitableFor: "Yokmuş gibi duran, ağırlık yapmayan, vegan ve saf formüllerle saniyeler içinde taptaze pembe yanaklar ve nem mühürlü doğal dudaklar isteyenler.",
      budgetLevel: "Lüks (High-End)",
      budgetColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      glossRecommendation: "Efsanevi Soft Pinch Likit Allık inanılmaz pigmentlidir! Yanağınıza sadece tek bir minik nokta dokundurup süngerle hızlıca yayın, gün boyu taze ve genç kalacaktır."
    }
  ];

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.featuredCategories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div 
      className={`min-h-screen py-8 px-4 font-sans flex flex-col items-center animate-fade-in relative overflow-hidden transition-colors duration-300 ${
        isDark ? "text-stone-100" : "text-stone-900"
      }`}
      style={{
        backgroundImage: isDark 
          ? "radial-gradient(circle at 50% 25%, #181920 0%, #08080b 80%)" 
          : "radial-gradient(circle at 50% 25%, #ffffff 0%, #f3f4f6 80%)"
      }}
    >
      {/* Decorative luxury sparkles backdrop */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-[30%] left-[5%] w-72 h-72 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

      {/* Page Title & Luxury Header */}
      <div className="max-w-5xl w-full text-center space-y-4 mb-10 relative z-10">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 ${
          isDark 
            ? "bg-gradient-to-r from-stone-800 to-stone-900 border-stone-700/80 text-stone-300" 
            : "bg-stone-100 border-stone-250 text-stone-600"
        }`}>
          <Award className="w-3.5 h-3.5 text-stone-400 animate-pulse" />
          <span>GÜMÜŞ KAPLAMA MARKA DOSYALARI</span>
        </div>
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight transition-colors duration-300 ${
          isDark ? "text-white" : "text-stone-900"
        }`}
          style={{
            filter: isDark ? "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" : "none"
          }}
        >
          Makyaj Markaları
        </h2>
        <p className={`text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed transition-colors duration-300 ${
          isDark ? "text-stone-400" : "text-stone-605"
        }`}>
          Dünyanın en prestijli 6 güzellik markasının karakter yapısı, imza ürün sırları, hedonist formülleri ve GLOSS ekibinden profesyonel kullanım püf noktaları.
        </p>

        {/* Brand Search Bar */}
        <div className="max-w-md mx-auto mt-6 relative">
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-stone-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Marka veya ürün ara... (Örn: NARS, Orgasm, Maskara)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-xs transition-all outline-none transition-colors duration-300 ${
              isDark 
                ? "bg-black/40 border-stone-800 focus:border-stone-500 text-stone-200 placeholder-stone-500" 
                : "bg-white border-stone-250 focus:border-stone-400 text-stone-900 placeholder-stone-400 shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* Brands Grid Layout */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 px-2 sm:px-0">
        {filteredBrands.map((brand) => (
          <div 
            key={brand.id}
            className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] relative overflow-hidden ${
              isDark 
                ? "border-stone-800/80 bg-stone-950/40 hover:border-stone-700/60" 
                : "border-stone-200 bg-white hover:border-stone-305 shadow-sm"
            }`}
            style={{
              backdropFilter: "blur(16px) saturate(120%)",
              boxShadow: isDark 
                ? "0 10px 30px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.05)" 
                : "0 4px 15px rgba(0,0,0,0.03)"
            }}
          >
            {/* Soft silver glow reflex hover effect */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-stone-400/0 to-transparent group-hover:via-stone-400/45 transition-all duration-700" />
            <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-[0.02] group-hover:opacity-[0.04] pointer-events-none transition-all duration-350 text-[#888] font-serif text-9xl font-black">
              {brand.logo}
            </div>

            <div className="space-y-4">
              {/* Header block with Luxury Signet */}
              <div className={`flex items-center justify-between border-b pb-3 ${isDark ? 'border-stone-900/60' : 'border-stone-100'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-serif text-lg font-black shadow-inner transition-colors duration-300 ${
                    isDark 
                      ? "bg-gradient-to-br from-stone-800/60 via-stone-900/85 to-black border-stone-700/80 text-white" 
                      : "bg-stone-50 border-stone-200 text-stone-900"
                  }`}>
                    {brand.logo}
                  </div>
                  <div>
                    <h3 className={`font-serif text-lg font-extrabold leading-tight transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-stone-900'
                    }`}>
                      {brand.name}
                    </h3>
                    <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase font-bold">
                      PARIS & NEW YORK EXCLUSIVE
                    </span>
                  </div>
                </div>

                {/* Price Class Capsule */}
                <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-md border tracking-wider uppercase ${brand.budgetColor}`}>
                  {brand.budgetLevel}
                </span>
              </div>

              {/* Brand Description */}
              <p className={`text-xs font-sans leading-relaxed font-normal transition-colors duration-300 ${
                isDark ? "text-stone-300" : "text-stone-650"
              }`}>
                {brand.description}
              </p>

              {/* Featured categories (Products) */}
              <div className="space-y-1.5 pt-1.5">
                <span className={`text-[9px] font-mono tracking-widest uppercase font-black block transition-colors duration-300 ${
                  isDark ? "text-[#a1a1aa]" : "text-stone-500"
                }`}>
                  ⚜ Öne Çıkan Ürün Kategorileri:
                </span>
                <div className="flex flex-wrap gap-1">
                  {brand.featuredCategories.map((cat, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[10px] px-2.5 py-1 border rounded-md font-medium tracking-wide flex items-center gap-1 shadow-sm transition-all duration-300 ${
                        isDark 
                          ? "bg-stone-900/60 text-stone-350 border-stone-850" 
                          : "bg-stone-50/80 text-stone-750 border-stone-150"
                      }`}
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-500" />
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Who it suits */}
              <div className={`space-y-1 p-3 rounded-xl border transition-all duration-300 ${
                isDark ? "bg-black/20 border-stone-900/80" : "bg-stone-50 border-stone-150"
              }`}>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-stone-400 uppercase font-black">
                  <UserCheck className="w-3.5 h-3.5 text-stone-405" />
                  <span>KİMLER İÇİN UYGUN:</span>
                </div>
                <p className={`text-[11px] leading-relaxed font-medium transition-colors duration-300 ${
                  isDark ? "text-stone-300" : "text-stone-650"
                }`}>
                  {brand.suitableFor}
                </p>
              </div>
            </div>

            {/* GLOSS professional advice (Bottom Panel) */}
            <div className={`mt-5 pt-4 border-t ${isDark ? 'border-stone-950/80' : 'border-stone-100'}`}>
              <div className={`p-3.5 rounded-xl border relative transition-all duration-300 bg-gradient-to-br ${
                isDark 
                  ? "border-stone-800/80 from-stone-900/40 via-stone-950/60 to-[#0e0f12]/30" 
                  : "border-stone-200 from-stone-100 via-stone-50 to-white"
              }`}>
                <div className={`absolute top-0 right-3 -translate-y-1/2 px-2 py-0.5 rounded text-[8px] font-black tracking-widest uppercase transition-colors duration-350 ${
                  isDark ? "bg-stone-100 text-stone-955" : "bg-stone-900 text-stone-50"
                }`}>
                  GLOSS ÖNERİSİ
                </div>
                <div className="flex gap-2 items-start text-stone-305">
                  <span className="text-amber-500 font-mono text-xs shrink-0 mt-0.5">★</span>
                  <p className={`leading-relaxed font-medium transition-colors duration-300 ${
                    isDark ? "text-stone-350" : "text-stone-650"
                  }`}>
                    {brand.glossRecommendation}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}

        {filteredBrands.length === 0 && (
          <div className={`col-span-full text-center py-12 rounded-3xl p-8 space-y-4 border ${
            isDark ? "bg-stone-950/20 border-stone-900 text-stone-400" : "bg-stone-50 border-stone-200 text-stone-600"
          }`}>
            <span className="text-4xl text-stone-600 block">🕵️‍♀️</span>
            <p className="text-sm font-semibold">Aradığınız kriterlere uygun marka bulunamadı.</p>
            <button 
              onClick={() => setSearchTerm("")} 
              className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                isDark ? "bg-stone-900 hover:bg-stone-800 text-stone-300 border-stone-850" : "bg-stone-100 hover:bg-stone-200 text-stone-705 border-stone-250"
              }`}
            >
              Filtreyi Temizle
            </button>
          </div>
        )}
      </div>

      {/* Bottom Action Rail: Back to main bag */}
      <div className="mt-12 relative z-10">
        <button 
          onClick={onBackToBag}
          className={`group inline-flex items-center gap-3 px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border shadow-xl transition-all duration-300 cursor-pointer ${
            isDark 
              ? "from-stone-900 to-stone-950 hover:border-stone-600 bg-stone-900 text-[#BAC2CE] border-stone-800" 
              : "bg-stone-900 hover:bg-stone-800 text-white border-stone-800"
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:-translate-x-1 transition-transform" />
          <span>Makyaj Çantasına Geri Dön</span>
        </button>
      </div>
    </div>
  );
}
