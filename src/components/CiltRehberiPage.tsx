import React, { useState } from "react";
import { 
  Sparkles, 
  Check, 
  AlertOctagon, 
  Heart, 
  Bookmark, 
  HelpCircle,
  TrendingUp,
  Sliders,
  Award,
  ArrowLeft
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface CiltRehberiPageProps {
  onBackToBag?: () => void;
}

export default function CiltRehberiPage({ onBackToBag }: CiltRehberiPageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Seçim durumları (States)
  const [ciltTipi, setCiltTipi] = useState<string>("karma");
  const [ciltProblemi, setCiltProblemi] = useState<string>("sivilce");
  const [makyajSeviyesi, setMakyajSeviyesi] = useState<string>("başlangıç");
  const [istenenGorunum, setIstenenGorunum] = useState<string>("doğal");
  const [gosterildi, setGosterildi] = useState<boolean>(false);

  // Form temizleme
  const handleTemizle = () => {
    setCiltTipi("karma");
    setCiltProblemi("sivilce");
    setMakyajSeviyesi("başlangıç");
    setIstenenGorunum("doğal");
    setGosterildi(false);
  };

  // Cilt analiz rehberi algoritması (Hatasız ve anında çalışan lokal uzman sistemi)
  const getRehberIcerik = (
    tip: string,
    problem: string,
    seviye: string,
    gorunum: string
  ) => {
    // 1. Cilt hazırlığı nasıl yapılmalı
    let ciltHazirligi = "";
    if (tip === "kuru") {
      ciltHazirligi = "Cildinizi temizledikten sonra mutlaka hyalüronik asit içeren yoğun nemlendirici bir krem uygulayın. Makyajın pütür pütür durmasını önlemek için nemlendiriciyi tampon hareketlerle masaj yaparak yedirin ve makyaja başlamadan önce en az 5 dakika emilmesini bekleyin.";
    } else if (tip === "yağlı") {
      ciltHazirligi = "Cildinizi salisilik asit içeren hafif arındırıcı bir temizleyiciyle yıkayıp fazla sebumu atın. Ardından su bazlı, yağsız ve gözenek tıkamayan hafif bir jel nemlendirici uygulayın. Bu, makyajın ciltte kaymasını veya parlamasını önler.";
    } else if (tip === "karma") {
      ciltHazirligi = "Karma ciltlerde bölgesel hazırlık kritiktir. Yağlanmaya meyilli T-bölgesine (alın, burun, çene) hafif matlaştırıcı bir tonik geçin, kuru olan yanak kısımlarını ise klasik nemlendirici ile ekstra besleyin. Bu dengeli zemin makyajın kusmasını engeller.";
    } else { // hassas
      ciltHazirligi = "Parfüm, alkol ve sert kimyasallar içermeyen, centella veya seramid özlü hassas ciltlere özel yatıştırıcı bir nemlendirici sürün. Sünger veya fırçaları cildinize sertçe sürtmekten kaçının, tüm ürünleri hafif pat pat hareketlerle dokundurun.";
    }

    // 2. Hangi makyaj bazı kullanılmalı
    let makyajBazi = "";
    switch (problem) {
      case "sivilce":
        makyajBazi = "Salisilik asit veya çay ağacı yağı içeren, sivilce dostu ve yağsız bir makyaj bazı seçmelisiniz. Gözenekleri tıkamayan ve gözenekleri flulaştıran hafif formüllü bazlar sivilce dokusunun pürüzsüz görünmesine destek olur.";
        break;
      case "kızarıklık":
        makyajBazi = "Yeşil pigment içeren renk düzenleyici (color-correcting) bir makyaj bazı kullanmalısınız. Yeşil renk, yanak ve burun kenarlarındaki kızarıklıkları nötralize ederek ten renginizin eşitlenmesini sağlar.";
        break;
      case "kuruluk":
        makyajBazi = "Nem ve ışıltı veren, gliserin veya hyalüronik asit bazlı ıslak bitişli bir nemlendirici makyaj bazı kullanmalısınız. Cilde anında can verir ve kabuklanmaları tamamen giderir.";
        break;
      case "parlama":
        makyajBazi = "Mat bitişli, sebum kontrolü sağlayan silikon bazlı veya kil içerikli bir matlaştırıcı makyaj bazı tercih edilmelidir. Bu baz makyajın yağlanıp çözülmesini saatlerce önler.";
        break;
      case "gözenek":
        makyajBazi = "Gözenek küçültücü flulaştırıcı (blurring) ve gözenek doldurucu (pore-filling) silikonlu yarı saydam bir baz tercih edin. Parmak uçlarınızla dairesel hareketlerle gözeneklerin üstüne basarak uygulayın.";
        break;
      case "lekelenme":
        makyajBazi = "Şeftali veya somon tonlarında renk eşitleyici ışıltılı bir baz seçmek, güneş ve akne lekelerinin koyu görünümünü nötrler ve fondötenin grileşmesini engeller.";
        break;
      default:
        makyajBazi = "Cildiniz için hafif nem veren ve makyaj tutuculuğunu artıran jel yapılı klasik bir makyaj bazı yeterlidir.";
    }

    // 3. Fondöten nasıl seçilmeli
    let fondotenSecimi = "";
    if (tip === "yağlı" || gorunum === "mat") {
      fondotenSecimi = "Mat bitişli, pudra içerikli, su bazlı ve yüksek gözenek kapatıcılığı sunan likit fondötenler seçilmelidir. İçeriğinde 'oil-free' (yağsız) ibaresi bulunan ürünler gün içinde parlama yapmaz.";
    } else if (tip === "kuru" || gorunum === "parlak") {
      fondotenSecimi = "Işıltılı (dewy), su bazlı, nemlendirici serum etkili ince yapılı fondötenler veya BB/CC kremler tercih edilmelidir. Ağır mat fondötenler kurulukları daha belirgin hale getirecektir.";
    } else if (tip === "hassas") {
      fondotenSecimi = "Parfüm ve mineral yağ barındırmayan, dermatolojik olarak test edilmiş, gözenekleri nefes aldıran hipoalerjenik CC kremler veya saf mineral toz fondötenler seçilmelidir.";
    } else {
      fondotenSecimi = "Yarı mat (satin) bitişli, kapatıcılığı ayarlanabilen orta yapılı likit fondötenler sizin için en idealidir. Islak süngerle uyguladığınızda çok taze ve profesyonel bir duruş kazandırır.";
    }

    // 4. Pudra / allık / aydınlatıcı nasıl uygulanmalı
    let pudraAllikUygulama = "";
    if (seviye === "başlangıç") {
      pudraAllikUygulama = "Kullanımı kolay kremsi ve likit ürünleri tercih edin. Likit allığı elmacık kemiklerinizin üzerine parmak ucuyla pıt pıt yaparak kolayca dağıtın. Pudrayı sadece burun ve alın bölgenize hafifçe dokundurun. Aydınlatıcıyı ise parmak ucunuzla elmacık kemiğinin en yüksek noktasına tık tık yapıp yayın.";
    } else if (seviye === "orta") {
      pudraAllikUygulama = "Orta seviye için pudra ve likit ürün kombinasyonu harikadır. Allığı fırça yardımıyla şakaklara doğru 'lift' etkisi verecek şekilde sürün. Transparan pudrayı yumuşak tombul fırçayla T-bölgesine tampon hareketlerle sabitleyin. Toz aydınlatıcıyı ise açılı bir fırçayla C şeklinde elmacık kemiğinden kaş kemiğine doğru uygulayın.";
    } else {
      pudraAllikUygulama = "İleri seviye olarak 'Baking' tekniğini uygulayabilirsiniz. Kapatıcı sürdükten sonra göz altlarını nemli sünger ve toz transparan pudra ile pişirin. Allığı krem ve toz olarak üst üste uygulayarak katmanlaştırın ve kalıcılığı 18 saate çıkarın. Aydınlatıcıyı ise nemli sabitleme spreyi sıktığınız fırçayla elmacık kemiklerine ve burun ucuna 'metalik ışıltı' efektiyle yedirin.";
    }

    // 5. Hangi ürünlerden uzak durulmalı
    let uzakDurulmali = "";
    if (tip === "kuru" || problem === "kuruluk") {
      uzakDurulmali = "Kurutan mat bitişli yoğun toz pudralardan, kil maskesi etkisi yaratan aşırı kalın kapatıcılardan ve alkol oranı yüksek matlaştırıcı sabitleme spreylerinden kesinlikle uzak durmalısınız. Bunlar pul pul dökülmelere sebep olur.";
    } else if (tip === "yağlı" || problem === "parlama" || problem === "sivilce") {
      uzakDurulmali = "Aşırı yağlı veya yoğun simli likit aydınlatıcılardan, hindistan cevizi yağı içeren komedojenik nemlendiricilerden ve aşırı ıslak bitişli parlak yağ formlu fondötenlerden uzak durmalısınız. Gözenekleri tıkar ve sivilce oluşumunu tetikler.";
    } else if (tip === "hassas" || problem === "kızarıklık") {
      uzakDurulmali = "Yoğun parfüm veya alkol içeren spreylerden, sert fırçalardan, asitli bazlardan ve cildi yoracak aşırı ağır kapatıcılardan kaçınmalısınız. Bitkisel de olsa yoğun esansiyel yağlı makyaj ürünleri reaksiyon yapabilir.";
    } else {
      uzakDurulmali = "Cildi havasız bırakan çok kalın katmanlı sahne fondötenlerinden ve homojen dağılmayan pütürlü ucuz glitter makyaj simlerinden uzak durulması önerilir.";
    }

    // 6. Makyajın ciltte daha iyi durması için ipuçları
    let ipuclari = "";
    if (gorunum === "doğal" || gorunum === "günlük") {
      ipuclari = "Makyajı tamamladıktan sonra üzerine termal su veya nemli bir tazeleyici sprey sıkın. Bu, pudralı duruşu eritir ve makyajın ciltle bütünleşerek tamamen doğal görünmesini sağlar. Ayrıca fondöteni tüm yüze değil, sadece renk eşitsizliği olan bölgelere uygulayın.";
    } else if (gorunum === "gece") {
      ipuclari = "Makyaj altına mutlaka gözenek dolgulu bir zemin hazırlayıp makyaj sabitleme spreyini hem makyajın başında (baza ek olarak) hem de en sonunda uygulayın. Katmanlar arasında 1-2 dakika kuruma payı bırakmak kalıcılığı katlayacaktır.";
    } else if (gorunum === "parlak") {
      ipuclari = "Fondöteninizin içine 1 damla sıvı aydınlatıcı veya hyalüronik asit serumu karıştırarak uygulayın. Pudra kullanımını tamamen sıfırlayın veya sadece göz altınızda mikronize pürüzsüz transparan tozlarla sınırlı tutun.";
    } else if (gorunum === "mat") {
      ipuclari = "Pudra sabitlemesini nemli süngeri toz transparan pudraya batırarak T bölgesine presleyerek yapın. Bu matlık süresini ikiye katlar. Gün içinde de yanınızda yağ emici mendiller bulundurarak parlamaları tampon hareketlerle alın.";
    } else {
      ipuclari = "Uygulama süngerinizin her zaman hafif nemli olmasına özen gösterin. Kuru sünger makyajı emer ve ciltte maske gibi durmasına yol açar.";
    }

    return {
      ciltHazirligi,
      makyajBazi,
      fondotenSecimi,
      pudraAllikUygulama,
      uzakDurulmali,
      ipuclari
    };
  };

  const rehber = getRehberIcerik(ciltTipi, ciltProblemi, makyajSeviyesi, istenenGorunum);

  return (
    <div id="cilt-rehberi-sayfasi" className="space-y-6 animate-fade-in w-full max-w-4xl mx-auto">
      
      {onBackToBag && (
        <button
          onClick={onBackToBag}
          className={`flex items-center gap-1.5 text-xs transition-all cursor-pointer font-bold select-none group border px-3 py-1.5 rounded-lg w-fit ${
            isDark 
              ? "text-stone-400 hover:text-white border-stone-800 bg-stone-900/60" 
              : "text-stone-750 hover:text-stone-950 border-stone-250 bg-white shadow-sm"
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Çantaya Geri Dön</span>
        </button>
      )}

      {/* Tanıtım Alanı */}
      <div 
        className={`p-6 sm:p-8 rounded-3xl border text-center relative overflow-hidden transition-all duration-300 ${
          isDark ? "border-stone-800 shadow-[0_20px_40px_rgba(0,0,0,0.85)]" : "border-stone-250 shadow-md"
        }`}
        style={{
          background: isDark ? "linear-gradient(135deg, #1b1c22 0%, #0d0e12 100%)" : "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
          boxShadow: isDark ? "inset 0 1px 2px rgba(255, 255, 255, 0.05)" : "none"
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-300/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
            isDark ? "bg-white/5 border border-white/10 text-stone-300" : "bg-stone-100 border border-stone-250 text-stone-600"
          }`}>
            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-stone-100' : 'bg-stone-600'}`}></span>
            <span>Profesyonel Masa Kataloğu</span>
          </div>
          <h2 className={`text-3xl font-serif font-black tracking-wide transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-900'}`}>
            Cilt Analizi ve Ürün Kullanım Rehberi
          </h2>
          <p className={`text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-normal transition-colors duration-300 ${
            isDark ? "text-stone-300" : "text-stone-600"
          }`}>
            Cilt tipinizi, en çok karşılaştığınız endişeleri ve hedeflediğiniz makyaj duruşunu seçin. Sizin için özel olarak hazırlanmış, adımlara ayrılmış profesyonel uygulama haritanızı anında görün.
          </p>
        </div>
      </div>

      {/* Kontrol / Seçim Paneli (Cam Kaplamalı / Glassmorphic) */}
      <div 
        className={`rounded-3xl p-6 sm:p-8 border shadow-md backdrop-blur-md relative overflow-hidden transition-all duration-300 ${
          isDark ? "bg-stone-900/40 border-stone-850 shadow-[0_15px_30px_rgba(0,0,0,0.5)]" : "bg-white border-stone-200"
        }`}
      >
        {/* Silver decorative top border strip */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-stone-800 via-stone-400 to-stone-800"></div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className={`font-serif text-lg font-bold flex items-center gap-2 leading-none transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-950'}`}>
              <Sliders className="w-4 h-4 text-stone-400" />
              Cilt Koşullarınızı Tanımlayın
            </h3>
            <p className={`text-[11px] mt-1 transition-colors duration-300 ${isDark ? 'text-stone-400' : 'text-stone-550'}`}>Parametreleri teninize göre ayarlayınız</p>
          </div>
          {gosterildi && (
            <button
              onClick={handleTemizle}
              className={`text-[10px] uppercase font-black tracking-widest transition-colors ${isDark ? 'text-[#a1a1aa] hover:text-white' : 'text-stone-500 hover:text-stone-950'}`}
            >
              Seçimleri Sıfırla ↺
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          
          {/* Cilt Tipi */}
          <div className="space-y-1.5">
            <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              💧 Cilt Tipi
            </label>
            <select
              value={ciltTipi}
              onChange={(e) => { setCiltTipi(e.target.value); setGosterildi(true); }}
              className={`w-full p-3 border rounded-xl text-xs font-bold transition-all outline-none transition-colors duration-300 ${
                isDark 
                  ? "bg-stone-950/60 border-stone-800 text-stone-100 focus:border-stone-500" 
                  : "bg-stone-50 border-stone-250 text-stone-800 focus:border-stone-400"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              <option value="kuru">Kuru Cilt (Nemsiz, gergin ve kızarmaya meyilli)</option>
              <option value="yağlı">Yağlı Cilt (Parlama ve gözenek sıkıntısı olan)</option>
              <option value="karma">Karma Cilt (T-bölgesi yağlı, yanaklar normal/kuru)</option>
              <option value="hassas">Hassas Cilt (Çabuk reaksiyon veren, reaktif bariyer)</option>
            </select>
          </div>

          {/* Cilt Problemi */}
          <div className="space-y-1.5">
            <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              ✨ Ana Cilt Problemi
            </label>
            <select
              value={ciltProblemi}
              onChange={(e) => { setCiltProblemi(e.target.value); setGosterildi(true); }}
              className={`w-full p-3 border rounded-xl text-xs font-bold transition-all outline-none transition-colors duration-300 ${
                isDark 
                  ? "bg-stone-950/60 border-stone-800 text-stone-100 focus:border-stone-500" 
                  : "bg-stone-50 border-stone-250 text-stone-800 focus:border-stone-400"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              <option value="sivilce">Sivilce / Akne Doku Problemi</option>
              <option value="kızarıklık">Geniş Kızarıklıklar / Kılcal Damarlar</option>
              <option value="kuruluk">Bölgesel Kuruma ve Kabuklanma</option>
              <option value="parlama">Aşırı Parlama / T-Bölgesi Yağı</option>
              <option value="gözenek">Geniş ve Belirgin Gözenekler</option>
              <option value="lekelenme">Koyu Güneş / Akne Lekeleri</option>
            </select>
          </div>

          {/* Makyaj Seviyesi */}
          <div className="space-y-1.5">
            <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              🎓 Makyaj Seviyeniz
            </label>
            <select
              value={makyajSeviyesi}
              onChange={(e) => { setMakyajSeviyesi(e.target.value); setGosterildi(true); }}
              className={`w-full p-3 border rounded-xl text-xs font-bold transition-all outline-none transition-colors duration-300 ${
                isDark 
                  ? "bg-stone-950/60 border-stone-800 text-stone-100 focus:border-stone-500" 
                  : "bg-stone-50 border-stone-250 text-stone-800 focus:border-stone-400"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              <option value="başlangıç">Başlangıç (Sadece temel ürünler & parmakla uygulama)</option>
              <option value="orta">Orta Seviye (Fırça kullanımı & hafif kontür adımları)</option>
              <option value="ileri">İleri Seviye (Baking, fırça ıslatma ve profesyonel katmanlama)</option>
            </select>
          </div>

          {/* İstenen Görünüm */}
          <div className="space-y-1.5">
            <label className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              👁️ Hedeflenen Görünüm
            </label>
            <select
              value={istenenGorunum}
              onChange={(e) => { setIstenenGorunum(e.target.value); setGosterildi(true); }}
              className={`w-full p-3 border rounded-xl text-xs font-bold transition-all outline-none transition-colors duration-300 ${
                isDark 
                  ? "bg-stone-950/60 border-stone-800 text-stone-100 focus:border-stone-500" 
                  : "bg-stone-50 border-stone-250 text-stone-800 focus:border-stone-400"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              <option value="doğal">Doğal Bitiş (Yokmuş gibi duran taze yüz)</option>
              <option value="günlük">Günlük Satin (Yarı mat klasik iş ve okul)</option>
              <option value="gece">Gece Glam (Uzun süre kalıcı ve dumanlı)</option>
              <option value="parlak">Cam Gibi Parlak (Dewy & Glass Skin ışıltısı)</option>
              <option value="mat">Kusursuz Mat (Saatler boyu sıfır parlama)</option>
            </select>
          </div>

        </div>

        {/* Dynamic automatic helper prompt */}
        {!gosterildi && (
          <div className={`p-4 border rounded-xl text-xs text-center font-serif italic transition-all duration-300 ${
            isDark ? "bg-stone-950/40 border-stone-850 text-stone-400" : "bg-stone-50 border-stone-200 text-stone-600"
          }`}>
            Yukarıdaki seçenek kutularını değiştirdiğiniz anda alt tarafta gümüş çerçeveli kişisel kullanım rehberiniz anında belirecektir.
          </div>
        )}
      </div>

      {/* SONUÇ ALANI (Cam kadife ve Gümüş Çerçeveli Koyu Kart Esintisi) */}
      {gosterildi && (
        <div 
          id="rehber-sonuc-kartı" 
          className={`rounded-3xl border-2 p-6 sm:p-8 shadow-2xl relative animate-fade-in transition-all duration-300 ${
            isDark ? "border-stone-400/70 bg-[#0d0e12]" : "border-stone-300 bg-white"
          }`}
          style={{
            backgroundImage: isDark 
              ? "radial-gradient(circle at 50% 0%, #15161c 0%, #08090c 100%)" 
              : "radial-gradient(circle at 50% 0%, #ffffff 0%, #f1f5f9 100%)"
          }}
        >
          {/* Embossed Luxury Silver Badge */}
          <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 font-serif font-black text-[10px] tracking-widest rounded-full shadow-md uppercase border transition-all duration-300 ${
            isDark 
              ? "bg-gradient-to-r from-stone-200 via-white to-stone-400 border-stone-400 text-stone-950" 
              : "bg-stone-900 text-white border-stone-800"
          }`}>
            ❖ GLOSS MÜHÜRLÜ REÇETENİZ ❖
          </div>

          <div className="space-y-6 pt-2">
            
            {/* 1. Cilt hazırlığı nasıl yapılmalı */}
            <div className={`border-b pb-5 transition-colors duration-300 ${isDark ? 'border-[#1e2030]' : 'border-stone-200'}`} id="sonuc-cilt-hazirligi">
              <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                1. Cilt Hazırlığı Nasıl Yapılmalı?
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                {rehber.ciltHazirligi}
              </p>
            </div>

            {/* 2. Hangi makyaj bazı kullanılmalı */}
            <div className={`border-b pb-5 transition-colors duration-300 ${isDark ? 'border-[#1e2030]' : 'border-stone-200'}`} id="sonuc-baz">
              <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                2. Hangi Makyaj Bazı Kullanılmalı?
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                {rehber.makyajBazi}
              </p>
            </div>

            {/* 3. Fondöten nasıl seçilmeli */}
            <div className={`border-b pb-5 transition-colors duration-300 ${isDark ? 'border-[#1e2030]' : 'border-stone-200'}`} id="sonuc-fondoten">
              <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                3. Fondöten Nasıl Seçilmeli?
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                {rehber.fondotenSecimi}
              </p>
            </div>

            {/* 4. Pudra / allık / aydınlatıcı nasıl uygulanmalı */}
            <div className={`border-b pb-5 transition-colors duration-300 ${isDark ? 'border-[#1e2030]' : 'border-stone-200'}`} id="sonuc-yuz-renklendirme">
              <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                4. Pudra / Allık / Aydınlatıcı Nasıl Uygulanmalı?
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                {rehber.pudraAllikUygulama}
              </p>
            </div>

            {/* 5. Hangi ürünlerden uzak durulmalı */}
            <div className={`border-b pb-5 transition-colors duration-300 ${isDark ? 'border-[#1e2030]' : 'border-stone-200'}`} id="sonuc-uzak-durun">
              <h4 className="text-rose-500 text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2">
                <AlertOctagon className="w-4 h-4 text-rose-550" />
                5. Hangi Ürünlerden Kesinlikle Uzak Durulmalı?
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-bold transition-colors duration-300 ${isDark ? 'text-rose-300' : 'text-rose-700'}`}>
                {rehber.uzakDurulmali}
              </p>
            </div>

            {/* 6. Makyajın ciltte daha iyi durması için ipuçları */}
            <div className="pb-2" id="sonuc-ipucu">
              <h4 className={`text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 mb-2 transition-colors duration-300 ${isDark ? 'text-stone-300 font-bold' : 'text-stone-900 font-extrabold'}`}>
                <Award className="w-4 h-4 text-amber-500" />
                6. Makyajın Ciltte Daha İyi Durması İçin Ekstra İpuçları
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed pl-3.5 font-normal transition-colors duration-300 ${isDark ? 'text-stone-300' : 'text-stone-650'}`}>
                {rehber.ipuclari}
              </p>
            </div>

          </div>

          <div className={`mt-8 pt-5 border-t flex justify-between items-center text-[10px] font-mono transition-colors duration-300 ${
            isDark ? 'border-stone-800 text-stone-500' : 'border-stone-200 text-stone-450'
          }`}>
            <span>GLOSS COUPE DE PRECISIÓN © 2026</span>
            <span>%100 ÇEVRİMDIŞI DOĞAL ANALİZ</span>
          </div>
        </div>
      )}

    </div>
  );
}
