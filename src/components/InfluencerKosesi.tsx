import React, { useState } from "react";
import { Sparkles, Heart, Star, Check, AlertTriangle } from "lucide-react";

interface BeautyHack {
  title: string;
  platform: string;
  difficulty: "Kolay" | "Orta" | "Zor";
  explanation: string;
  result: string;
  warning: string;
  usefulnessScore: number;
}

export default function InfluencerKosesi() {
  const [votedHacks, setVotedHacks] = useState<Record<number, boolean>>({});

  const viralHacks: BeautyHack[] = [
    {
      title: "Kaşıkla Kusursuz Eyeliner Çekmek",
      platform: "TikTok Viral",
      difficulty: "Kolay",
      explanation: "Yemek kaşığının sapını göz dış köşesine referans hizası yapıp kuyruğu çizin, ardından kaşığın yuvarlak arka kısmını kapağa yaslayarak kavisi birleştirin.",
      result: "Simetrik ve kusursuz kedi gözü eyeliner görünümü elde edilir.",
      warning: "Kaşığın kenarları çok keskin olmamalıdır; göze kaçırmamaya aşırı özen gösterin.",
      usefulnessScore: 4
    },
    {
      title: "Allık ile Yüzü Yukarı Çekme (Draping Lift)",
      platform: "Instagram Hack",
      difficulty: "Kolay",
      explanation: "Allığı gülümsediğinizde ortaya çıkan yanak elmalarına sürmek yerine, elmacık kemiğinin en tepe noktasına ve hafifçe şakaklara doğru sürün.",
      result: "Yüzünüzde anında 3 kilogram zayıflamış ve yukarı çekilmiş (lifted) bir ameliyatsız lifting etkisi hissettirir.",
      warning: "Çok parlak veya simli allıklar gözeneklerinizi belirginleştirebilir, mat allık kullanmak daha temiz durur.",
      usefulnessScore: 5
    },
    {
      title: "Kapatıcıyla Baking (Pişirme) & Buz Kürleri",
      platform: "Pinterest Beauty",
      difficulty: "Orta",
      explanation: "Göz altı kapatıcısını sürdükten hemen sonra nemli süngerle transparan pudrayı presleyin. Makyaja başlamadan önce ise yüze buz küpü gezdirerek gözenek ve şişlikleri kapatın.",
      result: "Sıfır gözenek görünümü ve gün boyu akmayan, taş gibi pürüzsüz duran göz altı.",
      warning: "Buzu doğrudan cilde temas ettirmek kılcal damar çatlamasına yol açabilir. Mutlaka ince tülbente sararak uygulayın.",
      usefulnessScore: 4.5
    }
  ];

  const handleVote = (idx: number) => {
    setVotedHacks(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div id="influencer-kosesi-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Sayfa Başlığı */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3">
          Influencer & TikTok Güzellik Köşesi
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Sosyal medyada viral olan, izlerken 'gerçekten işe yarıyor mu?' diye düşündüğünüz popüler makyaj hilelerini, tüyolarını ve güzellik akımlarını tarafsızca değerlendiriyoruz. Kimisi dahice, kimisi ise maalesef zaman kaybı!
        </p>
      </div>

      {/* Akış Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {viralHacks.map((hack, idx) => {
          const hasVoted = votedHacks[idx];
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest bg-rose-50 text-rose-600 font-bold px-2.5 py-0.5 rounded-full border border-rose-100">
                    {hack.platform}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    hack.difficulty === "Kolay" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    Zorluk: {hack.difficulty}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{hack.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">{hack.explanation}</p>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 space-y-2 mb-4">
                  <div className="text-xs">
                    <span className="font-bold text-emerald-700 block">✓ Ne Sağlar?</span>
                    <span className="text-stone-700">{hack.result}</span>
                  </div>
                  <div className="text-xs pt-2 border-t border-stone-200/50">
                    <span className="font-semibold text-amber-700 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Dikkat Edilmesi Gereken:
                    </span>
                    <span className="text-stone-700">{hack.warning}</span>
                  </div>
                </div>
              </div>

              {/* Vote & Skor */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-stone-500">Kullanışlılık Skoru:</span>
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="font-bold font-mono text-stone-700 ml-1">({hack.usefulnessScore}/5)</span>
                </div>

                <button
                  onClick={() => handleVote(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    hasVoted 
                      ? "bg-rose-500 text-white" 
                      : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                  }`}
                >
                  {hasVoted ? "Denedim! ❤️" : "Listeme Ekle"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
