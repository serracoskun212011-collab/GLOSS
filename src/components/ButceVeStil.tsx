import React, { useState } from "react";
import { DollarSign, Percent, TrendingDown, Layers, Check, Sparkles } from "lucide-react";

export default function ButceVeStil() {
  const [selectedStyle, setSelectedStyle] = useState<string>("minimal");
  const [estimatedBudget, setEstimatedBudget] = useState<number>(500);

  // Style data descriptions
  const styleDescriptions: Record<string, { title: string; motto: string; stepsCount: string; details: string }> = {
    minimal: {
      title: "Zahmetsiz Minimalist Stil (Clean Girl)",
      motto: "Az ürünle, cildi boğmadan en pürüzsüz ve sağlıklı görünüşü elde etmek.",
      stepsCount: "Maksimum 4 Ürün",
      details: "Bu tarzın odak noktası kapatıcı, likit allık, şeffaf kaş jeli ve dudak parlatıcısından ibarettir. Ağır fondötenler kullanılmaz; sadece sağlıklı bir parlaklık ve nemlendirici baz istenir."
    },
    casual: {
      title: "Klasik Günlük Şıklık (Office Makeup)",
      motto: "Gün boyu bozulmayan, yarı mat, profesyonel ama samimi tınılar.",
      stepsCount: "Maksimum 6 Ürün",
      details: "Hafif kapatıcılığı olan su bazlı bir fondöten, soft toprak tonlarında far, bakışları açan maskara, nude bir ruj ve mat bitişli bir allık ile tamamlanır. Gün boyu kalıcı sabitleyici pudrayla mühürlenir."
    },
    glam: {
      title: "Görkemli Gece & Davet Işıltısı",
      motto: "Cüretkar bakışlar, pürüzsüz porselen ten ve iddialı kontür hatları.",
      stepsCount: "Maksimum 10 Ürün",
      details: "Gözenek gizleyici baz, yüksek kapatıcılıklı fondöten, transparan pudrayla sabitleme (baking), vurgulu aydınlatıcı, dumanlı göz makyajı (smoky eye), takma kirpik etkisi veren maskara ve iddialı dudak kalemi + ruj kombinasyonu."
    }
  };

  const styleInfo = styleDescriptions[selectedStyle];

  // Dupes catalog (affordable equivalents for expensive products)
  const dupes = [
    { premium: "Charlotte Tilbury Flawless Filter (~1850 TL)", dupe: "Maybelline 4-in-1 Glow (~420 TL)", saved: "1430 TL" },
    { premium: "Rare Beauty Likit Allık (~1200 TL)", dupe: "Pastel Show Your Grace Likit (~180 TL)", saved: "1020 TL" },
    { premium: "NARS Radiant Creamy Concealer (~1450 TL)", dupe: "Maybelline Fit Me Kapatıcı (~280 TL)", saved: "1170 TL" },
    { premium: "Estée Lauder Double Wear Fondöten (~1950 TL)", dupe: "L'Oréal Infallible 24H Fresh Wear (~390 TL)", saved: "1560 TL" }
  ];

  return (
    <div id="butce-ve-stil-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım Kartı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm col-span-1">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Bütçe & Stil Dengeleme Asistanı
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Makyaj yapmak servet harcamayı gerektirmez. Her bütçeye uygun akıllı eşleştirmeler ve ihtiyacınıza özel minimalist formüllerle bütçenizi kontrol edin. Kendi stilinizi ve harcama bareminizi belirleyin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Stil Seçici Sol Taraf */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-stone-900">Makyaj Stilini Belirle</h3>
            <p className="text-xs text-stone-500">Hangi stilin kozmetik felsefesi sana daha uygun?</p>
          </div>

          <div className="flex gap-2">
            {Object.keys(styleDescriptions).map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedStyle === style
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {style === "minimal" && "Minimalist"}
                {style === "casual" && "Günlük Şık"}
                {style === "glam" && "Gece Glam"}
              </button>
            ))}
          </div>

          <div className="p-5 bg-stone-50 rounded-xl space-y-3 border border-stone-100">
            <h4 className="font-serif text-base font-bold text-stone-900">{styleInfo.title}</h4>
            <p className="text-xs text-rose-600 italic">"{styleInfo.motto}"</p>
            <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-200">{styleInfo.details}</p>
            <div className="inline-block mt-2 px-3 py-1 bg-white border border-stone-250 text-stone-800 text-xs font-bold rounded-lg">
              Önerilen Çanta Yoğunluğu: {styleInfo.stepsCount}
            </div>
          </div>

          {/* Bütçe Hesaplama Kaydırıcı */}
          <div className="p-5 bg-stone-50 rounded-xl space-y-4 border border-stone-100">
            <div>
              <h4 className="font-semibold text-stone-950 text-sm">Akıllı Çanta Bütçe Simülatörü</h4>
              <p className="text-[11px] text-stone-500">Makyaj çantanıza ayırabileceğiniz yaklaşık bütçeyi seçin</p>
            </div>

            <div className="space-y-2">
              <input 
                type="range" 
                min={200} 
                max={3000} 
                step={100}
                value={estimatedBudget} 
                onChange={(e) => setEstimatedBudget(Number(e.target.value))}
                className="w-full accent-stone-900 bg-stone-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-stone-500 font-mono">
                <span>200 TL</span>
                <span>1500 TL</span>
                <span>3000+ TL</span>
              </div>
            </div>

            <div className="p-4 bg-stone-900 text-white rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-300 uppercase font-mono tracking-wider">Hedef Bütçe</span>
                <div className="text-xl font-bold font-mono">{estimatedBudget} TL</div>
              </div>
              <div className="text-right text-xs">
                {estimatedBudget < 800 && <span className="text-emerald-300">🌿 %100 Drugstore (Fiyat/Performans)</span>}
                {estimatedBudget >= 800 && estimatedBudget < 2000 && <span className="text-amber-300">✨ Karma (Seçmeli Lüks)</span>}
                {estimatedBudget >= 2000 && <span className="text-rose-300">👑 Lüks Sephora Segmenti</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Dupe Kurtarma Tüyoları */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-5">
          <div className="border-b border-stone-100 pb-2">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-1.5">
              <TrendingDown className="w-5 h-5 text-emerald-600" />
              Dupe (Muadil) Kahramanları
            </h3>
            <p className="text-xs text-stone-500">Servet harcamadan aynı bitişi veren efsane muadiller</p>
          </div>

          <div className="space-y-4">
            {dupes.map((item, idx) => (
              <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-100 relative overflow-hidden">
                <div className="text-xs text-stone-500 mb-1.5 font-semibold">Muadil Çift {idx + 1}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-400 block">Lüks Fiyat:</span>
                    <span className="text-stone-800 font-medium line-through">{item.premium}</span>
                  </div>
                  <div>
                    <span className="text-emerald-600 font-bold block">Muadil Bitki:</span>
                    <span className="text-emerald-800 font-semibold">{item.dupe}</span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-dashed border-stone-200 text-xs flex justify-between items-center text-emerald-800">
                  <span>Cebinizde Kalan Kazanç:</span>
                  <span className="font-bold underline">{item.saved}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
