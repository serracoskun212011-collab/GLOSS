import React, { useState, useMemo } from "react";

interface MakyajCantasiIntroProps {
  onOpen: () => void;
}

// Deterministic Linear Congruential Generator (PRNG) to prevent hydration mismatches and keep identical look
function createPRNG(seed: number) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

interface FurStrand {
  id: number;
  left: number;
  top: number;
  length: number;
  thickness: number;
  rotation: number;
  grayTone: number;
  opacity: number;
  isShining: boolean;
  curveSide: "left" | "right";
  depthIndex: number;
}

export default function MakyajCantasiIntro({ onOpen }: MakyajCantasiIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [sliderPercent, setSliderPercent] = useState(5); // Starts at left 5%
  const [isClickable, setIsClickable] = useState(true);

  const startUnzippingAnimation = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isClickable) return;
    setIsClickable(false);
    setIsOpening(true);

    let current = 5;
    const interval = setInterval(() => {
      // Smooth mechanical acceleration feel as the heavy slider zips open
      const step = current < 25 ? 1.2 : current < 55 ? 2.2 : 3.6;
      current += step;

      if (current >= 96) {
        setSliderPercent(100);
        clearInterval(interval);
        
        // Let the luxurious bag flaps fully split and rotate away before revealing the site below
        setTimeout(() => {
          onOpen();
        }, 1100);
      } else {
        setSliderPercent(current);
      }
    }, 20);
  };

  // Generate 1550 luxury fluffy fur strands for the Upper Flap (Increased density for hyper-realistic look)
  const upperFlapFur: FurStrand[] = useMemo(() => {
    const prng = createPRNG(12345);
    const list: FurStrand[] = [];
    for (let i = 0; i < 1550; i++) {
      const left = prng() * 105 - 2.5; // slight overflow to prevent gaps
      
      // Distribute a bit more density towards the center zipper line (bottom of upper flap: top values near 75-103%)
      const bias = prng();
      const top = bias > 0.35 
        ? 45 + prng() * 58  // dense cluster draping over the zipper line
        : prng() * 70;     // general volume
        
      const length = 32 + prng() * 56; // 32px to 88px fine luxury layers
      const thickness = 0.5 + prng() * 1.6; // finer threads for premium natural soft feel
      const rotation = -12 + prng() * 24; // combed straight down vertically
      
      // Deeper layers are rich black velvet, shallower layers are shiny/glossy professional highlights
      const depthIndex = Math.floor(prng() * 8); // 0 to 7 depth layers
      
      const isShining = prng() > 0.81 || (depthIndex >= 6 && prng() > 0.35); // bright glints on upper coat
      let grayTone = 10;
      let opacity = 0.65;
      
      if (depthIndex <= 2) {
        // Deep undercoat core shadows
        grayTone = Math.floor(3 + prng() * 6); // extremely dark charcoal black (3-9)
        opacity = 0.5 + prng() * 0.45;
      } else if (depthIndex <= 5) {
        // Mid-coat body
        grayTone = Math.floor(8 + prng() * 14); // rich black-velvet
        opacity = 0.4 + prng() * 0.55;
      } else {
        // Top coat and guard hairs
        if (isShining) {
          grayTone = Math.floor(175 + prng() * 80); // bright metallic cold silver highlights (175-255)
          opacity = 0.18 + prng() * 0.48;
        } else {
          grayTone = Math.floor(16 + prng() * 22); // rich high-frequency gray shades
          opacity = 0.45 + prng() * 0.45;
        }
      }

      list.push({
        id: i,
        left,
        top,
        length,
        thickness,
        rotation,
        grayTone,
        opacity,
        isShining,
        curveSide: prng() > 0.48 ? "left" : "right",
        depthIndex,
      });
    }
    // Sort so depth index increases (painted back to front)
    return list.sort((a, b) => a.depthIndex - b.depthIndex);
  }, []);

  // Generate 1550 luxury fluffy fur strands for the Lower Flap (Increased density for hyper-realistic look)
  const lowerFlapFur: FurStrand[] = useMemo(() => {
    const prng = createPRNG(67890);
    const list: FurStrand[] = [];
    for (let i = 0; i < 1550; i++) {
      const left = prng() * 105 - 2.5;
      
      // Distribute a bit more density towards the center zipper line (top of lower flap: top values near -3 to 35%)
      const bias = prng();
      const top = bias > 0.35 
        ? -5 + prng() * 52  // dense cluster draping over the zipper line upwards
        : 35 + prng() * 70; // general lower volume
        
      const length = 32 + prng() * 56;
      const thickness = 0.5 + prng() * 1.6;
      const rotation = -12 + prng() * 24; // combed straight down vertically
      
      const depthIndex = Math.floor(prng() * 8);
      const isShining = prng() > 0.81 || (depthIndex >= 6 && prng() > 0.35);
      let grayTone = 10;
      let opacity = 0.65;
      
      if (depthIndex <= 2) {
        grayTone = Math.floor(3 + prng() * 6);
        opacity = 0.5 + prng() * 0.45;
      } else if (depthIndex <= 5) {
        grayTone = Math.floor(8 + prng() * 14);
        opacity = 0.4 + prng() * 0.55;
      } else {
        if (isShining) {
          grayTone = Math.floor(175 + prng() * 80);
          opacity = 0.18 + prng() * 0.48;
        } else {
          grayTone = Math.floor(16 + prng() * 22);
          opacity = 0.45 + prng() * 0.45;
        }
      }

      list.push({
        id: i + 2000,
        left,
        top,
        length,
        thickness,
        rotation,
        grayTone,
        opacity,
        isShining,
        curveSide: prng() > 0.48 ? "left" : "right",
        depthIndex,
      });
    }
    return list.sort((a, b) => a.depthIndex - b.depthIndex);
  }, []);

  const teethCount = 125;

  return (
    <div
      id="faux-fur-bag-root-intro"
      className="fixed inset-0 z-[100] bg-[#040406] overflow-hidden select-none font-sans flex flex-col justify-between"
      style={{
        // Interior deep satin lining visible once split
        backgroundImage: "radial-gradient(circle at 50% 50%, #15161c 0%, #030305 100%)"
      }}
    >
      {/* High-frequency fractal fiber noise SVG filter mapped elements */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0">
        <defs>
          <filter id="organics-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="
              0 0 0 0 0.1
              0 0 0 0 0.1
              0 0 0 0 0.1
              0 0 0 0.12 0" />
            <feBlend mode="multiply" in="SourceGraphic" in2="noise" />
          </filter>
        </defs>
      </svg>

      {/* Volumetric soft studio cold white light glow reflecting from behind the zipper line */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(215,225,245,0.05)_0%,transparent_60%)] animate-pulse" />

      {/* 1. UPPER FLAP (SİYAH FİBER TÜYLÜ ÜST YAN) */}
      <div
        id="upper-plush-flap"
        className="fixed top-0 left-0 right-0 h-1/2 z-10 transition-all duration-[1300ms] cubic-bezier(0.77, 0, 0.175, 1) overflow-visible"
        style={{
          backgroundColor: "#020203",
          // Layered complex radial lights & micro-texture depths
          backgroundImage: `
            radial-gradient(ellipse at 50% 75%, rgba(48, 52, 68, 0.55) 0%, rgba(3, 3, 5, 0.99) 70%),
            radial-gradient(ellipse at 15% 25%, rgba(65, 70, 88, 0.28) 0%, transparent 60%),
            radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.04) 0%, transparent 45%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.98) 0%, rgba(18, 19, 24, 0.25) 100%)
          `,
          transform: isOpening 
            ? `translateY(-${(sliderPercent / 100) * 115}%) rotate(-2deg)` 
            : "translateY(0%) rotate(0deg)",
          borderBottom: "3px solid #0c0d10",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.95), inset 0 -6px 12px rgba(0,0,0,0.85)"
        }}
      >
        {/* Lighter silver-gray linear reflection highlights in overlay mode */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none z-22 mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 20%, rgba(226, 232, 240, 0.5) 45%, rgba(255, 255, 255, 0.8) 50%, rgba(226, 232, 240, 0.5) 55%, transparent 80%),
              linear-gradient(55deg, transparent 10%, rgba(226, 232, 240, 0.25) 25%, rgba(255, 255, 255, 0.45) 30%, rgba(226, 232, 240, 0.25) 35%, transparent 50%),
              radial-gradient(ellipse at 70% 40%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)
            `
          }}
        />

        {/* Hyper-realistic Faux Fur interlocking hair fiber overlay with noise-texture and mask */}
        <div 
          className="absolute inset-0 pointer-events-none z-15 opacity-[0.34] mix-blend-overlay"
          style={{
            backgroundImage: `
              repeating-linear-gradient(68deg, rgba(8, 8, 10, 0.98) 0px, rgba(8, 8, 10, 0.98) 1.5px, transparent 1.5px, transparent 4.5px),
              repeating-linear-gradient(-68deg, rgba(160, 170, 190, 0.35) 0px, rgba(160, 170, 190, 0.35) 1px, transparent 1px, transparent 4.0px),
              repeating-linear-gradient(116deg, rgba(10, 10, 14, 0.99) 0px, rgba(10, 10, 14, 0.99) 2px, transparent 2px, transparent 6.5px),
              repeating-linear-gradient(-116deg, rgba(130, 140, 160, 0.28) 0px, rgba(130, 140, 160, 0.28) 1.2px, transparent 1.2px, transparent 5.5px)
            `,
            maskImage: `
              url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' result='noise'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.88 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
              radial-gradient(circle at 50% 50%, black 25%, transparent 85%)
            `,
            WebkitMaskImage: `
              url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' result='noise'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.88 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
              radial-gradient(circle at 50% 50%, black 25%, transparent 85%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in"
          }}
        />

        {/* Organic Fur Fibers Container (Allows overflow to drape naturally over the zipper track) */}
        <div className="absolute inset-0 overflow-visible pointer-events-none z-10">
          {upperFlapFur.map((fur) => {
            const hasDepthBlur = fur.depthIndex <= 2;
            const isHighContrastTips = fur.depthIndex >= 5;
            const filterStyle = hasDepthBlur 
              ? "blur(1.4px) brightness(0.65)" 
              : isHighContrastTips 
                ? "drop-shadow(1px 1.5px 1.5px rgba(0,0,0,0.92)) brightness(1.15)"
                : "drop-shadow(1px 2px 2.5px rgba(0,0,0,0.85)) brightness(0.9)";

            return (
              <div
                key={fur.id}
                className={`absolute transition-transform duration-300 ${fur.isShining ? 'mix-blend-screen' : 'mix-blend-normal'}`}
                style={{
                  left: `${fur.left}%`,
                  top: `${fur.top}%`,
                  width: `${fur.thickness}px`,
                  height: `${fur.length}px`,
                  transform: `rotate(${fur.rotation}deg)`,
                  opacity: fur.opacity,
                  // Using curve mock on borders for hyper-realistic hair arcs
                  borderLeft: fur.curveSide === "left" ? `${fur.thickness}px solid rgb(${fur.grayTone}, ${fur.grayTone + 2}, ${fur.grayTone + 6})` : "none",
                  borderRight: fur.curveSide === "right" ? `${fur.thickness}px solid rgb(${fur.grayTone}, ${fur.grayTone + 2}, ${fur.grayTone + 6})` : "none",
                  borderRadius: fur.curveSide === "left" ? "100% 0% 0% 100% / 40% 0% 0% 60%" : "0% 100% 100% 0% / 0% 40% 60% 0%",
                  filter: filterStyle,
                }}
              />
            );
          })}
        </div>

        {/* High Frequency micro-fabric grain noise backdrop overlay */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none z-20 mix-blend-overlay"
          style={{ filter: "url(#organics-noise)" }} 
        />

        {/* Real textile fabric stitching line running parallel above the zipper */}
        <div className="absolute bottom-2.5 left-0 right-0 flex justify-around opacity-30 pointer-events-none px-4 z-20">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[8px] h-[3px] bg-stone-500/70 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
          ))}
        </div>

        {/* Bottom edge shadow cushioning gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/99 to-transparent pointer-events-none z-20" />

        {/* Brand Name Structure (Silver 3D Embossed GLOSS Logo Plate with micro sparkle flare) */}
        <div className="absolute inset-x-0 bottom-20 text-center z-35 flex flex-col items-center justify-center">
          <div className="relative inline-flex items-center justify-center font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-semibold text-transparent bg-clip-text select-none group">
            {/* Soft silver glow reflection backdrop centered on logo */}
            <span className="absolute inset-x-[-4rem] inset-y-[-2rem] blur-3xl bg-white/5 rounded-full opacity-50 pointer-events-none" />
            
            {/* Individually styled letters to support perfect proportional kerning and the custom star-embossed detail inside O */}
            <span 
              className="mr-[0.14em] drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #dae2ed 35%, #7e8796 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              G
            </span>
            <span 
              className="mr-[0.14em] drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #dae2ed 35%, #7e8796 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              L
            </span>
            
            {/* Letter 'O' with the luxury diamond star sparkle placed exactly inside its hollow core */}
            <span 
              className="relative mr-[0.14em] inline-flex items-center justify-center drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #dae2ed 35%, #7e8796 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              O
              
              {/* Silver/White 4-point Diamond Star Sparkle inside O */}
              <span className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none mr-[0.14em]">
                <svg 
                  className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] md:w-[26px] md:h-[26px] lg:w-[32px] lg:h-[32px] text-white/95 animate-pulse" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.95))" }}
                >
                  <path d="M12 2c0 5.5 0.3 6 6 6-5.7 0-6 0.5-6 6 0-5.5-0.3-6-6-6 5.7 0 6-0.5 6-6z" />
                </svg>
              </span>
            </span>
            
            <span 
              className="mr-[0.14em] drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #dae2ed 35%, #7e8796 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              S
            </span>
            <span 
              className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #dae2ed 35%, #7e8796 65%, #ffffff 90%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              S
            </span>

            {/* Specular light flare sweep overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] animate-[pulse_3s_infinite] mix-blend-overlay" />
          </div>
        </div>
      </div>

      {/* 2. CENTER ZIPPER TRACK TAPE (Zarif ve Gerçekçi Metalik Dişler) */}
      <div 
        id="interactive-zipper-tape-container"
        className={`fixed top-1/2 left-0 right-0 h-10 -translate-y-1/2 z-20 flex items-center transition-opacity duration-[900ms] ${
          isOpening && sliderPercent >= 99 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Heavy woven black canvas tape backing with repeating vertical silver stitching yarns */}
        <div 
          className="absolute inset-x-0 h-8 bg-[#090a0d] border-y border-[#1a1b24] shadow-[inset_0_3px_6px_rgba(0,0,0,0.95)] flex items-center overflow-hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px),
              repeating-linear-gradient(90deg, rgba(235,240,255,0.22) 0px, rgba(235,240,255,0.22) 2px, transparent 2px, transparent 6px),
              repeating-linear-gradient(90deg, rgba(235,240,255,0.22) 0px, rgba(235,240,255,0.22) 2px, transparent 2px, transparent 6px)
            `,
            backgroundPosition: "0 0, 0 3px, 0 27px", // Fine stitch rows sitting near upper & lower bounds of tape
            backgroundSize: "100% 100%, 100% 2px, 100% 2px",
            backgroundRepeat: "repeat, repeat-x, repeat-x"
          }}
        />

        {/* A. UPPER ZIPPER TEETH SEGMENTS */}
        <div className="absolute top-[3px] left-0 right-0 h-3 flex justify-between pointer-events-none select-none overflow-hidden px-4">
          {Array.from({ length: teethCount }).map((_, idx) => {
            const toothPercent = (idx / teethCount) * 100;
            const isSeparated = isOpening && sliderPercent > toothPercent;
            
            return (
              <div 
                key={`upper-tooth-${idx}`}
                className="w-2.5 h-3 relative transition-all ease-out"
                style={{
                  transform: isSeparated 
                    ? `translateY(-28px) rotate(-42deg) scale(0.6)` 
                    : "translateY(0px) rotate(0deg) scale(1)",
                  opacity: isSeparated ? 0 : 1,
                  transitionDuration: `${130 + idx * 3}ms`
                }}
              >
                {/* Individual 3D metal body block */}
                <div 
                  className="w-full h-full rounded-t-sm border-r border-[#15171d] border-l border-[#565d6c] relative"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #cbd5e1 35%, #475569 80%, #1e293b 100%)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.85), inset 0 1.5px 1px rgba(255,255,255,0.95)"
                  }}
                >
                  {/* Pseudo-element style inner metal lock joint node */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full bg-gradient-to-t from-[#f8fafc] to-[#94a3b8] border-t border-[#64748b]/50 shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] pointer-events-none" />
                  {/* Metallic reflection highlight edge */}
                  <div className="absolute top-[1.5px] left-[20%] w-[1px] h-1 bg-white/70" />
                </div>
              </div>
            );
          })}
        </div>

        {/* B. LOWER ZIPPER TEETH SEGMENTS */}
        <div className="absolute top-[21px] left-0 right-0 h-3 flex justify-between pointer-events-none select-none overflow-hidden px-[18px]">
          {Array.from({ length: teethCount }).map((_, idx) => {
            const toothPercent = (idx / teethCount) * 100;
            const isSeparated = isOpening && sliderPercent > toothPercent;
            
            return (
              <div 
                key={`lower-tooth-${idx}`}
                className="w-2.5 h-3 relative transition-all ease-out"
                style={{
                  transform: isSeparated 
                    ? `translateY(28px) rotate(42deg) scale(0.6)` 
                    : "translateY(0px) rotate(0deg) scale(1)",
                  opacity: isSeparated ? 0 : 1,
                  transitionDuration: `${130 + idx * 3}ms`
                }}
              >
                {/* Individual 3D metal body block pointing upwards */}
                <div 
                  className="w-full h-full rounded-b-sm border-r border-[#15171d] border-l border-[#565d6c] relative"
                  style={{
                    backgroundImage: "linear-gradient(to top, #ffffff 0%, #cbd5e1 35%, #475569 80%, #1e293b 100%)",
                    boxShadow: "0 -1px 2px rgba(0,0,0,0.85), inset 0 -1.5px 1px rgba(255,255,255,0.95)"
                  }}
                >
                  {/* Lock joint node matching upper */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full bg-gradient-to-b from-[#f8fafc] to-[#94a3b8] border-b border-[#64748b]/50 shadow-[0_-0.5px_0.5px_rgba(255,255,255,0.8)] pointer-events-none" />
                  {/* Specular bounce reflection */}
                  <div className="absolute bottom-[1.5px] left-[20%] w-[1px] h-1 bg-white/70" />
                </div>
              </div>
            );
          })}
        </div>

        {/* C. SOLID CHROME ZIPPER SLIDER & ELEVATED HIGH-GLOSS PULL TAB */}
        <div 
          id="zipper-slider-unit"
          className="absolute top-1/2 -translate-y-1/2 pointer-events-auto z-30 flex items-center justify-center cursor-pointer"
          style={{ 
            left: `${sliderPercent}%`,
            transform: `translate(-50%, -50%)`,
            transition: isOpening ? "left 80ms linear" : "left 600ms cubic-bezier(0.19, 1, 0.22, 1)"
          }}
          onClick={startUnzippingAnimation}
        >
          <div className="relative flex flex-col items-center group">
            
            {/* The heavy polished 3D cast chrome slider body with sleek bevel highlights, matching the picture perfectly */}
            <div 
              className="w-[44px] h-[48px] rounded-t-xl rounded-b-md relative flex flex-col justify-end p-1.5 transition-all duration-300 group-hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 20%, #94a3b8 45%, #e2e8f0 70%, #475569 85%, #cbd5e1 100%)",
                border: "1px solid #94a3b8",
                boxShadow: `
                  0 12px 24px rgba(0,0,0,0.95),
                  inset 0 1px 1px rgba(255,255,255,1),
                  inset 0 -1.5px 3px rgba(0,0,0,0.4)
                `
              }}
            >
              {/* Beveled edge sheen overlay */}
              <div className="absolute inset-[1px] rounded-t-lg rounded-b-sm border border-white/80 pointer-events-none" />

              {/* Slider bridge connecting pull tab */}
              <div 
                className="w-4 h-5 rounded-md bg-gradient-to-b from-white via-[#94a3b8] to-[#475569] border border-stone-600/80 mx-auto flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)] relative z-10"
                style={{ boxShadow: "0 1.5px 3px rgba(0,0,0,0.4)" }}
              >
                <div className="w-1.5 h-2 bg-stone-950 rounded-xs" />
              </div>
            </div>

            {/* THE HEAVY EMBOSSED METALLIC SILVER CHROME PULL TAG WITH DISTINCTIVE HOLLOW WINDOW - EXACTLY AS SHOWN IN USER IMAGE */}
            <div 
              className="w-[34px] h-[92px] -mt-0.5 rounded-b-xl rounded-t-md border border-slate-300 absolute top-[44px] origin-top transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105 z-40 flex flex-col items-center justify-between py-2 cursor-pointer select-none"
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #cbd5e1 30%, #475569 75%, #1e293b 100%)",
                boxShadow: `
                  0 20px 30px rgba(0, 0, 0, 0.95),
                  0 4px 8px rgba(0, 0, 0, 0.4),
                  inset 0 1.5px 2px rgba(255, 255, 255, 1),
                  inset 0 -1.5px 3px rgba(0, 0, 0, 0.5)
                `
              }}
            >
              {/* Highlight shine overlay around the parameter of the pull tab */}
              <div className="absolute inset-[1px] rounded-b-lg rounded-t-sm border border-white/60 pointer-events-none" />

              {/* Pivot connection loops */}
              <div className="w-3.5 h-3 bg-gradient-to-r from-slate-400 via-white to-slate-500 rounded-sm shadow-sm" />

              {/* A highly polished, sleek metallic vertical line engraving down the center body, typical of high-end bag hardware */}
              <div className="w-[1.5px] h-[26px] bg-gradient-to-b from-slate-200 via-slate-400 to-transparent opacity-80" />

              {/* Elegant hollow rectangular cutout at the bottom part, exactly as shown in the user's uploaded reference photo */}
              <div 
                className="w-[16px] h-[28px] rounded-md bg-[#020203] relative border border-slate-500 shadow-[inset_0_4px_10px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden mb-1"
                style={{
                  backgroundColor: "#020203"
                }}
              >
                {/* Micro reflection sheen inside the cutout loop bounds */}
                <div className="absolute inset-[1px] border border-white/10 rounded-sm pointer-events-none" />
              </div>
            </div>

            {/* Glowing elegant prompt pulse at resting state */}
            {!isOpening && (
              <div className="absolute -bottom-12 bg-white/5 border border-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-md shadow-2xl animate-pulse whitespace-nowrap">
                Fermuarı Çekip Açın
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. LOWER FLAP (SİYAH FİBER TÜYLÜ ALT YAN) */}
      <div
        id="lower-plush-flap"
        className="fixed bottom-0 left-0 right-0 h-1/2 z-10 transition-all duration-[1300ms] cubic-bezier(0.77, 0, 0.175, 1) overflow-visible"
        style={{
          backgroundColor: "#020203",
          // Layered complex radial lights & micro-texture depths
          backgroundImage: `
            radial-gradient(ellipse at 50% 25%, rgba(48, 52, 68, 0.55) 0%, rgba(3, 3, 5, 0.99) 70%),
            radial-gradient(ellipse at 85% 75%, rgba(65, 70, 88, 0.28) 0%, transparent 60%),
            radial-gradient(circle at 15% 85%, rgba(255, 255, 255, 0.04) 0%, transparent 45%),
            linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(18, 19, 24, 0.25) 100%)
          `,
          transform: isOpening 
            ? `translateY(${(sliderPercent / 100) * 115}%) rotate(2deg)` 
            : "translateY(0%) rotate(0deg)",
          borderTop: "3px solid #0c0d10",
          boxShadow: "0 -10px 35px rgba(0, 0, 0, 0.95), inset 0 6px 12px rgba(0,0,0,0.85)"
        }}
      >
        {/* Lighter silver-gray linear reflection highlights in overlay mode */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none z-22 mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 30%, rgba(226, 232, 240, 0.5) 50%, rgba(255, 255, 255, 0.8) 55%, rgba(226, 232, 240, 0.5) 60%, transparent 85%),
              linear-gradient(55deg, transparent 40%, rgba(226, 232, 240, 0.25) 50%, rgba(255, 255, 255, 0.45) 55%, rgba(226, 232, 240, 0.25) 60%, transparent 70%),
              radial-gradient(ellipse at 30% 60%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)
            `
          }}
        />

        {/* Hyper-realistic Faux Fur interlocking hair fiber overlay with noise-texture and mask */}
        <div 
          className="absolute inset-0 pointer-events-none z-15 opacity-[0.34] mix-blend-overlay"
          style={{
            backgroundImage: `
              repeating-linear-gradient(68deg, rgba(8, 8, 10, 0.98) 0px, rgba(8, 8, 10, 0.98) 1.5px, transparent 1.5px, transparent 4.5px),
              repeating-linear-gradient(-68deg, rgba(160, 170, 190, 0.35) 0px, rgba(160, 170, 190, 0.35) 1px, transparent 1px, transparent 4.0px),
              repeating-linear-gradient(116deg, rgba(10, 10, 14, 0.99) 0px, rgba(10, 10, 14, 0.99) 2px, transparent 2px, transparent 6.5px),
              repeating-linear-gradient(-116deg, rgba(130, 140, 160, 0.28) 0px, rgba(130, 140, 160, 0.28) 1.2px, transparent 1.2px, transparent 5.5px)
            `,
            maskImage: `
              url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' result='noise'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.88 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
              radial-gradient(circle at 50% 50%, black 25%, transparent 85%)
            `,
            WebkitMaskImage: `
              url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' result='noise'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.88 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
              radial-gradient(circle at 50% 50%, black 25%, transparent 85%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in"
          }}
        />

        {/* Organic Fur Fibers Container (Allows overflow to drape naturally over the zipper track upwards) */}
        <div className="absolute inset-0 overflow-visible pointer-events-none z-10">
          {lowerFlapFur.map((fur) => {
            const hasDepthBlur = fur.depthIndex <= 2;
            const isHighContrastTips = fur.depthIndex >= 5;
            const filterStyle = hasDepthBlur 
              ? "blur(1.4px) brightness(0.65)" 
              : isHighContrastTips 
                ? "drop-shadow(1px 1.5px 1.5px rgba(0,0,0,0.92)) brightness(1.15)"
                : "drop-shadow(1px 2px 2.5px rgba(0,0,0,0.85)) brightness(0.9)";

            return (
              <div
                key={fur.id}
                className={`absolute transition-transform duration-300 ${fur.isShining ? 'mix-blend-screen' : 'mix-blend-normal'}`}
                style={{
                  left: `${fur.left}%`,
                  top: `${fur.top}%`,
                  width: `${fur.thickness}px`,
                  height: `${fur.length}px`,
                  transform: `rotate(${fur.rotation}deg)`,
                  opacity: fur.opacity,
                  // Using curve mock on borders for hyper-realistic hair arcs
                  borderLeft: fur.curveSide === "left" ? `${fur.thickness}px solid rgb(${fur.grayTone}, ${fur.grayTone + 2}, ${fur.grayTone + 6})` : "none",
                  borderRight: fur.curveSide === "right" ? `${fur.thickness}px solid rgb(${fur.grayTone}, ${fur.grayTone + 2}, ${fur.grayTone + 6})` : "none",
                  borderRadius: fur.curveSide === "left" ? "100% 0% 0% 100% / 40% 0% 0% 60%" : "0% 100% 100% 0% / 0% 40% 60% 0%",
                  filter: filterStyle,
                }}
              />
            );
          })}
        </div>

        {/* High Frequency micro-grain noise backdrop overlay */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none z-20 mix-blend-overlay"
          style={{ filter: "url(#organics-noise)" }} 
        />

        {/* Real fabric stitch seam below the zipper */}
        <div className="absolute top-2.5 left-0 right-0 flex justify-around opacity-30 pointer-events-none px-4 z-20">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[8px] h-[3px] bg-stone-500/70 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
          ))}
        </div>

        {/* Top edge shadow cushioning gradient */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/99 to-transparent pointer-events-none z-20" />
      </div>
    </div>
  );
}
