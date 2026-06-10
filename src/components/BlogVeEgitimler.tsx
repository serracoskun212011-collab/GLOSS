import React, { useState } from "react";
import { Sparkles, BookOpen, Clock, Heart, Star, CheckSquare } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  contentSteps: string[];
  authorTip: string;
}

export default function BlogVeEgitimler() {
  const [selectedPost, setSelectedPost] = useState<number | null>(0);

  const blogPosts: BlogPost[] = [
    {
      title: "Makyaj Fırçaları Rehberi: Hangi Fırça Nereye Kullanılır?",
      category: "Eğitim",
      readTime: "4 Dakika",
      summary: "Doğru fırça kullanımı makyajın cildinizle pürüzsüzleşmesini sağlar. Yanlış fırça fondötenin çizgi çizgi durmasına yol açar.",
      contentSteps: [
        "Yassı Sık Kıllı Fırçalar: Yoğun kapatıcılık istenen fondöten uygulamaları için idealdir.",
        "Yumuşak Tombul Fırçalar (Duo Fibers): Toz transparan pudraları cilde incecik süpürmek için kullanılır.",
        "Açılı Allık Fırçaları: Elmacık kemiği kemerini tam sararak allığın yukarı doğru taranmasını kolaylaştırır.",
        "Küçük Karıştırma Fırçası (Blending Brush): Göz kapağındaki far geçişlerini yumuşatır, sert çizgileri yok eder."
      ],
      authorTip: "Fırçalarınızı en az iki haftada bir beyaz sabun veya bebek şampuanı ile yıkayıp düz bir zeminde kurumaya bırakın."
    },
    {
      title: "Kozmetik Ürünlerin Son Kullanma Tarihleri ve Saklama Sırları",
      category: "Cilt Sağlığı",
      readTime: "5 Dakika",
      summary: "Makyaj malzemelerinin üzerinde yer alan minik kavanoz sembolü (PAO), ürünün açıldıktan sonra kaç ay sağlıklı kalacağını gösterir.",
      contentSteps: [
        "Maskaralar (Rimel): Açıldıktan sonra en fazla 3-6 ay içinde değiştirilmelidir. Bakteri birikimine en açık üründür.",
        "Likit Fondötenler: Açıldıktan sonra 12 ay boyunca saklanabilir. Kokusu değiştiğinde hemen çöpe atılmalıdır.",
        "Toz Far ve Pudralar: Su içermedikleri için 24 aya kadar güvenle kullanılabilirler.",
        "Likit Ruj ve Parlatıcılar: 12-18 ay içinde tüketilmeli, aşırı sıcakta bırakılmamalıdır."
      ],
      authorTip: "Malzemelerinizi banyo neminde değil, kuru, serin ve doğrudan güneş ışığı almayan çekmecelerde saklayın."
    },
    {
      title: "Mükemmel Dudak Çerçeveleme (Overlining) Sanatı",
      category: "Makyaj Teknikleri",
      readTime: "3 Dakika",
      summary: "Dudaklarınızı iğnesiz, acısız, tamamen doğal bir illüzyonla dolgun göstermek sandığınızdan çok daha kolay.",
      contentSteps: [
        "Adım 1: Dudaklarınızı hafif pudralı bir kapatıcı ile silerek doğal sınır çizgilerini kamufle edin.",
        "Adım 2: Ten renginizin 1 ton koyusu soğuk kahve/nude bir dudak kalemi seçin.",
        "Adım 3: Sadece üst dudağın tam 'Cupid's bow' yayı ve alt dudağın tam orta tabanını milimetrik olarak dıştan çizin.",
        "Adım 4: Dudak kenarlarına doğru giderken doğal sınırın içine geri dönün. Bu, yapay duruşu önler."
      ],
      authorTip: "Dudak ortasına açık renk parlatıcı sürerek 3 boyutlu dolgunluk yansımasını tamamlayın."
    }
  ];

  return (
    <div id="blog-egitim-sayfasi" className="space-y-8 animate-fade-in">
      
      {/* Tanıtım */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/60 shadow-sm">
        <h2 className="text-3xl font-serif font-extrabold text-stone-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-rose-500" />
          GLOSS Akademi: Blog & Eğitimler
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
          Makyaj sanatçıları tarafından kaleme alınmış bilimsel kozmetik makalelerimizle güzellik bilincinizi genişletin. Detaylı fırça bakımları, ürün ömürleri ve güncel tekniklerle ilgili aradığınız her şey burada.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sol Sütun: Başlık Seçici Akışı */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block mb-1">EĞİTİM REHBERLERİ</span>
          
          <div className="space-y-3">
            {blogPosts.map((post, index) => {
              const isSelected = selectedPost === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedPost(index)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected 
                      ? "bg-stone-900 border-stone-900 text-white shadow-sm" 
                      : "bg-white hover:bg-stone-50 border-stone-200/80 text-stone-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isSelected ? "bg-rose-500 text-white" : "bg-stone-100 text-stone-600"
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] opacity-70 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold leading-snug">{post.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sağ Sütun: Seçili Yazı Detayı */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 shadow-sm">
          {selectedPost !== null ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest font-mono">OKUMA PANELDİ</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">{blogPosts[selectedPost].title}</h3>
                <p className="text-xs text-stone-500 mt-1">Okuma Süresi: {blogPosts[selectedPost].readTime}</p>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed italic bg-stone-50 p-4 rounded-xl border border-stone-100">
                {blogPosts[selectedPost].summary}
              </p>

              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-stone-950">Temel Bilgiler & Adımlar</h4>
                <div className="space-y-2.5">
                  {blogPosts[selectedPost].contentSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-stone-700 leading-relaxed items-start">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 bg-rose-50/50 p-4 rounded-xl text-xs text-rose-900 leading-relaxed">
                <strong>Uzman Tüyosu:</strong> {blogPosts[selectedPost].authorTip}
              </div>
            </div>
          ) : (
            <div className="text-center p-8 text-stone-500">
              Okumak istediğiniz detaylı eğitim makalesini sol menüden seçin.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
