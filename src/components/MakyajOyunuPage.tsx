import React, { useState } from "react";
import { Sparkles, ArrowLeft, RotateCcw, Heart, Share2, Sparkle, Eye, Check, Smile, Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface MakerChoice {
  id: string;
  name: string;
  hex: string;
  label: string;
}

export default function MakyajOyunuPage({ onBackToBag }: { onBackToBag: () => void }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Game active selections
  const [selectedLip, setSelectedLip] = useState<string>("yok");
  const [selectedShadow, setSelectedShadow] = useState<string>("yok");
  const [selectedBlush, setSelectedBlush] = useState<string>("yok");
  const [selectedEyeliner, setSelectedEyeliner] = useState<string>("yok");

  // Save Look feature states
  const [savedLooks, setSavedLooks] = useState<{ name: string; date: string; code: string }[]>([]);
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false);
  const [displaySavedName, setDisplaySavedName] = useState<string>("");

  // Product Options Constants
  const lipsOptions: MakerChoice[] = [
    { id: "yok", name: "Yok / Doğal", hex: "transparent", label: "Arınmış Dudaklar" },
    { id: "nude", name: "Saten Nude", hex: "#C38B74", label: "Sıcak Şeftali Nude" },
    { id: "kirmizi", name: "Kült Kırmızı", hex: "#D21F3C", label: "Mat Paris Kırmızısı" },
    { id: "pembe", name: "Romantik Pembe", hex: "#E45C83", label: "Soft Sakız Pembe" },
    { id: "kahve", name: "Espresso Kahve", hex: "#7E4A35", label: "Zengin Karamel Kahverengi" }
  ];

  const shadowOptions: MakerChoice[] = [
    { id: "yok", name: "Yok / Temiz", hex: "transparent", label: "Çıplak Göz Kapağı" },
    { id: "sampanya", name: "Şampanya Işıltısı", hex: "#F7E1CD", label: "Glittery Champagne" },
    { id: "kahve", name: "Sıcak Kahve", hex: "#9E755D", label: "Mat Latte Çikolatası" },
    { id: "murdum", name: "Derin Mürdüm", hex: "#72364C", label: "Asil Monokrom Mürdüm" },
    { id: "gri", name: "Dumanlı Gri", hex: "#61676D", label: "Metalik Chrome Füme" }
  ];

  const blushOptions: MakerChoice[] = [
    { id: "yok", name: "Yok / Duru", hex: "transparent", label: "Şeffaf Ten Yapısı" },
    { id: "seftali", name: "Şeftali", hex: "#F29479", label: "Taze Günbatımı Allığı" },
    { id: "pembe", name: "Pembe", hex: "#ED8BA1", label: "Soğuk Alt-Tonlu Pembe" },
    { id: "gul-kurusu", name: "Gül Kurusu", hex: "#BC6C7A", label: "Nostaljik Mat Gül Rengi" }
  ];

  const eyelinerOptions = [
    { id: "yok", name: "Sadece Maskara", label: "Eyeliner Olmadan" },
    { id: "ince", name: "İnce Sade Çizgi", label: "Zarif Kirpik Dibi Çizgisi" },
    { id: "kuyruklu", name: "Kuyruklu Glam Wing", label: "Dramatik Kedi Bakışları" }
  ];

  // Helper getters to obtain actual values
  const currentLip = lipsOptions.find(o => o.id === selectedLip) || lipsOptions[0];
  const currentShadow = shadowOptions.find(o => o.id === selectedShadow) || shadowOptions[0];
  const currentBlush = blushOptions.find(o => o.id === selectedBlush) || blushOptions[0];
  const currentEyeliner = eyelinerOptions.find(o => o.id === selectedEyeliner) || eyelinerOptions[0];

  // Automated look generator logic
  const generateLookName = (): string => {
    if (selectedLip === "yok" && selectedShadow === "yok" && selectedBlush === "yok" && selectedEyeliner === "yok") {
      return "Temiz Tuval (Arınmış Cilt)";
    }
    if (selectedLip === "kirmizi" && selectedShadow === "sampanya" && selectedEyeliner === "kuyruklu") {
      return "Red Lip Classic Glam";
    }
    if (selectedLip === "kirmizi" && selectedShadow === "yok") {
      return "Fransız Şıklığı (Parisian Red)";
    }
    if ((selectedLip === "kahve" || selectedLip === "nude") && selectedShadow === "kahve") {
      return "Latte Monokrom Trend";
    }
    if (selectedLip === "pembe" && selectedBlush === "pembe") {
      return "Coquette Pink Blossom";
    }
    if (selectedShadow === "gri" && selectedEyeliner === "kuyruklu") {
      return "Sultry Smoke Midnight";
    }
    if (selectedShadow === "murdum" && selectedLip === "nude") {
      return "Berry Velvet Romance";
    }
    if (selectedLip === "nude" && selectedShadow === "sampanya" && selectedBlush === "seftali") {
      return "Clean Girl Soft Glow";
    }
    if (selectedShadow === "sampanya" && selectedEyeliner === "kuyruklu" && selectedLip !== "yok") {
      return "Golden Hour Party Look";
    }
    
    // Fallback names based on Ruj or Far dominance
    if (selectedLip === "kirmizi") return "Siren Crimson Look";
    if (selectedLip === "pembe") return "Sweet Sherbet Glam";
    if (selectedLip === "kahve") return "90s Retro Espresso";
    if (selectedShadow === "gri") return "Metropolitan Smoky Eye";
    if (selectedShadow === "murdum") return "Romantic Amethyst Look";
    if (selectedShadow === "sampanya") return "Glossy Angel Glow";
    
    return "Custom GLOSS Studio Look";
  };

  const autoLookName = generateLookName();

  const handleReset = () => {
    setSelectedLip("yok");
    setSelectedShadow("yok");
    setSelectedBlush("yok");
    setSelectedEyeliner("yok");
  };

  const handleSaveLook = () => {
    const code = `L:${selectedLip.toUpperCase()}-S:${selectedShadow.toUpperCase()}-B:${selectedBlush.toUpperCase()}-E:${selectedEyeliner.toUpperCase()}`;
    const newLook = {
      name: autoLookName,
      date: new Date().toLocaleTimeString("tr-TR", { hour: '2-digit', minute: '2-digit' }),
      code: code
    };
    setSavedLooks([newLook, ...savedLooks]);
    setDisplaySavedName(autoLookName);
    setShowSaveSuccess(true);
    setTimeout(() => {
      setShowSaveSuccess(false);
    }, 4500);
  };

  return (
    <div id="makyaj-oyunu-root" className="space-y-10 py-6">
      
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

      {/* Elegant Header Block */}
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
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none"></div>
        <div className="max-w-xl mx-auto space-y-3 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
            isDark ? "bg-white/5 border border-white/10 text-stone-300" : "bg-stone-100 border border-stone-250 text-stone-600"
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5c158] animate-pulse"></span>
            <span>MÜKEMMEL HARMONİ STÜDYOSU</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-serif font-black tracking-wide ${isDark ? 'text-white' : 'text-stone-900'}`}>
            Makyaj Oyunu
          </h2>
          <p className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300 ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}>
            Aşağıdaki asil makyaj aynası önünde duran model üzerinde mat/ışıltılı tonları karıştırarak rüya stilinizi tasarlayın. Değişiklikleri anında görün, kendi kreasyon isminizi tescil edin!
          </p>
        </div>
      </div>

      {/* SUCCESS MODAL / TOAST NOTIFICATION */}
      {showSaveSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className={`p-4 rounded-2xl border-2 shadow-2xl flex items-center gap-3.5 max-w-sm ${
            isDark ? "border-[#e5c158] bg-[#0f1013] text-stone-100" : "border-stone-900 bg-white text-stone-900"
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              isDark ? "bg-[#e5c158]/20 text-[#e5c158]" : "bg-stone-900 text-stone-100"
            }`}>
              <Award className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold">KREASYON KAYDEDİLDİ</p>
              <p className="text-xs font-serif font-black">{displaySavedName}</p>
            </div>
          </div>
        </div>
      )}

      {/* GAME PLAYGROUND LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: THE INTERACTIVE MIRROR STAGE (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          
          <div className="w-full text-center">
            <span className={`text-[10px] font-mono tracking-widest uppercase font-black ${isDark ? "text-stone-400" : "text-stone-500"}`}>
              🪞 RE-FINE MAKEUP MIRROR / KADİFE AYNA
            </span>
          </div>

          {/* Mirror Round frame with cosmetic lights */}
          <div 
            className={`w-full aspect-[4/5] sm:aspect-square rounded-full border-12 max-w-sm relative overflow-hidden transition-all duration-500 shadow-2xl flex flex-col items-center justify-center ${
              isDark 
                ? "bg-[#101115] border-stone-800 shadow-[0_30px_70px_rgba(0,0,0,0.8)]" 
                : "bg-stone-50 border-stone-200/90 shadow-[0_15px_45px_rgba(0,0,0,0.1)]"
            }`}
            style={{
              borderColor: isDark ? "#282932 #181920 #2e2f3a #090a0d" : "#f1f5f9 #e2e8f0 #cbd5e1 #f8fafc"
            }}
          >
            {/* Mirror reflection streak */}
            <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] rounded-full"></div>
            
            {/* Hollywood physical mini bulbs on frame (8 light points) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-100 ring-2 ring-amber-300 animate-pulse z-40 shadow-md"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-100 ring-2 ring-amber-300 animate-pulse z-40 shadow-md"></div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-100 ring-2 ring-amber-300 animate-pulse z-40 shadow-md"></div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-100 ring-2 ring-amber-300 animate-pulse z-40 shadow-md"></div>
            
            <div className="absolute top-1/5 left-1/5 w-2 h-2 rounded-full bg-amber-100 ring-2 ring-amber-350 opacity-90 z-40"></div>
            <div className="absolute top-1/5 right-1/5 w-2 h-2 rounded-full bg-amber-100 ring-2 ring-amber-350 opacity-90 z-40"></div>
            <div className="absolute bottom-1/5 left-1/5 w-2 h-2 rounded-full bg-amber-100 ring-2 ring-amber-350 opacity-90 z-40"></div>
            <div className="absolute bottom-1/5 right-1/5 w-2 h-2 rounded-full bg-amber-100 ring-2 ring-amber-350 opacity-90 z-40"></div>

            {/* HIGH-FIDELITY 3D-EFFECT VECTOR MODEL SVG */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-4/5 h-4/5 z-10 transition-all duration-300 select-none pointer-events-none"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))"
              }}
            >
              <defs>
                {/* 3D Hair Gradients */}
                <linearGradient id="hairGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0c0705" />
                  <stop offset="100%" stopColor="#1e120e" />
                </linearGradient>
                <linearGradient id="hairGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3d261c" />
                  <stop offset="35%" stopColor="#523528" />
                  <stop offset="70%" stopColor="#251610" />
                  <stop offset="100%" stopColor="#0a0504" />
                </linearGradient>
                <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>

                {/* 3D Skin & Volumetric Face contouring */}
                <radialGradient id="face3DSpherical" cx="50%" cy="38%" r="65%">
                  <stop offset="0%" stopColor="#FFF2ED" />
                  <stop offset="55%" stopColor="#FAD8CE" />
                  <stop offset="85%" stopColor="#F1BFB1" />
                  <stop offset="100%" stopColor="#D59A8D" />
                </radialGradient>
                <linearGradient id="chin3D" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FAD8CE" />
                  <stop offset="100%" stopColor="#C2877A" />
                </linearGradient>

                {/* Neck Shading */}
                <linearGradient id="neckShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(100, 60, 52, 0.55)" />
                  <stop offset="40%" stopColor="#D9A093" />
                  <stop offset="100%" stopColor="#C08477" />
                </linearGradient>

                {/* Cheek highlights (high-definition volume) */}
                <radialGradient id="cheekGlossLeft" cx="34%" cy="60%" r="15%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>
                <radialGradient id="cheekGlossRight" cx="66%" cy="60%" r="15%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>

                {/* Realistic Eyes elements */}
                <radialGradient id="irisGrad" cx="45%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#5ea79c" />
                  <stop offset="50%" stopColor="#2c7268" />
                  <stop offset="100%" stopColor="#0b2c28" />
                </radialGradient>
                <radialGradient id="eyeballShadow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="80%" stopColor="#ECECEF" />
                  <stop offset="100%" stopColor="#CCCCCC" />
                </radialGradient>

                {/* Eyeshadow Gradient for soft airbrushed spill */}
                <radialGradient id="shadowGradLeft" cx="37%" cy="47%" r="18%">
                  <stop offset="0%" stopColor={currentShadow.hex} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={currentShadow.hex} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={currentShadow.hex} stopOpacity="0" />
                </radialGradient>
                <radialGradient id="shadowGradRight" cx="63%" cy="47%" r="18%">
                  <stop offset="0%" stopColor={currentShadow.hex} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={currentShadow.hex} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={currentShadow.hex} stopOpacity="0" />
                </radialGradient>

                {/* Blush Soft Gradient */}
                <radialGradient id="blushGradLeft" cx="32%" cy="61%" r="20%">
                  <stop offset="0%" stopColor={currentBlush.hex} stopOpacity="0.65" />
                  <stop offset="45%" stopColor={currentBlush.hex} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={currentBlush.hex} stopOpacity="0" />
                </radialGradient>
                <radialGradient id="blushGradRight" cx="68%" cy="61%" r="20%">
                  <stop offset="0%" stopColor={currentBlush.hex} stopOpacity="0.65" />
                  <stop offset="45%" stopColor={currentBlush.hex} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={currentBlush.hex} stopOpacity="0" />
                </radialGradient>

                {/* 3D Lips Soft Volume and Highlights */}
                <linearGradient id="lipsSplitShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                </linearGradient>
              </defs>

              {/* 1. LAYER 3D HAIR BACKDROP */}
              <path 
                d="M80 140 C50 200, 50 280, 80 340 C100 350, 110 320, 110 240 C110 160, 95 140, 80 140 Z" 
                fill="url(#hairGradBack)" 
              />
              <path 
                d="M320 140 C350 200, 350 280, 320 340 C300 350, 290 320, 290 240 C290 160, 305 140, 320 140 Z" 
                fill="url(#hairGradBack)" 
              />
              <path 
                d="M90 120 C90 50, 310 50, 310 120 C325 180, 315 280, 300 320 T260 360 C230 355, 170 355, 140 360 T100 320 C85 280, 75 180, 90 120 Z" 
                fill="url(#hairGradBack)" 
              />

              {/* 2. 3D EARS */}
              <circle cx="96" cy="205" r="16" fill="#FAA898" />
              <circle cx="96" cy="205" r="10" fill="#E88B7B" opacity="0.8" />
              <circle cx="304" cy="205" r="16" fill="#FAA898" />
              <circle cx="304" cy="205" r="10" fill="#E88B7B" opacity="0.8" />

              {/* 3. 3D NECK & SHADOW */}
              <path d="M165 280 L165 365 C165 385, 235 385, 235 365 L235 280 Z" fill="url(#neckShadow)" />
              {/* Collar bones */}
              <path d="M165 348 Q200 360 235 348" stroke="#AE7163" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
              <path d="M200 280 Q200 310 160 325" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />
              <path d="M200 280 Q200 310 240 325" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />

              {/* 4. MAIN FACE SHAPE WITH 3D SPHERICAL SKIN CONTOUR */}
              <path 
                d="M105 160 C105 265, 130 325, 200 325 C270 325, 295 265, 295 160 C295 110, 105 110, 105 160 Z" 
                fill="url(#face3DSpherical)" 
              />

              {/* 3D Chin crease & Volume highlights */}
              <ellipse cx="200" cy="310" rx="14" ry="7" fill="url(#chin3D)" opacity="0.6" />

              {/* 5. BLUSH LAYER (Elmacık Kemikleri) */}
              {selectedBlush !== "yok" && (
                <>
                  {/* Volumetric left cheek blush */}
                  <ellipse cx="145" cy="235" rx="32" ry="24" fill="url(#blushGradLeft)" />
                  {/* Volumetric right cheek blush */}
                  <ellipse cx="255" cy="235" rx="32" ry="24" fill="url(#blushGradRight)" />
                </>
              )}

              {/* Cheeks High Gloss Highlighter Highlight Spots */}
              <ellipse cx="138" cy="225" rx="14" ry="7" fill="url(#cheekGlossLeft)" transform="rotate(-15, 138, 225)" />
              <ellipse cx="262" cy="225" rx="14" ry="7" fill="url(#cheekGlossRight)" transform="rotate(15, 262, 225)" />

              {/* Forehead Highlight glow */}
              <ellipse cx="200" cy="140" rx="45" ry="18" fill="rgba(255, 255, 255, 0.28)" />

              {/* 6. NOSE 3D BRIDGE AND SHADOW */}
              {/* Nose side shadow */}
              <path d="M190 185 Q195 210 191 245 Q200 252 209 245" fill="none" stroke="rgba(164,103,91,0.28)" strokeWidth="6" strokeLinecap="round" />
              {/* Nose bridge bone 3D shiny highlight line */}
              <path d="M200 182 L200 238" stroke="rgba(255, 255, 255, 0.72)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Nose Tip round bulb definition */}
              <circle cx="200" cy="242" r="5" fill="#FFF2ED" opacity="0.9" />
              <circle cx="200" cy="241" r="2.5" fill="#FFF" />
              <path d="M191 245 Q200 251 209 245" stroke="#AE6F62" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* 7. EYESHADOW LAYER (Göz kapağına pürüzsüz yayılım) */}
              {selectedShadow !== "yok" && (
                <>
                  {/* Left Eyeshadow */}
                  <ellipse cx="152" cy="190" rx="24" ry="16" fill="url(#shadowGradLeft)" />
                  {/* Right Eyeshadow */}
                  <ellipse cx="248" cy="190" rx="24" ry="16" fill="url(#shadowGradRight)" />
                  
                  {/* Sparkle detailing if champagne/glitter */}
                  {selectedShadow === "sampanya" && (
                    <>
                      <circle cx="152" cy="186" r="2" fill="#FFF" opacity="0.9" />
                      <circle cx="144" cy="192" r="1" fill="#FFF" opacity="0.7" />
                      <circle cx="159" cy="184" r="1.5" fill="#FFF9DF" opacity="0.85" />
                      
                      <circle cx="248" cy="186" r="2" fill="#FFF" opacity="0.9" />
                      <circle cx="240" cy="192" r="1" fill="#FFF" opacity="0.7" />
                      <circle cx="255" cy="184" r="1.5" fill="#FFF9DF" opacity="0.85" />
                    </>
                  )}
                </>
              )}

              {/* 8. EYEBROWS (3D Microblading-effect strokes) */}
              {/* Eyebrow base shadow */}
              <path d="M125 180 Q152 168 175 182" stroke="rgba(40, 24, 18, 0.25)" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M125 180 Q152 168 175 182" stroke="#21120B" strokeWidth="4" strokeLinecap="round" fill="none" />
              
              <path d="M275 180 Q248 168 225 182" stroke="rgba(40, 24, 18, 0.25)" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M275 180 Q248 168 225 182" stroke="#21120B" strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* 9. REALISTIC 3D OPEN EYES IMPLEMENTATION */}
              {/* Left Eyeball */}
              <path d="M134 192 C134 192, 142 181, 152 181 C162 181, 170 192, 170 192 C170 192, 162 201, 152 201 C142 201, 134 192, 134 192 Z" fill="url(#eyeballShadow)" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
              {/* Right Eyeball */}
              <path d="M230 192 C230 192, 238 181, 248 181 C258 181, 266 192, 266 192 C266 192, 258 201, 248 201 C238 201, 230 192, 230 192 Z" fill="url(#eyeballShadow)" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

              {/* Left Eye Iris */}
              <g>
                <circle cx="152" cy="191" r="7.5" fill="url(#irisGrad)" />
                <circle cx="152" cy="191" r="3.5" fill="#121212" />
                {/* Shiny reflex */}
                <circle cx="149.5" cy="188.5" r="2" fill="#FFFFFF" opacity="0.9" />
                <circle cx="154.5" cy="193.5" r="0.8" fill="#FFFFFF" opacity="0.75" />
              </g>

              {/* Right Eye Iris */}
              <g>
                <circle cx="248" cy="191" r="7.5" fill="url(#irisGrad)" />
                <circle cx="248" cy="191" r="3.5" fill="#121212" />
                {/* Shiny reflex */}
                <circle cx="245.5" cy="188.5" r="2" fill="#FFFFFF" opacity="0.9" />
                <circle cx="250.5" cy="193.5" r="0.8" fill="#FFFFFF" opacity="0.75" />
              </g>

              {/* Eyelid fold (Katlanma çizgisi derinliği) */}
              <path d="M135 186 Q152 178 169 186" stroke="#AE7163" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M231 186 Q248 178 265 186" stroke="#AE7163" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

              {/* 10. EYELINER AND LASHES ON TOP OF EYE */}
              {selectedEyeliner !== "yok" && (
                <>
                  {selectedEyeliner === "ince" && (
                    <>
                      {/* Left Eye Fine line */}
                      <path d="M134 192 Q152 181 170 192" stroke="#121212" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                      {/* Right Eye Fine line */}
                      <path d="M230 192 Q248 181 266 192" stroke="#121212" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                    </>
                  )}
                  {selectedEyeliner === "kuyruklu" && (
                    <>
                      {/* Left eye dramatic wing */}
                      <path d="M123 183 L134 190 Q152 181 170 192" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                      <path d="M134 190 L123 183 C128 187, 131 188, 134 190 Z" fill="#000000" />

                      {/* Right eye dramatic wing */}
                      <path d="M230 192 Q248 181 266 190 L277 183" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                      <path d="M266 190 L277 183 C272 187, 269 188, 266 190 Z" fill="#000000" />
                    </>
                  )}
                </>
              )}

              {/* Elegant realistic eyelashes */}
              <g stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
                {/* Left eye outer lashes */}
                <path d="M134 192 Q130 188 128 184" />
                <path d="M140 189 Q137 184 135 180" />
                <path d="M147 187 Q145 181 144 178" />
                <path d="M154 187 Q154 181 154 178" />
                <path d="M162 188 Q164 182 166 179" />
                {/* Right eye outer lashes */}
                <path d="M266 192 Q270 188 272 184" />
                <path d="M260 189 Q263 184 265 180" />
                <path d="M253 187 Q255 181 256 178" />
                <path d="M246 187 Q246 181 246 178" />
                <path d="M238 188 Q236 182 234 179" />
              </g>

              {/* 11. 3D GLOSSY LIPSTICK LAYER */}
              {/* Lips backdrop skin shading */}
              <ellipse cx="200" cy="283" rx="36" ry="13" fill="#DF9F91" opacity="0.45" />

              {/* Under-lip 3D shadow cast on chin */}
              <path d="M174 294 Q200 304 226 294" stroke="#BD7B6E" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.4" />

              {/* Upper Lip volume */}
              <path 
                d="M165 281 C175 271, 188 271, 198 276 C200 277, 201 277, 202 276 C212 271, 225 271, 235 281 C223 290, 177 290, 165 281 Z" 
                fill={selectedLip === "yok" ? "#EAA99E" : currentLip.hex} 
              />
              <path 
                d="M165 281 C175 271, 188 271, 198 276 C200 277, 201 277, 202 276 C212 271, 225 271, 235 281 Z" 
                fill="rgba(255,255,255,0.18)" 
              />

              {/* Lower Lip volume */}
              <path 
                d="M165 281 C175 298, 225 298, 235 281 C210 286, 190 286, 165 281 Z" 
                fill={selectedLip === "yok" ? "#DF968A" : currentLip.hex} 
              />
              <path 
                d="M165 281 C175 298, 225 298, 235 281 Z" 
                fill="rgba(0,0,0,0.06)" 
              />

              {/* Lips center dividing line shadow depth */}
              <path d="M165 281 Q200 285 235 281" stroke="url(#lipsSplitShadow)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Soft Lip Highlight streak for 3D glassy realism */}
              {selectedLip !== "yok" && (
                <>
                  {/* Wet Gloss highlights */}
                  <path d="M178 283 Q190 280 196 281" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.65" />
                  <path d="M178 285 Q200 293 222 285" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
                  {/* Cupid's bow glow */}
                  <path d="M194 274 Q200 271 206 274" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
                </>
              )}

              {/* 12. LAYER OVERLAY 3D HAIR FRAME (BANGS & FOREHEAD SHADOWS) */}
              {/* Hair Front pieces falling naturally around cheekbones */}
              <path 
                d="M90 120 C100 80, 150 80, 170 120 C175 130, 150 160, 130 180 C110 200, 105 240, 108 280 C100 280, 85 200, 90 120 Z" 
                fill="url(#hairGradFront)" 
              />
              <path 
                d="M310 120 C300 80, 250 80, 230 120 C225 130, 250 160, 270 180 C290 200, 295 240, 292 280 C300 280, 315 200, 310 120 Z" 
                fill="url(#hairGradFront)" 
              />
              {/* Glossy Hair Highlights overlay */}
              <path 
                d="M90 120 C100 80, 150 80, 170 120 C175 130, 150 160, 130 180" 
                stroke="url(#hairHighlight)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.35" 
              />
              <path 
                d="M310 120 C300 80, 250 80, 230 120 C225 130, 250 160, 270 180" 
                stroke="url(#hairHighlight)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.35" 
              />
            </svg>

            {/* Simulated Live Title label at bottom glass of mirror */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-11/12 text-center pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-stone-950/85 border border-[#e5c158]/50 shadow-lg inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#e5c158] animate-spin" />
                <span className="text-[10px] font-serif font-black text-white tracking-widest uppercase">
                  {autoLookName}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons under the stage mirror */}
          <div className="flex gap-2.5 w-full max-w-sm justify-center">
            
            <button
              onClick={handleReset}
              className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl border text-[10px] uppercase font-black tracking-widest cursor-pointer transition-colors ${
                isDark 
                  ? "bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-850" 
                  : "bg-white border-stone-250 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>TEMİZLE</span>
            </button>

            <button
              onClick={handleSaveLook}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-[10px] uppercase font-black tracking-widest cursor-pointer transition-all ${
                isDark 
                  ? "bg-gradient-to-r from-stone-200 to-stone-400 text-stone-950 hover:brightness-110 shadow-lg" 
                  : "bg-stone-900 text-white hover:bg-stone-850 shadow-md"
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Görünümü Kaydet</span>
            </button>

          </div>

        </div>

        {/* RIGHT COLUMN: RE-FINE PRODUCTS COMPACTS CONTROLS (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          <span className={`text-[10.5px] font-mono tracking-widest uppercase font-black block ${isDark ? "text-stone-400" : "text-stone-550"}`}>
            💄 MAKEUP ORGANIZER / ÜRÜN ÇEKMECELERİ
          </span>

          {/* SECTION 1: LIPSTICKS COMPACT */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            isDark ? "bg-stone-950/50 border-stone-850" : "bg-white border-stone-200 shadow-sm"
          }`}>
            <span className="text-[9px] font-mono font-black tracking-widest text-[#e5c158] uppercase block mb-3">
              ⚜ DUDAKLAR / LIPSTICK ARCHITECT
            </span>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {lipsOptions.map((lip) => {
                const isSelected = selectedLip === lip.id;
                return (
                  <button
                    key={lip.id}
                    onClick={() => setSelectedLip(lip.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all relative ${
                      isSelected 
                        ? isDark ? "border-[#e5c158] bg-stone-900" : "border-stone-900 bg-stone-50" 
                        : isDark ? "border-stone-900 bg-stone-950 hover:bg-stone-900/40" : "border-stone-150 bg-white hover:bg-stone-50"
                    }`}
                  >
                    {/* Circle representing bullet shape color */}
                    <div 
                      className={`w-6 h-6 rounded-full shadow-inner border border-stone-800/20 relative flex items-center justify-center`}
                      style={{ backgroundColor: lip.hex }}
                    >
                      {lip.id === "yok" && <span className="text-[9px] text-[#888] font-mono">X</span>}
                      {isSelected && <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />}
                    </div>
                    
                    <span className="text-[9px] font-serif font-black text-center leading-tight truncate w-full">
                      {lip.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: EYESHADOW COMPACTS */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            isDark ? "bg-stone-950/50 border-stone-850" : "bg-white border-stone-200 shadow-sm"
          }`}>
            <span className="text-[9px] font-mono font-black tracking-widest text-amber-500 uppercase block mb-3">
              👁️ FAR PALETİ / COMPACT QUAD EYE SHADOWS
            </span>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {shadowOptions.map((shadow) => {
                const isSelected = selectedShadow === shadow.id;
                return (
                  <button
                    key={shadow.id}
                    onClick={() => setSelectedShadow(shadow.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all relative ${
                      isSelected 
                        ? isDark ? "border-[#e5c158] bg-stone-900" : "border-stone-900 bg-stone-50" 
                        : isDark ? "border-stone-900 bg-stone-950 hover:bg-stone-900/40" : "border-stone-150 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div 
                      className={`w-6 h-6 rounded-md shadow-inner border border-stone-800/20 relative flex items-center justify-center`}
                      style={{ backgroundColor: shadow.id === "sampanya" ? "#F5DEB3" : shadow.hex }}
                    >
                      {shadow.id === "yok" && <span className="text-[9px] text-[#888] font-mono">X</span>}
                      {isSelected && <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />}
                      {shadow.id === "sampanya" && (
                        <div className="absolute inset-0 bg-radial from-amber-100 to-transparent opacity-25"></div>
                      )}
                    </div>
                    
                    <span className="text-[9px] font-serif font-black text-center leading-tight truncate w-full">
                      {shadow.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: BLUSHES ORGANIZER */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            isDark ? "bg-stone-950/50 border-stone-850" : "bg-white border-stone-200 shadow-sm"
          }`}>
            <span className="text-[9px] font-mono font-black tracking-widest text-[#e87e5b] uppercase block mb-3">
              🌸 YANAK ALLIĞI / FLUSH COMPRESSED BLUSH
            </span>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {blushOptions.map((blush) => {
                const isSelected = selectedBlush === blush.id;
                return (
                  <button
                    key={blush.id}
                    onClick={() => setSelectedBlush(blush.id)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all relative ${
                      isSelected 
                        ? isDark ? "border-[#e5c158] bg-stone-900" : "border-stone-900 bg-stone-50" 
                        : isDark ? "border-stone-900 bg-stone-950 hover:bg-stone-900/40" : "border-stone-150 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div 
                      className={`w-6 h-6 rounded-full shadow-inner border border-stone-800/20 relative flex items-center justify-center`}
                      style={{ backgroundColor: blush.hex }}
                    >
                      {blush.id === "yok" && <span className="text-[9px] text-[#888] font-mono">X</span>}
                      {isSelected && <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />}
                    </div>
                    
                    <span className="text-[9px] font-serif font-black text-center leading-tight truncate w-full">
                      {blush.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: EYELINER SWEEPS */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            isDark ? "bg-stone-950/50 border-stone-850" : "bg-white border-stone-200 shadow-sm"
          }`}>
            <span className="text-[9px] font-mono font-black tracking-widest text-teal-500 uppercase block mb-3">
              👁️ EYELINER SEÇENEKLERİ / WING EYE SHAPES
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {eyelinerOptions.map((eye) => {
                const isSelected = selectedEyeliner === eye.id;
                return (
                  <button
                    key={eye.id}
                    onClick={() => setSelectedEyeliner(eye.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all relative ${
                      isSelected 
                        ? isDark ? "border-[#e5c158] bg-stone-900" : "border-stone-900 bg-stone-50" 
                        : isDark ? "border-stone-900 bg-stone-950 hover:bg-stone-900/40" : "border-stone-150 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="text-left">
                      <span className="text-[10px] font-serif font-black block leading-snug">
                        {eye.name}
                      </span>
                      <span className="text-[8px] text-stone-500 block leading-tight font-mono">
                        {eye.label}
                      </span>
                    </div>

                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected 
                        ? isDark ? "bg-[#e5c158] border-transparent text-stone-950" : "bg-stone-900 border-transparent text-[#FFF]"
                        : "border-stone-300 dark:border-stone-800"
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* HISTORIC SAVED CREATIONS SHELF */}
          {savedLooks.length > 0 && (
            <div className={`p-5 rounded-2xl border transition-colors ${
              isDark ? "bg-stone-950/50 border-stone-850" : "bg-white border-stone-200 shadow-sm"
            }`}>
              <span className="text-[9px] font-mono font-black tracking-widest text-pink-500 uppercase block mb-3">
                ♛ MAKYAJ KREASYON RAFI / SAVED MASTERPIECES
              </span>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {savedLooks.map((look, idx) => (
                  <div 
                    key={idx}
                    className={`p-2.5 rounded-xl border flex justify-between items-center text-xs ${
                      isDark ? "bg-stone-900/40 border-stone-850/80" : "bg-stone-50 border-stone-150"
                    }`}
                  >
                    <div>
                      <span className={`font-serif font-black ${isDark ? "text-stone-300" : "text-stone-900"}`}>{look.name}</span>
                      <p className="text-[8px] font-mono text-stone-500 tracking-wider">KOD: {look.code}</p>
                    </div>
                    <span className="text-[9px] font-mono text-stone-400 font-bold">{look.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
