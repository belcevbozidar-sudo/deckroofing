'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  name: 'Ремонт на стар покрив',
  location: 'Цялата страна',
  sqft: 'Безплатен оглед',
  system: 'Керемиди и конструкция',
  duration: 'Договор + гаранция',
  onTime: true,
  image: "/assets/images/vladi-build-24-poster-1.jpg",
  alt: 'Ремонт на стар покрив от Влади Билд 24 ЕООД'
},
{
  name: 'Пренареждане на керемиди',
  location: 'Цялата страна',
  sqft: 'Оглед на място',
  system: 'Керемиди',
  duration: 'Качествени материали',
  onTime: true,
  image: "/assets/images/vladi-build-24-poster-2.jpg",
  alt: 'Пренареждане на керемиди и покривен ремонт'
},
{
  name: 'Хидроизолация',
  location: 'Цялата страна',
  sqft: 'Защита от течове',
  system: 'Хидроизолация',
  duration: 'Гаранция за качество',
  onTime: true,
  image: "/assets/images/vladi-build-24-poster-1.jpg",
  alt: 'Хидроизолация на покрив от Влади Билд 24 ЕООД'
},
{
  name: 'Улуци, обшивки и нов покрив',
  location: 'Цялата страна',
  sqft: 'Водоотвеждане',
  system: 'Улуци и обшивки',
  duration: 'Нов покрив при нужда',
  onTime: true,
  image: "/assets/images/vladi-build-24-poster-2.jpg",
  alt: 'Улуци, обшивки и нов покрив'
}];


const marqueeTickers = [
'РЕМОНТ НА ПОКРИВИ · ЦЯЛАТА СТРАНА · ДОГОВОР · ГАРАНЦИЯ',
'ПРЕНАРЕЖДАНЕ НА КЕРЕМИДИ · КАЧЕСТВЕНИ МАТЕРИАЛИ',
'ХИДРОИЗОЛАЦИЯ · ЗАЩИТА ОТ ТЕЧОВЕ · ГАРАНТИРАНО КАЧЕСТВО',
'УЛУЦИ И ОБШИВКИ · ВОДООТВЕЖДАНЕ · ПОКРИВНИ ДЕТАЙЛИ',
'НОВ ПОКРИВ · БЕЗПЛАТЕН ОГЛЕД · ОФЕРТА СЛЕД ОГЛЕД',
'ОБАДЕТЕ СЕ · 0892 392 879 · -30% ОТ ТРУДА'];


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-item').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
                (el as HTMLElement).style.filter = 'blur(0)';
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: 'translateY(24px)',
    filter: 'blur(3px)',
    transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.7s cubic-bezier(0.22,1,0.36,1)'
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-charcoal blueprint-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between gap-8 mb-16" style={revealStyle}>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-amber" />
              <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Покривни дейности</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-spec-white leading-tight">
              От ремонт<br />
              <span className="text-amber">до нов покрив.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-spec-white/60 leading-relaxed font-medium">
              Влади Билд 24 ЕООД поема основните покривни дейности, описани в рекламните материали: ремонти, керемиди, хидроизолация, улуци, обшивки и нови покриви.
            </p>
          </div>
        </div>

        {/* Projects grid — asymmetric bento */}
        <div className="reveal-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5" style={revealStyle}>
          {/* Large card */}
          <div className="group lg:col-span-2 relative rounded-2xl overflow-hidden h-72 md:h-80 bento-card">
            <AppImage
              src={projects[0].image}
              alt={projects[0].alt}
              fill
              className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
                <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Услуга · с гаранция</span>
              </div>
              <h3 className="text-2xl font-black text-spec-white mb-1">{projects[0].name}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="font-mono-spec text-xs bg-deep-dark/70 border border-spec-white/10 rounded px-2.5 py-1 text-spec-white/60">{projects[0].sqft}</span>
                <span className="font-mono-spec text-xs bg-amber/15 border border-amber/30 rounded px-2.5 py-1 text-amber">{projects[0].system}</span>
                <span className="font-mono-spec text-xs bg-deep-dark/70 border border-spec-white/10 rounded px-2.5 py-1 text-spec-white/60">{projects[0].duration}</span>
              </div>
            </div>
          </div>

          {/* Small card */}
          <div className="group relative rounded-2xl overflow-hidden h-72 md:h-80 bento-card">
            <AppImage
              src={projects[1].image}
              alt={projects[1].alt}
              fill
              className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
                <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">С договор</span>
              </div>
              <h3 className="text-lg font-black text-spec-white mb-1">{projects[1].name}</h3>
              <div className="flex flex-wrap gap-2 mt-1.5">
                <span className="font-mono-spec text-xs bg-deep-dark/70 border border-spec-white/10 rounded px-2 py-0.5 text-spec-white/60">{projects[1].sqft}</span>
                <span className="font-mono-spec text-xs bg-amber/15 border border-amber/30 rounded px-2 py-0.5 text-amber">{projects[1].system}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-5" style={revealStyle}>
          {projects.slice(2).map((project) =>
          <div key={project.name} className="group relative rounded-2xl overflow-hidden h-60 bento-card">
              <AppImage
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 via-deep-dark/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
                  <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Качествено изпълнение</span>
                </div>
                <h3 className="text-xl font-black text-spec-white mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="font-mono-spec text-xs bg-deep-dark/70 border border-spec-white/10 rounded px-2.5 py-1 text-spec-white/60">{project.sqft}</span>
                  <span className="font-mono-spec text-xs bg-amber/15 border border-amber/30 rounded px-2.5 py-1 text-amber">{project.system}</span>
                  <span className="font-mono-spec text-xs bg-deep-dark/70 border border-spec-white/10 rounded px-2.5 py-1 text-spec-white/60">{project.duration}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-16 border-y border-spec-white/8 bg-deep-dark/60 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeTickers, ...marqueeTickers].map((item, i) =>
          <span key={i} className="inline-flex items-center gap-4 px-6 font-mono-spec text-xs text-spec-white/40 uppercase">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-amber/40 inline-block" />
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="reveal-item mt-16 flex justify-center px-6" style={revealStyle}>
        <Link
          href="/assessment"
          className="cta-amber inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-amber">
          
          Заяви безплатен оглед
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>);

}
