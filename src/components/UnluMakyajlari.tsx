import React, { useState } from "react";
import { Sparkles, Star, ChevronRight, HelpCircle, Heart } from "lucide-react";

interface CelebrityMakeup {
  name: string;
  tagline: string;
  signatureStyle: string;
  colorPalette: string[];
  keyProducts: string[];
  howToRecreate: string[];
  idealFor: string;
}

export default function UnluMakyajlari() {
  const [selectedCeleb, setSelectedCeleb] = useState<string>("hailey");

  const celebrityStyles: Record<string, CelebrityMakeup> = {
    hailey: {
      name: "Hailey Bieber",
      tagline: "Glazed Donut & Ham Cilt Işıltısı",
      signatureStyle: "Neredeyse hiç fondöten dökülmemişçesine ıslak, cam gibi parlayan (glass skin) bir cilt ve minimalist kahve dudak kalemi.",
      colorPalette: ["Açık Kahve", "Bronz Parıltı", "Şeffaf Nem", "Soft Şeftali"],
      keyProducts: [
        "Sıvı Peptit Glazür veya Işıltı Veren Serum Baz",
        "Krem Kontür & Krem Allık",
        "Kahve Dudak Kalemi & Şeffaf Dudak Yağı"
      ],
      howToRecreate: [
        "Yoğun bir nemlendirici serumla cildinizi parlatarak işe başlayın.",
        "Fondöten yerine sadece göz altı ve burun kenarlarına çok ince kapatıcı dokundurun.",
        "Allığı elmacık kemiklerinin üzerine değil, şakaklarınıza yakın yukarı bölgeye sürün.",
        "Dudak kenarlarını soğuk kahve bir kalemle çerçeveleyip tam ortasını cam parlaklığında bir lip oil yardımıyla ıslatın."
      ],
      idealFor: "Kuru ve karma cilt yapısına sahip, eforsuz günlük şıklık arayanlar."
    },
    selena: {
      name: "Selena Gomez",
      tagline: "Soft Pink Flush & Masum Çekicilik",
      signatureStyle: "Göz alıcı pembe/şeftali yanaklar, dolgun doğal dudaklar ve hacimli, ay ışığı gibi duran yumuşak aydınlık cilt.",
      colorPalette: ["Toz Pembe", "Açık Gül Kurusu", "İnci Beyazı", "Yumuşak Nude"],
      keyProducts: [
        "Ultra Pigmentli Sıvı Allık (Rare Beauty tarzı)",
        "Aydınlık Bitişli Kapatıcı",
        "Gül Kurusu Mat Kadife Ruj"
      ],
      howToRecreate: [
        "Su bazlı, cildi taze gösteren hafif bir likit fondöten uygulayın.",
        "Likit allığınızdan yanaklarınıza sadece birer minik nokta koyup süngerle şakaklara doğru pıt pıt yaparak yayın.",
        "Göz kapağına da hafif pembelik vermesi için allık fırçasındaki kalıntıyı sürün.",
        "Rujunuzu parmak ucunuzla dudaklarınıza yedirerek flu bir sınır elde edin."
      ],
      idealFor: "Genç, taze, enerjik ve masum görünmek isteyen tüm cilt tonları."
    },
    adele: {
      name: "Adele",
      tagline: "60's Göz Alıcı Kedi Eyeliner & Mat Ten",
      signatureStyle: "Kusursuz mat bir ten, drama katan kalın kedi eyeliner çizgisi ve nude-kahve 90'lar mat ruj felsefesi.",
      colorPalette: ["Mat Bej", "Derin Siyah", "Çikolata Kahve", "Kül Grisi"],
      keyProducts: [
        "Mat Bitişli Tam Kapatıcı Fondöten",
        "Ultra Siyah Jel Eyeliner & Eyeliner Fırçası",
        "Hacim Katan Çift Kat Kirpik Etkili Maskara"
      ],
      howToRecreate: [
        "Cildi sabitleyen mat bir nemlendirici baz uyguladıktan sonra yüksek kapatıcı fondötenle pürüzsüz bir ton elde edin.",
        "Göz kapağına mat bir kemik rengi farı zemin yapın.",
        "Sıvı veya jel eyeliner ile dış köşeden kaş ortasına doğru cesur bir kuyruk uzatıp kirpiğe birleştirin.",
        "Kontür pudrası ile elmacık kemiklerinizin altını derinleştirip mat bir kahve/nude rujla görünümü tamamlayın."
      ],
      idealFor: "Davetlerde ve özel gecelerde bakışlarıyla odak noktası olmak isteyenler."
    }
  };

  const current = celebrityStyles[selectedCeleb];

  return (
    <div id="unlu-makyajlari-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım Kartı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Ünlülerin İkonik Makyaj Sırları
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Kırmızı halıda milyar dolarlık makyaj sanatçılarının uyguladığı, ünlülerin imzası haline gelmiş popüler makyaj görünümlerini mercek altına alıyoruz. Çok ucuz tüyolarla bu görünümleri evinizde canlandırın!
        </p>

        {/* Seçiciler */}
        <div className="flex gap-2.5 mt-6">
          {Object.keys(celebrityStyles).map((slug) => (
            <button
              key={slug}
              onClick={() => setSelectedCeleb(slug)}
              className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCeleb === slug
                  ? "bg-stone-900 text-white shadow-md"
                  : "bg-white hover:bg-stone-50 text-stone-700 border border-stone-200"
              }`}
            >
              {celebrityStyles[slug].name} Style ✨
            </button>
          ))}
        </div>
      </div>

      {/* Recreate Görünümü */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Adım Adım Sol Taraf */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">STAR MAKYAJI SÖKÜMÜ</span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">{current.name}</h3>
            <p className="text-xs text-stone-500 font-serif italic mt-0.5">{current.tagline}</p>
          </div>

          <p className="text-stone-600 text-sm leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-100 italic">
            <strong>İmza Felsefesi:</strong> {current.signatureStyle}
          </p>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-stone-950">Nasıl Kopyalarım? (Adım Adım)</h4>
            <div className="space-y-3">
              {current.howToRecreate.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-3 bg-stone-50/50 rounded-xl border border-stone-100/50">
                  <span className="w-6 h-6 rounded-lg bg-stone-900 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-stone-700 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detaylar Sağ Taraf */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-4">
            <h4 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">Gereken Anahtar Malzemeler</h4>
            <ul className="space-y-2.5">
              {current.keyProducts.map((prod, idx) => (
                <li key={idx} className="text-xs text-stone-700 flex gap-2 items-center bg-stone-50 p-2 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-900">Bu Makyaj Kime Yakışır?</h4>
            <p className="text-xs text-stone-600 leading-relaxed bg-rose-50/40 p-3 rounded-lg border border-rose-100/30">
              {current.idealFor}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
