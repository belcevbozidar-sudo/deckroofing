'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const systems = [
{
  name: 'Ремонт на покриви',
  code: 'USL-REMONT',
  warranty: 'Гаранция',
  best: 'течове, счупени керемиди и компрометирани участъци',
  thickness: 'след оглед',
  color: '#E8991C',
  image: "/assets/images/stock-roof-repair-workers.jpg",
  imageAlt: 'Влади Билд 24 ЕООД ремонт на стари покриви и керемиди',
  features: ['локален или цялостен ремонт', 'спиране на течове', 'договор и гаранция']
},
{
  name: 'Пренареждане на керемиди',
  code: 'USL-KEREMIDI',
  warranty: 'Договор',
  best: 'разместени, напукани или стари керемиди',
  thickness: 'по покрив',
  color: '#6B7280',
  image: "/assets/images/stock-roof-under-construction.jpg",
  imageAlt: 'Пренареждане на керемиди и ремонт на скатен покрив',
  features: ['подмяна на счупени керемиди', 'подреждане и укрепване', 'качествени материали']
},
{
  name: 'Хидроизолация, улуци и обшивки',
  code: 'USL-IZOLACIA',
  warranty: 'Качество',
  best: 'защитa от вода, влага и течове около детайли',
  thickness: 'според основата',
  color: '#9CA3AF',
  image: "/assets/images/stock-gutters-roof-detail.jpg",
  imageAlt: 'Хидроизолация, улуци и обшивки за покрив',
  features: ['хидроизолационни решения', 'улуци и водоотвеждане', 'обшивки около комини и ръбове']
}];


const manufacturers = [
{ name: 'Нов покрив', tier: 'изграждане и ремонт' },
{ name: 'Керемиди', tier: 'пренареждане и подмяна' },
{ name: 'Хидроизолация', tier: 'за плоски и скатни покриви' },
{ name: 'Улуци', tier: 'монтаж и подмяна' },
{ name: 'Обшивки', tier: 'детайли около комини и ръбове' },
{ name: 'Материали', tier: 'качествен подбор' }];


export default function MaterialsSection() {
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
      { threshold: 0.1 }
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
    <section id="materials" ref={sectionRef} className="py-24 md:py-32 bg-charcoal blueprint-grid relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between gap-8 mb-16" style={revealStyle}>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-amber" />
              <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Услуги, които предлагаме</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-spec-white leading-tight">
              Всичко за<br />
              <span className="text-amber">здрав покрив.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-spec-white/60 leading-relaxed font-medium">
              От малък теч до нов покрив: екипът поема огледа, офертата, материалите и изпълнението с договор и гаранция за качеството.
            </p>
          </div>
        </div>

        {/* System cards - horizontal scroll on mobile */}
        <div className="reveal-item overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0" style={revealStyle}>
          <div className="flex gap-5 md:grid md:grid-cols-3 min-w-max md:min-w-0">
            {systems.map((sys) =>
            <div
              key={sys.name}
              className="group relative w-72 md:w-auto bento-card rounded-2xl overflow-hidden shrink-0 md:shrink">
              
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <AppImage
                  src={sys.image}
                  alt={sys.imageAlt}
                  fill
                  className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  {/* System code badge */}
                  <div className="absolute top-3 left-3 font-mono-spec text-xs bg-deep-dark/80 border border-spec-white/10 rounded px-2 py-1 text-spec-white/60">
                    {sys.code}
                  </div>
                  {/* Warranty badge */}
                  <div className="absolute top-3 right-3 font-mono-spec text-xs bg-amber/90 rounded px-2 py-1 text-deep-dark font-bold">
                    {sys.warranty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-spec-white mb-1">{sys.name}</h3>
                  <div className="font-mono-spec text-xs text-spec-white/40 mb-4">Подходящо за: {sys.best}</div>

                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-spec-white/50">Обхват</span>
                      <span className="font-mono-spec text-spec-white/80 font-medium">{sys.thickness}</span>
                    </div>
                    <div className="w-full h-px bg-spec-white/5" />
                    {sys.features.map((f) =>
                  <div key={f} className="flex items-center gap-2 text-sm text-spec-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber/60 shrink-0" />
                        {f}
                      </div>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Manufacturer certifications */}
        <div className="reveal-item mt-12 p-6 md:p-8 bento-card rounded-2xl" style={revealStyle}>
          <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-6">Дейности и материали</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {manufacturers.map((m) =>
            <div key={m.name} className="flex flex-col items-center text-center p-4 rounded-xl bg-deep-dark/40 border border-spec-white/5 hover:border-amber/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8991C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="text-xs font-bold text-spec-white mb-1">{m.name}</div>
                <div className="font-mono-spec text-[10px] text-amber/70">{m.tier}</div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-item mt-10 flex justify-center" style={revealStyle}>
          <Link
            href="/assessment"
            className="cta-amber inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-amber">
            
            Заяви безплатен оглед
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}
