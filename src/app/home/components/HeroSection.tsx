'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef?.current, subRef?.current, ctaRef?.current, cardsRef?.current];
    els?.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.filter = 'blur(4px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.8s cubic-bezier(0.22,1,0.36,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.filter = 'blur(0)';
      }, 200 + i * 160);
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/vladi-build-24-poster-2.jpg"
          alt="Рекламна визия на Влади Билд 24 ЕООД за ремонт на покриви, хидроизолация, улуци и нови покриви"
          fill
          priority
          className="object-cover object-center w-full h-full" />
        
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2024]/95 via-[#2B2D33]/55 to-[#1E2024]/20" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2024]/60 to-transparent" />
      </div>
      {/* Rotating badge */}
      <div className="absolute top-28 right-6 md:right-14 z-30 hidden md:block">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="animate-rotate-badge w-full h-full" viewBox="0 0 100 100">
            <path id="bp-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="2.5px" fill="#E8991C">
              <textPath href="#bp-circle" startOffset="0%">
                ДОГОВОР · ГАРАНЦИЯ · БЕЗПЛАТЕН ОГЛЕД ·
              </textPath>
            </text>
          </svg>
          {/* Center icon */}
          <div className="absolute w-10 h-10 rounded-full bg-amber flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E2024" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </div>
      </div>
      {/* Hero content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

        {/* Left content */}
        <div className="lg:col-span-7 flex flex-col gap-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start">
            <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
            <span className="font-mono-spec text-xs tracking-widest text-amber uppercase font-medium">
              Влади Билд 24 ЕООД · Покриви в цялата страна
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.88] tracking-tight text-spec-white">
            
            Ремонт<br />
            <span className="text-amber amber-text-glow">на покриви</span><br />
            в цялата<br />
            <span className="text-spec-white/60 text-4xl md:text-5xl lg:text-6xl font-bold">страна.</span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-spec-white/75 leading-relaxed max-w-xl font-medium">
            
            Качествени ремонти с договор и гаранция: ремонт на покриви, пренареждане на керемиди, хидроизолация, улуци, обшивки и нови покриви.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="tel:+359892392879"
              className="cta-amber inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-amber">
              
              <span>Обади се сега</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-spec-white/80 border border-spec-white/20 hover:border-spec-white/40 hover:text-spec-white transition-all tracking-wide">
              
              Заяви безплатен оглед
            </a>
          </div>
        </div>

        {/* Right floating cards */}
        <div ref={cardsRef} className="lg:col-span-5 hidden lg:flex flex-col gap-4">
          {/* Card 1 */}
          <div className="glass-dark rounded-2xl p-6 animate-float">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-spec text-xs text-spec-white/40 uppercase tracking-widest">Промоция</span>
              <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
            </div>
            <div className="text-4xl font-black text-amber">-30%</div>
            <div className="text-sm text-spec-white/60 mt-1 font-medium">отстъпка от труда за ограничено време</div>
          </div>

          {/* Card 2 */}
          <div className="glass-dark rounded-2xl p-6 animate-float-delay">
            <div className="font-mono-spec text-xs text-spec-white/40 uppercase tracking-widest mb-3">Услуги</div>
            <div className="flex gap-3 flex-wrap">
              {['Ремонт', 'Керемиди', 'Хидроизолация', 'Улуци', 'Нов покрив']?.map((s) =>
              <span key={s} className="px-3 py-1.5 bg-amber/10 border border-amber/30 rounded-full text-xs font-bold text-amber font-mono-spec">
                  {s}
                </span>
              )}
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-dark rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber/15 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8991C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-spec-white">Договор + гаранция</div>
              <div className="text-xs text-spec-white/50 font-medium mt-0.5">Безплатен оглед и качествени материали</div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono-spec text-xs text-spec-white/50 uppercase tracking-widest">Надолу</span>
        <div className="w-px h-8 bg-gradient-to-b from-spec-white/40 to-transparent" />
      </div>
    </section>);

}
