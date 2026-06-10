import React from "react";
import { Sparkles } from "lucide-react";
import PaletteCategoryCard from "./PaletteCategoryCard";
import { useTheme } from "../context/ThemeContext";

interface PaletteColor {
  name: string;
  colorClass: string;
  texture: "shimmer" | "matte" | "glitter";
}

interface ProductPaletteItem {
  id: string;
  title: string;
  cosmeticName: string;
  categoryTag: string;
  description: string;
  coverLabel: string;
  coverThemeClass: string;
  farColors: PaletteColor[];
}

interface CantaIciGorunumuProps {
  onCardSelect: (pageId: string) => void;
  activePage: string;
}

export default function CantaIciGorunumu({ onCardSelect, activePage }: CantaIciGorunumuProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const items: ProductPaletteItem[] = [
    {
      id: "cilt-tipine-gore",
      title: "Cilt Tipine Göre Makyaj",
      cosmeticName: "PURE SATIN LABORATORY",
      categoryTag: "Cilt Bazı & Bakım",
      description: "Karma, yağlı, kuru ve hassas ciltler için gözenek dengeleyici sırlar.",
      coverLabel: "GLOSS SKIN-MATCH CO.",
      coverThemeClass: "bg-gradient-to-br from-slate-900 via-stone-900 to-[#121824]",
      farColors: [
        { name: "HEALER", colorClass: "bg-gradient-to-br from-teal-400 to-teal-700", texture: "shimmer" },
        { name: "MATTE", colorClass: "bg-gradient-to-br from-stone-400 to-stone-600", texture: "matte" },
        { name: "SOOTHE", colorClass: "bg-gradient-to-br from-pink-300 to-pink-500", texture: "shimmer" },
        { name: "DEWY", colorClass: "bg-gradient-to-br from-amber-100 to-amber-300", texture: "glitter" }
      ]
    },
    {
      id: "ten-tonu",
      title: "Ten Tonu Rehberi",
      cosmeticName: "CHROME undertone CONTROL",
      categoryTag: "Ten Makyajı Sihri",
      description: "Cilt alt tonu, damar analizi ve kusursuz renk kontrastı eşleşmeleri.",
      coverLabel: "UNDERTONE CHRONICLES",
      coverThemeClass: "bg-gradient-to-br from-[#1c140e] via-stone-900 to-[#2c2014]",
      farColors: [
        { name: "PORCELAIN", colorClass: "bg-gradient-to-br from-[#fbf1eb] to-[#e4cab3]", texture: "matte" },
        { name: "SAND", colorClass: "bg-gradient-to-br from-[#e1b899] to-[#c18e69]", texture: "matte" },
        { name: "BRONZE", colorClass: "bg-gradient-to-br from-[#a66236] to-[#723c16]", texture: "shimmer" },
        { name: "SOLAR", colorClass: "bg-gradient-to-br from-amber-400 to-amber-600", texture: "glitter" }
      ]
    },
    {
      id: "makyaj-koleksiyonlari",
      title: "Makyaj Koleksiyonları",
      cosmeticName: "COUTURE COCKTAIL PALETTE",
      categoryTag: "İmza Stiller & Trendler",
      description: "Old Money, Clean Girl, Soft Glam, Latte, Gothic ve Coquette makyaj stilleri adım adım.",
      coverLabel: "COUTURE TRENDSETS",
      coverThemeClass: "bg-gradient-to-br from-[#3d1326] via-stone-900 to-[#12040b]",
      farColors: [
        { name: "OLD MONEY", colorClass: "bg-gradient-to-br from-[#d4af37] to-[#aa7c11]", texture: "shimmer" },
        { name: "CLEAN GIRL", colorClass: "bg-gradient-to-br from-[#fae5e5] to-[#f0b2b2]", texture: "shimmer" },
        { name: "ESPRESSO", colorClass: "bg-gradient-to-br from-[#543d2b] to-[#302115]", texture: "matte" },
        { name: "COQUETTE", colorClass: "bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]", texture: "glitter" }
      ]
    },
    {
      id: "renk-kutuphanesi",
      title: "Renk Kütüphanesi",
      cosmeticName: "SPECTRUM COLOR LIBRARY",
      categoryTag: "Makyaj Pigmentleri",
      description: "Nude tonlar, kırmızı ruj tonları, kahve, şeftali, soğuk pembe ve mürdüm ton rehberi.",
      coverLabel: "PIGMENTOLOGY SYSTEM",
      coverThemeClass: "bg-gradient-to-br from-[#5c0612] via-stone-900 to-[#1c0003]",
      farColors: [
        { name: "RUBY RED", colorClass: "bg-gradient-to-br from-red-600 to-red-950", texture: "matte" },
        { name: "SOFT NUDE", colorClass: "bg-gradient-to-br from-[#f2ccb6] to-[#dca98d]", texture: "matte" },
        { name: "COOL PINK", colorClass: "bg-gradient-to-br from-[#f8bbd0] to-[#f48fb1]", texture: "shimmer" },
        { name: "PLUM DEEP", colorClass: "bg-gradient-to-br from-[#4a148c] to-[#1a0033]", texture: "glitter" }
      ]
    },
    {
      id: "goz-sekline-gore",
      title: "Göz Şekline Göre Makyaj",
      cosmeticName: "OPTIC FOCUS DESIGNER",
      categoryTag: "Eyeliner & Far Gölgeler",
      description: "Badem, yuvarlak, düşük göz kapağı ve çekik gözler için simetrik formüller.",
      coverLabel: "SYMMETRY ANALYSIS",
      coverThemeClass: "bg-gradient-to-br from-[#121c2b] via-stone-900 to-[#050b12]",
      farColors: [
        { name: "LINER CAP", colorClass: "bg-gradient-to-br from-stone-800 to-black", texture: "matte" },
        { name: "FOCUS-CREASE", colorClass: "bg-gradient-to-br from-[#c4a482] to-[#8b5a2b]", texture: "matte" },
        { name: "GLOW-LID", colorClass: "bg-gradient-to-br from-[#fff3cd] to-[#ffda6a]", texture: "glitter" },
        { name: "MASCARA-INK", colorClass: "bg-gradient-to-br from-[#2c3e50] to-[#000000]", texture: "matte" }
      ]
    },
    {
      id: "unlu-makyajlari",
      title: "Ünlü ve Trend Makyajları",
      cosmeticName: "STARLIGHT VOGUE SERI",
      categoryTag: "Red Carpet İkonları",
      description: "Hailey Bieber, Sabrina Carpenter, Ariana Grande, Wednesday ve Barbie trendleri.",
      coverLabel: "VIRAL STAR STYLES",
      coverThemeClass: "bg-gradient-to-br from-rose-950 via-stone-900 to-red-950",
      farColors: [
        { name: "SABRINA-HONEY", colorClass: "bg-gradient-to-br from-[#ffb347] to-[#ffcc33]", texture: "shimmer" },
        { name: "HAILEY-GLAZED", colorClass: "bg-gradient-to-br from-white via-stone-100 to-stone-300", texture: "glitter" },
        { name: "WEDNESDAY-GOTH", colorClass: "bg-gradient-to-br from-stone-800 to-black", texture: "matte" },
        { name: "BARBIE-PINK", colorClass: "bg-gradient-to-br from-pink-400 to-deeppink", texture: "shimmer" }
      ]
    },
    {
      id: "cilt-bakim",
      title: "Cilt Bakım Köşesi",
      cosmeticName: "BOTANICAL HYDRATION GLOW",
      categoryTag: "Sabah & Gece Rutini",
      description: "Kuru, yağlı, hassas ve sivilceli ciltler için özel sabitleme öncesi bakım.",
      coverLabel: "GLOSS DERM SOLUTIONS",
      coverThemeClass: "bg-gradient-to-br from-[#241e17] via-stone-900 to-[#14100c]",
      farColors: [
        { name: "HYDRA", colorClass: "bg-gradient-to-br from-cyan-300 to-blue-500", texture: "shimmer" },
        { name: "SALICYLIC", colorClass: "bg-gradient-to-br from-teal-400 to-emerald-700", texture: "matte" },
        { name: "C-GLOW", colorClass: "bg-gradient-to-br from-amber-300 to-orange-500", texture: "glitter" },
        { name: "BARRIER", colorClass: "bg-gradient-to-br from-[#fbc5b9] to-[#ec8b72]", texture: "matte" }
      ]
    },
    {
      id: "urun-karsilastirma",
      title: "Ürün Karşılaştırmaları",
      cosmeticName: "BATTLE OF THE LUXURY DUPES",
      categoryTag: "Karşılaştırma & Analiz",
      description: "MAC vs NARS, Rare Beauty vs Fenty Beauty ve Maybelline vs L'Oréal kozmetikleri.",
      coverLabel: "COSMETIC VS BATTLES",
      coverThemeClass: "bg-gradient-to-br from-zinc-800 via-stone-900 to-zinc-950",
      farColors: [
        { name: "MAC", colorClass: "bg-gradient-to-br from-stone-800 to-zinc-950", texture: "matte" },
        { name: "NARS-GLOW", colorClass: "bg-gradient-to-br from-[#ffcccb] to-[#dc143c]", texture: "shimmer" },
        { name: "RARE", colorClass: "bg-gradient-to-br from-[#ffb6c1] to-[#ff69b4]", texture: "shimmer" },
        { name: "FENTY", colorClass: "bg-gradient-to-br from-[#daa520] to-[#b8860b]", texture: "glitter" }
      ]
    },
    {
      id: "makyaj-sozlugu",
      title: "Makyaj Sözlüğü",
      cosmeticName: "TERM ENCYCLOPEDIA",
      categoryTag: "Temel Terimler",
      description: "Primer, baking, contour, overlining ve setting spray sırları.",
      coverLabel: "BEAUTY LEXICON",
      coverThemeClass: "bg-gradient-to-br from-[#2b2512] via-stone-900 to-[#120f06]",
      farColors: [
        { name: "BAKING", colorClass: "bg-gradient-to-br from-[#faf0e6] to-[#eedc82]", texture: "matte" },
        { name: "PRIMER", colorClass: "bg-gradient-to-br from-stone-100 to-stone-300", texture: "shimmer" },
        { name: "CONTOUR", colorClass: "bg-gradient-to-br from-[#a0522d] to-[#4b3621]", texture: "matte" },
        { name: "SETTING", colorClass: "bg-gradient-to-br from-teal-200 to-teal-500", texture: "shimmer" }
      ]
    },
    {
      id: "makyaj-tarihi",
      title: "Makyaj Tarihi",
      cosmeticName: "ERA CHRONICLES PALETTE",
      categoryTag: "Nostaljik Esintiler",
      description: "1920'ler, 1950'ler, 1990'lar, 2000'ler ve günümüz retro akımları.",
      coverLabel: "RETRO CHRONICLES",
      coverThemeClass: "bg-gradient-to-br from-[#3b2713] via-stone-900 to-[#1c0f05]",
      farColors: [
        { name: "20S-VAMP", colorClass: "bg-gradient-to-br from-purple-850 to-black", texture: "matte" },
        { name: "50S-PINUP", colorClass: "bg-gradient-to-br from-red-600 to-red-800", texture: "matte" },
        { name: "90S-MATTE", colorClass: "bg-gradient-to-br from-[#c19a6b] to-[#5c4033]", texture: "matte" },
        { name: "Y2K-FROST", colorClass: "bg-gradient-to-br from-[#e0ffff] to-[#87cefa]", texture: "glitter" }
      ]
    },
    {
      id: "sanal-makyaj-masasi",
      title: "Sanal Makyaj Masası",
      cosmeticName: "VIRTUAL MAKEUP VANITY",
      categoryTag: "İnteraktif 3D Çekmece",
      description: "Daily, Night, Soft Glam ve Bridal masalarında ürünleri sanal olarak deneyimleyin.",
      coverLabel: "STUDIO VANITY COMPARTMENT",
      coverThemeClass: "bg-gradient-to-br from-stone-800 via-stone-200 to-stone-900 border-2 border-stone-100",
      farColors: [
        { name: "DAILY-TRAY", colorClass: "bg-gradient-to-br from-pink-200 to-[#e28743]", texture: "shimmer" },
        { name: "NIGHT-LUX", colorClass: "bg-gradient-to-br from-slate-800 to-[#4a148c]", texture: "glitter" },
        { name: "GLAM-MIRROR", colorClass: "bg-gradient-to-br from-white via-zinc-200 to-zinc-400", texture: "shimmer" },
        { name: "BRIDAL-VEIL", colorClass: "bg-gradient-to-br from-[#fffafa] to-[#ffe4e1]", texture: "glitter" }
      ]
    },
    {
      id: "yuzunde-dene",
      title: "Yüzünde Dene",
      cosmeticName: "CAMERA MIRROR INTERACTIVE",
      categoryTag: "Sanal Makyaj Aynası",
      description: "Fotoğraf yükleyin, 6 lüks makyaj stilini (Doğal, Soft Glam, Latte, Gece) yüzünüze yansıtarak deneyin.",
      coverLabel: "GLOSS DIGITAL MIRROR",
      coverThemeClass: "bg-gradient-to-br from-amber-600 via-stone-900 to-[#12040b] border border-amber-500",
      farColors: [
        { name: "SOFT GLAM", colorClass: "bg-gradient-to-br from-[#D48B80] to-[#A87C66]", texture: "shimmer" },
        { name: "LATTE", colorClass: "bg-gradient-to-br from-[#C68E65] to-[#4A2711]", texture: "matte" },
        { name: "KÜLT RED", colorClass: "bg-gradient-to-br from-[#D62232] to-[#B01A25]", texture: "matte" },
        { name: "CLEAN GLOW", colorClass: "bg-gradient-to-br from-[#FFFFFF] to-[#FAD0C4]", texture: "glitter" }
      ]
    },
    {
      id: "makyaj-oyunu",
      title: "Makyaj Oyunu",
      cosmeticName: "INTERACTIVE MAKEUP GAME",
      categoryTag: "Model Oyun Odası",
      description: "Sabit model üzerinde ruj, far, allık ve eyeliner tonlarını değiştirin, kendi tarzınızı anında oluşturun.",
      coverLabel: "GLOSS BEAUTY STUDIO",
      coverThemeClass: "bg-gradient-to-br from-[#9c4c70] via-[#5b143c] to-stone-950 border border-pink-500/40",
      farColors: [
        { name: "KÜLT RED", colorClass: "bg-[#D21F3C]", texture: "matte" },
        { name: "CHAMPAGNE", colorClass: "bg-[#F7E1CD]", texture: "glitter" },
        { name: "MÜRDÜM", colorClass: "bg-[#72364C]", texture: "shimmer" },
        { name: "ESPRESSO", colorClass: "bg-[#7E4A35]", texture: "matte" }
      ]
    }
  ];

  return (
    <div id="canta-ici-container" className="space-y-10">
      {/* GLOSS Cosmétique Organizer Metal Plate Signature Display */}
      <div 
        className={`relative p-6 sm:p-10 rounded-3xl border overflow-hidden text-center transition-all duration-300 ${
          isDark ? "border-stone-800 shadow-[0_20px_40px_rgba(0,0,0,0.85)]" : "border-stone-250 shadow-md"
        }`}
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #121319 0%, #0d0e12 50%, #050507 100%)" 
            : "linear-gradient(135deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%)",
          boxShadow: isDark 
            ? "inset 0 1px 2px rgba(255, 255, 255, 0.05), 0 25px 50px rgba(0,0,0,0.6)" 
            : "inset 0 1px 3px rgba(0, 0, 0, 0.02), 0 10px 25px rgba(0,0,0,0.05)"
        }}
      >
        {/* Decorative metal zipper rails on sides of the organizer */}
        <div className="absolute top-0 bottom-0 left-0 w-3 border-r border-stone-850 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(180deg, #000 0px, #000 4px, #444 5px, #444 9px)" }}></div>
        <div className="absolute top-0 bottom-0 right-0 w-3 border-l border-stone-850 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(180deg, #000 0px, #000 4px, #444 5px, #444 9px)" }}></div>
 
        {/* Shiny silver diagonal reflection strip */}
        <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none opacity-5 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 transform animate-pulse duration-[8s]" />
 
        <div className="max-w-xl mx-auto space-y-3 relative z-10">
          {/* Custom Brand Metal Label */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-[10px] font-black tracking-[0.25em] uppercase transition-colors duration-300 ${
            isDark ? "bg-white/5 border-stone-800 text-stone-300" : "bg-stone-100 border-stone-250 text-stone-600"
          }`}>
            <span className="text-amber-500 animate-pulse">✦</span>
            <span>MAKYAJ ORGANİZATÖRÜ</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-serif font-black tracking-tight drop-shadow-sm transition-colors duration-300 ${
            isDark ? "text-white" : "text-stone-900"
          }`}>
            Hafif Far Paleti Serileri
          </h2>
          <p className={`text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto font-medium transition-colors duration-300 ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}>
            Her bölme, 3D kapaklı prestijli bir makyaj serisidir. Kapağı aralamak için mouse ile üstüne gelin ve dilediğiniz derin formülü keşfetmek için dokunun.
          </p>
        </div>
      </div>
 
      {/* Grid of the 10 Makeup Palettes with 3D cover lid flip effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-cards-grid">
        {items.map((item) => (
          <PaletteCategoryCard
            key={item.id}
            id={item.id}
            title={item.title}
            cosmeticName={item.cosmeticName}
            categoryTag={item.categoryTag}
            description={item.description}
            coverLabel={item.coverLabel}
            coverThemeClass={item.coverThemeClass}
            farColors={item.farColors}
            onClick={() => {
              onCardSelect(item.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ))}
      </div>
 
      {/* Decorative Quick Tips Ribbon inside the case - Dark Premium Styling */}
      <div 
        className={`p-6 rounded-2xl border-2 border-double backdrop-blur-xl shadow-lg flex flex-col sm:flex-row gap-4 items-center justify-between transition-all duration-300 ${
          isDark ? "border-stone-800 bg-stone-950/60" : "border-stone-300 bg-white"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full border text-xl flex items-center justify-center shadow-md transition-colors duration-300 ${
            isDark ? "bg-gradient-to-br from-stone-800 to-black border-stone-700" : "bg-stone-50 border-stone-250"
          }`}>
            👑
          </div>
          <div className="text-left">
            <h4 className={`text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 ${
              isDark ? "text-white" : "text-stone-900"
            }`}>Altın Fermuar Güzellik Sırrı</h4>
            <p className={`text-xs mt-0.5 font-normal transition-colors duration-300 ${
              isDark ? "text-[#BAC2CE]" : "text-stone-650"
            }`}>Lüks marka formüllerinin karşısına yerleştirdiğimiz drugstore pratik tüyoları tek ekranda.</p>
          </div>
        </div>
 
        {/* Cilt Rehberi Quick Button */}
        <button
          onClick={() => onCardSelect("cilt-rehberi")}
          className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 border cursor-pointer ${
            isDark 
              ? "bg-gradient-to-r from-stone-800 to-stone-900 hover:from-white hover:to-stone-200 text-white border-stone-700 hover:border-white" 
              : "bg-stone-900 hover:bg-stone-850 text-white border-stone-800 hover:border-black"
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Cilt Koşullarınızı Girin</span>
        </button>
      </div>
    </div>
  );
}
