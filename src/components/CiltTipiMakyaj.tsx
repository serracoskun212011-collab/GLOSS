import React, { useState } from "react";
import { Droplet, HelpCircle, CheckCircle, Sparkles, Smile, Flame } from "lucide-react";

interface SkinAnalysisCard {
  title: string;
  focus: string;
  problem: string;
  solution: string;
  tips: string[];
  productTypes: string[];
}

export default function CiltTipiMakyaj() {
  const [selectedSkinType, setSelectedSkinType] = useState<string>("karma");

  const skinTypesData: Record<string, SkinAnalysisCard> = {
    yagli: {
      title: "Yağlı Ciltler İçin Makyaj",
      focus: "Sebebi dengelemek ve parlamayı kontrol altına almak",
      problem: "Makyajın gün içinde akması, gözeneklerin belirginleşmesi ve T bölgesinde aşırı parlama.",
      solution: "Gözenek küçültücü matlaştırıcı bazlar, su bazlı likit fondötenler ve transparan sabitleme pudraları kullanın.",
      tips: [
        "Makyaja başlamadan önce mutlaka tonik ile fazla yağı arındırın.",
        "Yağsız, hafif formüllü (oil-free) nemlendiricileri tercih edin.",
        "Krem allıklar yerine toz formüllü pudra allık kullanın.",
        "Makyaj sabitleme spreyini makyaj ortasında ve sonunda olmak üzere çift kat uygulayın."
      ],
      productTypes: ["Matlaştırıcı Baz", "Pudra Fondöten", "Transparan Pudra", "Mat Sabitleme Spreyi"]
    },
    kuru: {
      title: "Kuru Ciltler İçin Makyaj",
      focus: "Yoğun neme doymuş, ışıltılı ve taze bir cilt",
      problem: "Fondötenin pullanması, ince çizgilere dolması ve mat/solgun duruş.",
      solution: "Gliserin veya hiyalüronik asit bazlı nemlendiriciler, ıslak bitişli (dewy) serum fondötenler ve likit aydınlatıcılar.",
      tips: [
        "Makyaja başlamadan en az 10 dakika önce zengin içerikli bir krem uygulayın.",
        "Toz sabitleme pudralardan mümkün olduğunca uzak durun; sadece göz altına hafifçe uygulayın.",
        "Mat rujlar yerine dudak yağları ve ıslak bitişli parlatıcılar kullanın.",
        "Gün içinde cildi tazelemek için her zaman çantanızda bir nem spreyi bulundurun."
      ],
      productTypes: ["Nemlendirici Serum", "Serum Fondöten", "Likit Aydınlatıcı", "Nemlendirici Yüz Spreyi"]
    },
    karma: {
      title: "Karma Ciltler İçin Makyaj",
      focus: "Bölgelere göre özel dengeleme (T bölgesi vs. Yanaklar)",
      problem: "T-bölgesinde parlama ve geniş gözenekler yaşanırken, yanaklarda kuruluk ve kabuklanma.",
      solution: "Multitasking tekniği: T-bölgesine matlaştırıcı baz, yanaklara ise ışıltı veren nemlendirici baz uygulayın.",
      tips: [
        "Fondöteni tüm yüze çok ince dağıtıp, kapatıcılığı dilediğiniz bölgelerde artırın.",
        "Yalnızca T-bölgesini sabitlemek için transparan pudra kullanın.",
        "Krem formlu allıkları yanakların dış tarafına doğru homojen bir şekilde yedirin.",
        "Su bazlı, hafif yapılı fondötenleri tercih edin."
      ],
      productTypes: ["Gözenek Gizleyici Baz", "Satensi Fondöten", "Likit Allık", "Dengeleyici Tonik"]
    },
    hassas: {
      title: "Hassas Ciltler İçin Makyaj",
      focus: "Kızarıklığı yatıştırmak ve bariyeri korumak",
      problem: "Makyaj malzemelerinin kaşıntı yapması, ani kızarıklıklar ve kuruma.",
      solution: "Temiz içerikli, parfümsüz, hipoalerjenik mineralli makyaj ürünleri ve yeşil renk düzenleyici (color corrector) bazlar.",
      tips: [
        "Yeşil renk düzeltici bazları sadece kızarık yanak ve burun kenarlarına uygulayın.",
        "Makyaj fırçalarınızı haftada en az bir kez yıkayarak bakteri birikimini önleyin.",
        "Ağır parfümlü kapatıcılardan kesinlikle kaçının.",
        "Makyajı temizlerken cildi çitilemeden misel suyla nazikçe silin."
      ],
      productTypes: ["Yeşil Renk Düzeltici", "Mineral Fondöten", "Yatıştırıcı Termal Su", "Parfümsüz Kapatıcı"]
    }
  };

  const activeData = skinTypesData[selectedSkinType];

  return (
    <div id="cilt-tipi-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Sayfa Giriş Bilgisi */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Cilt Tipine Göre Makyaj
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Doğru ve kalıcı bir makyajın ilk kuralı cildinizi tanımaktır. Yağlı, kuru, karma veya hassas bir cilt için farklı makyaj felsefeleri ve uygulama teknikleri gerekir. Cilt tipinizi seçerek size en uygun tüyoları hemen keşfedin.
        </p>

        {/* Seçim Butonları */}
        <div className="flex flex-wrap gap-2 mt-6">
          {Object.keys(skinTypesData).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedSkinType(type)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                selectedSkinType === type
                  ? "bg-stone-950 text-white shadow-md scale-102"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200/50"
              }`}
            >
              {type === "yagli" && "Yağlı Cilt"}
              {type === "kuru" && "Kuru Cilt"}
              {type === "karma" && "Karma Cilt"}
              {type === "hassas" && "Hassas Cilt"}
            </button>
          ))}
        </div>
      </div>

      {/* Seçilen Cilt Tipi Detayları */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Odak ve Problem ve Çözüm */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-5">
            <h3 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <Droplet className="w-6 h-6 text-rose-400" />
              {activeData.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Makyaj Odağı</div>
                <div className="text-sm text-stone-800 font-semibold">{activeData.focus}</div>
              </div>
              <div className="p-4 bg-red-50/55 rounded-xl border border-red-100/50">
                <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Sık Yaşanan Hata</div>
                <div className="text-sm text-red-800 font-semibold">{activeData.problem}</div>
              </div>
              <div className="p-4 bg-emerald-50/55 rounded-xl border border-emerald-100/50">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Doğru Yaklaşım</div>
                <div className="text-sm text-emerald-800 font-semibold">{activeData.solution}</div>
              </div>
            </div>

            <div className="space-y-3.5 pr-2 pt-2">
              <h4 className="font-serif text-lg font-bold text-stone-900">Uygulama Adımları & Öneriler</h4>
              <ul className="space-y-2.5">
                {activeData.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 text-stone-700 text-sm leading-relaxed items-start">
                    <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs shrink-0 font-mono mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sağ Kolon: Önerilen Ürün Tipleri */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-4">
          <h4 className="font-serif text-lg font-bold text-stone-950 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Vazgeçilmez Ürün Tipleri
          </h4>
          <p className="text-xs text-stone-500">
            Makyaj çantanızda bu cilt tipi için mutlaka bulunması tavsiye edilen kilit materyaller.
          </p>

          <div className="space-y-2.5 pt-2">
            {activeData.productTypes.map((prod, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <span className="text-sm font-semibold text-stone-800">{prod}</span>
              </div>
            ))}
          </div>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-xs text-stone-600 leading-relaxed mt-4">
            <strong>Uzman Önerisi:</strong> Cilt sağlığınız için makyajınızı uyumadan önce misel su ve uygun bir temizleyici jel ile çift aşamalı olarak yıkayın.
          </div>
        </div>

      </div>

    </div>
  );
}
