import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface PaletteColor {
  name: string;
  colorClass: string; // Tailwind gradient or color values
  texture: "shimmer" | "matte" | "glitter";
}

interface PaletteCategoryCardProps {
  key?: string;
  id: string;
  title: string;
  cosmeticName: string;
  categoryTag: string;
  description: string;
  coverLabel: string;
  coverThemeClass: string; // Custom background gradient for cover
  farColors: PaletteColor[];
  onClick: () => void;
}

export default function PaletteCategoryCard({
  id,
  title,
  cosmeticName,
  categoryTag,
  description,
  coverLabel,
  coverThemeClass,
  farColors,
  onClick
}: PaletteCategoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative w-full min-h-[300px] rounded-2xl cursor-pointer transition-all duration-500 select-none"
      style={{
        perspective: "1200px" // Creates the 3D space for the lid to open
      }}
    >
      {/* 1. PALETTE BASE / TRAY (Alt Bölme - Far Renkleri ve Açıklama Burası) */}
      <div 
        className="absolute inset-0 w-full h-full rounded-2xl border-2 border-stone-800 bg-[#0d0e12] p-5 flex flex-col justify-between overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.9),0_10px_30px_rgba(0,0,0,0.8)]"
        style={{
          boxShadow: "inset 0 0 15px rgba(255,255,255,0.02), inset 0 2px 8px rgba(0,0,0,0.9), 0 10px 25px rgba(0,0,0,0.7)"
        }}
      >
        {/* Background Grid Pattern of Base Tray */}
        <div className="absolute inset-x-0 top-0 h-full w-full opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Top Header of the Base Interior */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase">
            GLOSS PRO LAB SERIES
          </span>
          <span className="text-[8px] font-black tracking-widest text-[#a1a1aa] bg-stone-900 px-2 py-0.5 rounded border border-stone-800 uppercase">
            {categoryTag}
          </span>
        </div>

        {/* 4 EYESHADOW POWDER PANS (Dört Gözlü Far Renk Odacıkları) */}
        <div className="relative z-10 grid grid-cols-4 gap-3 my-4">
          {farColors.map((pan, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-1 group/pan"
            >
              {/* Outer physical cup holding the powder */}
              <div 
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-stone-950 p-[2px] shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.1)] border border-stone-850 flex items-center justify-center"
              >
                {/* Real Lipstick / Eyeshadow metallic powder texture in well */}
                <div 
                  className={`w-full h-full rounded-full ${pan.colorClass} relative overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105`}
                >
                  {/* Subtle Glitter/Shimmer Overlays */}
                  {pan.texture === "shimmer" && (
                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-80 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:4px_4px]" />
                  )}
                  {pan.texture === "glitter" && (
                    <div className="absolute inset-0 bg-white/20 mix-blend-color-dodge opacity-90 bg-[radial-gradient(circle,rgba(255,255,255,0.95)_2px,transparent_2px)] bg-[size:6px_6px] animate-pulse" />
                  )}
                  {/* Specular Highlight light effect inside the powder pan */}
                  <div className="absolute top-0.5 left-1 w-6 h-3 bg-white/20 rounded-full blur-[1px] rotate-[-25deg]" />
                </div>
              </div>
              {/* Shade short naming label */}
              <span className="text-[8px] font-mono tracking-tight text-stone-500 truncate max-w-full">
                {pan.name}
              </span>
            </div>
          ))}
        </div>

        {/* Lower Title and Short Info */}
        <div className="relative z-10 space-y-1 mt-auto pt-2 border-t border-stone-900">
          <h4 className="font-serif text-[13px] font-bold text-white tracking-wide">
            {title}
          </h4>
          <p className="text-[11px] leading-relaxed text-stone-450 font-sans line-clamp-2">
            {description}
          </p>
        </div>

        {/* Simulated Soft Applicator Sponge Well */}
        <div className="mt-3 flex items-center justify-between text-[10px] text-stone-500 pt-2 border-t border-stone-900/50">
          <div className="flex gap-1 items-center">
            {/* Miniature Dual-Ended Applicator Stick Drawing */}
            <div className="w-12 h-1.5 bg-stone-950 rounded-full border border-stone-850 flex justify-between p-[1px] shadow-inner">
              <div className="w-2 h-full bg-stone-400 rounded-full"></div>
              <div className="w-2 h-full bg-stone-400 rounded-full"></div>
            </div>
            <span className="text-[8px] font-mono text-stone-600">APPLICATOR</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-white group-hover:text-stone-300">
            <span className="text-[9px] uppercase tracking-wide">AÇ VE İNCELE</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* 2. PALETTE CONTAINER LID (Üst Kapak - 3D Olarak Yukarı Açılan Kısım) */}
      <div 
        className={`absolute inset-0 w-full h-full rounded-2xl border-2 border-stone-700/80 ${coverThemeClass} p-6 flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.85)] z-20 origin-top transition-all duration-500 ease-out`}
        style={{
          transformStyle: "preserve-3d",
          // When parent is hovered, rotate the lid upwards in 3D around the top hinge
          transform: "rotateX(0deg)",
          backfaceVisibility: "hidden"
        }}
        // Handled beautifully using Tailwind style inline classes triggers or mouse event hook
        id={`palette-lid-${id}`}
      >
        {/* Silver Metal Bevel Border Lines Around Lid */}
        <div className="absolute inset-1 rounded-xl border border-stone-500/20 pointer-events-none" />

        {/* Dynamic reflection shine pattern when hovered */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out" />

        {/* Top Header of the Lid cover */}
        <div className="flex items-center justify-between text-stone-300 text-[10px] font-bold tracking-[0.2em] uppercase">
          <span>GLOSS PARIS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-300 animate-pulse"></span>
        </div>

        {/* Center: Beautifully Printed Series and Product Title */}
        <div className="text-center py-6 space-y-2">
          {/* Faux brand series */}
          <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-stone-400 uppercase">
            {cosmeticName}
          </div>
          {/* Main Title Stamp with Chrome Silver / Metal Style */}
          <h3 
            className="text-lg sm:text-xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-white to-stone-300 drop-shadow-md tracking-wider"
            style={{
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.5)"
            }}
          >
            {title}
          </h3>
          <div className="w-8 h-[1px] bg-stone-500/40 mx-auto mt-2"></div>
        </div>

        {/* Bottom Panel of the cover */}
        <div className="flex items-center justify-between text-[10px] pt-4 mt-auto border-t border-stone-700/20">
          <span className="font-mono text-stone-400">{coverLabel}</span>
          <div className="flex items-center gap-1 bg-white/5 border border-stone-700/40 px-2.5 py-1 rounded-lg text-stone-200">
            <Sparkles className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-bold uppercase text-[8px] tracking-widest">KAPAKLI PALET</span>
          </div>
        </div>
      </div>

      {/* 3D LID OPENING HOVER TRIGGER STYLE CONFIGURATOR */}
      {/* Since we cannot write custom styles to index.css easily without rewriting, we can declare a React style tag to inject simple custom CSS */}
      <style>{`
        #palette-lid-${id} {
          transform-origin: top center;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease;
        }
        .group:hover #palette-lid-${id} {
          transform: rotateX(112deg) translateY(-8px) translateZ(8px);
          box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.9);
          opacity: 0.12; /* Slightly fades out to allow 100% crystal-clear viewing of the beautiful eyeshadow wells */
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
