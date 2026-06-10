import React, { useState } from "react";
import { MakeupGuide } from "../types";
import { 
  Sparkles, 
  Palette, 
  ShoppingBag, 
  AlertCircle, 
  Award, 
  Check, 
  Flame,
  UserCheck
} from "lucide-react";

interface AIGuideResultProps {
  guide: MakeupGuide;
  onReset: () => void;
}

export default function AIGuideResult({ guide, onReset }: AIGuideResultProps) {
  const [completedPrep, setCompletedPrep] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const togglePrep = (index: number) => {
    setCompletedPrep(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Safe helper to validate and render hex code
  const primaryColor = guide.colorPalette?.primary && guide.colorPalette.primary.startsWith("#") 
    ? guide.colorPalette.primary 
    : "#E28B73";

  return (
    <div id="ai-guide-result" className="space-y-8 animate-fade-in text-stone-100">
      {/* Alert if using mock mode */}
      {guide.isMock && (
        <div id="mock-alert" className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 text-xs">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
          <p className="leading-relaxed">
            <strong>Deneyim Modu Aktif:</strong> Şu anda bir Gemini API anahtarı eklenmediği için size özel önceden tasarlanmış örnek bir rehber gösterilmektedir. Kendi API anahtarınızı Settings &gt; Secrets bölümünden ekleyerek tam gerçek zamanlı yapay zeka analizini başlatabilirsiniz.
          </p>
        </div>
      )}

      {/* Hero Analiz Kartı */}
      <div id="profile-hero" className="relative overflow-hidden bg-gradient-to-r from-stone-900 to-stone-950 text-white border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-300/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Yapay Zeka Cilt Analizi
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-black tracking-wide text-white mb-3">
            Kişisel Cilt & Makyaj Profilin
          </h3>
          <p className="text-stone-300 leading-relaxed text-sm sm:text-base font-normal">
            {guide.skinProfileAnalysis}
          </p>
        </div>
      </div>

      {/* Renk Paleti Analizi */}
      <div id="color-palette-section" className="bg-stone-900/60 rounded-2xl p-6 border border-stone-800 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-stone-950 border border-stone-850 rounded-lg text-stone-300">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white">Sana En Çok Yakışacak Renkler</h4>
            <p className="text-xs text-stone-400">Alt tonuna göre belirlenmiş imza renk paletin</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-stone-950/40 rounded-xl border border-stone-850 text-center">
            {/* Canlı Renk Gösterici Ton */}
            <div 
              className="w-16 h-16 rounded-full shadow-inner mb-3 transition-transform hover:scale-110 duration-200 border border-white/20"
              style={{ backgroundColor: primaryColor }}
              title={guide.colorPalette?.undertoneName || "Renk Tonu"}
            />
            <span className="text-xs uppercase tracking-widest text-[#a1a1aa] font-mono font-bold">{primaryColor}</span>
            <div className="font-bold text-white mt-2 text-sm">
              {guide.colorPalette?.undertoneName || "Sıcak Alt Ton"}
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-stone-300 text-sm leading-relaxed font-normal">
              {guide.colorPalette?.explanation || "Seçilen bu renk tonu yüz hatlarınızı daha sıcak, dinç ve aydınlık gösterecektir. Allık, far ve ruj seçimlerinde bu referans rengi baz alabilirsiniz."}
            </p>
          </div>
        </div>
      </div>

      {/* Hazırlık & Uygulama Adımları */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Cilt Hazırlık Adımları */}
        <div id="prep-steps" className="bg-stone-900/60 rounded-2xl p-6 border border-stone-800 shadow-md">
          <h4 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-400" />
            Adım 1: Cilt Hazırlığı
          </h4>
          <p className="text-xs text-stone-400 mb-4 font-serif italic">Makyajın kusursuz durması için altın kurallar</p>
          
          <div className="space-y-3">
            {guide.skinPreparationSteps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => togglePrep(idx)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                  completedPrep[idx] 
                    ? "bg-emerald-500/10 border-emerald-505/20 opacity-60" 
                    : "bg-stone-950/40 border-stone-850/80 hover:border-stone-700"
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                  completedPrep[idx] 
                    ? "bg-emerald-500 border-emerald-500 text-stone-950" 
                    : "border-stone-700 text-transparent"
                }`}>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className={`text-sm text-stone-300 leading-relaxed ${completedPrep[idx] ? "line-through text-stone-500" : ""}`}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Makyaj Uygulama Adımları */}
        <div id="application-steps" className="bg-stone-900/60 rounded-2xl p-6 border border-stone-800 shadow-md">
          <h4 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-400" />
            Adım 2: Makyaj Uygulaması
          </h4>
          <p className="text-xs text-stone-400 mb-4 font-serif italic">Yapay zeka önerisiyle adım adım uygulama sırası</p>

          <div className="space-y-4">
            {guide.makeupApplicationSteps.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => toggleStep(idx)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  completedSteps[idx] 
                    ? "bg-rose-500/10 border-rose-505/20 opacity-60" 
                    : "bg-stone-950/40 border-stone-850/80 hover:border-stone-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-stone-800 text-stone-300 rounded border border-stone-700">
                    {item.phase}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    completedSteps[idx] 
                      ? "bg-rose-500 border-rose-500 text-stone-950" 
                      : "border-stone-700 text-transparent"
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
                <p className={`text-sm text-stone-200 font-medium ${completedSteps[idx] ? "line-through text-stone-500" : ""}`}>
                  {item.step}
                </p>
                {item.tip && (
                  <p className="text-xs text-rose-400 mt-1.5 font-sans flex items-start gap-1">
                    <span className="font-black uppercase tracking-wider text-[9px] shrink-0 mt-0.5 bg-rose-500/20 px-1 py-0.5 rounded mr-1">Tüyo:</span>
                    <span>{item.tip}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Ürün Tavsiyeleri karşılaştırma - Her Bütçeye */}
      <div id="products-recommendations" className="bg-stone-900/60 rounded-2xl p-6 border border-stone-800 shadow-md">
        <div className="flex items-center gap-3 mb-5 border-b border-stone-800 pb-3">
          <div className="p-2 bg-stone-950 border border-stone-850 rounded-lg text-stone-300">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-white">Akıllı Ürün Karşılaştırması</h4>
            <p className="text-xs text-stone-400">Bütçene uyan en popüler ve etkili ürün eşleşmeleri</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-stone-800 text-stone-450 text-xs uppercase tracking-wider">
                <th className="pb-3 font-semibold">Kategori</th>
                <th className="pb-3 font-semibold text-emerald-400">🌿 Bütçe Dostu (Drugstore)</th>
                <th className="pb-3 font-semibold text-amber-400">✨ Lüks Sınıf (High-End)</th>
                <th className="pb-3 font-semibold text-stone-400">Özellik / Kullanım Notu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-850">
              {guide.productRecommendations.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-950/50 transition-colors">
                  <td className="py-4 font-bold text-white pr-4">
                    {item.category}
                  </td>
                  <td className="py-4 text-stone-300 pr-4 font-sans text-xs">
                    <div className="font-bold text-stone-105">{item.ecoBrand.split('(')[0]}</div>
                    <span className="inline-block text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded mt-1 font-bold">
                      {item.ecoBrand.includes('(') ? item.ecoBrand.slice(item.ecoBrand.indexOf('(')) : "Ekonomik"}
                    </span>
                  </td>
                  <td className="py-4 text-stone-300 pr-4 font-sans text-xs">
                    <div className="font-bold text-stone-105">{item.premiumBrand.split('(')[0]}</div>
                    <span className="inline-block text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded mt-1 font-bold">
                      {item.premiumBrand.includes('(') ? item.premiumBrand.slice(item.premiumBrand.indexOf('(')) : "Lüks Segment"}
                    </span>
                  </td>
                  <td className="py-4 text-xs text-stone-400 max-w-xs leading-relaxed font-normal">
                    {item.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pro Makeup Tüyoları */}
      <div id="expert-tips" className="bg-stone-950/40 rounded-2xl p-6 border border-stone-800">
        <h4 className="font-serif text-base font-bold text-[#fafafa] mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          Profesyonel Makyaj Sanatçısı Tüyoları
        </h4>
        <ul className="space-y-2.5">
          {guide.proTips.map((tip, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-stone-300 leading-relaxed items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 animate-ping"></span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Yeniden Başlat Butonu */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onReset}
          className="px-8 py-3.5 bg-gradient-to-r from-stone-900 to-stone-950 hover:border-white text-stone-200 hover:text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 outline-none border border-stone-800 shadow-xl cursor-pointer"
        >
          Yeni Bir Analiz Yap ↺
        </button>
      </div>

    </div>
  );
}
