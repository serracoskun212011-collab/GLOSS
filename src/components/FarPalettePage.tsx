import React, { useState, useEffect } from "react";
import { Sparkles, Eye, Info, Volume2, Settings, Star, HelpCircle, Check, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface FarPan {
  id: string;
  title: string;
  icon: string;
  panColor: string; // Tailwind class or inline background CSS
  textColor: string;
  textTone: string;
  detailTitle: string;
  detailBody: string;
  tips: string[];
  recommendations?: string[];
}

interface FarPalettePageProps {
  pageId: string;
  pageTitle: string;
  onBackToBag: () => void;
}

export default function FarPalettePage({ pageId, pageTitle, onBackToBag }: FarPalettePageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isLidOpen, setIsLidOpen] = useState<boolean>(false);
  const [activePanId, setActivePanId] = useState<string | null>(null);
  const [activeVirtualProduct, setActiveVirtualProduct] = useState<string>("lips");
  
  // Custom states for AI Form (Page 8: ai-danisman)
  const [aiSkinType, setAiSkinType] = useState("karma");
  const [aiSkinTone, setAiSkinTone] = useState("bugday");
  const [aiBudget, setAiBudget] = useState("hibrid");
  const [aiStyle, setAiStyle] = useState("dogal");
  const [aiResult, setAiResult] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Auto flip the lid open 600ms after component mounts to feel like a real luxurious presentation
  useEffect(() => {
    setIsLidOpen(false);
    setActivePanId(null);
    setAiResult(null);
    setActiveVirtualProduct("lips");
    const timer = setTimeout(() => {
      setIsLidOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [pageId]);

  // Generate dataset for all dynamic luxury subpages
  const getPaletteData = (): FarPan[] => {
    switch (pageId) {
      case "cilt-tipine-gore":
        return [
          {
            id: "kuru",
            title: "Kuru Cilt",
            icon: "💧",
            panColor: "linear-gradient(135deg, #ECCDC4 0%, #DCAE9F 100%)", // Gül Kurusu
            textColor: "#4B2C24",
            textTone: "pastel",
            detailTitle: "Kuru Ciltler İçin Nem Kilitli Makyaj Sırrı",
            detailBody: "Fondötenin pullanıp dökülmesine engel olmak için cildi gliserin ve hyalüronik asit pınarlarıyla doyurmalıyız. Islak ve parlak bitişli formüller her zaman dostunuzdur.",
            tips: [
              "Makyajdan 10 dk önce zengin içerikli nemlendirici maske yapın.",
              "Toz sabitleme pudralardan kaçının, sadece göz altına hafifçe uygulayın.",
              "Mat rujlar yerine dudak yağları ve ıslak glosslar tercih edin."
            ],
            recommendations: ["Serum Fondöten", "Likit Aydınlatıcı", "Nemlendirici Yüz Spreyi"]
          },
          {
            id: "yagli",
            title: "Yağlı Cilt",
            icon: "✨",
            panColor: "linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)", // Altın Şampanya
            textColor: "#422F03",
            textTone: "bright-gold",
            detailTitle: "Yağlı Ciltler İçin Parlama Karşıtı Kadife Duruş",
            detailBody: "Makyajın gün içinde akmaması ve gözenek görünümünün en aza inmesi için sebum salgısı dengelenmelidir. Su bazlı, temiz mineral içerikli ürünler kurtarıcıdır.",
            tips: [
              "Makyaja başlamadan önce tonikle fazla yağı arındırın.",
              "Krem allıklar yerine toz formüllü pudra allık kullanın.",
              "Makyaj sabitleme spreyini fondöten altına ve üstüne sandviç gibi uygulayın."
            ],
            recommendations: ["Matlaştırıcı Gözenek Bazı", "Transparan Sabitleme Pudrası", "Mat Bitişli Sprey"]
          },
          {
            id: "karma",
            title: "Karma Cilt",
            icon: "🌗",
            panColor: "linear-gradient(135deg, #E6DFD3 0%, #CBBFA8 100%)", // Bej Nude
            textColor: "#3A3326",
            textTone: "neutral-nude",
            detailTitle: "Karma Ciltlerin Bölgesel Dengeleme Sanatı",
            detailBody: "Alın, burun ve çenenin yağlı; yanakların kuru olduğu bu cilt modelinde 'Multitasking' teknik uygulamalısınız. Her bölgeye hakkını verin.",
            tips: [
              "T-bölgesine matlaştırıcı baz sürerken yanaklara ışıltılı nem baz uygulayın.",
              "Fondöteni tüm yüze çok ince dağıtıp ekstra kapatıcılığı sadece lekelere verin.",
              "Hafif su bazlı yarı mat likit fondötenler karma ciltlerin imza ürünüdür."
            ],
            recommendations: ["Gözenek Gizleyici Baz", "Satensi Yoğun Fondöten", "Likit Allık"]
          },
          {
            id: "hassas",
            title: "Hassas Cilt",
            icon: "🌸",
            panColor: "linear-gradient(135deg, #F3D1D1 0%, #E6AEAE 100%)", // Pastel Pembe
            textColor: "#542424",
            textTone: "soft-pink",
            detailTitle: "Hassas Ciltlere Bariyer Dostu Mineral Dokunuş",
            detailBody: "Ani kızarıklık, kaşıntı ve kozmetik reaktivitesi yüksek ciltler parfümsüz, temiz ve hipoalerjenik mineralli makyaj ürünleriyle buluşmalıdır.",
            tips: [
              "Kızarık yanak ve burun kenarlarına yeşil renk düzeltici baz (color corrector) tamponlayın.",
              "Fırça temizliğini haftalık yapıp alerjen toz birikiminden kaçının.",
              "Ağır yapay koku içeren kapatıcılardan kesinlikle uzak durun."
            ],
            recommendations: ["Yeşil Nötrize Edici Kapatıcı", "Hassas Mineral Toz Yapı", "Yatıştırıcı Termal Toz"]
          }
        ];

      case "ten-tonu":
        return [
          {
            id: "soguk",
            title: "Soğuk Tonlar",
            icon: "❄️",
            panColor: "linear-gradient(135deg, #D4E6F1 0%, #85C1E9 100%)", // Buz Mavisi / Gümüş
            textColor: "#1A365D",
            textTone: "pastel",
            detailTitle: "Soğuk Cilt Alt Tonu ve Contrast Renkleri",
            detailBody: "Bilek damarlarınız mavi ve mor yansır. Güneşe çıktığınızda bronzlaşmak yerine kızarırsınız. Gümüş takılar sizde adeta bir asalet simgesine dönüşür.",
            tips: [
              "Pembe ve nötr alt tonlu fondötenlere yönelin.",
              "Mavi alt tonlu kırmızı rujlar size çok çekici bir hava katar.",
              "Göz kapaklarında platin, gümüş, mürdüm ve leylak renklerini tercih edin."
            ],
            recommendations: ["Cool Rose CC Krem", "Mavi Alt Tonlu Kırmızı Ruj", "Gümüş Işıltılı Far"]
          },
          {
            id: "sicak",
            title: "Sıcak Tonlar",
            icon: "☀️",
            panColor: "linear-gradient(135deg, #FAD7A0 0%, #E67E22 100%)", // Amber Bakır
            textColor: "#512E08",
            textTone: "pastel",
            detailTitle: "Sıcak Göz Alıcı Alt Ton İpuçları",
            detailBody: "Damarlarınız yeşilimsi görünür ve güneşte kolayca altın bronzluğa ulaşırsınız. Altın takılar cildinizdeki sıcak enerjiyi mükemmel yansıtır.",
            tips: [
              "Sarı ve sıcak şeftali tınılı alt tona sahip fondötenler kullanın.",
              "Göz makyajlarında sıcak bronzlar, kızıl kahveler ve kiremit tonları muhteşem duracaktır.",
              "Ruj olarak mercan, kayısı ve sıcak kahve-nude tonları seçmelisiniz."
            ],
            recommendations: ["Warm Gold Fondöten", "Terracotta Bronzer", "Şeftali Saten Allık"]
          },
          {
            id: "notr",
            title: "Nötr Tonlar",
            icon: "⚖️",
            panColor: "linear-gradient(135deg, #EADBC8 0%, #DAC0A3 100%)", // Nude Bej
            textColor: "#2D2619",
            textTone: "pastel",
            detailTitle: "Nötr Tonların Sınırsız Özgürlüğü",
            detailBody: "Hem mavi hem yeşil damar yansımalarına sahipsiniz. Hem altın hem gümüş takılar teninizle uyum içindedir. Makyajda en esnek ve şanslı gruptasınız.",
            tips: [
              "Zeytuni veya bej tonlu, aşırı sarı ya da pembe olmayan fondöten dengesi.",
              "Toprak tonları, şampanya ışıltıları ve dumanlı gri makyajlar size zahmetsizce yakışır.",
              "Dilediğiniz her ruj tonunu rahatça kombinleyebilirsiniz."
            ],
            recommendations: ["Bej Nötr Likit Kapatıcı", "Şampanya Işıltılı Pudra", "Gül Kurusu Klasik Ruj"]
          }
        ];

      case "makyaj-koleksiyonlari":
        return [
          {
            id: "old-money",
            title: "Old Money Makeup",
            icon: "👑",
            panColor: "linear-gradient(135deg, #b8860b 0%, #5d4037 100%)",
            textColor: "#fff8dc",
            textTone: "brown",
            detailTitle: "Asil ve Sessiz Lüks: Old Money Estetiği",
            detailBody: "Göz tırmalamayan, son derece asil ve 'çabasız zengin' bakış açısı. Mat, pürüzsüz porselen bir cilt, hafif kontürlü gözler ve asil dudaklar öne çıkar.",
            tips: [
              "Genel Görünüm: Ağır simler yerine satensi mat ten ve asil dumanlı kahve tonları.",
              "Uygulama Sırası: Nemlendirici -> Yarı mat fondöten -> Çikolata kontür -> Mat şeftali allık -> Nude dudak kalemi.",
              "Kimlere Uygun: Minimalist, asil duruşu seven, iş ve resmi davet şıklığı arayan her cilt tonuna uygundur.",
              "Bütçe Dostu Alternatif: Pastel tonlu mat far paletleri ve kahverengi dudak kalemleri."
            ],
            recommendations: ["Mat Toprak Allık", "Çikolata Kahve Dudak Kalemi", "Nude Kadife Ruj"]
          },
          {
            id: "clean-girl",
            title: "Clean Girl Makeup",
            icon: "🧴",
            panColor: "linear-gradient(135deg, #ffe4e1 0%, #ffa07a 100%)",
            textColor: "#4a1c12",
            textTone: "nude",
            detailTitle: "Taze ve Tertemiz: Clean Girl Pratikliği",
            detailBody: "Sanki hiç makyaj yokmuş gibi duran, içeriden gelen ıslak bir ışıltı, taranmış kaşlar ve nemli pembe dudaklar ile modern görünümün anahtarı.",
            tips: [
              "Genel Görünüm: Islak bitişli hafif ten makyajı, krem allık ve yukarı taranmış şeffaf kaşlar.",
              "Uygulama Sırası: Aydınlatıcı baz -> BB Krem -> Krem allık şakaklara -> Kaş jeli -> Çilekli dudak yağı.",
              "Kimlere Uygun: Pratik ve hızlı günlük makyaj seven, okulda veya sporda taze görünmek isteyenler için idealdir.",
              "Bütçe Dostu Alternatif: Nemli bitişli BB kremler ve renkli şeffaf dudak parlatıcıları."
            ],
            recommendations: ["Renkli Kaş Maskarası", "Renkli Dudak Yağı/Lip Oil", "Krem Likit Pembe Allık"]
          },
          {
            id: "soft-glam",
            title: "Soft Glam Makeup",
            icon: "✨",
            panColor: "linear-gradient(135deg, #ffb6c1 0%, #db7093 100%)",
            textColor: "#ffffff",
            textTone: "pink",
            detailTitle: "Zarif Gece Işıltısı: Soft Glam Tarzı",
            detailBody: "Yoğun kapatıcılıkta bir ten makyajı yerine, gözlerin şampanya tonlarıyla buğulandığı ve dudakların dolgun çerçevelendiği kusursuz bir stil.",
            tips: [
              "Genel Görünüm: Şampanya köpüğü simleri, ipeksi ten duruşu ve belirgin sıcak dudaklar.",
              "Uygulama Sırası: Kapatıcı -> Karamel karıştırma farı -> Göz kapağına ışıltı -> Dudak kontürü ve saten nude ruj.",
              "Kimlere Uygun: Özel akşamlar, doğum günleri veya fotoğraf çekimlerinde parlamak isteyenler.",
              "Bütçe Dostu Alternatif: Metalik tekli aydınlatıcı farlar ve yarı mat saten nude rujlar."
            ],
            recommendations: ["Şampanya Pigment Far", "Dudak Dolgunlaştırıcı Saten Ruj", "Lifting Etkili Maskara"]
          },
          {
            id: "douyin",
            title: "Douyin Makeup",
            icon: "🩰",
            panColor: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
            textColor: "#2a1c42",
            textTone: "purple",
            detailTitle: "Işıltılı Asya Akımı: Douyin Makyaj Sırları",
            detailBody: "Özellikle Asya'da viral olan bu stil; iri oyuncak bebek gözleri, göz altı torbası (Aegyo-sal) belirginleştirme ve sulu kıpkırmızı dudaklarla rüya gibi bir görünüm sunar.",
            tips: [
              "Genel Görünüm: Sim yansımalı göz kapakları, belirginleştirilmiş göz pınarları ve 'omg dudak' ısırma efekti.",
              "Uygulama Sırası: Mat porselen ten -> Aegyo-sal kalem gölgesi -> Yoğun sim dokunuşu -> Dağıtılmış kırmızı dudak mürekkebi.",
              "Kimlere Uygun: Gözlerini daha iri ve sevimli göstermek isteyen, makyajda sanatsal detayları seven genç ruhlar.",
              "Bütçe Dostu Alternatif: Jel simli göz kalemleri ve kırmızı dudak parlatıcısı tintleri."
            ],
            recommendations: ["Sulu Dudak Mürekkebi / Tint", "Prizmatik Jel Pigment Sim", "Hassas Uçlu Siyah Liner"]
          },
          {
            id: "latte",
            title: "Latte Makeup",
            icon: "☕",
            panColor: "linear-gradient(135deg, #c19a6b 0%, #7b3f00 100%)",
            textColor: "#ffffff",
            textTone: "brown",
            detailTitle: "Sıcak Kahve ve Karamel Rüzgarı: Latte Tarzı",
            detailBody: "Yaz ve sonbahar aylarının vazgeçilmezi olan Latte makyajı; sıcak karamel, sütlü kahve ve bronz tonların tüm yüzde monokrom uyum içinde dans etmesidir.",
            tips: [
              "Genel Görünüm: Islak terracotta bronzluğu, espresso tonlarında göz kuyrukları ve nude-kahve dudaklar.",
              "Uygulama Sırası: Bronzlaştırıcı jel -> Kahve göz kalemi buğusu -> Mat şeftali-kahve yanaklar -> Kahve dudak kombonuz.",
              "Kimlere Uygun: Esmerler, buğday tenliler ve güneşte parlamayı seven sıcak alt tonlu kadınlar.",
              "Bütçe Dostu Alternatif: Çok amaçlı bronz pudralar ve kahverengi göz kalemleri."
            ],
            recommendations: ["Terracotta Islak Bronzer", "Sütlü Kahve Saten Ruj", "Karamel Far Karıştırma Paleti"]
          },
          {
            id: "gothic",
            title: "Gothic Makeup",
            icon: "🖤",
            panColor: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
            textColor: "#f5f6fa",
            textTone: "dark",
            detailTitle: "Asalet ve Gizem: Modern Grunge Gothic",
            detailBody: "Net çekilmiş simsiyah çizgiler, dumanlı koyu far gölgeleri ve vişne çürüğü veya siyah dudaklarla gizemli bir şıklık ve asil isyan.",
            tips: [
              "Genel Görünüm: Porselen mat solgun ten rengi, puslu gri göz kapakları ve derin bordo keskin dudaklar.",
              "Uygulama Sırası: Çok açık ton fondöten -> Mat gri far buğusu -> Alt kirpik diplerine siyah kalem -> Bordo/Mor mat ruj.",
              "Kimlere Uygun: Sıra dışı, asi ve iddialı bir imaj çizmeyi seven, gece davetlerinde tüm gözleri üzerine toplamak isteyenler.",
              "Bütçe Dostu Alternatif: Yoğun siyah göz kalemleri ve asil karanlık tonlardaki rujlar."
            ],
            recommendations: ["Simsiyah Ultra Jel Liner", "Koyu Vişne Mat Kalıcı Ruj", "Mat Transparan Sabitleyici Toz"]
          },
          {
            id: "coquette",
            title: "Coquette Makeup",
            icon: "🎀",
            panColor: "linear-gradient(135deg, #fbc2eb 0%, #f1948a 100%)",
            textColor: "#4a121a",
            textTone: "pink",
            detailTitle: "Romantik ve Vintage: Coquette Esintisi",
            detailBody: "Pembe kurdeleler, pudra pembesi yanaklar, bebeksi aydınlık gözler ve oyuncak bebek kirpikleriyle lolita tarzı masum ama çekici bir görünüm.",
            tips: [
              "Genel Görünüm: Bebek pembesi yanaklar, beyaz göz pınarları ve parlak çilekli ruj görünümleri.",
              "Uygulama Sırası: Aydınlık ten baz -> Toz pembe allık elmacıklara -> Beyaz alt göz kalemi -> Pembe ruj ve yoğun gloss balm.",
              "Kimlere Uygun: Romantik, masum ve pembenin büyüsüne aşık vintage akım takipçileri.",
              "Bütçe Dostu Alternatif: Pudra bebek pembesi mat allıklar ve simli hafif parlatıcılar."
            ],
            recommendations: ["Bebek Pembesi Mat Allık", "Beyaz Alt Göz Kalemi", "Nemli Çilekli Dudak Balmı"]
          }
        ];

      case "renk-kutuphanesi":
        return [
          {
            id: "nude-colors",
            title: "Nude Tonlar",
            icon: "🧥",
            panColor: "linear-gradient(135deg, #ebd6c8 0%, #c19e87 100%)",
            textColor: "#3d2716",
            textTone: "nude",
            detailTitle: "Zahmetsiz Şıklığın Temeli: Nude Ton Kartelası",
            detailBody: "Kum beji, sütlü kahve, şeftali nudeler ve gül kurusu nudenin ten alt tonunuza göre en asil duran kombinasyonları.",
            tips: [
              "Ten Tonu Uyumu: Açık tenlilere pembe nude, buğday tenlilere şeftali nude, esmerlere ise sütlü çikolata tonlu nudelar çok yakışır.",
              "Kullanım Alanları: Günlük tüm yüz makyajlarında, yoğun yapılmış dumanlı gözlerin altında dengeleyici dudak rengi olarak kullanılır.",
              "Kombinasyon Önerisi: Kahve dudak kalemi + kum beji ruj + transparan ıslak gloss kombinasyonu."
            ],
            recommendations: ["Kum Beji Kadife Lip", "Taupe Kahve Göz Kalemi", "Sıcak Altın Bej Far"]
          },
          {
            id: "red-shades",
            title: "Kırmızı Ruj Tonları",
            icon: "💄",
            panColor: "linear-gradient(135deg, #dc143c 0%, #800000 100%)",
            textColor: "#ffffff",
            textTone: "red",
            detailTitle: "Cüretkar ve Zamansız: Kırmızı Ton Analizi",
            detailBody: "Mavi alt tonlu soğuk kırmızılar, turuncu alt tonlu sıcak kiremit kırmızılar ve asil koyu bordo tonları.",
            tips: [
              "Ten Tonu Uyumu: Soğuk tenlilere mavi alt tonlu 'Ruby' kırmızısı (dişleri beyaz gösterir), sıcak tenlilere ise mercan ve kiremit kırmızısı yakışır.",
              "Kullanım Alanları: Sadece maskara sürülmüş tertemiz bir yüzde imza eleman olarak ya da keskin bir siyah eyeliner ile kuyruklu dudaklar.",
              "Kombinasyon Önerisi: Minimalist dumanlı ten rengi far + saten kırmızı ruj."
            ],
            recommendations: ["Mavi Alt Tonlu Ruby Ruj", "Kiremit Sıcak Kırmızı Dudak Kalemi", "Kırmızı Dudak Fırçası"]
          },
          {
            id: "brown-shades",
            title: "Kahve Tonları",
            icon: "🍂",
            panColor: "linear-gradient(135deg, #8b5a2b 0%, #3e2723 100%)",
            textColor: "#ffeb3b",
            textTone: "brown",
            detailTitle: "Toprağın Asaleti: Monokrom Kahveler",
            detailBody: "Sütlü kahveden acı çikolataya, espresso tonlarından tarçın kahvelerine kadar yüz hatlarına derinlik katan renkler.",
            tips: [
              "Ten Tonu Uyumu: Her ten tonuna çok kolay uyum sağlar. Buğday tenlilerde tarçın kahveler çok sıcak dururken, esmerlerde çikolata tonları harikadır.",
              "Kullanım Alanları: Göz katlanma bölgesini gölgelemede (crease), yüz kontürlemede ve retro dudak çerçevelemelerinde vazgeçilmezdir.",
              "Kombinasyon Önerisi: Krem rengi far tabanı + kahverengi katlanma çizgisi gölgesi + kahve dudak."
            ],
            recommendations: ["Mat Toprak Kahve Far", "Derin Çikolata Kontür Stick", "Tarçın Kahve Dudak Kalemi"]
          },
          {
            id: "peach-shades",
            title: "Şeftali Tonları",
            icon: "🍑",
            panColor: "linear-gradient(135deg, #ffb07c 0%, #ff7f50 100%)",
            textColor: "#4a1c02",
            textTone: "pastel",
            detailTitle: "Enerjik ve Tazeleyici: Şeftali & Mercan",
            detailBody: "Yüze anında dinamizm, gençlik ve taze bir uykudan yeni uyanmışçasına güneş öpücüğü enerjisi veren nefis şeftali tonları.",
            tips: [
              "Ten Tonu Uyumu: Sıcak ve nötr alt tonlu buğday tenlilerde adeta canlanır. Açık porselen tenlilerde ise kayısı tınıları bebeksi durur.",
              "Kullanım Alanları: Krem allık olarak elmacık kemiklerinde ve monokrom taze göz makyajlarında çok şık sonuçlar verir.",
              "Kombinasyon Önerisi: Şeftali krem allık + altın yansımalı aydınlatıcı + şeftali rengi dudak balmı."
            ],
            recommendations: ["Nemlendiren Şeftali Dudak Balmı", "Altın Işıltılı Şeftali Allık", "Kayısı Tonlu Kremsi Göz Farı"]
          },
          {
            id: "cool-pinks",
            title: "Soğuk Pembe Tonları",
            icon: "🍧",
            panColor: "linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)",
            textColor: "#4a001a",
            textTone: "pink",
            detailTitle: "Bebeksi ve Romantik: Soğuk Barbie Pembeleri",
            detailBody: "Mavi ve lila yansımalı bebek pembeleri, fuşya tonları ve gül kurusu pembelerin göz alıcı pürüzsüz dünyası.",
            tips: [
              "Ten Tonu Uyumu: Açık tenli ve soğuk alt tonlu kadınların baş tacıdır. Esmerlerde ise tezat yaratarak çok marjinal ve havalı durabilir.",
              "Kullanım Alanları: Likit veya toz allık olarak yanakların tam üzerine uygulanıp masum bir bebek tebessümü efekti yaratılır.",
              "Kombinasyon Önerisi: Pembe likit allık + gümüş parlak aydınlatıcı + pembe ıslak ruj."
            ],
            recommendations: ["Likit Soğuk Pembe Allık", "Gümüş Simli Aydınlatıcı Far", "Gül Kurusu Saten Gloss"]
          },
          {
            id: "plum-shades",
            title: "Mürdüm Tonları",
            icon: "🍇",
            panColor: "linear-gradient(135deg, #5c2c5c 0%, #301934 100%)",
            textColor: "#f8eef8",
            textTone: "purple",
            detailTitle: "Gizemli ve Derin: Mürdüm & Vişne Çürüğü",
            detailBody: "Mor, leylak ve siyah üzüm pigmentleri içeren, gözlerde derinlik, dudaklarda ise asil bir gece kraliçesi havası yaratan lüks gölgeler.",
            tips: [
              "Ten Tonu Uyumu: Buğday ve esmer tenlileri aşırı asil gösterir. Yeşil ve ela gözleri anında ortaya çıkarıp göz rengini patlatır.",
              "Kullanım Alanları: Dumanlı göz makyajlarında siyah yerine daha yumuşak ama derin bir buğu yaratmak için üst katmanda tercih edilir.",
              "Kombinasyon Önerisi: Mürdüm dumanlı eyeliner + vişne çürüğü çerçeveli dudaklar."
            ],
            recommendations: ["Mürdüm Derin Göz Kalemi", "Leylak Mat Karıştırma Farı", "Vişne Çürüğü Kadife Mat Ruj"]
          }
        ];

      case "goz-sekline-gore":
        return [
          {
            id: "badem-goz",
            title: "Badem Göz",
            icon: "👁️",
            panColor: "linear-gradient(135deg, #8c6b53 0%, #4a3325 100%)",
            textColor: "#ffffff",
            textTone: "brown",
            detailTitle: "Badem Göz İçin Kusursuz Lift Etkisi",
            detailBody: "Gözlerin dış köşelerinin hafifçe yukarı eğimli olduğu en dengeli göz şeklidir. Bu şekli vurgulamak ve bakışları daha kedi gibi yapmak çok kolaydır.",
            tips: [
              "Eyeliner Önerisi: Göz pınarlarından incecik başlayıp dış köşede hafifçe yukarı doğru kalınlaşarak uzayan kedi (cat-eye) linerı.",
              "Far Yerleşimi: Hareketli kapağın dış üçte birine koyu kahve far ile 'V' gölgesi verilerek karıştırılır.",
              "Maskara Uygulaması: Maskara fırçasıyla kirpikleri özellikle dışa ve şakaklara doğru yatırarak tarayın.",
              "Adım Adım: Far bazı -> Mat kemik tonu sabitleme -> Dış köşeye gölge kahve -> Kuyruklu ince liner -> Dış ağırlıklı maskara."
            ],
            recommendations: ["Açılı İnce Eyeliner Fırçası", "Cat-Eye Likit Liner", "Kirpiği Şakaklara Açan Maskara"]
          },
          {
            id: "yuvarlak-goz",
            title: "Yuvarlak Göz",
            icon: "⚪",
            panColor: "linear-gradient(135deg, #96a5b5 0%, #4d5d6e 100%)",
            textColor: "#f0f4f8",
            textTone: "pastel",
            detailTitle: "Yuvarlak Gözleri Bademleştirme Formülü",
            detailBody: "Gözlerin dikey yüksekliğinin geniş olduğu sevimli ve iri göz yapısıdır. Amacımız gözü enlemesine uzatarak daha çekici kılmaktır.",
            tips: [
              "Eyeliner Önerisi: Gözün içini ve altını tamamen çerçevelemek yerine orta kısımdan dışa doğru çekilen ve dış köşeyi yatay uzatan liner.",
              "Far Yerleşimi: Göz kapağının tam ortasına parlak far sürmekten kaçının. Farı dışa doğru iyice dairesel hareketlerle dağıtın.",
              "Maskara Uygulaması: Orta kirpikleri çok yukarı kaldırmayın, sadece gözün en dışındaki kirpikleri dışa doğru tarayarak sabitleyin.",
              "Adım Adım: Üst ve alt kirpik diplerine kahve kalem -> Kalemi dışa hafifçe dağıtma -> Sadece dış köşede uzayan eyeliner kuyruğu."
            ],
            recommendations: ["Dağıtılabilen Kahverengi Kajal", "Yatay Kuyruklu Kalem Liner", "Uzunluk Verici Maskara"]
          },
          {
            id: "dusun-kapak",
            title: "Düşük Göz Kapağı",
            icon: "⬇️",
            panColor: "linear-gradient(135deg, #c5a892 0%, #7d6554 100%)",
            textColor: "#ffffff",
            textTone: "nude",
            detailTitle: "Düşük Göz Kapaklarına İllüzyon Katlama",
            detailBody: "Hareketli kapağın üzerindeki derinin, kapağı katlayarak örttüğü göz şeklidir. Doğal gölge çizgisini yapay olarak yukarı taşımalıyız.",
            tips: [
              "Eyeliner Önerisi: Göz açık bakarken karşıya doğru düz çekilen ve göz katlanma çizgisine batmayan 'Yarasa Kanadı' veya ince dumanlı liner.",
              "Far Yerleşimi: Göz açıkken tam karşıya bakın ve sarkan kapağın üzerine mat bir kahverengi farla sahte bir katlanma çizgisi gölgesi yaratın.",
              "Maskara Uygulaması: Suya dayanıklı (waterproof) maskara kullanın ki sarkan kapak kirpikteki boyayı gün boyu bulaştırmasın.",
              "Adım Adım: Göz açık karşıya bakış -> Katlanma üzerine mat kahve gölge -> Göz açıkken çekilen düz liner kuyruğu -> Kirpik kıvırıcı."
            ],
            recommendations: ["Waterproof Bulaşmaz Maskara", "Dayanıklı Keçe Uçlu Eyeliner", "Mat Gölgelendirme Farı"]
          },
          {
            id: "cekik-goz",
            title: "Çekik Göz",
            icon: "🦊",
            panColor: "linear-gradient(135deg, #9c6c59 0%, #4e2f24 100%)",
            textColor: "#ffebee",
            textTone: "brown",
            detailTitle: "Çekik Gözlerin Fox-Eye Cazibesi",
            detailBody: "Katlanma çizgisinin çok belirsiz olduğu veya bulunmadığı (Monolid), pürüzsüz göz kapağı alanına sahip asil ve gizemli göz yapısıdır.",
            tips: [
              "Eyeliner Önerisi: Göz pınarına (iç köşeye) çekilen minik gaga eyelinerı ile tilki (fox-eye) tarzı keskin bakışlar yaratma.",
              "Far Yerleşimi: Göz kapağı boyunca degradeli (açıktan koyuya yukarı doğru giden) dumanlı dikey gölgelendirme çok asil durur.",
              "Maskara Uygulaması: Hem üst hem alt kirpikleri bolca tarayıp özellikle dış kirpik uçlarına ekstra yoğunluk verin.",
              "Adım Adım: Tüm kapağa orta ton kahve geçiş -> Kirpik dibinden yukarı doğru farı dumanlı dağıtma -> İç pınara ve dış köşeye ince liner."
            ],
            recommendations: ["Mikro Uçlu Detay Linerı", "Degradeli Dumanlı Gölgeler", "Hacim Kontrol Maskarası"]
          }
        ];

      case "unlu-makyajlari":
        return [
          {
            id: "hailey-b",
            title: "Hailey Bieber Makeup",
            icon: "🍩",
            panColor: "linear-gradient(135deg, #f5ebe6 0%, #dcae96 100%)",
            textColor: "#5a3a22",
            textTone: "nude",
            detailTitle: "Glazed Donut Cilt Sırrı: Hailey Bieber Stili",
            detailBody: "Cam gibi parlayan sırılsıklam bir cilt duruşu, hafif kahve çilleri, yok gibi duran bir allık ve ıslak gümüş kahverengi dudak kombini.",
            tips: [
              "Kullanılan Renkler: Islak krem, şampanya ışıltısı, soğuk kahve ve transparan parlak nudelar.",
              "Nasıl Yapılır: Cildi serum ile sırılsıklam yapın. Fondötenin içine 2 damla gliserin damlatıp sürün. Sadece gerekli yerlere kapatıcı sürün. Islak pembe elmacıklar yaratın.",
              "Ekonomik Alternatif: Maybelline kapatıcı ile NYX dudak parlatıcısını birleştirerek ıslak neme kavuşabilirsiniz.",
              "Ürün Önerisi: Hidratör serum, likit aydınlatıcı baz ve yoğun dudak yağı (strawberry lip oil)."
            ],
            recommendations: ["Çilekli Dudak Yağı", "Işıltılı Jel Nemlendirici Baz", "Likit Şampanya Highlighter"]
          },
          {
            id: "sabrina-c",
            title: "Sabrina Carpenter Makeup",
            icon: "🍭",
            panColor: "linear-gradient(135deg, #ffc0cb 0%, #ff80df 100%)",
            textColor: "#3d002a",
            textTone: "pink",
            detailTitle: "Bebek Figürü: Sabrina Carpenter Retro Işıltısı",
            detailBody: "Abartılı tatlı pembe yanaklar, ışıltılı pırıltılı göz kapakları ve 90'lar rüzgarlı koyu çerçeveli ombré pembe dudaklar.",
            tips: [
              "Kullanılan Renkler: Bebek pembesi, şakayık çiçeği pembeleri, gümüş simler ve çikolatalı karamel dudaklar.",
              "Nasıl Yapılır: Toz bebek pembesi allığı gür pofuduk fırçayla elmacık kemiğinden göz altına kadar bolca sürün. Göz kapağına gümüş parıltı sürün.",
              "Ekonomik Alternatif: L'Oréal allık ile f/p espresso dudak kalemleri Sabrina havasını anında yaratır.",
              "Ürün Önerisi: Yoğun mat bebek pembesi allık, simli metalik far paleti, koyu karamel dudak kalemi."
            ],
            recommendations: ["Yoğun Bebek Pembesi Allık", "Gümüş Simli Islak Far", "Expresso Dudak Çerçeve Kalemi"]
          },
          {
            id: "ariana-g",
            title: "Ariana Grande Makeup",
            icon: "🎤",
            panColor: "linear-gradient(135deg, #d3c2b8 0%, #a89488 100%)",
            textColor: "#2b2019",
            textTone: "pastel",
            detailTitle: "Retro Kedi Kuyruğu: Ariana Grande İmzası",
            detailBody: "Kusursuz yukarı doğru çekik mat kedi eyelinerı, pastel mat göz makyajları ve mat ten pürüzsüzlüğü ile nude dudak kombini.",
            tips: [
              "Kullanılan Renkler: Mat latte tonları, bej, kemik rengi, mat simsiyah liner ve soğuk alt tonlu mat somon ruj.",
              "Nasıl Yapılır: Göz kapağına tamamen mat pudra sürerek kurutun. Eyelinerı şakaklara doğru dik bir açıyla uzatın. Dudakları dudak kalemi ile doldurup mat rujlayın.",
              "Ekonomik Alternatif: Flormar siyah mat dipliner ve Golden Rose mat rujlar bu havayı mükemmel verir.",
              "Ürün Önerisi: Siyah mat kalıcı keçe uçlu eyeliner, porselen mat kapatıcılığı yüksek fondöten."
            ],
            recommendations: ["Mat Siyah Uzun Süre Kalıcı Liner", "Mat Şakak Kontür Kiti", "Kalıcı Nude Mat Likit Ruj"]
          },
          {
            id: "euphoria",
            title: "Euphoria Makeup",
            icon: "🔮",
            panColor: "linear-gradient(135deg, #8a2be2 0%, #da70d6 100%)",
            textColor: "#ffffff",
            textTone: "purple",
            detailTitle: "Sınır Tanımayan Sanat: Euphoria Serisi",
            detailBody: "Göz çevresinde taşlar, holografik neon çizgiler, ağlayan simler ve çılgın festival makyajlarının özgür dünyası.",
            tips: [
              "Kullanılan Renkler: Neon mor, kobalt mavisi, simli altın, holografik pembeler ve ıslak parlatıcılar.",
              "Nasıl Yapılır: Göz kapağına baz sürün. Neon rengi farı yarasa kanadı şeklinde dağıtın. Makyaj yapışkanı kullanarak göz çevresine swarovski taşlar dizin.",
              "Ekonomik Alternatif: Herhangi bir parıltılı tırnak taşını ve simli jel paletleri göz çevresinde güvenle kullanabilirsiniz.",
              "Ürün Önerisi: Taş setleri, holografik göz simleri, renkli suyla aktive olan grafik eyelinerlar."
            ],
            recommendations: ["Kozmetik Taş Seti (Göz İçin)", "Holografik Jel Pigment Mor", "Renkli Sulu Akrilik Liner"]
          },
          {
            id: "barbie-style",
            title: "Barbie Makeup",
            icon: "🛍️",
            panColor: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
            textColor: "#ffffff",
            textTone: "pink",
            detailTitle: "Kusursuz Pembe Dünyası: Barbie Stili",
            detailBody: "Deri pürüzsüzlüğünde yarı mat bir porselen ten, gök mavisi veya pembe göz kapakları ve parlak şeker pembe dudaklar.",
            tips: [
              "Kullanılan Renkler: Şeker pembe, fuşya, buz mavisi, beyaz göz kalemi ve parıltılı pembe parlatıcı.",
              "Nasıl Yapılır: Tam kaplayan mat bir ten makyajı yapın. Göz kapağının merkezine ışıltılı pembe uygulayın. Alt göz içine beyaz kalem çekip gözleri büyütün.",
              "Ekonomik Alternatif: Farmasi toz pembe allıklar ve simli dudak glossları bütçenizi korurken Barbie havası sunar.",
              "Ürün Önerisi: Yüksek kapatıcı fondöten, parlak şeker pembesi likit ruj, pembe far."
            ],
            recommendations: ["Porselen Kapatıcı Mat Fondöten", "Şeker Pembesi Parlak Ruj", "Dudak Kalemi - Sıcak Pembe"]
          },
          {
            id: "wednesday-style",
            title: "Wednesday Makeup",
            icon: "🕸️",
            panColor: "linear-gradient(135deg, #434343 0%, #000000 100%)",
            textColor: "#ffffff",
            textTone: "dark",
            detailTitle: "Soğuk ve Gotik Cazibe: Wednesday Addams",
            detailBody: "Solgun yarı yarıya mat transparan bir cilde sahip, göz altları hafif yorgun dumanlı mürdüm tınılarında gölgeli ve kurutulmuş erik rengi dudaklar.",
            tips: [
              "Kullanılan Renkler: Solgun gri, kurşun rengi, dumanlı mürdüm, mat kahverengi ve koyu mürdüm dudak lekeleri.",
              "Nasıl Yapılır: Cildinizi pudra ile soluklaştırın. Göz altlarınıza ve üstünüze mürdüm ve gri farları hafifçe dağıtarak yorgun ama asil bir buğu verin.",
              "Ekonomik Alternatif: Wet n Wild koyu bordo rujlar ile gri farlar Wednesday gizemini birebir yakalar.",
              "Ürün Önerisi: Mürdüm/Kahve geçiş farı, mat kurutulmuş erik rengi ruj/tint."
            ],
            recommendations: ["Gri Mürdüm Soft Far Paleti", "Kurutulmuş Erik Rengi Mat Ruj", "Şeffaf Mat Gözenek Pudrası"]
          }
        ];

      case "cilt-bakim":
        return [
          {
            id: "sabah-rutin",
            title: "Sabah Rutini",
            icon: "☀️",
            panColor: "linear-gradient(135deg, #fff9e6 0%, #ffd166 100%)",
            textColor: "#4a3500",
            textTone: "gold",
            detailTitle: "Makyaja Hazırlık: Işıltılı Sabah Rutini",
            detailBody: "Güne taze, uyanmış ve makyajı akşama kadar tutacak nem deposu bir ciltle başlamak için cildi canlandıran hızlı sabah adımları.",
            tips: [
              "Adım 1: Nazik temizleme jeliyle gece biriken sebumu yıkayın.",
              "Adım 2: C Vitamini serumu uygulayarak antioksidan koruma ve anında parlaklık verin.",
              "Adım 3: Su bazlı hyalüronik asitli hafif nemlendirici ile gözenekleri dolgunlaştırın.",
              "Adım 4: Makyaj spreyiyle nemi sabitleyin ve makyaja 5 dk sonra başlayın."
            ],
            recommendations: ["C Vitamini Aydınlatıcı Serum", "Su Bazlı Gözenek Nemlendirici", "Suya Dayanıklı SPF 50+ Krem"]
          },
          {
            id: "gece-rutin",
            title: "Gece Rutini",
            icon: "🌙",
            panColor: "linear-gradient(135deg, #1d2d44 0%, #0d1b2a 100%)",
            textColor: "#f0f5fa",
            textTone: "dark",
            detailTitle: "Cildi Yenileme Zamanı: Yoğun Gece Rutini",
            detailBody: "Makyaj kalıntılarını derinlemesine arındırmak, gözenekleri temizlemek ve hücre bölünmesinin en hızlı olduğu gece boyunca cildi onarmak.",
            tips: [
              "Adım 1: Çift aşamalı temizlik (Önce yağ bazlı temizleyici ile makyajı eritin, sonra su bazlı jel ile yıkayın).",
              "Adım 2: Haftada 2 gece gözenek sıkılaştırıcı Salisilik asit peeling pamuğu kullanın.",
              "Adım 3: Hücre yenileyici retinol veya bariyer bariyer onarıcı peptid serum tamponlayın.",
              "Adım 4: Yoğun nem kilitli gece maskesi kremi uygulayarak uykuya geçin."
            ],
            recommendations: ["Makyaj Eritici Temizleme Yağı", "Bariyer Onarıcı Peptid Serum", "Gözenek Sıkılaştırıcı BHA Tonik"]
          },
          {
            id: "kuru-bakim",
            title: "Kuru Cilt Bakımı",
            icon: "🌵",
            panColor: "linear-gradient(135deg, #fbc5a0 0%, #dca98d 100%)",
            textColor: "#5e2908",
            textTone: "nude",
            detailTitle: "Neme Doymayan Kuru Ciltlere Özel Bakım",
            detailBody: "Makyaj öncesi pullanmayı sıfıra indirmek ve çatlak görünümü gidermek için cildin lipit (yağ) ve su dengesini kurma ritüeli.",
            tips: [
              "Gliserin, seramid, hyalüronik asit içeren koyu kıvamlı kremler kullanın.",
              "Yüzünüzü alkali sert sabunlarla yıkamaktan kesinlikle kaçının.",
              "Haftalık yoğun besleyici kağıt maskeler uygulayıp üzerine skualen yağı mühürleyin."
            ],
            recommendations: ["Seramid Yoğun Bariyer Kremi", "Besleyici Skualen Yüz Yağı", "Gliserinli Yoğun Kağıt Maske"]
          },
          {
            id: "yagli-bakim",
            title: "Yağlı Cilt Bakımı",
            icon: "🧪",
            panColor: "linear-gradient(135deg, #a8dadc 0%, #457b9d 100%)",
            textColor: "#1d3557",
            textTone: "pastel",
            detailTitle: "Sebum Dengesi: Parlamayan Kadife Yağlı Ciltler",
            detailBody: "Makyajı kusan, parlayan ve siyah nokta üretmeye meyilli yağlı cilt gözeneklerini asitler ve hafif su jellere dengeleme.",
            tips: [
              "Niasinamid (B3 Vitamini) içeren gözenek düzenleyici serumları sabah akşam kullanın.",
              "Krem formüller yerine jel formüllü, yağsız (oil-free) nemlendiriciler seçin.",
              "Haftada bir çay ağacı özlü kil maskesi ile gözenek içi fazla yağı vakumlayın."
            ],
            recommendations: ["Niasinamid %10 Sebum Serumu", "Çay Ağacı Sebum Kil Maskesi", "Su Jeli Yağsız Nemlendirici"]
          },
          {
            id: "hassas-bakim",
            title: "Hassas Cilt Bakımı",
            icon: "🌿",
            panColor: "linear-gradient(135deg, #d8f3dc 0%, #74c69d 100%)",
            textColor: "#1b4332",
            textTone: "green",
            detailTitle: "Kızarıklık Karşıtı Sakinleştirici Hassas Bariyer",
            detailBody: "Makyaj fırçasıyla bile kızarabilen kozmetik reaktivitesi yüksek cilt barierini Centella Asiatica ve Panthenol ile koruma.",
            tips: [
              "Alkol, yapay parfüm, paraben içeren hiçbir kozmetik ürünü sürmeyin.",
              "Cildinizi çok sıcak su yerine her zaman oda sıcaklığındaki ılık suyla yıkayın.",
              "Centella (Cica) içeren krem ve bariyer spreyleriyle kızarıklıkları nötrleyin."
            ],
            recommendations: ["Centella Yoğun Cica Krem", "Yatıştırıcı Termal Bariyer Sprey", "Hipoalerjenik Temizleme Sütü"]
          },
          {
            id: "sivilceli-bakim",
            title: "Sivilceli Cilt Bakımı",
            icon: "🚨",
            panColor: "linear-gradient(135deg, #ffadad 0%, #ff6b6b 100%)",
            textColor: "#4a0000",
            textTone: "red",
            detailTitle: "Sivilce ve Akne Savar Lokal Tedavi Rutini",
            detailBody: "Aktif akneleri söndürmek, sivilce lekelerini gidermek ve gözenek mikroplarını temizleyen salisilik bazlı akıllı bakım.",
            tips: [
              "Aktif sivilcelerin üzerine geceleri lokal sivilce söndürücü kurutucu losyon sürün.",
              "Makyaj yaparken sivilceli bölgelerin üzerini kirli ellerle değil steril fırçayla kapatın.",
              "Sivilcelerle oynamayın, iz kalmaması için lokal hidrokolloid sivilce bantları takın."
            ],
            recommendations: ["Salisilik Sivilce Kurutucu Pembe Losyon", "Hidrokolloid Akne Yaması", "Gözenek Temizleyici Salisilik Jel"]
          }
        ];

      case "urun-karsilastirma":
        return [
          {
            id: "drugstore-battle",
            title: "Maybelline vs L'Oréal",
            icon: "🛍️",
            panColor: "linear-gradient(135deg, #e3f2fd 0%, #1976d2 100%)",
            textColor: "#0d47a1",
            textTone: "blue",
            detailTitle: "Sokağın İki Dev Markası Karşı Karşıya",
            detailBody: "Ekonomik drugstore kategorisinin en popüler iki global devinin formül, fiyat ve performans analiz dövüşü.",
            tips: [
              "Maybelline Artıları: Göz makyajında (Lash Sensational maskara, jel liner) ve kuru tene uyan kapatıcılarda aşırı başarılıdır.",
              "L'Oréal Artıları: Serum fondötenleri (True Match), ruj formülleri ve cilt bakım destekli ten makyajında lüks segment seviyesindedir.",
              "Fiyat Seviyesi: Maybelline bütçe dostu drugstore iken, L'Oréal bir tık daha orta segmente yakın durmaktadır.",
              "Kime Daha Uygun: Trend, genç ve renkli makyajlar için Maybelline; daha olgun, ipeksi ve makyaj yaparken cilt koruyan formüller için L'Oréal."
            ],
            recommendations: ["Maybelline Fit Me Mat Kapatıcı", "L'Oréal True Match Nemli Serum", "Maybelline Lash Sensational Maskara"]
          },
          {
            id: "mid-luxury-battle",
            title: "MAC vs NARS",
            icon: "👑",
            panColor: "linear-gradient(135deg, #fce4ec 0%, #f48fb1 100%)",
            textColor: "#4a148c",
            textTone: "pink",
            detailTitle: "Yarı Lüks Klasikler: Profesyonel MAC vs NARS",
            detailBody: "Makyaj artistlerinin vazgeçilmez çantası MAC ile ten makyajında çığır açan ikonik NARS arasındaki muazzam eşleşme.",
            tips: [
              "MAC Artıları: Pigment gücü devasadır. Ruj skalası (Ruby Woo, Velvet Teddy) dünyanın en büyüğüdür ve farları çamurlaşmaz.",
              "NARS Artıları: Ten makyajına (Sheer Glow, Radiant Creamy kapatıcı) muazzam doğal bir saten doku verir. Likit allıkları harikadır.",
              "Fiyat Seviyesi: Her ikisi de high-end lüks ve sephora mağaza fiyatlarındadır.",
              "Kime Daha Uygun: Yoğun pigment ve sahne/gece makyajı kalıcılığı için MAC; ıslak, sağlıklı ve günlük cildi ön plana çıkaran lüks için NARS."
            ],
            recommendations: ["MAC Velvet Teddy Klasik Ruj", "NARS Radiant Kapatıcı", "NARS Orgasm Parıltılı Toz Allık"]
          },
          {
            id: "celebrity-battle",
            title: "Rare Beauty vs Fenty Beauty",
            icon: "💎",
            panColor: "linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%)",
            textColor: "#e65100",
            textTone: "gold",
            detailTitle: "Yarışın Kraliçeleri: Selena Gomez vs Rihanna",
            detailBody: "Selena Gomez'in sevgi dolu markası Rare Beauty ile kapsayıcı ve cesur Rihanna'nın Fenty Beauty markasının amansız tüyoları.",
            tips: [
              "Rare Beauty Artıları: Sosyal medyayı sallayan aşırı kalıcı likit allıklar, pürüzsüz gözenek bazları ve hassas cilt dostu içerikler.",
              "Fenty Beauty Artıları: 50'den fazla renk sunan kapatıcı ağı, aşırı parlak yapışmayan gloss bombaları ve eşsiz 3D kontür stickleri.",
              "Fiyat Seviyesi: Sephora lüks segmentindedir.",
              "Kime Daha Uygun: Doğal, nemli, hafif ve yumuşak 'Clean Girl' makyajları için Rare Beauty; iddialı, keskin kontürlü partiler için Fenty."
            ],
            recommendations: ["Rare Beauty Likit Allık", "Fenty Gloss Bomb Parlatıcı", "Fenty Amber Kontür Stick"]
          }
        ];

      case "makyaj-sozlugu":
        return [
          {
            id: "primer-term",
            title: "Primer",
            icon: "🧴",
            panColor: "linear-gradient(135deg, #f5f5f5 0%, #cfd8dc 100%)",
            textColor: "#263238",
            textTone: "silver",
            detailTitle: "Primer Nedir? Makyaj Bazının Gücü",
            detailBody: "Makyajın cilde tutunmasını sağlayan, gözenekleri gizleyen, çizgileri flulaştıran ve fondötenin dayanıklılığını 3 katına çıkaran ilk aşama ürünüdür.",
            tips: [
              "Gözenek gizleyici silikon bazlar sadece gözenek bölgesine dairesel tamponlanır.",
              "Işıltılı su bazlı nemlendirici primerlar ise tüm yüze fırçayla yayılabilir.",
              "Primer sürüldükten sonra 2 dakika cilde oturması beklenip fondötene öyle geçilmelidir."
            ],
            recommendations: ["Gözenek Gizleyici Mat Baz", "Işıltılı Cam Cilt Nem Bazi", "Sprey Nem Veren Baz"]
          },
          {
            id: "baking-term",
            title: "Baking",
            icon: "🧁",
            panColor: "linear-gradient(135deg, #fffde7 0%, #fff59d 100%)",
            textColor: "#f57f17",
            textTone: "gold",
            detailTitle: "Baking Tekniği: Pudrayla Pişirme Sanatı",
            detailBody: "Özellikle kapatıcının göz altına dolmaması ve gün boyu kalması için transparan sabitleme pudrasının süngerle yoğun sürülüp bekletilmesidir.",
            tips: [
              "Göz altınıza nemli süngerle bolca pürüzsüz transparan toz pudrayı bırakın.",
              "Yanak ve çene hatlarına keskinlik vermek için kontür çizgisinin altına da uygulayın.",
              "3 dakika bekledikten sonra pofuduk yumuşak bir fırçayla fazlalığı süpürün."
            ],
            recommendations: ["Transparan Toz Pudra", "Üçgen Pudra Makyaj Süngeri", "Yumuşak Fan Süpürme Fırçası"]
          },
          {
            id: "contour-term",
            title: "Contour",
            icon: "📐",
            panColor: "linear-gradient(135deg, #c7a75c 0%, #4e3629 100%)",
            textColor: "#ffeb3b",
            textTone: "brown",
            detailTitle: "Contour Tekniği: Gölgeyle İllüzyon",
            detailBody: "Yüz kemik yapısını manipüle etmek; elmacık kemiklerini yükseltmek, burnu inceltmek veya gıdıyı saklamak için gri-soğuk alt tonlu kahve kullanımı.",
            tips: [
              "Sıcak turuncu tonlu bronzerlar kontür için kullanılmaz; kontür soğuk kahve olmalıdır.",
              "Elmacık kemiği altına, kulak hizasından ağza doğru 3 parmak kala çizgilenir.",
              "Fırçayla her zaman yukarı ve saç çizgisine doğru dağıtılmalıdır filtre efekti için."
            ],
            recommendations: ["Soğuk Kahve Kontür Stiği", "Açılı Yanak Kontür Fırçası", "Gölgeleme Krem Paleti"]
          },
          {
            id: "overlining-term",
            title: "Overlining",
            icon: "✏️",
            panColor: "linear-gradient(135deg, #ffcdd2 0%, #ef5350 100%)",
            textColor: "#b71c1c",
            textTone: "red",
            detailTitle: "Overlining Tekniği: Ameliyatsız Dolgun Dudaklar",
            detailBody: "Dudakları iğnesiz daha dolgun göstermek için, kendi doğal dudak sınır çizgisinin sadece 1 milimetre üzerinden dudak kalemiyle gitmektir.",
            tips: [
              "Sadece dudağın üst orta yayında (Cupid's bow) ve alt orta sınırda taşırın.",
              "Dudak köşelerinden taşırırsanız ağız yapısı sarkık görünür; köşeleri sınırda tutun.",
              "Kendi ten ve dudak renginizden 1 tık koyu soğuk kahve/nude kalemler seçin."
            ],
            recommendations: ["Kadifemsi Yumuşak Dudak Kalemi", "Dudak Çizgi Fırçası", "Işıltılı Islak Parıldatıcı Gloss"]
          },
          {
            id: "setting-term",
            title: "Setting Spray",
            icon: "💨",
            panColor: "linear-gradient(135deg, #e0f2f1 0%, #26a69a 100%)",
            textColor: "#004d40",
            textTone: "green",
            detailTitle: "Setting Spray: 24 Saatlik Akmayan Zırh",
            detailBody: "Makyajdaki toz pudralı görüntüyü eritip tenle bütünleştiren ve suya, tere dayanıklı bir koruyucu şeffaf kalkan ören mühürleme spreyidir.",
            tips: [
              "Makyaja başlamadan önce de sünger fırçalarınıza sıkarak nemlendirin.",
              "Yüzünüze 'X' ve 'T' şeklinde 20 santim uzaktan gözleri kapatarak sıkın.",
              "Spreyi sıktıktan sonra elinizle yelpazeleyip dokunmayın; kendiliğinden kurusun."
            ],
            recommendations: ["Mikro Sisleyici Sabitleme Spreyi", "Gliserinli Islak Bitiş Spreyi", "Matlaştırıcı Gözenek Spreyi"]
          },
          {
            id: "highlight-term",
            title: "Highlighter",
            icon: "⭐",
            panColor: "linear-gradient(135deg, #fff3e0 0%, #ffd54f 100%)",
            textColor: "#ff6f00",
            textTone: "gold",
            detailTitle: "Highlighter: Doğal Işık Yansıması",
            detailBody: "Işığın yüze doğal olarak ilk çarptığı çıkık noktaları parlatarak cilde taze, dinç ve ışıltılı bir nem görüntüsü kazandırma ürünüdür.",
            tips: [
              "Elmacık kemiklerinin üzerine, kaş altına, burun kemerine ve dudak üzerine sürülür.",
              "Eğer cildinizde aktif pürüz/sivilce varsa pudra aydınlatıcı gözenekleri vurgulayabilir.",
              "Likit aydınlatıcılar kuru fırçayla veya nemli süngerle çok daha masum durur."
            ],
            recommendations: ["Champagne Likit Highlighter", "İpeksi Pürüzsüz Aydınlatıcı Pudra", "Göz Pınarı Aydınlatma Kalemi"]
          },
          {
            id: "conceal-term",
            title: "Concealer",
            icon: "🧴",
            panColor: "linear-gradient(135deg, #ffeb3b 0%, #fbc02d 100%)",
            textColor: "#5d4037",
            textTone: "nude",
            detailTitle: "Concealer: Kusursuz Kamuflaj Kapatıcı",
            detailBody: "Göz altı morluklarını, sivilce kızarıklıklarını ve güneş lekelerini lokal olarak yok eden, ciltle aynı tondaki yüksek pigmentli süper örtücülerdir.",
            tips: [
              "Göz altına çok kalın sürmek yerine, göz pınarı ve göz dış kenarına 1er nokta sürün.",
              "Göz kenarındaki kapatıcıyı yukarı şakaklara doğru dağıtırsanız lifting efekti verir.",
              "Sivilce kapatırken tam sivilce üzerine sürüp kurumasını 30 saniye bekleyin sonra dağıtın."
            ],
            recommendations: ["Likit Nemlendirici Kapatıcı", "Kızarıklık Nötrleyen Yeşil Corrector", "Yüksek Örtücü Krem Kapatıcı"]
          }
        ];

      case "makyaj-tarihi":
        return [
          {
            id: "twenties-era",
            title: "1920'ler",
            icon: "🏺",
            panColor: "linear-gradient(135deg, #424242 0%, #151515 100%)",
            textColor: "#e0e0e0",
            textTone: "dark",
            detailTitle: "Gazino Çılgınlığı: 1920'ler Siyah Flapper Bakışı",
            detailBody: "Sessiz sinema oyuncularının dramatik yüz ifadelerinden etkilenen, incecik aşağı kıvrık kaşlar, koyu duman duman dairesel gözler ve kalp şeklinde küçük koyu dudaklar.",
            tips: [
              "Gözler: Yoğun siyah kömür tozu sürmeleri dairesel olarak tüm göz kapağına dağıtılır.",
              "Ten: Porselen derecesinde bembeyaz mat, neredeyse hiç allık sürülmemiş bir cilt.",
              "Dudaklar: 'Karnaval Yayı' adıyla dudak kenarları saklanarak sadece ortası kalp gibi koyu kırmızı boyanır."
            ],
            recommendations: ["Siyah Kömür Kajal Göz Kalemi", "Bordo Kalp Saten Ruj", "Dramatik İnce Kaş Kalemi"]
          },
          {
            id: "fifties-era",
            title: "1950'ler",
            icon: "💋",
            panColor: "linear-gradient(135deg, #ef5350 0%, #b71c1c 100%)",
            textColor: "#ffffff",
            textTone: "red",
            detailTitle: "Pin-Up Cazibesi: Marilyn Monroe ve Retro Kadınlık",
            detailBody: "İkinci dünya savaşı sonrası kadınlığın şaha kalktığı dönem. Kalın kuyruklu kusursuz eyeliner, kavisli dolgun doğal kaşlar ve ıslak, cüretkar kırmızı rujlar.",
            tips: [
              "Gözler: Çok düzgün, göz yapısını yukarı çeken kalın siyah likit eyeliner kuyruğu.",
              "Yanaklar: Çok hafif taze şeftali allıklar ile uykudan yeni uyanmışçasına bir pembelik.",
              "Dudaklar: Dış hatları kalemle özenle çizilmiş, üstüne aydınlatıcı parlatıcı kondurulmuş Ruby kırmızısı."
            ],
            recommendations: ["Siyah Likit Keçe Dipliner", "Rubby Klasik Mat Kırmızı Ruj", "Şeftali Doğal Pudra Allık"]
          },
          {
            id: "nineties-era",
            title: "1990'lar",
            icon: "🎧",
            panColor: "linear-gradient(135deg, #a1887f 0%, #4e342e 100%)",
            textColor: "#fff9c4",
            textTone: "brown",
            detailTitle: "Sokak Asi Ruhu: 1990'lar Kahverengi Grunge",
            detailBody: "Supermodellere ilham veren, tamamen mat ten makyajı, kahverengi veya taupe dumanlı göz kapakları ve koyu kahve çerçeveli mat kahve-nude dudaklar.",
            tips: [
              "Gözler: Işıltılı sim kullanılmaz. Mat kum rengi üzerine kahve far geçişleri.",
              "Dudaklar: Dudaklar koyu kahve tonda çerçevelenir ve içi daha açık şeftali mat rujla doldurulur.",
              "Ten: Aşırı mat transparan pudralarla fırınlanmış donuk ve kendinden emin duruş."
            ],
            recommendations: ["Taupe Mat Karıştırma Farı", "Koyu Çikolata Dudak Kalemi", "Yarı Mat Kum Rengi Ruj"]
          },
          {
            id: "y2k-era",
            title: "2000'ler",
            icon: "💿",
            panColor: "linear-gradient(135deg, #b3e5fc 0%, #03a9f4 100%)",
            textColor: "#01579b",
            textTone: "blue",
            detailTitle: "Milenyum Çılgınlığı: Y2K Donmuş Metalik Işıltılar",
            detailBody: "Britney Spears ve Christina Aguilera akımları. Buz mavisi metalik farlar, incecik kavisli cımbızlanmış kaşlar ve aşırı şeffaf yapışkan ıslak pembe dudaklar.",
            tips: [
              "Gözler: Göz kapağının tamamına gümüş, buz mavisi veya beyaz yanar döner parlak farlar.",
              "Dudaklar: Bolca sürülen ve dişlere yapışacak seviyedeki çilekli simli dudak parlatıcıları.",
              "Kaşlar: İncecik kalemle çizilmiş yay gibi duran milenyum kaşı."
            ],
            recommendations: ["Metalik Buz Mavisi Krem Far", "Çilekli Ultra Parlak Simli Gloss", "Açık Bej Göz Kalemi"]
          },
          {
            id: "today-era",
            title: "Bugünün Trendleri",
            icon: "📱",
            panColor: "linear-gradient(135deg, #fce4ec 0%, #e91e63 100%)",
            textColor: "#ffffff",
            textTone: "pink",
            detailTitle: "Sosyal Medya Estetiği: Çabasız Glow Glass Skin",
            detailBody: "Kendi kusurlarını kabullenen, yapay kalın ten makyajlarını tarihe gömen, bol nemlendirilmiş cam ciltler, çiller ve dudak yağları.",
            tips: [
              "Ten: Sadece bölgesel parlaklık veren serumlar ve hibrid makyaj ürünleri.",
              "Gözler: Maskarayla tek tek ayrılmış lamine kirpik yapıları ve şeffaf yukarı taranmış kaşlar.",
              "Gelişim: Hayvanlar üzerinde deney yapmayan (Cruelty-Free) ve vegan temiz formül teknolojisi ön plandadır."
            ],
            recommendations: ["Lamine Kaş Şeffaf Jel Sabitleyici", "Cruelty-Free Islak BB Serum", "Besleyici Saten Hibrit Allık"]
          }
        ];

      case "sanal-makyaj-masasi":
        // This acts as drawer states for our incredible interactive virtual dressing room!
        return [
          {
            id: "daily-table",
            title: "Günlük Masa",
            icon: "💅",
            panColor: "linear-gradient(135deg, #e8a7a1 0%, #c38370 100%)",
            textColor: "#4a1202",
            textTone: "nude",
            detailTitle: "Taze ve Hızlı Günlük Masa",
            detailBody: "Sabah telaşında 5 dakikada uyanmış ve taze bir tene kavuşmanızı sağlayacak hafif nemli, cildi yormayan taze masa konsepti.",
            tips: [
              "Ruj Rengi: Cozy Peach Dudak Yağı (Şeftali Nude / Islak Bitiş)",
              "Allık Rengi: Baby Pink Doğal Allık (Taze Pembe / Likit Bitiş)",
              "Göz Farı: Şampanya Işıltısı (Düşük Pigment / İpeksi Şampanya)",
              "Aynadaki model üzerinde veya fırçalarla ürün seçerek renkleri anında deneyimleyebilirsiniz."
            ],
            recommendations: ["Cozy Peach Lip Oil", "Sweet Rose Liquid Blush", "Glow Champagne Stick Far"]
          },
          {
            id: "night-table",
            title: "Gece Masası",
            icon: "🌌",
            panColor: "linear-gradient(135deg, #3d315b 0%, #17112a 100%)",
            textColor: "#f1f1f1",
            textTone: "dark",
            detailTitle: "Dramatik Yoğun Şıklık Masası",
            detailBody: "Spot ışıklarının altında matlığını koruyan, iddialı, buğulu bakışlara ve asil vişne çürüğü dudaklara ev sahipliği yapan lüks akşam masası.",
            tips: [
              "Ruj Rengi: Royal Wine Velvet Matte (Vişne Çürüğü / Kadife Mat)",
              "Allık Rengi: Terracotta Esintisi (Kiremit Tonu / Mat Satensi)",
              "Göz Farı: Midnight Smoke (Koyu Mor ve Metalik Gri Karışımı)",
              "Yoğun gece asaletini ve asiliğini test etmek için masadaki ürünleri ayna önünde aktive edin."
            ],
            recommendations: ["Royal Wine Matte Ruj", "Goth Purple Eyeshadow Plak", "Dramatic Lash Mascara"]
          },
          {
            id: "glam-table",
            title: "Soft Glam Masası",
            icon: "✨",
            panColor: "linear-gradient(135deg, #ffd166 0%, #c49a45 100%)",
            textColor: "#2d2003",
            textTone: "gold",
            detailTitle: "Işıltılı Davet Yelpazesi Masası",
            detailBody: "Düğün, parti ve kırmızı halı şıklığında yüzünüze boyut veren, ıslak görünümlü altın şampanya yansımaları barındıran Hollywood stili.",
            tips: [
              "Ruj Rengi: Caramel Nude Lip Gloss (Karamel Kahve / 3D Islak Simli)",
              "Allık Rengi: Gold Sunset Bronz Allık (Altın Taneli Bronz Şeftali)",
              "Göz Farı: Liquid Diamond Shimmer (Göz Alıcı Yıldız Tozu Pigmenti)",
              "Makyaj sabitleme spreyi ile 18 saatlik kalıcılık ve göz alıcı ışıltı garantilenir."
            ],
            recommendations: ["Caramel Nude Melted Gloss", "Sunset Gold Shimmer Allık", "Diamond Sparkle Topper"]
          },
          {
            id: "bridal-table",
            title: "Düğün Masası",
            icon: "👰",
            panColor: "linear-gradient(135deg, #fdfaf6 0%, #eedcd3 100%)",
            textColor: "#5c3e35",
            textTone: "pastel",
            detailTitle: "Gelinlere Özel Porselen Masa",
            detailBody: "Ağlama ve terleme testlerinden tam not almış, flaş patlamalarında beyazlama yapmayan ipeksi porselen gelin masası.",
            tips: [
              "Ruj Rengi: Romantic Rose Matte (Lüks Pembe Gül / Mat Saten Dudak)",
              "Allık Rengi: Sweetheart Soft Coral (Hafif Şeftali Mercan / Toz Saten)",
              "Göz Farı: Rose Gold Romance (Tatlı Gül-Altın / Saten Sedefli)",
              "En unutulmaz gününüz için pürüzsüz porselen cildin pastel pembe renklerini test edin."
            ],
            recommendations: ["Romantic Bridal Satin Lipstick", "Waterproof Volumizer Rimel", "Rosewood Saten Allık Plakası"]
          }
        ];

      default:
        // Fallback or backup for deleted routes (retaining some data just in case)
        return [];
    }
  };

  const palettePans = getPaletteData();

  return (
    <div 
      className={`min-h-screen py-8 px-4 font-sans flex flex-col items-center transition-colors duration-305 ${
        isDark ? "text-stone-100" : "text-stone-900"
      }`}
      style={{
        backgroundImage: isDark 
          ? "radial-gradient(circle at 50% 50%, #15161c 0%, #060608 90%)" 
          : "radial-gradient(circle at 50% 50%, #ffffff 0%, #f3f4f6 90%)"
      }}
    >
      
      {/* Black Velvet Title Header Board */}
      <div className="max-w-4xl w-full text-center space-y-3 mb-10 pb-2 border-b border-stone-200/50 dark:border-transparent">
        <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
          isDark 
            ? "bg-white/5 border-white/10 text-stone-300" 
            : "bg-stone-100 border-stone-250 text-stone-605"
        }`}>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Siyah Kadife & Gümüş Özel Bölme</span>
        </div>
        <h2 className={`text-4xl sm:text-5xl font-serif font-black tracking-tight drop-shadow-md transition-colors duration-300 ${
          isDark ? "text-white" : "text-stone-900"
        }`}>
          {pageTitle}
        </h2>
        <p className={`text-xs sm:text-sm font-sans max-w-xl mx-auto transition-colors duration-300 ${
          isDark ? "text-stone-400" : "text-stone-600"
        }`}>
          Lüks kapağı açık tutarak içerideki far gözü şeklinde yerleştirilmiş içerik bölmelerine dokununuz.
        </p>
      </div>

      {/* THREE-DIMENSIONAL PHYSICAL PALETTE CONTAINER */}
      <div className="max-w-4xl w-full flex flex-col items-center perspective-[1500px]">
        
        {/* THE ENTIRE PALETTE CASING WITH 3D EFFECT */}
        <div 
          className="relative w-full bg-[#1c1d24] rounded-3xl border-4 border-stone-800 shadow-[0_30px_70px_rgba(0,0,0,0.85)] p-1 overflow-hidden transition-all duration-300 transform-style-3d"
          style={{
            backgroundImage: "linear-gradient(135deg, #1b1c22 0%, #0f1014 100%)",
            boxShadow: `
              0 0 0 2px rgba(255, 255, 255, 0.05),
              0 25px 50px -12px rgba(0, 0, 0, 0.8),
              inset 0 2px 4px rgba(255, 255, 255, 0.1)
            `
          }}
        >
          {/* 1. PALETTE HARD COVER (ÜST PARLAK KAPAK - 3D FLIP UPWARD ACCORDING TO STATE) */}
          <div 
            onClick={() => { if (!isLidOpen) setIsLidOpen(true); }}
            className={`w-full bg-[#0a0a0c] border-b-2 border-stone-900 rounded-t-2xl flex flex-col justify-between p-6 sm:p-10 cursor-pointer origin-top transition-transform duration-[1200ms] ease-in-out z-20 ${
              isLidOpen 
                ? "-rotate-x-[110deg] opacity-10 pointer-events-none h-24 shadow-none" 
                : "rotate-x-[0deg] opacity-100 h-96 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            }`}
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 25%, rgba(255,255,255,0.08) 0%, transparent 60%),
                linear-gradient(135deg, #141519 0%, #08090b 100%)
              `,
              backfaceVisibility: "hidden"
            }}
          >
            {/* Gloss silver linear decorations */}
            <div className="w-full flex items-center justify-between border-b border-stone-800/80 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#a8b3c4] uppercase font-bold">
                GLOSS COUPE DE BEAUTÉ
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-stone-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-stone-650"></div>
              </div>
            </div>

            {/* EMBOSSED SILVER LOGO & TEXTURE IN MID-COVER */}
            <div className="text-center py-6 space-y-4">
              <div className="inline-block relative">
                <span className="absolute -inset-1 blur-md bg-white/20 rounded-full animate-pulse"></span>
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white via-stone-300 to-stone-600 p-[2px] shadow-2xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center font-serif text-3xl font-black text-white">
                    G
                  </div>
                </div>
              </div>

              <h3 className="text-4xl sm:text-5xl font-serif font-black tracking-[0.25em] text-[#edf1f7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                GLOSS
              </h3>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-stone-400/50 to-transparent mx-auto"></div>
              <p className="text-[9px] font-mono tracking-[0.18em] text-[#8e99a8] uppercase font-bold">
                PRÉCISION EYESHADOW PALETTE
              </p>
            </div>

            {/* FOOTER DETAIL OF COVER CARD */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-stone-800/85">
              <div className="flex items-center gap-2 text-[#9fa8b8] text-[9px] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#e5c158] animate-spin" style={{ animationDuration: "12s" }} />
                <span>MÜHÜRLÜ SEÇKİ COLLECTION</span>
              </div>
              
              <div className="mt-2 sm:mt-0 flex items-center gap-1.5 px-3 py-1 rounded bg-[#e5c158] text-stone-950 text-[10px] font-black uppercase tracking-wider shadow-md animate-pulse">
                <span>KAPAĞI KALDIRMAK İÇİN TIKLAYINIZ</span>
                <span>⟶</span>
              </div>
            </div>
          </div>

          {/* PALETTE INTERIOR BASE (KAPAK AÇILDIKTAN SONRA GÖZÜKEN İÇ HAZNE) */}
          <div 
            className={`w-full transition-all duration-[1000ms] flex flex-col p-4 sm:p-8 space-y-8 ${
              isLidOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-40 overflow-hidden h-0 pointer-events-none p-0"
            }`}
          >
            {/* Mirror reflection band mock on inside the base box */}
            <div className="flex items-center justify-between bg-[#111218] p-3 rounded-xl border border-stone-800 shadow-inner">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></div>
                <span className="text-[10px] sm:text-xs font-mono text-stone-400 font-bold uppercase tracking-wider">
                  KADİFE HAZNE: {pageTitle} Gözleri
                </span>
              </div>
              <button 
                onClick={() => setIsLidOpen(false)}
                className="text-[10px] font-black uppercase text-stone-400 hover:text-white px-2.5 py-1 rounded bg-stone-850 hover:bg-stone-800 border border-stone-750 transition-colors cursor-pointer"
              >
                Kapağı Kapat ⤓
              </button>
            </div>

            {/* REGULAR EYESHADOW WELLS (DIŞARIDAN GELEN FAR GÖZÜ LİSTESİ) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* GRID OF INCREDIBLE PRESSED EYESHADOW PANS (Göz Hazneleri) (7 Cols) */}
                <div className="md:col-span-6 grid grid-cols-2 xs:grid-cols-3 gap-4">
                  {palettePans.map((pan) => {
                    const isActive = activePanId === pan.id;
                    return (
                      <button
                        key={pan.id}
                        onClick={() => {
                          setActivePanId(pan.id);
                          // Play a very subtle mechanical hover sound feel if required
                        }}
                        className={`group relative aspect-square rounded-full border-2 p-1 focus:outline-none transition-all duration-300 transform flex flex-col items-center justify-center cursor-pointer ${
                          isActive 
                            ? "border-amber-400 bg-stone-950/80 scale-105 shadow-[0_0_15px_rgba(229,193,88,0.5)]" 
                            : "border-stone-800 hover:border-stone-500 hover:scale-103 bg-stone-900 shadow-inner"
                        }`}
                        style={{
                          boxShadow: isActive 
                            ? "inset 0 3px 8px rgba(0,0,0,0.6), 0 0 25px rgba(229,193,88,0.3)"
                            : "inset 0 6px 14px rgba(0,0,0,0.85), 0 4px 10px rgba(0,0,0,0.2)"
                        }}
                      >
                        {/* Eyeshadow pressed powder surface (Far Tozu İç Haznesi) */}
                        <div 
                          className="w-full h-full rounded-full transition-all duration-300 overflow-hidden relative flex flex-col items-center justify-center p-3"
                          style={{
                            background: pan.panColor,
                            boxShadow: "inset 0 -3px 8px rgba(0,0,0,0.4), inset 0 3px 10px rgba(255,255,255,0.4)"
                          }}
                        >
                          {/* Fine cosmetic metallic particles reflection layer overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 group-hover:animate-[pulse_1.5s_infinite]" />
                          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1.5px)] [background-size:8px_8px]"></div>

                          {/* Icon Display */}
                          <div className="text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform">
                            {pan.icon}
                          </div>

                          {/* Little Pressed Stamp */}
                          <span className="text-[8px] tracking-widest uppercase font-black text-center mt-1 select-none" style={{ color: pan.textColor, textShadow: "0 1px 2px rgba(255,255,255,0.5)"}}>
                            {pan.title}
                          </span>

                          {/* Pressed stamp concentric circle line detail inside the powder */}
                          <div className="absolute inset-2 border border-black/10 rounded-full pointer-events-none"></div>
                          <div className="absolute inset-3 border border-white/5 rounded-full pointer-events-none"></div>

                        </div>

                        {/* Outer circular metal ring representing eyeshadow metal pan casing */}
                        <div className="absolute -inset-[3px] border-[2px] border-[#9ca3af]/40 rounded-full pointer-events-none mix-blend-color-dodge"></div>
                      </button>
                    );
                  })}
                </div>

                {/* THE RIGHT GLASS SHEET (Detaylı Bilgi Karşılama Alanı) (5 Cols) */}
                <div className="md:col-span-6 bg-[#0c0d10] p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-[inset_0_4px_20px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                  
                  {/* Backdrop glowing grid lines representing premium cosmetic box */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-amber-400/5 filter blur-3xl pointer-events-none" />

                  {activePanId ? (
                    (() => {
                      const selectedPan = palettePans.find(p => p.id === activePanId);
                      if (!selectedPan) return null;

                      if (pageId === "sanal-makyaj-masasi") {
                        // Sanal Makyaj Masası için aşırı lüks interaktif mod
                        let featureColor = "#cccccc";
                        let featureLabel = "";
                        let featureDesc = "";
                        let appMethod = "";
                        
                        if (selectedPan.id === "daily-table") {
                          if (activeVirtualProduct === "lips") {
                            featureColor = "#e8a7a1";
                            featureLabel = "Cozy Peach Dudak Yağı";
                            featureDesc = "Dudakları besleyen, hafif turuncu-şeftali alt tonlu, ıslak ve mega parlak taze bitiş.";
                            appMethod = "Fırça yardımıyla dudağın tam ortasından dışa doğru tamponlayarak yayın.";
                          } else if (activeVirtualProduct === "cheeks") {
                            featureColor = "#fbc2eb";
                            featureLabel = "Baby Pink Likit Allık";
                            featureDesc = "Ciltle anında bütünleşen, güneşte kendiliğinden pembeleşmiş hissi veren taze yanaklar.";
                            appMethod = "Elmacık kemiklerinin üzerine 2şer nokta koyup nemli süngerinizle yukarı doğru hafifçe dağıtın.";
                          } else if (activeVirtualProduct === "eyes") {
                            featureColor = "#ffda6a";
                            featureLabel = "Şampanya Işıltısı Far";
                            featureDesc = "Göz kapağına anında dinç ve parlak bir aydınlatma veren pürüzsüz şeftali-altın ışıltısı.";
                            appMethod = "Parmağınızla göz kapağının tam ortasına oturtup tampon hareketlerle şakaklara yayın.";
                          } else {
                            featureColor = "#444444";
                            featureLabel = "Şeffaf Kaş Lifter";
                            featureDesc = "Kaşları sabitleyerek gün boyu yukarı taranmış, lamine bir dinçlik hissi kazandırır.";
                            appMethod = "Lifter fırçasını kaş diplerine oturtup yukarı doğru hafif spiral hareketlerle tarayın.";
                          }
                        } else if (selectedPan.id === "night-table") {
                          if (activeVirtualProduct === "lips") {
                            featureColor = "#800020";
                            featureLabel = "Royal Wine Velvet Matte Ruj";
                            featureDesc = "Kadifemsi mat dokuda vişne çürüğü duruşuyla tüm spotları dudaklarınıza odaklayan derinlik.";
                            appMethod = "Önce dudak kalemi ile sınırlarınızı belirleyin, iç hattı fırça darbesiyle matlaştırın.";
                          } else if (activeVirtualProduct === "cheeks") {
                            featureColor = "#c70039";
                            featureLabel = "Terracotta Yanak Sateni";
                            featureDesc = "Yüzü boyutlandıran, asil ve dramatik kiremit-bronz geçiş tona sahip allık esintisi.";
                            appMethod = "Açılı fırça yardımıyla elmacık kemiğinin hemen altından kulak çizgisine doğru geçişleyin.";
                          } else if (activeVirtualProduct === "eyes") {
                            featureColor = "#4a148c";
                            featureLabel = "Midnight Smoke Far Co.";
                            featureDesc = "Derin mor ve siyah kömür pigmentlerinin harmanıyla gözleri uzağa çeken gizemli gölge.";
                            appMethod = "Koyu mor fardan dış kenara 'V' çekip, mat siyahla harmanlayarak dumanlı buğu verin.";
                          } else {
                            featureColor = "#111111";
                            featureLabel = "Carbon Rimel";
                            featureDesc = "Kirpikleri simsiyah bir hacme kavuşturup takma kirpik etkisi yaratan dramatik katman.";
                            appMethod = "Kirpik dibinden en uca doğru zikzak hareketleriyle 2 kat halinde uygulayın.";
                          }
                        } else if (selectedPan.id === "glam-table") {
                          if (activeVirtualProduct === "lips") {
                            featureColor = "#b8860b";
                            featureLabel = "Caramel Nude Lip Gloss";
                            featureDesc = "Karamelli kahve tonlarının 3D ıslak efektiyle buluştuğu aşırı dolgun gösteren gümüş simli gloss.";
                            appMethod = "Alt dudağın ortasına cömertçe dokundurun, üst dudağa yayarak 3D ıslaklık hissi kazandırın.";
                          } else if (activeVirtualProduct === "cheeks") {
                            featureColor = "#ff7f50";
                            featureLabel = "Sunset Gold Shimmer Allık";
                            featureDesc = "Altın ışıltılı şeftali tonlarda, gün batımının o en sıcak anını yanaklarınıza taşıyan aydınlatıcı allık.";
                            appMethod = "Tombul yanak fırçasıyla elmacık kemiklerinin en yüksek yerine dairesel olarak uygulayın.";
                          } else if (activeVirtualProduct === "eyes") {
                            featureColor = "#e0ffff";
                            featureLabel = "Liquid Diamond Shimmer";
                            featureDesc = "Mücevher parlaklığında prizmatik yıldız tozu simleriyle harmanlanmış ıslak davet farı.";
                            appMethod = "Düz uçlu nemli far fırçasıyla göz pınarlarına ve göz kapağı ortasına hafifçe oturtun.";
                          } else {
                            featureColor = "#222222";
                            featureLabel = "Volumizing Rimel";
                            featureDesc = "Her kirpiğe tek tek sarınarak yelpaze şeklinde açan, kıvrık, derin ve lüks Hollywood kirpikleri.";
                            appMethod = "Aşağı bakarak kirpik üstünden başlayarak fırçalayın, yukarı kaldırıp lamine edin.";
                          }
                        } else { // bridal-table
                          if (activeVirtualProduct === "lips") {
                            featureColor = "#f08080";
                            featureLabel = "Romantic Rose Matte Ruj";
                            featureDesc = "En duygusal anlarda bile silinmeyen, tatlı pembe gül renginde porselen mat bitişli imza asalet.";
                            appMethod = "Dudakları nude bir bazla doldurduktan sonra, aplikatörle tamponlayarak ipeksi matlaştırın.";
                          } else if (activeVirtualProduct === "cheeks") {
                            featureColor = "#ffa07a";
                            featureLabel = "Sweetheart Soft Coral Allık";
                            featureDesc = "Masumiyeti ve romantizmi simgeleyen saten bitişli yumuşak şeftali-pembe allık.";
                            appMethod = "Gülümseyerek yanakların en tombul çıkan 'apple' bölgesine dairesel tampon hareketle sürün.";
                          } else if (activeVirtualProduct === "eyes") {
                            featureColor = "#ffe4e1";
                            featureLabel = "Rose Gold Romance Saten Far";
                            featureDesc = "Gelinlerin gözlerinde asaletle parlayan ıslak sedefli pembe-altın yumuşak lüks ton.";
                            appMethod = "Kuyruklu ince kahve eyeliner üzerine yumuşak bir fırçayla yumuşatarak gezdirin.";
                          } else {
                            featureColor = "#333333";
                            featureLabel = "Waterproof Volumizer Rimel";
                            featureDesc = "Gözyaşlarına, neme ve tere tamamen meydan okuyan, akmayan ve kirpikleri simsiyah kıvıran formül.";
                            appMethod = "Kökten uca doğru bastırarak uygulayın ve akma endişesi taşımadan günün keyfini çıkarın.";
                          }
                        }

                        return (
                          <div className="space-y-5 animate-fade-in relative z-10 flex flex-col justify-between h-full">
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between border-b border-stone-850 pb-3">
                                <div className="flex items-center gap-2.5">
                                  <span className="text-2xl">🪞</span>
                                  <div>
                                    <span className="text-[10px] font-mono tracking-widest text-amber-500 font-bold">
                                      {selectedPan.title} ENTEGRE ANALİZİ
                                    </span>
                                    <h4 className="text-sm font-serif font-black text-white leading-tight uppercase">
                                      Sanal Deneyim Platformu
                                    </h4>
                                  </div>
                                </div>
                                <span className="text-[10px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-0.5 rounded font-mono font-bold">VIRTUAL</span>
                              </div>

                              {/* Interactive virtual Vanity Layout */}
                              <div className="grid grid-cols-12 gap-4 items-center bg-stone-950/80 p-4 rounded-2xl border border-stone-900 shadow-inner">
                                
                                {/* Model virtual Mirror View (Ayna Çizimi) (5 Cols) */}
                                <div className="col-span-5 flex flex-col items-center justify-center relative">
                                  <div className="w-24 h-32 rounded-full border-4 border-stone-400/80 bg-stone-900/60 overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.1),inset_0_4px_12px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center">
                                    
                                    {/* Mirror glass reflection shine */}
                                    <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent" />
                                    
                                    {/* Abstract Model Face design silhoutte */}
                                    <div className="w-10 h-14 rounded-3xl border-2 border-stone-600/40 relative flex flex-col items-center justify-center mt-3 bg-stone-950/20">
                                      
                                      {/* Eyes (Gözler) */}
                                      <div className="absolute top-4 left-2 right-2 flex justify-between">
                                        <div 
                                          className="w-2 h-1 rounded-full transition-all duration-300 relative animate-pulse" 
                                          style={{ 
                                            background: activeVirtualProduct === "eyes" ? featureColor : "#333",
                                            boxShadow: activeVirtualProduct === "eyes" ? `0 0 10px ${featureColor}` : "none"
                                          }} 
                                        />
                                        <div 
                                          className="w-2 h-1 rounded-full transition-all duration-300 relative animate-pulse" 
                                          style={{ 
                                            background: activeVirtualProduct === "eyes" ? featureColor : "#333",
                                            boxShadow: activeVirtualProduct === "eyes" ? `0 0 10px ${featureColor}` : "none"
                                          }} 
                                        />
                                      </div>

                                      {/* Lashes line above eyes */}
                                      <div className="absolute top-3 left-1 right-1 flex justify-between px-0.5">
                                        <div className={`w-3.5 h-[1.5px] transition-all duration-300 ${activeVirtualProduct === "lashes" ? "bg-stone-200" : "bg-stone-800"}`} />
                                        <div className={`w-3.5 h-[1.5px] transition-all duration-300 ${activeVirtualProduct === "lashes" ? "bg-stone-200" : "bg-stone-800"}`} />
                                      </div>

                                      {/* Cheeks (Yanaklar) */}
                                      <div className="absolute top-6 left-1 right-1 flex justify-between px-0.5">
                                        <div 
                                          className="w-2.5 h-2 rounded-full blur-[2px] transition-all duration-500" 
                                          style={{ 
                                            background: activeVirtualProduct === "cheeks" ? featureColor : "transparent",
                                            opacity: activeVirtualProduct === "cheeks" ? 0.95 : 0
                                          }} 
                                        />
                                        <div 
                                          className="w-2.5 h-2 rounded-full blur-[2px] transition-all duration-500" 
                                          style={{ 
                                            background: activeVirtualProduct === "cheeks" ? featureColor : "transparent",
                                            opacity: activeVirtualProduct === "cheeks" ? 0.95 : 0
                                          }} 
                                        />
                                      </div>

                                      {/* Lips (Dudaklar) */}
                                      <div className="absolute bottom-3 w-4 h-2 flex flex-col justify-center items-center">
                                        <div 
                                          className="w-3.5 h-1.5 rounded-full transition-all duration-300" 
                                          style={{ 
                                            background: activeVirtualProduct === "lips" ? featureColor : "#333",
                                            boxShadow: activeVirtualProduct === "lips" ? `0 0 8px ${featureColor}` : "none"
                                          }} 
                                        />
                                      </div>

                                    </div>

                                    {/* Mirror base holder */}
                                    <div className="w-10 h-1 bg-stone-500 absolute bottom-1 rounded" />
                                    <div className="w-4 h-3 bg-stone-600 absolute bottom-2" />
                                    
                                  </div>
                                  <span className="text-[8px] font-mono text-stone-500 font-bold uppercase mt-2">SANAL AYNA</span>
                                </div>

                                {/* Active Cosmetics Tray Controls (Ürün Simgeleri) (7 Cols) */}
                                <div className="col-span-7 flex flex-col gap-2">
                                  <span className="text-[9px] font-mono text-amber-500 font-black uppercase tracking-wider mb-1">
                                    Masa Ürün Sürgüsü:
                                  </span>

                                  <button 
                                    onClick={() => setActiveVirtualProduct("lips")}
                                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all text-left cursor-pointer ${activeVirtualProduct === "lips" ? "bg-stone-900 border-stone-400 text-white shadow" : "bg-stone-950 border-stone-900 text-stone-400 hover:text-white"}`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span>💄</span>
                                      <span className="text-[10px]">LÜKS RUJ</span>
                                    </div>
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: selectedPan.id === "daily-table" ? "#e8a7a1" : selectedPan.id === "night-table" ? "#800020" : selectedPan.id === "glam-table" ? "#b8860b" : "#f08080" }} />
                                  </button>

                                  <button 
                                    onClick={() => setActiveVirtualProduct("cheeks")}
                                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all text-left cursor-pointer ${activeVirtualProduct === "cheeks" ? "bg-stone-900 border-stone-400 text-white shadow" : "bg-stone-950 border-stone-900 text-stone-400 hover:text-white"}`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span>🌸</span>
                                      <span className="text-[10px]">İPEKSİ ALLIK</span>
                                    </div>
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: selectedPan.id === "daily-table" ? "#fbc2eb" : selectedPan.id === "night-table" ? "#c70039" : selectedPan.id === "glam-table" ? "#ff7f50" : "#ffa07a" }} />
                                  </button>

                                  <button 
                                    onClick={() => setActiveVirtualProduct("eyes")}
                                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all text-left cursor-pointer ${activeVirtualProduct === "eyes" ? "bg-stone-900 border-stone-400 text-white shadow" : "bg-stone-950 border-stone-900 text-stone-400 hover:text-white"}`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span>🌟</span>
                                      <span className="text-[10px]">SEDYE FAR</span>
                                    </div>
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: selectedPan.id === "daily-table" ? "#ffda6a" : selectedPan.id === "night-table" ? "#4a148c" : selectedPan.id === "glam-table" ? "#e0ffff" : "#ffe4e1" }} />
                                  </button>

                                  <button 
                                    onClick={() => setActiveVirtualProduct("lashes")}
                                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-bold transition-all text-left cursor-pointer ${activeVirtualProduct === "lashes" ? "bg-stone-900 border-stone-400 text-white shadow" : "bg-stone-950 border-stone-900 text-stone-400 hover:text-white"}`}
                                  >
                                    <div className="flex items-center gap-1.5">
                                      <span>👁️</span>
                                      <span className="text-[10px]">MÜHÜR RİMEL</span>
                                    </div>
                                    <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                                  </button>

                                </div>

                              </div>

                              {/* Selected feature description */}
                              <div className="space-y-1.5 bg-[#121319]/80 border border-stone-900 p-4 rounded-xl leading-relaxed">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs uppercase font-black tracking-wider text-stone-200">
                                    {featureLabel}
                                  </span>
                                  <span className="text-[8px] font-mono px-1.5 py-0.5 bg-stone-850 border border-stone-850 rounded text-amber-500 font-bold uppercase">AKTİF REÇETE</span>
                                </div>
                                <p className="text-xs text-stone-400 font-normal">
                                  {featureDesc}
                                </p>
                                <p className="text-[11px] text-stone-500 font-serif italic mt-1 pt-1.5 border-t border-stone-900">
                                  <span className="font-bold text-stone-400">Uygulama Metodolojisi:</span> {appMethod}
                                </p>
                              </div>

                            </div>

                            {/* Recommendations products */}
                            <div className="pt-2 border-t border-stone-900">
                              <span className="text-[9px] font-mono tracking-widest text-[#5c6066] uppercase font-bold block mb-1">
                                İMZA MASASI TAVSİYELERİ:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedPan.recommendations && selectedPan.recommendations.map((rec) => (
                                  <span 
                                    key={rec} 
                                    className="text-[9px] px-2.5 py-1 bg-[#101116] text-[#b8bdc5] border border-stone-850 rounded font-black uppercase tracking-wider"
                                  >
                                    🧴 {rec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div className="space-y-6 animate-fade-in relative z-10 flex flex-col justify-between h-full">
                          
                          <div className="space-y-4">
                            {/* Header: Pressed eyeshadow pan marker */}
                            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                              <div className="flex items-center gap-2.5">
                                <span className="text-2xl">{selectedPan.icon}</span>
                                <div>
                                  <span className="text-[8px] font-mono tracking-widest text-[#a1a1aa] uppercase font-bold">
                                    SEÇKİ FAR GÖZÜ DETAYI
                                  </span>
                                  <h4 className="text-lg font-serif font-black text-white leading-tight">
                                    {selectedPan.detailTitle || selectedPan.title}
                                  </h4>
                                </div>
                              </div>
                              <span className="w-2.5 h-2.5 rounded-full" style={{ background: selectedPan.panColor }} />
                            </div>

                            {/* Body Paragraph */}
                            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                              {selectedPan.detailBody}
                            </p>

                            {/* Tips list */}
                            <div className="space-y-2 mt-4">
                              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                                ⚜ PROFESYONEL UYGULAMA TÜYOLARI:
                              </span>
                              
                              <ul className="space-y-1.5">
                                {selectedPan.tips.map((tip, i) => (
                                  <li key={i} className="text-xs text-stone-400 flex items-start gap-2 bg-stone-900/40 p-2 border border-stone-850 rounded-lg font-medium leading-relaxed">
                                    <span className="text-amber-500 shrink-0 mt-0.5">✦</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Recommendations products if existing */}
                          {selectedPan.recommendations && selectedPan.recommendations.length > 0 && (
                            <div className="mt-5 pt-4 border-t border-stone-850">
                              <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase font-bold block mb-2">
                                ÖNERİLEN BÖLME FORMÜLLERİ:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedPan.recommendations.map((rec) => (
                                  <span 
                                    key={rec} 
                                    className="text-[10px] px-2.5 py-1 bg-stone-900 text-stone-300 border border-stone-800 rounded-md font-bold uppercase tracking-wide shadow"
                                  >
                                    🧴 {rec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      );
                    })()
                  ) : (
                    <div className="text-center py-16 space-y-4 my-auto relative z-10 flex flex-col justify-center items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ECECEC] to-[#ACADB3] border border-white/20 text-xl flex items-center justify-center shadow-lg text-stone-950">
                        ✨
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-black text-[#f3f4f6] uppercase tracking-widest">
                          Bölme İçeriği Seçilmedi
                        </p>
                        <p className="text-[11px] text-stone-500 max-w-xs mx-auto leading-relaxed">
                          Soldaki pürüzsüz far haznelerinden birine dokunarak, konunun en ince tüyolarını, uzman tavsiyelerini ve imza kozmetik önerilerini gümüş kaplama plakada anında okuyabilirsiniz.
                        </p>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            {/* PALETTE FOOTER DESIGN LINES */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-stone-800/80 text-stone-500 text-[10px] font-mono">
              <span className="uppercase tracking-widest font-bold">
                * MAT & SHIMMER PRESSED POWDER INGREDIENTS REGISTERED
              </span>
              <div className="flex items-center gap-1.5 mt-2 sm:mt-0 font-bold text-stone-400">
                <span>GLOSS INTERNATIONAL PARIS</span>
                <span>•</span>
                <span>MADE IN FRANCE</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM ACTION RAIL: BACK-TO-BAG EMBEDDED BUTTON */}
      <div className="mt-12">
        <button 
          onClick={onBackToBag}
          className={`group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
            isDark 
              ? "bg-gradient-to-r from-stone-900 via-[#1c1d25] to-stone-900 hover:from-stone-850 hover:to-stone-850 text-[#BAC2CE] border-white/10 shadow-2xl" 
              : "bg-stone-900 hover:bg-stone-855 text-white border-stone-800 shadow-lg"
          }`}
        >
          <span className="text-base">👜</span>
          <span>Makyaj Çantasına Geri Dön</span>
          <span className={`w-5 h-5 rounded-full text-xs transition-colors flex items-center justify-center font-mono ${
            isDark 
              ? "bg-stone-800 text-stone-300 group-hover:bg-[#c29e2f] group-hover:text-stone-950" 
              : "bg-[#2c2c2c] text-white group-hover:bg-amber-400 group-hover:text-stone-90 hover:scale-105"
          }`}>←</span>
        </button>
      </div>

    </div>
  );
}
