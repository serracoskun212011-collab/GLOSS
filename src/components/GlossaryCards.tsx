import React from "react";
import { 
  Sparkles, 
  Smile, 
  Flame, 
  Heart, 
  ArrowRight,
  Droplet,
  Info
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  textColor: string;
  borderColor: string;
  quickTip: string;
  presetRequest: string;
}

interface GlossaryCardsProps {
  onSelectCategory: (presetRequest: string) => void;
  activePreset: string;
}

export default function GlossaryCards({ onSelectCategory, activePreset }: GlossaryCardsProps) {
  const categories: Category[] = [
    {
      id: "skin-prep",
      title: "Cilt Hazırlığı & Nemlendirme",
      description: "Makyajın pullanmasını ve kusmasını önleyen tazeleyici kürler.",
      icon: <Droplet className="w-5 h-5 text-sky-400" />,
      bgGradient: "bg-stone-900/40",
      textColor: "text-stone-100",
      borderColor: "border-stone-800/80",
      quickTip: "Makyajdan önce nemlendiricinizi dairesel masajla yedirip 3-4 dakika pürüzsüzleşmesini bekleyin.",
      presetRequest: "Cilt Hazırlığı, Gözenek Gizleme ve Nem Verme"
    },
    {
      id: "daily-natural",
      title: "Uykusuzluğu Gizleyen Doğal Makyaj",
      description: "Yokmuş gibi duran, 'Clean Girl' tarzı taptaze 5 dakikalık rutin.",
      icon: <Smile className="w-5 h-5 text-emerald-400" />,
      bgGradient: "bg-stone-900/40",
      textColor: "text-stone-100",
      borderColor: "border-stone-800/80",
      quickTip: "Fondöten yerine bölgesel kapatıcı kullanıp nemli süngerle dağıtarak aşırı makyajlı görüntüyü önleyin.",
      presetRequest: "Günlük Doğal Yokmuş Gibi Duran Hafif Makyaj (Clean Girl)"
    },
    {
      id: "night-glam",
      title: "Gece Glam & Davet Işıltısı",
      description: "Uzun süre kalıcı, dumanlı bakışlar ve çekici vurgular.",
      icon: <Flame className="w-5 h-5 text-rose-400" />,
      bgGradient: "bg-stone-900/40",
      textColor: "text-stone-100",
      borderColor: "border-stone-800/80",
      quickTip: "Göz makyajınız bitene kadar ten makyajını bekletin; dökülen toz farları pürüzsüzce silip ten makyajına geçin.",
      presetRequest: "Gece Glam, Dumanlı Gözler ve Uzun Süre Kalıcı Ağır Makyaj"
    },
    {
      id: "lip-cheek",
      title: "Monokrom Dudak & Yanak",
      description: "Allık ve dudak rengi arasında kusursuz şeftali/pembe uyumları.",
      icon: <Heart className="w-5 h-5 text-amber-400" />,
      bgGradient: "bg-stone-900/40",
      textColor: "text-stone-100",
      borderColor: "border-stone-800/80",
      quickTip: "Rujunuzdan parmak ucunuzla hafifçe alıp elmacık kemiklerinizin üstüne pıt pıt yaparak dağıtın.",
      presetRequest: "Dudak ve Yanak Uyumu, Şeftali/Gül Kurusu Tonları"
    }
  ];

  return (
    <div id="category-cards-wrapper" className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-stone-900">
        <div>
          <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
            İlham Al veya Hızlı Seç
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Makyaj tarzlarından birini seçerek yapay zekayı anında o hedefe odaklayabilirsiniz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const isSelected = activePreset === cat.presetRequest;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.presetRequest)}
              className={`group flex flex-col justify-between p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${
                isSelected 
                  ? "bg-stone-850 border-stone-400 text-white shadow-[0_4px_15px_rgba(255,255,255,0.05)] scale-[1.02]" 
                  : `${cat.bgGradient} ${cat.borderColor} hover:shadow-lg hover:border-stone-700 hover:scale-101`
              }`}
              style={{
                backdropFilter: "blur(12px)"
              }}
            >
              {/* Silver light beam effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-stone-950/60 border border-stone-800 ${isSelected ? "text-white" : ""}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-md border uppercase tracking-wider ${
                    isSelected ? "bg-stone-100 text-stone-950 border-white" : "bg-white/5 border-stone-820 text-stone-400"
                  }`}>
                    Hızlı Seçim
                  </span>
                </div>

                <h4 className={`font-serif font-black text-base mb-1.5 ${isSelected ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300" : "text-white"}`}>
                  {cat.title}
                </h4>
                <p className="text-xs leading-relaxed mb-3 text-stone-300 font-normal">
                  {cat.description}
                </p>
              </div>

              <div className="mt-2 pt-3 border-t border-dashed border-stone-800">
                <div className="flex gap-1.5 items-start">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-stone-450" />
                  <p className="text-[11px] font-sans italic text-stone-400 leading-relaxed">
                    <strong className="text-stone-300 uppercase not-italic font-bold text-[9px] tracking-wide mr-1 font-mono">UZMAN TÜYOSU:</strong> 
                    {cat.quickTip}
                  </p>
                </div>
              </div>

              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
