import React, { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";
import { MakeupGuide, UserSelections } from "../types";
import AIGuideResult from "./AIGuideResult";

export default function YapayZekaDanismani() {
  const [selections, setSelections] = useState<UserSelections>({
    skinType: "Karma Cilt",
    skinTone: "Buğday Ten",
    eyeColor: "Kahverengi",
    budgetPreference: "Karma (Hem Uygun Fiyat hem Lüks alternatif)",
    makeupStyle: "Doğal & Hafif (Clean Girl)",
    specificGoal: ""
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [makeupGuide, setMakeupGuide] = useState<MakeupGuide | null>(null);

  const handleInputChange = (field: keyof UserSelections, value: string) => {
    setSelections(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMakeupGuide(null);

    const steps = [
      "Ayna koordinatları yapay zeka ile eşleşiyor...",
      "Cilt alt renginiz analiz ediliyor...",
      "Bütçenize göre en trend muadiller toparlanıyor...",
      "Güzellik reçeteniz dijital olarak mühürleniyor..."
    ];

    let stepIndex = 0;
    setLoadingStep(steps[0]);
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setLoadingStep(steps[stepIndex]);
      }
    }, 1100);

    try {
      const response = await fetch("/api/generate-makeup-guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          skinType: selections.skinType,
          skinTone: selections.skinTone,
          eyeColor: selections.eyeColor,
          budgetPreference: selections.budgetPreference,
          makeupStyle: selections.makeupStyle,
          specificGoal: selections.specificGoal || "Günlük Doğallık",
        })
      });

      if (!response.ok) {
        throw new Error("Yapay Zeka sunucusu yanıt vermedi. Lütfen tekrar deneyiniz.");
      }

      const data = await response.json();
      setMakeupGuide(data);
    } catch (err: any) {
      setError(err.message || "Bilinmeyen bir hata oluştu.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMakeupGuide(null);
    setSelections({
      skinType: "Karma Cilt",
      skinTone: "Buğday Ten",
      eyeColor: "Kahverengi",
      budgetPreference: "Karma (Hem Uygun Fiyat hem Lüks alternatif)",
      makeupStyle: "Doğal & Hafif (Clean Girl)",
      specificGoal: ""
    });
  };

  return (
    <div id="ai-advisor-page" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-rose-500 animate-pulse" />
          GLOSS Yapay Zeka Danışmanı
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Gemini 3.5 Flash altyapısını kullanan akıllı asistanımız, cildinizin nem dengesini, tonunu ve kişiselleştirilmiş isteklerinizi saniyeler içerisinde analiz eder. Hayalinizdeki makyajı tarif edin ve gerisini yapay zekaya bırakın.
        </p>
      </div>

      {!makeupGuide ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
          <div className="mb-6">
            <h3 className="font-serif text-lg font-bold text-stone-900">Analiz Parametrelerini Girin</h3>
            <p className="text-xs text-stone-500 mt-1">Cildinize en uygun makyaj yol haritası sadece 3 adım uzakta.</p>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Cilt Nitelik Yapınız</label>
                <select
                  value={selections.skinType}
                  onChange={(e) => handleInputChange("skinType", e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
                >
                  <option value="Karma Cilt">Karma (T-bölgesi yağlı, yanaklar kuru)</option>
                  <option value="Yağlı Cilt">Yağlı (Sivilceye yatkın ve parlayan)</option>
                  <option value="Kuru Cilt">Kuru (Nemsiz ve gergin)</option>
                  <option value="Hassas Cilt">Hassas (Çabuk kızaran ve reaktif)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Cilt Tonunuz</label>
                <select
                  value={selections.skinTone}
                  onChange={(e) => handleInputChange("skinTone", e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
                >
                  <option value="Çok Açık / Porselen Ten">Porselen Çok Açık Ten</option>
                  <option value="Açık Ten">Pembe Alt Tonlu Açık Ten</option>
                  <option value="Buğday Ten">Buğday Nötr Ten</option>
                  <option value="Esmer / Sıcak Alt Tonlu Ten">Koyulaşmış Çekici Esmer Ten</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Makyaj Stili (Stil)</label>
                <select
                  value={selections.makeupStyle}
                  onChange={(e) => handleInputChange("makeupStyle", e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
                >
                  <option value="Doğal & Hafif (Clean Girl)">Doğal & Hafif (Clean Girl)</option>
                  <option value="İş / Ofis Makyajı (Yarı Mat Klasik)">İş & Ofis Makyajı (Klasik Günlük)</option>
                  <option value="Gece Glam (Dumanlı & Dudaklar Ön Planda)">Gece Glam (Göz Alıcı Gece & Davet)</option>
                  <option value="90'lar Retro (Mat Kahveler & Belirgin Çerçeve)">90'lar Retro (Mat Kahveler & Belirgin Çerçeveler)</option>
                  <option value="Kore Tarzı (Cam Gibi Islak Bitiş & Soft Tonlar)">Asya/Kore Tarzı (Cam Gibi Islak & Soft Pembe Tonlar)</option>
                  <option value="Görünmez No-Makeup (Erkek Bakım / Günlük Taze)">Görünmez No-Makeup (Günlük Taze & Mat)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Göz Renginiz</label>
                <select
                  value={selections.eyeColor}
                  onChange={(e) => handleInputChange("eyeColor", e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
                >
                  <option value="Kahverengi">Kahverengi / Ela</option>
                  <option value="Mavi">Işıltılı Mavi</option>
                  <option value="Yeşil">Derin Yeşil</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Bütçe Önceliğiniz</label>
                <select
                  value={selections.budgetPreference}
                  onChange={(e) => handleInputChange("budgetPreference", e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
                >
                  <option value="Karma (Hem Uygun Fiyat hem Lüks alternatif)">Hibrid (Karışık Kültür)</option>
                  <option value="Sadece Ekonomik / Drugstore">Sadece Ekonomik Fiyat / Performans</option>
                  <option value="Lüks / High-End / Sephora Sınıfı">Sadece Lüks Premium Ürünler</option>
                </select>
              </div>

            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Yapay Zekaya Özel Notunuz / Hedefiniz</label>
              <textarea
                value={selections.specificGoal}
                onChange={(e) => handleInputChange("specificGoal", e.target.value)}
                placeholder="Örnek: 'Göz kapağım düşük, eyelinerı nasıl çekmeliyim?' veya 'Kızarıklıklarımı kapatacak yokmuş gibi makyaj istiyorum'"
                rows={3}
                className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>{loadingStep}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Yapay Zekayı Çalıştır</span>
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 shadow-sm">
          <AIGuideResult guide={makeupGuide} onReset={resetForm} />
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm flex gap-2 items-center">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p>{error}</p>
        </div>
      )}

    </div>
  );
}
