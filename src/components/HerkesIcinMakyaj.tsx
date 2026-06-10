import React, { useState } from "react";
import { Sparkles, Heart, Globe, Users, ShieldAlert } from "lucide-react";

export default function HerkesIcinMakyaj() {
  const [selectedSub, setSelectedSub] = useState<string>("altin-yaslar");

  const views: Record<string, { title: string; motto: string; steps: string[]; proTip: string }> = {
    "altin-yaslar": {
      title: "Olgun Ciltler İçin 'Gençleştiren' Makyaj (Anti-Aging)",
      motto: "Çizgileri saklamak değil, cilde nemli, satensi ve dolgun bir ışıltı kazandırmak.",
      steps: [
        "Ağır pudralı mat fondötenler yerine ince yapılı serum nemlendirici fondötenleri tercih edin.",
        "Krem allık ve likit aydınlatıcı kullanarak cildin nem bariyerini koruyun ve canlılık verin.",
        "Göz kapağındaki sarkma görünümünü gizlemek için sedefli pullu farlar yerine tamamen mat toprak tonları kullanın.",
        "Dudak çizgilerine rujun yayılmasını engellemek için ruj sürmeden önce şeffaf dudak kalemi ile dudak sınırını mühürleyin."
      ],
      proTip: "Pudra kullanımını sıfıra indirin. Yalnızca göz altına pudradan geçirilmiş hafif bir fırça dokundurun."
    },
    "erkek-bakim": {
      title: "Erkekler İçin Görünmez 'No-Makeup' Bakım",
      motto: "Makyaj yaptığı anlaşılmadan solgunluğu, kızarıklıkları ve yorgunluğu gidermek.",
      steps: [
        "Gözenekleri pürüzsüzleştirmek için şeffaf parlamayan silikonsuz matlaştırıcı bir baz kullanın.",
        "Göz altı yorgunluk halkalarını kapatmak için ten renginizle tam birebir uyuşan, hafif yapılı mat bir kapatıcı uygulayın.",
        "Yorgun ve aşağı sarkan kaşları şeffaf ve yapışkan his bırakmayan bir kaş jeli yardımıyla yukarı doğru tarayın.",
        "Dudaklardaki çatlak görünümü ortadan kaldırmak için renksiz, mat bitişli bir dudak nemlendiricisi sürün."
      ],
      proTip: "Kapatıcıyı sürdükten sonra fırça yerine parmak ucunuzla hafif vuruşlarla dağıtırsanız, cildin doğal ısısıyla sıfır görünürlük elde edilir."
    },
    "akne-kusurlar": {
      title: "Akne & Yara İzleri İçin Kamufle Sanatı",
      motto: "Akneli cildi tahriş etmeden, pürüzleri ve aktif kızarıklıkları nötrlemek.",
      steps: [
        "Aktif akne kızarıklıklarını gidermek için yeşil renk düzelticiyi (color corrector) sadece lekenin üstüne sürün.",
        "Kapatıcıyı akne üzerine sürdükten sonra hemen dağıtmayın; 1 dakika bekletip kurumasını bekleyerek kapatıcılık gücünü artırın.",
        "Cildi parlatmak akne tümseklerini daha belirgin hale getirir. Bu yüzden akne bölgesini mutlaka mat/transparan toz pudra ile sabitleyin.",
        "Kullandığınız tüm sünger ve fırçaları her kullanımdan sonra yıkayın."
      ],
      proTip: "Silikon içerikli gözenek gizleyici bazlar akne çukurlarını doldurarak çok pürüzsüz bir zemin yaratır."
    }
  };

  const current = views[selectedSub];

  return (
    <div id="herkes-icin-makyaj-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım Kartı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Her Yaş, Her Cilt ve Her Kimlik İçin Güzellik
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Makyaj sadece standart kalıplardan ibaret değildir. Yaş alan cildin asaletini artırmak, erkek bakımında görünmez tüyoları keşfetmek veya akne/leke eğilimli hassas ciltleri doğru kamufle etmek için özel formüllerimizi keşfedin.
        </p>

        {/* Seçici Linkler */}
        <div className="flex flex-wrap gap-2.5 mt-6">
          <button
            onClick={() => setSelectedSub("altin-yaslar")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedSub === "altin-yaslar"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 hover:bg-stone-200 text-stone-700"
            }`}
          >
            Özel Yaşlar (Anti-Aging) 🌸
          </button>
          <button
            onClick={() => setSelectedSub("erkek-bakim")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedSub === "erkek-bakim"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 hover:bg-stone-200 text-stone-700"
            }`}
          >
            Erkekler İçin Bakım 👔
          </button>
          <button
            onClick={() => setSelectedSub("akne-kusurlar")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedSub === "akne-kusurlar"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 hover:bg-stone-200 text-stone-700"
            }`}
          >
            Akne & İz Yoğunluğu 🛡️
          </button>
        </div>
      </div>

      {/* Grid Gösterge Detayı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Sol */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="font-serif text-xl font-bold text-stone-900">{current.title}</h3>
            <p className="text-xs text-stone-500 font-serif italic mt-0.5">"{current.motto}"</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-stone-900">Doğru Teknik ve Uygulama Adımları</h4>
            <div className="space-y-3">
              {current.steps.map((step, idx) => (
                <div key={idx} className="flex gap-3.5 items-start p-3.5 bg-stone-50 rounded-xl border border-stone-100/60 text-sm text-stone-700">
                  <div className="w-5 h-5 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ Taraf Pro Tüyolar */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm space-y-4">
          <h4 className="font-serif text-base font-bold text-rose-950 flex items-center gap-1.5">
            <ShieldAlert className="w-5 h-5 text-rose-500" /> Altın Öneri
          </h4>
          <p className="text-stone-700 text-xs leading-relaxed bg-rose-50/50 p-4 rounded-xl border border-rose-100/30">
            {current.proTip}
          </p>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 text-[11px] text-stone-500 leading-relaxed">
            Unutmayın: Gerçek güzellik cildinizin nefes aldığı, kendinizi konforlu ve özgüvenli hissettiğiniz görünümdir. GLOSS herkesi aynı görmez, sizi siz yapan özelliklere saygı duyar.
          </div>
        </div>

      </div>

    </div>
  );
}
