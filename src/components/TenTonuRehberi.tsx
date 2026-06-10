import React, { useState } from "react";
import { Palette, Layers, HelpCircle, Heart, Star } from "lucide-react";

interface UndertoneDetails {
  name: string;
  veins: string;
  sunEffect: string;
  goldSilver: string;
  bestColors: string[];
  lipstickAdvice: string;
  blushAdvice: string;
}

export default function TenTonuRehberi() {
  const [activeUndertone, setActiveUndertone] = useState<string>("neutral");

  const undertones: Record<string, UndertoneDetails> = {
    warm: {
      name: "Sıcak Alt Ton (Warm)",
      veins: "Bilek içi damarlar belirgin şekilde yeşil görünür.",
      sunEffect: "Güneşte kolayca bronzlaşır, nadiren kızarır ve soyulur.",
      goldSilver: "Altın takılar ciltte gümüş takılardan çok daha canlı ve uyumlu durur.",
      bestColors: ["Şeftali Tonları", "Kiremit Rengi", "Sıcak Altın", "Mercan", "Haki Yeşil", "Kahverengi"],
      lipstickAdvice: "Nude şeftaliler, sıcak kiremit kırmızıları, konyak tonları ve bakır ışıltılı parlatıcılar.",
      blushAdvice: "Kayısı, şeftali ve altın ışıltılı terracotta allıklar yüzünüzde büyüleyici duracaktır."
    },
    cool: {
      name: "Soğuk Alt Ton (Cool)",
      veins: "Bilek içi damarlar mavi/mor görünür.",
      sunEffect: "Güneşte hemen kızarır, ıstakoz gibi olur ve çok zor bronzlaşır.",
      goldSilver: "Gümüş takılar, altın takılara oranla ten rengini daha asil gösterir.",
      bestColors: ["Bebek Pembesi", "Mürdüm", "Soğuk Fuşya", "Gri / Gümüş", "Gece Mavisi", "Gül Kurusu"],
      lipstickAdvice: "Mavi alt tonlu soğuk kırmızılar, fuşya, bögürtlen tonları ve klasik soğuk pembe parlatıcılar.",
      blushAdvice: "Bebek pembesi, soğuk mürdüm ve leylak tonlarındaki allıklar cildinizi taze gösterecektir."
    },
    neutral: {
      name: "Nötr Alt Ton (Neutral)",
      veins: "Hem yeşil hem de mavi renkli damarlar bir arada fark edilir.",
      sunEffect: "Önce hafifçe kızarabilir fakat sonrasında rahatça bronz rengi yakalar.",
      goldSilver: "Hem altın hem de gümüş takılardan her ikisi de ciltte sırıtmadan şık durur.",
      bestColors: ["Nötr Bej", "Soft Gül Kurusu", "Zeytuni Yeşil", "Platin", "Toz Pembe", "Tuğla Rengi"],
      lipstickAdvice: "Hemen hemen her ruja mükemmel uyum sağlar. Sıcak ve soğuk dengesi olan klasik kahve-nude rujlar idealdir.",
      blushAdvice: "Zorlama olmayan pembe-şeftali karışık doğal gül kurusu allıklar en iyi sonucu verir."
    }
  };

  const current = undertones[activeUndertone];

  return (
    <div id="ten-tonu-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım Kartı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Cilt Alt Tonu Rehberi
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Makyajınızın cildinizle bütünleşmesi ve "çamurlu" durmaması için en önemli sır alt tonunuzu doğru bilmektir. Cildiniz çok açık veya çok koyu olabilir; ancak alt tonunuz her zaman Sıcak, Soğuk ya da Nötr kalır. Aşağıdaki pratik yöntemlerle alt tonunuzu keşfedin!
        </p>

        {/* Hızlı Rehber Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="font-bold text-stone-800 text-sm mb-1">🔍 1. Damar Testi</div>
              <p className="text-xs text-stone-600 leading-relaxed">Bilgilerinizin iç kısmındaki damarlarınızın genel yansıyan rengini gün ışığında kontrol edin.</p>
            </div>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="font-bold text-stone-800 text-sm mb-1">⬜ 2. Beyaz Kağıt Testi</div>
              <p className="text-xs text-stone-600 leading-relaxed">Makyajsız yüzünüzün yanına beyaz bir A4 kağıdı tutun. Cildiniz sarı duruyorsa sıcak, pembe duruyorsa soğuktur.</p>
            </div>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="font-bold text-stone-800 text-sm mb-1">💍 3. Takı Testi</div>
              <p className="text-xs text-stone-600 leading-relaxed">Hangi takının yüzünüzü daha parlak ve canlı gösterdiğine odaklanın. Altın vs. Gümüş!</p>
            </div>
          </div>
        </div>
      </div>

      {/* İnteraktif Keşif Kartı */}
      <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Alt Tonuna Göre Renk Reçetesi</h3>
            <p className="text-xs text-stone-500">Alt tonunu seçerek sana yakışan allık, ruj ve kıyafet renklerini gör</p>
          </div>
        </div>

        {/* Seçiciler */}
        <div className="flex gap-2.5 mb-6">
          <button
            onClick={() => setActiveUndertone("warm")}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeUndertone === "warm"
                ? "bg-amber-600 text-white shadow-md"
                : "bg-amber-50 hover:bg-amber-100 text-amber-900"
            }`}
          >
            Sıcak / Yeşil Damar ☀️
          </button>
          <button
            onClick={() => setActiveUndertone("cool")}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeUndertone === "cool"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-indigo-50 hover:bg-indigo-100 text-indigo-900"
            }`}
          >
            Soğuk / Mavi Damar ❄️
          </button>
          <button
            onClick={() => setActiveUndertone("neutral")}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeUndertone === "neutral"
                ? "bg-stone-800 text-white shadow-md"
                : "bg-stone-50 hover:bg-stone-100 text-stone-700"
            }`}
          >
            Nötr / Karışık Damar ⚖️
          </button>
        </div>

        {/* Detay Analiz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-50 rounded-xl p-5 border border-stone-100/80">
          
          {/* Sol: Karakteristik */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              {current.name}
            </h4>

            <div className="space-y-2.5 text-sm">
              <div className="flex gap-2">
                <span className="font-semibold text-stone-500">Damar Görünümü:</span>
                <span className="text-stone-800">{current.veins}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-stone-500">Güneş Reaksiyonu:</span>
                <span className="text-stone-800">{current.sunEffect}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-stone-500">Takı Seçimi:</span>
                <span className="text-stone-800">{current.goldSilver}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">Önerilen Güzellik Paletin</span>
              <div className="flex flex-wrap gap-1.5">
                {current.bestColors.map((color, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white border border-stone-200 rounded-lg text-stone-700 font-medium"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ: Ruj & Allık Tüyosu */}
          <div className="flex flex-col justify-center space-y-4 bg-white p-5 rounded-xl border border-stone-100 shadow-sm">
            <div>
              <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1 font-mono">RUJ SEÇİMİ</div>
              <p className="text-stone-700 text-sm leading-relaxed">{current.lipstickAdvice}</p>
            </div>
            <div className="border-t border-stone-100 pt-3">
              <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1 font-mono">ALLIK SEÇİMİ</div>
              <p className="text-stone-700 text-sm leading-relaxed">{current.blushAdvice}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
