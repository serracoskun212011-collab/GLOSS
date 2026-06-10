import React, { useState, useRef } from "react";
import { Upload, Camera, Sparkles, RefreshCw, Check, ArrowLeft, Award, Info, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface MakeupStyle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  overlayClass: string; // Tailwind opacity/blend overlay styling
  overlayColor: string; // Gradient overlay styling
  cssFilter: string; // CSS Filter parameters
  colors: { name: string; hex: string; desc: string; type: "matte" | "shimmer" | "glitter" }[];
  lipstick: { brand: string; name: string; tone: string };
  eyeshadow: { brand: string; name: string; tone: string };
  blush: { brand: string; name: string; tone: string };
  tip: string;
}

interface YuzundeDenePageProps {
  onBackToBag: () => void;
}

export default function YuzundeDenePage({ onBackToBag }: YuzundeDenePageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedStyleId, setSelectedStyleId] = useState<string>("dogal");
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Preset demo image option (in case users don't have a photo ready)
  const defaultModelImage = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600";

  const styles: MakeupStyle[] = [
    {
      id: "dogal",
      name: "Doğal Makyaj (No-Makeup Look)",
      tagline: "Sanki kendi teniniz ama daha canlı ve taze.",
      description: "Hafif nemlendirici bitişli, cildin doğal dokusunu kaybettirmeyen şeffaf bir canlılık sunar.",
      overlayClass: "mix-blend-soft-light opacity-25",
      overlayColor: "linear-gradient(to top, rgba(244,197,185,0.4) 0%, rgba(255,255,255,0) 100%)",
      cssFilter: "saturate(105%) brightness(102%) contrast(100%)",
      colors: [
        { name: "Pudra Pembe", hex: "#F3C5BA", desc: "Doğal yanık", type: "matte" },
        { name: "Saten Bej", hex: "#E8CBB5", desc: "Baz gölge", type: "matte" },
        { name: "Şampanya", hex: "#F6E3CE", desc: "Hafif aydınlık", type: "shimmer" },
        { name: "Şeftali Buse", hex: "#FAD3C3", desc: "Taze yanak", type: "matte" }
      ],
      lipstick: { brand: "Clinique", name: "Almost Lipstick - Black Honey", tone: "Doğal Böğürtlen" },
      eyeshadow: { brand: "Urban Decay", name: "Naked 3 (Limit / Nooner)", tone: "Mat Gül Kurusu" },
      blush: { brand: "Rare Beauty", name: "Soft Pinch Liquid Blush (Hope)", tone: "Duru Pudra Pembe" },
      tip: "Ten renginizi tamamen kapatmadan, ürünü sadece yüzünüzün yüksek noktalarına tampon hareketlerle uygulayın ve şeffaf bir sabitleyici jel ile kaşlarınızı dikey tarayın."
    },
    {
      id: "soft-glam",
      name: "Soft Glam",
      tagline: "Kadife yumuşaklığında gölgeler ve sıcak parıltı.",
      description: "Bugların, pürüzsüz ten yapısıyla birleştiği, asil ve davetkar bir geçiş makyajı.",
      overlayClass: "mix-blend-color-burn opacity-20",
      overlayColor: "radial-gradient(circle, rgba(230,175,145,0.45) 0%, rgba(0,0,0,0) 80%)",
      cssFilter: "saturate(112%) sepia(10%) contrast(104%) brightness(98%)",
      colors: [
        { name: "Kadife Gül", hex: "#D48B80", desc: "Allık & Gölgelendirme", type: "matte" },
        { name: "Altın Varak", hex: "#D4AF37", desc: "Göz pınarı ışıltısı", type: "glitter" },
        { name: "Sıcak Taupe", hex: "#A87C66", desc: "Katlanma çizgisi", type: "matte" },
        { name: "Saten İnci", hex: "#FFFDD0", desc: "Aydınlatıcı nokta", type: "shimmer" }
      ],
      lipstick: { brand: "Charlotte Tilbury", name: "Matte Revolution (Pillow Talk)", tone: "Evrensel Pembe Nude" },
      eyeshadow: { brand: "Anastasia Beverly Hills", name: "Soft Glam Palette", tone: "Sıcak Kahve & Altın" },
      blush: { brand: "NARS", name: "Blush (Behave)", tone: "Yumuşak Mauve Pembe" },
      tip: "Eyeliner çizgisini keskin bir hat yerine koyu kahve far yardımıyla dağıtarak buğulu bir hava katın. Aydınlatıcıyı geniş alanlara değil, noktasal uygulayın."
    },
    {
      id: "gece-makyaji",
      name: "Gece Makyajı",
      tagline: "Yüksek kontrast, dumanlı bakışlar ve heykelimsi kontur.",
      description: "Spot ışıkları altında parıldayan, derinlikli dumanlı gözler ve nude saten dudaklar.",
      overlayClass: "mix-blend-multiply opacity-20",
      overlayColor: "linear-gradient(135deg, rgba(82,45,116,0.2) 0%, rgba(0,0,0,0.5) 100%)",
      cssFilter: "contrast(115%) brightness(95%) saturate(108%)",
      colors: [
        { name: "Gece Siyahı", hex: "#1A1A1A", desc: "Dış gölge", type: "matte" },
        { name: "Bronz Metal", hex: "#8A5A36", desc: "Ön kapak", type: "shimmer" },
        { name: "Gümüş Sim", hex: "#E5E7EB", desc: "Glitter topper", type: "glitter" },
        { name: "Koyu Gül", hex: "#9E5A63", desc: "Geçiş gölgesi", type: "matte" }
      ],
      lipstick: { brand: "MAC", name: "Matte Lipstick (Velvet Teddy)", tone: "Doğal Kahve Nude" },
      eyeshadow: { brand: "Huda Beauty", name: "Empowered Eyeshadow Palette", tone: "Dumanlı Kömür & Metalik" },
      blush: { brand: "Fenty Beauty", name: "Cheeks Out Cream Blush (Fuego Flush)", tone: "Sıcak Bronz Allık" },
      tip: "Dumanlı göz makyajınızda farların kesişim noktalarını temiz ve yumuşak bir fırçayla ten rengi pudra sürerek dağıtın. Bu işlem profesyonel geçiş sağlar."
    },
    {
      id: "kirmizi-ruj",
      name: "Kırmızı Ruj Görünümü",
      tagline: "Klasik Paris esintisi: Minimal gözler, cüretkar dudaklar.",
      description: "Pürüzsüz, aydınlık bir ten, hafif maskara ve odak noktası olan kült kırmızı mat dudaklar.",
      overlayClass: "mix-blend-overlay opacity-30",
      overlayColor: "radial-gradient(circle at center, rgba(239,68,68,0.25) 0%, rgba(255,255,255,0) 70%)",
      cssFilter: "contrast(106%) saturate(118%) brightness(101%)",
      colors: [
        { name: "Kült Kırmızı", hex: "#D62232", desc: "Dudak kalbi", type: "matte" },
        { name: "Kemik Krem", hex: "#F3ECE0", desc: "Tüm göz kapağı", type: "matte" },
        { name: "Işıltı Şerit", hex: "#FAF5FF", desc: "Dudak üstü kupido", type: "shimmer" },
        { name: "Kahve Eyeliner", hex: "#4B3621", desc: "Hafif kirpik dibi", type: "matte" }
      ],
      lipstick: { brand: "MAC", name: "Retro Matte Lipstick (Ruby Woo)", tone: "Mavi Alt Tonlu Canlı Kırmızı" },
      eyeshadow: { brand: "L'Oréal Paris", name: "Color Queen (01 Satin Satin)", tone: "Nötr Kemik İpeği" },
      blush: { brand: "Rare Beauty", name: "Soft Pinch (Worth)", tone: "Hafif Şeftali Pembe" },
      tip: "Kırmızı ruj sürerken dudak kenarlarınızı kapatıcı ve yassı fırça ile keskinleştirin. Göz kapağınıza sadece ten rengi far sürerek tüm dikkati dudaklara çekin."
    },
    {
      id: "clean-girl",
      name: "Clean Girl Makeup",
      tagline: "Glazed skin, nemli yanaklar ve sabitleştirilmiş kaşlar.",
      description: "Estetik lüksün en minimal hali; ıslak bitişli elmacık kemikleri, taranmış saçlar ve taze nefes alan bir cilt.",
      overlayClass: "mix-blend-screen opacity-20",
      overlayColor: "linear-gradient(to bottom, rgba(255,245,245,0.5) 0%, rgba(253,230,138,0.2) 100%)",
      cssFilter: "brightness(106%) saturate(102%) contrast(98%)",
      colors: [
        { name: "Glazed Serum", hex: "#FFFFFF", desc: "Islak aydınlık", type: "glitter" },
        { name: "Pembe Sır", hex: "#FAD0C4", desc: "Dewy Allık", type: "shimmer" },
        { name: "Bal Köpüğü", hex: "#F4D03F", desc: "Karamel gölge", type: "shimmer" },
        { name: "Isırılmış Pembe", hex: "#E09090", desc: "Doğal dudak tonu", type: "matte" }
      ],
      lipstick: { brand: "Fenty Beauty", name: "Gloss Bomb (Sweet Mouth)", tone: "Işıltılı Şeffaf Pembe" },
      eyeshadow: { brand: "Maybelline", name: "Color Tattoo (Socialite)", tone: "Işıltılı Gül Bej" },
      blush: { brand: "Rare Beauty", name: "Soft Pinch Liquid Blush (Hope)", tone: "İpeksi Nemli Şeftali Gül" },
      tip: "Temel kural likit ve krem formülleri pudra ile aşırı matlaştırmamayı amaçlar. Pudrayı sadece burun kenarlarınıza ve göz altınızdaki küçük gölgelere fırçayla vurdurun."
    },
    {
      id: "latte-makeup",
      name: "Latte Makeup",
      tagline: "Karamel, espresso ve kehribar tonlarının sıcak birleşimi.",
      description: "Tiktok viral trendi; tamamen bronz, sıcak kahve ve sütlü kahve tonlarında tek renkli monokrom zarafet.",
      overlayClass: "mix-blend-color-burn opacity-25",
      overlayColor: "radial-gradient(circle, rgba(160,82,45,0.4) 0%, rgba(139,69,19,0.1) 90%)",
      cssFilter: "sepia(18%) saturate(110%) contrast(102%) brightness(99%)",
      colors: [
        { name: "Espresso", hex: "#4A2711", desc: "Kirpik gölgesi", type: "matte" },
        { name: "Latte Karamel", hex: "#C68E65", desc: "Monokrom allık", type: "matte" },
        { name: "Kehribar Altın", hex: "#D4AF37", desc: "Göz kapağı parıltı", type: "shimmer" },
        { name: "Süt Köpüğü", hex: "#EADDC9", desc: "Aydınlık temizlik", type: "matte" }
      ],
      lipstick: { brand: "NYX", name: "Butter Gloss (Praline / Gingersnap)", tone: "Sıcak Karamel Karışımı" },
      eyeshadow: { brand: "NARS", name: "Laguna Quad Eyeshadow", tone: "Bronz Akorlar & Saman" },
      blush: { brand: "Benefit", name: "Hoola Bronzer & Wandeplay Blush", tone: "Ilık Mat Çikolata & Terracotta" },
      tip: "Makyajda allık yerine sadece sıcak mat bronzer kullanarak yüzün tüm gölgelerini monokrom kahve tonuyla birleştirin. Göz altlarınıza çok açık renk kapatıcı sürmeyin."
    }
  ];

  const activeStyle = styles.find((s) => s.id === selectedStyleId) || styles[0];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const loadDemoPhoto = () => {
    setImageSrc(defaultModelImage);
  };

  const resetPhoto = () => {
    setImageSrc(null);
  };

  return (
    <div id="yuzunde-dene-container" className="space-y-10 py-6">
      
      {/* Back Button */}
      <button
        onClick={onBackToBag}
        className={`flex items-center gap-1.5 text-xs font-bold transition-all px-3 py-1.5 rounded-lg border w-fit cursor-pointer ${
          isDark 
            ? "text-stone-400 hover:text-white border-stone-800 bg-stone-900/60" 
            : "text-stone-700 hover:text-stone-950 border-stone-250 bg-white shadow-sm"
        }`}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Geri Dön</span>
      </button>

      {/* Luxury Promo Header */}
      <div 
        className={`p-6 sm:p-10 rounded-3xl border text-center relative overflow-hidden transition-all duration-300 ${
          isDark ? "border-stone-800 shadow-[0_20px_40px_rgba(0,0,0,0.85)]" : "border-stone-250 shadow-md"
        }`}
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #181920 0%, #0d0e12 100%)" 
            : "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
          boxShadow: isDark ? "inset 0 1px 2px rgba(255, 255, 255, 0.05)" : "none"
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="max-w-xl mx-auto space-y-3 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
            isDark ? "bg-white/5 border border-white/10 text-stone-300" : "bg-stone-100 border border-stone-250 text-stone-600"
          }`}>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>SANAL AYNA TEKNOLOJİSİ</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-serif font-black tracking-wide ${isDark ? 'text-white' : 'text-stone-900'}`}>
            Yüzünde Dene
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}>
            Kendi fotoğrafınızı yükleyin veya örnek bir şablon seçin. Soldaki makyaj aynasında stillerin yüzünüzde nasıl durduğunu gözlemlerken, sağdaki reçete kartından tam formül ürünleri inceleyin.
          </p>
        </div>
      </div>

      {/* Main interactive area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Makeup Mirror (5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <div className="w-full text-center">
            <span className={`text-[10px] font-mono tracking-widest uppercase font-black ${isDark ? "text-stone-400" : "text-stone-550"}`}>
              🪞 MAKEUP MIRROR / MAKYAJ AYNASI
            </span>
          </div>

          {/* Mirror layout container */}
          <div 
            className={`w-full aspect-[4/5] sm:aspect-square rounded-full border-8 max-w-sm relative overflow-hidden transition-all duration-500 shadow-2xl flex flex-col items-center justify-center ${
              isDark 
                ? "border-gradient bg-[#121319] border-stone-800 shadow-[0_30px_70px_rgba(0,0,0,0.8)]" 
                : "border-stone-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)]"
            }`}
            style={{
              borderColor: isDark ? "#c0c0c0 #444 #888 #111" : "#ffffff #e2e8f0 #cbd5e1 #f1f5f9"
            }}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            {/* Mirror light reflection overlay */}
            <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] rounded-full"></div>
            
            {/* Hollywood mirror bulbs around (simulated via drop shadow or border LEDs) */}
            <div className="absolute inset-2 border border-dotted border-white/20 rounded-full pointer-events-none z-20"></div>

            {/* If no image, show dropzone */}
            {!imageSrc ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4 z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isDark ? "bg-stone-900 text-stone-300 border border-stone-800" : "bg-stone-50 text-stone-600 border border-stone-200"
                }`}>
                  <Camera className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <p className={`text-xs font-black uppercase tracking-wider ${isDark ? "text-stone-200" : "text-stone-800"}`}>
                    Fotoğrafınızı Yükleyin
                  </p>
                  <p className={`text-[10px] max-w-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    Sürükleyip bırakın veya bilgisayarınızdan seçin.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button 
                    onClick={triggerFileInput}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl cursor-pointer ${
                      isDark ? "bg-[#e5c158] hover:bg-amber-400 text-stone-950" : "bg-stone-900 hover:bg-stone-800 text-white"
                    }`}
                  >
                    FOTOĞRAF SEÇ
                  </button>
                  <button 
                    onClick={loadDemoPhoto}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-xl border cursor-pointer ${
                      isDark ? "bg-stone-950/80 text-stone-300 border-stone-850 hover:bg-stone-900" : "bg-stone-105 text-stone-700 border-stone-250 hover:bg-stone-300"
                    }`}
                  >
                    Örnek Model Kullan
                  </button>
                </div>
                <input 
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            ) : (
              // IMAGE HAS BEEN UPLOADED: APPLY MAKEUP OVERLAY
              <div className="absolute inset-0 z-10 w-full h-full">
                
                {/* 1. Underlying Raw uploaded original Image */}
                <img 
                  src={imageSrc} 
                  alt="Ayna Önü Deneme" 
                  className="w-full h-full object-cover select-none transition-all duration-300"
                  style={{
                    filter: activeStyle.cssFilter
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* 2. Style-Specific Colored/Filter Overlay using mix bands */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 pointer-events-none ${activeStyle.overlayClass}`}
                  style={{
                    background: activeStyle.overlayColor
                  }}
                ></div>

                {/* 3. Subtle beauty glow/airbrush vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_95%)] pointer-events-none mix-blend-color-burn"></div>

                {/* Reset button inside overlay drawer */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-stone-950/80 hover:bg-stone-950 border border-stone-805/80 text-white px-3 py-1.5 rounded-full text-[9px] font-mono tracking-wider uppercase flex items-center gap-1.5 cursor-pointer shadow-lg transition-transform active:scale-95">
                  <button onClick={resetPhoto} className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    <span>Yeni Fotoğraf</span>
                  </button>
                </div>

                {/* Animated Scanning Light Band */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f4df90] to-transparent opacity-30 z-20 top-0 animate-bounce"></div>
              </div>
            )}
          </div>
          
          <div className={`p-3.5 rounded-xl border text-[11px] text-center max-w-sm ${
            isDark ? "bg-stone-900/40 border-stone-850/80 text-stone-400" : "bg-white border-stone-200 text-stone-600"
          }`}>
            💡 <strong className={isDark ? "text-stone-300" : "text-stone-800"}>Prototip Tüyosu:</strong> Stilleri değiştirdikçe makyaj aynasındaki görüntünüzün aydınlığı, sepia sıcaklığı ve renk doygunluğu stile uygun olarak hassasça titreşir.
          </div>
        </div>

        {/* RIGHT COLUMN: Style Selector & Prescription Formulation Cards (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Mini Eyeshadow Palettes Selection Row */}
          <div className="space-y-3">
            <span className={`text-[10px] font-mono tracking-widest uppercase font-black block ${isDark ? "text-stone-400" : "text-stone-500"}`}>
              🎨 SEÇİLEBİLİR MAKYAJ STİLLERİ (MİNYATÜR PALETLER)
            </span>

            {/* Grid of 6 different styles shaped like mini eye compacts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {styles.map((style) => {
                const isSelected = style.id === selectedStyleId;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyleId(style.id)}
                    className={`rounded-xl border p-3.5 text-left transition-all relative overflow-hidden flex flex-col justify-between h-36 cursor-pointer select-none ${
                      isSelected 
                        ? isDark 
                          ? "border-[#c0992c] bg-stone-900 text-white ring-1 ring-[#c0992c]" 
                          : "border-stone-900 bg-white text-stone-950 ring-1 ring-stone-950" 
                        : isDark 
                          ? "border-stone-850 bg-stone-950/60 hover:bg-stone-900 text-stone-300 hover:border-stone-700" 
                          : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700 hover:border-stone-400"
                    }`}
                  >
                    <div>
                      {/* Name & Selector Check */}
                      <div className="flex items-start justify-between">
                        <span className="text-[11px] font-serif font-black leading-tight tracking-wider pr-1">
                          {style.name}
                        </span>
                        {isSelected && (
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isDark ? "bg-[#c0992c] text-stone-950" : "bg-stone-900 text-stone-100"
                          }`}>
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </div>
                      
                      {/* Mini color compacts display mock */}
                      <p className={`text-[9px] mt-1.5 leading-snug line-clamp-2 ${
                        isSelected ? "text-stone-400 dark:text-stone-300" : "text-stone-500"
                      }`}>
                        {style.tagline}
                      </p>
                    </div>

                    {/* Compact Case colors simulation (eyeshadow shadow mock circles) */}
                    <div className="flex items-center gap-1 mt-3">
                      {style.colors.map((col, idx) => (
                        <div 
                          key={idx}
                          className="w-4.5 h-4.5 rounded-full border border-stone-800/20 dark:border-stone-100/10 shadow-inner group relative"
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        >
                          {/* Inner shimmer dot design for high fidelity */}
                          {col.type === "shimmer" && (
                            <span className="absolute inset-0 w-1 h-1 bg-white/65 rounded-full m-auto"></span>
                          )}
                          {col.type === "glitter" && (
                            <span className="absolute inset-0 w-1.5 h-1.5 bg-yellow-100/80 rounded-full m-auto animate-pulse"></span>
                          )}
                        </div>
                      ))}
                    </div>

                  </button>
                );
              })}
            </div>
          </div>

          {/* SILVER EMBOSSED RECIPE CARD */}
          <div 
            id="gumus-reçete" 
            className={`rounded-3xl border-2 p-6 sm:p-8 shadow-2xl relative transition-all duration-300 ${
              isDark ? "border-stone-400/70 bg-[#0d0e12]" : "border-stone-300 bg-white"
            }`}
            style={{
              backgroundImage: isDark 
                ? "radial-gradient(circle at 50% 0%, #15161c 0%, #08090c 100%)" 
                : "radial-gradient(circle at 50% 0%, #ffffff 0%, #f1f5f9 100%)"
            }}
          >
            {/* Embossed Luxury Silver Badge */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 font-serif font-black text-[9px] sm:text-[10px] tracking-widest rounded-full shadow-md uppercase border transition-all duration-300 ${
              isDark 
                ? "bg-gradient-to-r from-stone-200 via-white to-stone-400 border-stone-400 text-stone-950" 
                : "bg-stone-900 text-white border-stone-800"
            }`}>
              ❖ GLOSS SANAL MAKYAJ REÇETESİ ❖
            </div>

            <div className="space-y-6 pt-3">
              
              {/* Header Info */}
              <div className="space-y-1.5 text-center sm:text-left border-b border-stone-250/20 dark:border-stone-800 pb-4">
                <span className={`text-[9px] font-mono tracking-widest uppercase font-black block ${
                  isDark ? "text-amber-500" : "text-amber-600"
                }`}>
                  {activeStyle.tagline}
                </span>
                <h3 className={`font-serif text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-stone-950'}`}>
                  {activeStyle.name} Formülü
                </h3>
                <p className={`text-xs ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                  {activeStyle.description}
                </p>
              </div>

              {/* 1. USED COLORS */}
              <div className="space-y-2">
                <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                  Kullanılacak Palet Renkleri
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pl-3">
                  {activeStyle.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${
                        isDark ? "bg-black/30 border-stone-900" : "bg-stone-50 border-stone-150"
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-md border border-stone-850/10 shrink-0 shadow-inner relative"
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.type !== "matte" && (
                          <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white/70 rounded-full"></div>
                        )}
                      </div>
                      <div className="overflow-hidden">
                        <p className={`text-[10px] font-bold line-clamp-1 truncate ${isDark ? "text-stone-250" : "text-stone-900"}`}>
                          {color.name}
                        </p>
                        <p className="text-[8px] text-stone-500 uppercase font-mono tracking-wider font-extrabold">
                          {color.type}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. PRODUCTS SPECIFICATION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-b border-stone-250/20 dark:border-stone-850 py-4">
                
                {/* Ruj */}
                <div className="space-y-1 pl-2">
                  <span className="text-[9px] font-mono tracking-wider text-rose-500 uppercase font-black block">💄 RUJ ÖNERİSİ:</span>
                  <p className={`text-xs font-black leading-tight ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    {activeStyle.lipstick.brand}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {activeStyle.lipstick.name}
                  </p>
                  <p className="text-[9px] font-mono text-stone-400 italic">
                    Ton: {activeStyle.lipstick.tone}
                  </p>
                </div>

                {/* Far */}
                <div className="space-y-1 pl-2 border-t md:border-t-0 md:border-l border-stone-250/10 dark:border-stone-850/60 pt-3 md:pt-0">
                  <span className="text-[9px] font-mono tracking-wider text-amber-500 uppercase font-black block">👁️ FAR ÖNERİSİ:</span>
                  <p className={`text-xs font-black leading-tight ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    {activeStyle.eyeshadow.brand}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {activeStyle.eyeshadow.name}
                  </p>
                  <p className="text-[9px] font-mono text-stone-400 italic">
                    Ton: {activeStyle.eyeshadow.tone}
                  </p>
                </div>

                {/* Allık */}
                <div className="space-y-1 pl-2 border-t md:border-t-0 md:border-l border-stone-250/10 dark:border-stone-850/60 pt-3 md:pt-0">
                  <span className="text-[9px] font-mono tracking-wider text-teal-500 uppercase font-black block">🌸 ALLIK ÖNERİSİ:</span>
                  <p className={`text-xs font-black leading-tight ${isDark ? "text-stone-200" : "text-stone-900"}`}>
                    {activeStyle.blush.brand}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {activeStyle.blush.name}
                  </p>
                  <p className="text-[9px] font-mono text-stone-400 italic">
                    Ton: {activeStyle.blush.tone}
                  </p>
                </div>

              </div>

              {/* 3. APPLICATION GUIDE */}
              <div className="space-y-1.5" id="sonuc-ipucu">
                <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 ${isDark ? 'text-stone-300 font-bold' : 'text-stone-900 font-extrabold'}`}>
                  <Award className="w-4 h-4 text-amber-500" />
                  Profesyonel Uygulama İpucu
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                  {activeStyle.tip}
                </p>
              </div>

            </div>

            {/* Footer stamp */}
            <div className={`mt-8 pt-5 border-t flex justify-between items-center text-[10px] font-mono transition-colors duration-300 ${
              isDark ? 'border-stone-800 text-stone-500' : 'border-stone-200 text-stone-450'
            }`}>
              <span>GLOSS MIRROR PRECISION DRUGSTORE © 2026</span>
              <span>%100 DEMO GERÇEKÇİ KAPLAMA</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
