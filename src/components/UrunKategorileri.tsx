import React, { useState } from "react";
import { Sparkles, ShoppingBag, Eye, Heart, Layers, ToggleLeft } from "lucide-react";

interface Product {
  name: string;
  eco: string;
  luxury: string;
  whyNeeded: string;
  applicationTip: string;
}

export default function UrunKategorileri() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ten");

  const categoriesData: Record<string, { title: string; desc: string; items: Product[] }> = {
    ten: {
      title: "Ten Makyajı Ürünleri",
      desc: "Kusursuz, sağlıklı ve pürüzsüz görünen bir cildin mimarları.",
      items: [
        {
          name: "Makyaj Bazı (Primer)",
          eco: "Maybelline Fit Me Luminous Primer",
          luxury: "Smashbox Photo Finish Primer",
          whyNeeded: "Gözenekleri gizler, makyajın ömrünü uzatır ve aşırı parlamayı/pullanmayı önler.",
          applicationTip: "Parmak uçlarınızla tampon hareketlerle sadece gözenekli T-bölgesine tamponlayarak uygulayın."
        },
        {
          name: "Fondöten / BB Krem",
          eco: "L'Oréal True Match / Missha BB",
          luxury: "Estée Lauder Double Wear / NARS Sheer Glow",
          whyNeeded: "Ciltteki renk eşitsizliklerini giderir, lekeleri kapatarak tuval hazırlar.",
          applicationTip: "Nemli bir makyaj süngeriyle tampon hareketler yardımıyla ince bir tabaka halinde yayın."
        },
        {
          name: "Kapatıcı (Concealer)",
          eco: "Maybelline Instant Anti-Age Eraser",
          luxury: "NARS Radiant Creamy / Tarte Tape Shape",
          whyNeeded: "Göz altı morluklarını gizler ve sivilce lekelerini lokal olarak yok eder.",
          applicationTip: "Göz pınarına ve gözün dış köşesine yukarı doğru uygulayarak 'lifted' (yukarı çekilmiş) etki kazandırın."
        }
      ]
    },
    goz: {
      title: "Göz Makyajı Ürünleri",
      desc: "Anlamlı bakışlar ve çekici gölgelerin vazgeçilmezleri.",
      items: [
        {
          name: "Maskara (Rimel)",
          eco: "Maybelline Lash Sensational / Pastel",
          luxury: "Lancôme Hypnôse / Benefit Bad Gal Bang",
          whyNeeded: "Kirpikleri uzatır, hacim verir ve gözleri ardına kadar açarak dinç duruş kazandırır.",
          applicationTip: "Zikzak hareketlerle kirpik dibinden ucuna doğru tarayarak uygulayın."
        },
        {
          name: "Eyeliner / Göz Kalemi",
          eco: "Flormar Matte Waterproof / Golden Rose",
          luxury: "KVD Tattoo Liner / MAC Eye Kohl",
          whyNeeded: "Gözlerin şeklini belirginleştirir ve çekik görünmesini sağlar.",
          applicationTip: "Gözün dış köşesinden kaş bitimine doğru ince bir referans çizgisi çekerek başlayın."
        },
        {
          name: "Far Paleti",
          eco: "Wet n Wild Color Icon / Revolution",
          luxury: "Anastasia Beverly Hills / Huda Beauty",
          whyNeeded: "Göz kapağına derinlik verir, göz rengini kontrast renklerle ön plana çıkarır.",
          applicationTip: "Temiz ve yumuşak bir karıştırma fırçasıyla farı katlanma bölgesinde yumuşatın."
        }
      ]
    },
    dudak: {
      title: "Dudak & Yanak Ürünleri",
      desc: "Yüze canlılık, renk ve taze bir ruh katan dokunuşlar.",
      items: [
        {
          name: "Dudak Kalemi",
          eco: "Emily Lip Definer / Flormar",
          luxury: "MAC Lip Pencil (Stone / Spice) / Charlotte Tilbury",
          whyNeeded: "Rujun taşmasını önler ve dudakları daha dolgun, sınırları net gösterir.",
          applicationTip: "Dudak ortasından kenarlara doğru çizin, üst dudakta 'Cupid's Bow' (Aşk yayı) kısmını hafif taşırabilirsiniz."
        },
        {
          name: "Ruj & Likit Ruj",
          eco: "Golden Rose Velvet Matte / L'Oréal",
          luxury: "MAC Matte Ruj / Rare Beauty Tinted Lip Oil",
          whyNeeded: "Makyajın imza bitişini belirler; canlılık ve şıklık sunar.",
          applicationTip: "Dudak nemlendiricisini sürdükten 5 dakika sonra ruju uygulayarak pürüzsüz durmasını sağlayın."
        },
        {
          name: "Allık & Bronzlaştırıcı",
          eco: "Pastel Show Your Grace / Pastel Likit",
          luxury: "Rare Beauty Likit Allık / NARS Laguna Bronzer",
          whyNeeded: "Solgun cilde taze kan gelmişçesine sağlıklı ve güneş öpücüğü almış bir canlılık verir.",
          applicationTip: "Allığı elmacık kemiklerinizin üstüne tamponlayıp şakaklarınıza doğru hafifçe dağıtın."
        }
      ]
    }
  };

  const active = categoriesData[selectedCategory];

  return (
    <div id="urun-kategorileri-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım Kartı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Ürün Kategorileri Ansiklopedisi
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Hangi malzemenin ne işe yaradığını tam olarak biliyor musunuz? Makyaj çantanızı sadeleştirirken vazgeçilmez temel ürünleri detaylıca inceleyin, bütçe dostu ile lüks karşılaştırmalarına göz atın.
        </p>

        {/* Seçici Tablar */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setSelectedCategory("ten")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === "ten"
                ? "bg-stone-900 text-white"
                : "bg-white hover:bg-stone-50 text-stone-700 border border-stone-200"
            }`}
          >
            Ten Ürünleri ✨
          </button>
          <button
            onClick={() => setSelectedCategory("goz")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === "goz"
                ? "bg-stone-900 text-white"
                : "bg-white hover:bg-stone-50 text-stone-700 border border-stone-200"
            }`}
          >
            Göz Ürünleri 👀
          </button>
          <button
            onClick={() => setSelectedCategory("dudak")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === "dudak"
                ? "bg-stone-900 text-white"
                : "bg-white hover:bg-stone-50 text-stone-700 border border-stone-200"
            }`}
          >
            Dudak & Yanak 💄
          </button>
        </div>
      </div>

      {/* Dinamik Liste */}
      <div className="space-y-6">
        <div className="border border-stone-200/60 bg-white/40 p-1 rounded-3xl">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
            <div className="border-b border-stone-100 pb-3">
              <h3 className="font-serif text-xl font-bold text-stone-900">{active.title}</h3>
              <p className="text-xs text-stone-500 mt-1">{active.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {active.items.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between p-5 bg-stone-50/50 rounded-2xl border border-stone-100 shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <h4 className="font-serif text-base font-bold text-stone-900">{item.name}</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.whyNeeded}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-dashed border-stone-200/60">
                    <div className="text-[11px]">
                      <span className="font-semibold text-emerald-700 block">🌿 Bütçe Dostu Karşılığı:</span>
                      <span className="text-stone-800">{item.eco}</span>
                    </div>
                    <div className="text-[11px]">
                      <span className="font-semibold text-amber-700 block">✨ Lüks Alternatifi:</span>
                      <span className="text-stone-800">{item.luxury}</span>
                    </div>
                    <div className="mt-2 text-[11px] bg-rose-50/30 text-rose-800 p-2.5 rounded-lg">
                      <strong>Uygulama Sırrı:</strong> {item.applicationTip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
