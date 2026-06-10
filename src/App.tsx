import React, { useState } from "react";
import { 
  Sparkles, 
  Search, 
  User, 
  DollarSign, 
  Eye, 
  HelpCircle, 
  Loader2, 
  CheckCircle,
  TrendingUp,
  Award,
  ChevronRight,
  Heart,
  Droplet,
  BookOpen,
  Smile,
  Flame,
  Layers,
  Users,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { UserSelections } from "./types";
import GlossaryCards from "./components/GlossaryCards";
import { useTheme } from "./context/ThemeContext";


// Import all nine newly created sub-page files
import FarPalettePage from "./components/FarPalettePage";
import MakyajMarkalariPage from "./components/MakyajMarkalariPage";
import CiltRehberiPage from "./components/CiltRehberiPage";
import YuzundeDenePage from "./components/YuzundeDenePage";
import MakyajOyunuPage from "./components/MakyajOyunuPage";

import MakyajCantasiIntro from "./components/MakyajCantasiIntro";
import CantaIciGorunumu from "./components/CantaIciGorunumu";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [isBagOpened, setIsBagOpened] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<string>("anasayfa");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  
  // Custom user profile state
  const [selections, setSelections] = useState<UserSelections>({
    skinType: "Karma Cilt",
    skinTone: "Buğday Ten",
    eyeColor: "Kahverengi",
    budgetPreference: "Karma (Hem Uygun Fiyat hem Lüks alternatif)",
    makeupStyle: "Doğal & Hafif (Clean Girl)",
    specificGoal: ""
  });

  // Suggested quick-search tag presets
  const quickSearchTags = [
    "Dumanlı Göz Makyajı",
    "Gelin Makyajı",
    "Kırmızı Ruj",
    "Isıl Işıl Highlighter",
    "Çilsiz Güneş Görünümü",
    "Eyeliner Çekme",
    "Pürüzsüz Porselen Ten"
  ];

  // Set preset goal from categories
  const handleSelectPresetGoal = (preset: string) => {
    setSelections(prev => ({
      ...prev,
      specificGoal: preset
    }));
    // Scroll smoothly to form
    const optionsSection = document.getElementById("skin-form-section");
    if (optionsSection) {
      optionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (field: keyof UserSelections, value: string) => {
    setSelections(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setSearchKeyword("");
    setSelections({
      skinType: "Karma Cilt",
      skinTone: "Buğday Ten",
      eyeColor: "Kahverengi",
      budgetPreference: "Karma (Hem Uygun Fiyat hem Lüks alternatif)",
      makeupStyle: "Doğal & Hafif (Clean Girl)",
      specificGoal: ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigation pages list
  const navItems = [
    { id: "anasayfa", label: "Ana Sayfa", icon: "✨" },
    { id: "cilt-tipine-gore", label: "Cilt Tipine Göre Makyaj", icon: "💧" },
    { id: "ten-tonu", label: "Ten Tonu Rehberi", icon: "🎨" },
    { id: "makyaj-koleksiyonlari", label: "Makyaj Koleksiyonları", icon: "💄" },
    { id: "renk-kutuphanesi", label: "Renk Kütüphanesi", icon: "🎨" },
    { id: "goz-sekline-gore", label: "Göz Şekline Göre Makyaj", icon: "👁️" },
    { id: "unlu-makyajlari", label: "Ünlü ve Trend Makyajları", icon: "⭐" },
    { id: "cilt-bakim", label: "Cilt Bakım Köşesi", icon: "🧴" },
    { id: "urun-karsilastirma", label: "Ürün Karşılaştırmaları", icon: "🛍️" },
    { id: "makyaj-sozlugu", label: "Makyaj Sözlüğü", icon: "📚" },
    { id: "makyaj-tarihi", label: "Makyaj Tarihi", icon: "🕰️" },
    { id: "sanal-makyaj-masasi", label: "Sanal Makyaj Masası", icon: "🪞" },
    { id: "cilt-rehberi", label: "Cilt Rehberi", icon: "📖" },
    { id: "makyaj-markalari", label: "Makyaj Markaları", icon: "🏷️" },
    { id: "yuzunde-dene", label: "Yüzünde Dene", icon: "🪞" },
    { id: "makyaj-oyunu", label: "Makyaj Oyunu", icon: "🎮" }
  ];

  if (!isBagOpened) {
    return <MakyajCantasiIntro onOpen={() => setIsBagOpened(true)} />;
  }

  return (
    <div 
      id="gloss-app" 
      className={`min-h-screen pb-16 font-sans relative selection:bg-amber-300 selection:text-stone-900 transition-colors duration-300 ${
        isDark ? "text-stone-100 bg-[#0d0d10]" : "text-stone-850 bg-[#F3F4F6]"
      }`}
      style={{
        backgroundImage: isDark
          ? `radial-gradient(circle at 50% 15%, #181920 0%, #08080b 70%),
             radial-gradient(circle at 10% 80%, #1c1d24 0%, transparent 45%),
             radial-gradient(circle at 90% 40%, #15161c 0%, transparent 45%)`
          : `radial-gradient(circle at 50% 15%, #ffffff 0%, #eef1f6 70%),
             radial-gradient(circle at 10% 80%, #cbd5e1 0%, transparent 45%),
             radial-gradient(circle at 90% 40%, #dbeafe 0%, transparent 45%)`
      }}
    >
      
      {/* Real Decorative Outer Metallic Zipper border detail framing the top of the app */}
      <div 
        className="w-full h-5 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 relative flex items-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] z-[60] border-b-2 border-stone-800/80 overflow-hidden" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(90deg, #BAC3D1 0px, #BAC3D1 5px, #4B5563 6px, #4B5563 11px)" 
        }}
      >
        <div className="absolute right-10 top-1/2 -translate-y-1/2 px-3 py-0.5 rounded bg-gradient-to-r from-[#c0992c] via-[#e5c158] to-[#f4df90] border border-[#a17e1b] shadow-md text-[8px] font-black font-mono text-stone-950 animate-pulse pointer-events-none">
          GLOSS HIGH-FIDELITY ZIPPER OPENED
        </div>
      </div>

      {/* GLOSS PREMIUM HEADER RAILS */}
      <header id="gloss-header" className={`border-b sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isDark ? "border-white/10 bg-black/50 text-stone-100" : "border-stone-200 bg-white/70 shadow-sm text-stone-800"
      }`}>
        <div className="max-w-6xl mx-auto px-4 h-21 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActivePage("anasayfa"); handleReset(); }} id="logo-action">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ffffff] via-[#d1d5db] to-[#9ca3af] flex items-center justify-center text-stone-950 font-serif font-black text-2xl tracking-tight shadow-lg select-none border-2 border-white/60">
              G
            </div>
            <div>
              <h1 className={`text-2xl sm:text-3xl font-serif font-black tracking-[0.2em] leading-none relative transition-colors duration-300 ${
                isDark ? "text-white" : "text-stone-950"
              }`}>
                GLOSS
                {isDark && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-pulse">
                    GLOSS
                  </span>
                )}
              </h1>
              <p className={`text-[9px] tracking-[0.18em] font-mono mt-1 uppercase font-bold transition-colors duration-300 ${
                isDark ? "text-[#BAC2CE]" : "text-stone-500"
              }`}>
                PRÉCISION BEAUTY ASSISTANT
              </p>
            </div>
          </div>

          {/* Social Creds / Desktop Tagline */}
          <div className={`hidden lg:flex items-center gap-2 text-xs font-serif italic px-5 py-2.5 rounded-full border shadow-inner transition-colors duration-300 ${
            isDark ? "text-white/90 bg-white/10 border-white/20" : "text-stone-750 bg-stone-100 border-stone-200"
          }`}>
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Siyah Kadife Organizer İçi - Dijital Güzellik Uzmanınız</span>
          </div>

          {/* Mobile Menu Action & Theme Selector */}
          <div className="flex items-center gap-2.5">
            {/* Elegant Luxury Theme Toggler Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold shadow-md cursor-pointer hover:scale-103 active:scale-97 select-none ${
                isDark 
                  ? "bg-stone-900 hover:bg-stone-850 text-white border-stone-850" 
                  : "bg-white hover:bg-stone-50 text-stone-900 border-stone-250"
              }`}
              title={isDark ? "Aydınlık Tema" : "Karanlık Tema"}
              id="theme-toggler"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="hidden sm:inline font-mono text-[9px] uppercase font-black tracking-widest text-stone-250">Aydınlık</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="hidden sm:inline font-mono text-[9px] uppercase font-black tracking-widest text-stone-700">Karanlık</span>
                </>
              )}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isDark 
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/20" 
                  : "bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-250"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 px-3.5 py-2 rounded-xl border border-emerald-500/40 text-[11px]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm"></span>
              <span className="text-emerald-400 font-extrabold uppercase tracking-wide">ORGANIZER AKTİF</span>
            </div>
          </div>

        </div>
      </header>

      {/* HORIZONTAL SCROLL NAVIGATION FOR DESKTOP */}
      <nav id="desktop-navbar" className={`hidden lg:block sticky top-20 z-40 border-b transition-all duration-300 ${
        isDark ? "bg-stone-950 text-white border-stone-800" : "bg-white text-stone-900 border-stone-200 shadow-sm"
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 overflow-x-auto py-1.5 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activePage === item.id 
                  ? "bg-rose-600 text-white shadow-sm" 
                  : isDark 
                    ? "text-stone-300 hover:bg-stone-850 hover:text-white"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* MOBILE DRAW MENU */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className={`lg:hidden fixed inset-x-0 top-20 border-b shadow-2xl z-40 animate-fade-in p-4 space-y-2 max-h-[80vh] overflow-y-auto duration-300 ${
          isDark ? "bg-stone-950/95 border-stone-850 text-stone-300" : "bg-white/95 border-stone-200 text-stone-800"
        }`} style={{ backdropFilter: "blur(15px)" }}>
          <div className={`text-[10px] uppercase tracking-wider font-extrabold mb-2 px-1 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>SİTE SAYFALARI</div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all flex items-center gap-3 border ${
                activePage === item.id 
                  ? "bg-rose-500 text-white border-rose-600 shadow-lg" 
                  : isDark
                    ? "bg-stone-900/60 hover:bg-stone-900 text-stone-300 border-stone-850/80 hover:border-stone-800"
                    : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* DYNAMIC CONTENT SWITCHER */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* PAGE 1: ANASAYFA */}
        {activePage === "anasayfa" && (
          <div id="home-view" className="space-y-12 animate-fade-in">
            
            {/* The 9 Golden Cosmetic Cards - The Makeup Bag Internal Organizer */}
            <section id="bag-interior-panel" className={`p-2 sm:p-5 border-2 rounded-3xl backdrop-blur-lg shadow-2xl relative transition-all duration-300 ${
              isDark ? "bg-[#13141c]/50 border-white/10" : "bg-white/80 border-stone-250/70"
            }`}>
              <CantaIciGorunumu 
                onCardSelect={(pageId) => {
                  setActivePage(pageId);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
                activePage={activePage} 
              />
            </section>

            {/* Hero Showcase Display Area */}
            <section id="gloss-hero" className="text-center pt-8 pb-4">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black mb-6 select-none shadow-md transition-colors duration-300 ${
                isDark ? "bg-gradient-to-r from-[#DFE3E8] via-white to-[#C5CAD4] text-stone-900" : "bg-stone-900 text-stone-100"
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Her Cilde, Her Tene, Her Bütçeye sloganı</span>
              </div>

              <h2 className={`text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-sm transition-colors duration-300 ${
                isDark ? "text-white" : "text-stone-900"
              }`}>
                Her Cilde, Her Tene, Her Bütçeye
              </h2>
              
              <p className={`mt-4 text-sm sm:text-base font-sans max-w-2xl mx-auto leading-relaxed p-4 rounded-xl border shadow-sm transition-all duration-300 ${
                isDark ? "text-stone-300 bg-stone-950/50 border-stone-800" : "text-stone-700 bg-white/60 border-stone-200"
              }`}>
                GLOSS ile gereksiz kozmetikleri bir kenara bırakın. Cilt tipinize, ten renginize ve belirlediğiniz bütçeye özel nokta atışı ürün önerileri ve rehber ile tanışın.
              </p>

              {/* Search Bar - Makyaj Arama */}
              <div className="max-w-2xl mx-auto mt-8 relative" id="search-bar-container">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Aklındaki makyaj hedefini yaz... (Örn: Çekici akşam makyajı, çilsiz günlük duruş, kırmızı ruj kombinleri vb.)"
                  className={`w-full pl-12 pr-28 py-4 rounded-2xl text-sm sm:text-base focus:ring-1 shadow-md transition-all outline-none ${
                    isDark 
                      ? "bg-stone-900/80 border-stone-800 text-stone-100 placeholder-stone-500 focus:border-stone-500 focus:ring-stone-500/50" 
                      : "bg-white border-stone-250 text-stone-850 placeholder-stone-400 focus:border-stone-400 focus:ring-stone-400/50"
                  }`}
                  style={{ backdropFilter: "blur(12px)" }}
                />
                <div className="absolute right-2 inset-y-1.5 flex items-center shadow-lg">
                  <button
                    onClick={() => {
                      if (searchKeyword.trim()) {
                        setSelections(prev => ({
                          ...prev,
                          specificGoal: searchKeyword
                        }));
                        const formSection = document.getElementById("skin-form-section");
                        if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`h-full px-5 text-xs font-black rounded-xl tracking-wide transition-all active:scale-95 shadow-md uppercase ${
                      isDark
                        ? "bg-gradient-to-r from-stone-200 via-white to-stone-300 hover:from-stone-300 hover:to-white text-stone-950"
                        : "bg-stone-900 text-stone-100 hover:bg-stone-800"
                    }`}
                  >
                    Ara & Uyarla
                  </button>
                </div>
              </div>

              {/* Quick Tags helper */}
              <div className="max-w-2xl mx-auto mt-4 flex flex-wrap gap-1.5 justify-center" id="quick-keywords">
                <span className={`text-xs py-1 mr-1 ${isDark ? 'text-stone-500' : 'text-stone-400'}`}>Önerilenler:</span>
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchKeyword(tag);
                      setSelections(prev => ({ ...prev, specificGoal: tag }));
                    }}
                    className={`text-xs px-3 py-1 rounded-full transition-all active:scale-95 cursor-pointer border ${
                      isDark 
                        ? "bg-stone-900 hover:bg-stone-850 text-stone-300 border-stone-800 hover:border-stone-700" 
                        : "bg-white hover:bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

            </section>

            {/* Grid Layout containing Form & Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Categories Insp & Formulation Inputs (8 cols on large) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* CATEGORIES CARD BOARD PANEL */}
                <div id="category-panel" className={`p-1 rounded-3xl backdrop-blur-md transition-all duration-300 ${
                  isDark ? "bg-stone-950/30 border border-stone-800" : "bg-white/40 border border-stone-200"
                }`}>
                  <div className={`p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in border transition-all duration-300 ${
                    isDark ? "bg-stone-950/60 border-stone-900" : "bg-white border-stone-200"
                  }`}>
                    <GlossaryCards 
                      onSelectCategory={handleSelectPresetGoal} 
                      activePreset={selections.specificGoal} 
                    />
                  </div>
                </div>

                {/* DYNAMIC FORMULATION SETTINGS -> CİLT REHBERİ YÖNLENDİRME */}
                <div id="skin-form-section" className={`rounded-3xl p-6 sm:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.15)] backdrop-blur-md relative overflow-hidden text-center space-y-6 border transition-all duration-300 ${
                  isDark ? "bg-stone-900/40 border-stone-850" : "bg-white border-stone-200"
                }`}>
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-stone-850 via-stone-400 to-stone-850"></div>

                  <div className="max-w-xl mx-auto space-y-3 py-4">
                    <div className="w-12 h-12 rounded-full bg-stone-950 border border-stone-800 text-stone-100 flex items-center justify-center text-xl mx-auto shadow-md">
                      📖
                    </div>
                    <h3 className={`font-serif text-2xl font-black tracking-wide transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-950'}`}>
                      Cilt Analizi & Ürün Kullanım Kılavuzu
                    </h3>
                    <p className={`text-xs leading-relaxed max-w-md mx-auto transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                      Cilt tipinizi, en çok karşılaştığınız endişeleri ve hedeflediğiniz makyaj görünümlerini girerek uzman dikişli kişiselleştirilmiş rehbere anında ulaşın.
                    </p>
                  </div>

                  <div className="pt-2 pb-4">
                    <button
                      onClick={() => { setActivePage("cilt-rehberi"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className={`w-full sm:w-auto px-8 py-4 text-stone-950 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer border inline-flex items-center justify-center gap-2 ${
                        isDark 
                          ? "bg-gradient-to-r from-stone-200 via-white to-stone-355 hover:from-white hover:to-stone-100 border-white/20" 
                          : "bg-stone-900 text-white hover:bg-stone-800 border-stone-700"
                      }`}
                    >
                      <span>Cilt Rehberi Sayfasına Git</span>
                      <span>⟶</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                
                <div className={`border rounded-2xl p-6 shadow-sm transition-all duration-300 ${
                  isDark ? "bg-stone-900/40 border-stone-800" : "bg-white border-stone-200"
                }`}>
                  <h4 className={`font-serif text-base font-extrabold mb-2 flex items-center gap-1.5 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-stone-900"
                  }`}>
                    <Award className="w-4.5 h-4.5 text-stone-400" />
                    GLOSS Felsefesi
                  </h4>
                  <p className={`text-xs leading-relaxed font-normal transition-colors duration-300 ${
                    isDark ? "text-stone-300" : "text-stone-600"
                  }`}>
                    Makyaj bir kurallar dizisi veya kusur kapatma telaşı değildir. Makyaj, kendinizi ifade etme ve en sevdiğiniz yüz hatlarını asilce ön plana çıkarma sanatıdır. GLOSS asistanı, makyaj sanatçılarının kullandığı gizli oran algoritmasını cildinize uyarlar.
                  </p>
                </div>

                {/* Navigation suggestions */}
                <div className={`rounded-2xl p-6 border shadow-sm space-y-4 transition-all duration-300 ${
                  isDark ? "bg-stone-900/40 border-stone-800" : "bg-white border-stone-200"
                }`}>
                  <h4 className={`font-serif text-sm font-extrabold transition-colors duration-300 ${
                    isDark ? "text-white" : "text-stone-950"
                  }`}>Diğer Özel Sayfalarimizi Keşfedin:</h4>
                  <div className="space-y-2">
                    <button onClick={() => { setActivePage("cilt-tipine-gore"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`w-full p-2.5 text-left text-xs rounded-lg flex items-center justify-between transition-colors cursor-pointer border ${
                      isDark 
                        ? "bg-stone-950/50 hover:bg-stone-900 text-stone-300 border-stone-800"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}>
                      <span>Cilt Tipine Göre Makyaj Rehberi</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => { setActivePage("ten-tonu"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`w-full p-2.5 text-left text-xs rounded-lg flex items-center justify-between transition-colors cursor-pointer border ${
                      isDark 
                        ? "bg-stone-950/50 hover:bg-stone-900 text-stone-300 border-stone-800"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}>
                      <span>Ten Tonu & Damar Analizleri</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => { setActivePage("unlu-makyajlari"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`w-full p-2.5 text-left text-xs rounded-lg flex items-center justify-between transition-colors cursor-pointer border ${
                      isDark 
                        ? "bg-stone-950/50 hover:bg-stone-900 text-stone-300 border-stone-800"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}>
                      <span>Ünlülerin Kırmızı Halı Sırları</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* CATEGORY PAGES: DETAILED LUXURY EYESHADOW PALETTE */}
        {activePage !== "anasayfa" && activePage !== "makyaj-markalari" && activePage !== "cilt-rehberi" && activePage !== "yuzunde-dene" && activePage !== "makyaj-oyunu" && (
          <FarPalettePage 
            pageId={activePage} 
            pageTitle={navItems.find(item => item.id === activePage)?.label || ""} 
            onBackToBag={() => { setActivePage("anasayfa"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
          />
        )}

        {/* DETAILED SKIN GUIDE PAGE (Cilt Rehberi) */}
        {activePage === "cilt-rehberi" && (
          <CiltRehberiPage 
            onBackToBag={() => { setActivePage("anasayfa"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
          />
        )}

        {/* DETAILED BRAND DOSSIERS PAGE */}
        {activePage === "makyaj-markalari" && (
          <MakyajMarkalariPage 
            onBackToBag={() => { setActivePage("anasayfa"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
          />
        )}

        {/* DETAILED "YÜZÜNDE DENE" DIGITAL MIRROR TRYON */}
        {activePage === "yuzunde-dene" && (
          <YuzundeDenePage 
            onBackToBag={() => { setActivePage("anasayfa"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
          />
        )}

        {/* DETAILED "MAKYAJ OYUNU" INTERACTIVE PLAYGROUND */}
        {activePage === "makyaj-oyunu" && (
          <MakyajOyunuPage 
            onBackToBag={() => { setActivePage("anasayfa"); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
          />
        )}

      </div>

      {/* FOOTER */}
      <footer className={`max-w-6xl mx-auto px-4 mt-20 border-t pt-8 text-center text-xs transition-colors duration-300 ${
        isDark ? "border-stone-800 text-stone-500" : "border-stone-200/60 text-stone-600"
      }`}>
        <div className={`flex justify-center items-center gap-1.5 font-serif font-black tracking-widest text-sm mb-2 ${
          isDark ? "text-stone-400 animate-pulse" : "text-stone-800"
        }`}>
          GLOSS
        </div>
        <p className="mb-4">Her Cilde, Her Tene, Her Bütçeye Özel Kişisel Makyaj Rehberi</p>
        <p className={`text-[10px] font-mono ${isDark ? 'text-stone-600' : 'text-stone-400'}`}>© 2026 GLOSS Inc. Tüm hakları saklıdır. Çevrimdışı Bölge Uzman Rehberi.</p>
      </footer>

    </div>
  );
}
