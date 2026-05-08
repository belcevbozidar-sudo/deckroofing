'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Обаждане и уточнение',
    sub: 'кажете какъв е проблемът',
    description: 'Уточняваме дали става дума за теч, счупени керемиди, нужда от пренареждане, хидроизолация, улуци или нов покрив. Така огледът започва с ясна посока.',
    spec: 'Телефон · 0892 392 879',
    tag: 'Контакт',
  },
  {
    number: '02',
    title: 'Безплатен оглед',
    sub: 'на място, преди офертата',
    description: 'Проверяваме състоянието на покрива, керемидите, улуците, обшивките и зоните с риск от теч. Получавате реална преценка какво трябва да се направи.',
    spec: 'Оглед · безплатен',
    tag: 'Оценка',
  },
  {
    number: '03',
    title: 'Оферта, договор и гаранция',
    sub: 'ясно преди започване',
    description: 'Уточняваме обхвата, материалите, срока и гаранцията. Работата започва след договор, за да знаете какво получавате и какво е включено.',
    spec: 'Договор + гаранция',
    tag: 'Документи',
  },
  {
    number: '04',
    title: 'Качествен ремонт',
    sub: 'с подходящи материали',
    description: 'Извършваме ремонта на покрива, пренареждането на керемиди, хидроизолацията, улуците, обшивките или изграждането на нов покрив според договорения обхват.',
    spec: 'Качествени материали',
    tag: 'Изпълнение',
  },
  {
    number: '05',
    title: 'Финална проверка',
    sub: 'преди предаване',
    description: 'Проверяваме изпълненото и оставяме покрива подготвен да пази дома ви отгоре. Гаранцията покрива извършената работа според договора.',
    spec: 'Гарантирано качество',
    tag: 'Финал',
  },
];

export default function ProcessSection() {
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
    transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.7s cubic-bezier(0.22,1,0.36,1)',
  };

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-deep-dark relative overflow-hidden">
      {/* Background ghost text */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center w-full"
        style={{
          maskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)',
        }}
      >
        <span className="text-[18vw] font-black text-spec-white/[0.025] tracking-tighter whitespace-nowrap leading-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          ПРОЦЕС
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between gap-8 mb-20" style={revealStyle}>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-amber" />
              <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Как работим</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-spec-white leading-tight">
              Оглед първо.<br />
              <span className="text-amber">Ремонт след това.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-spec-white/60 leading-relaxed font-medium">
              Процесът е прост и ясен: виждаме покрива, даваме конкретна оферта, подписваме договор и изпълняваме ремонта с гаранция.
            </p>
          </div>
        </div>

        {/* Steps — asymmetric layout */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal-item group"
              style={revealStyle}
            >
              <div className={`flex flex-col md:flex-row gap-6 p-6 md:p-8 bento-card rounded-2xl ${
                index === 1 ? 'md:ml-8 lg:ml-16' : ''
              } ${index === 2 ? 'md:ml-4 lg:ml-8' : ''} ${index === 3 ? 'md:ml-8 lg:ml-16' : ''}`}>

                {/* Step number */}
                <div className="shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                  <div className="font-mono-spec text-5xl md:text-6xl font-black text-amber/20 leading-none group-hover:text-amber/40 transition-colors">
                    {step.number}
                  </div>
                  {/* Connector line on desktop */}
                  <div className="hidden md:block w-px h-full min-h-8 bg-gradient-to-b from-amber/30 to-transparent mt-3 ml-6" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-black text-spec-white">{step.title}</h3>
                    <span className="font-mono-spec text-xs bg-amber/10 border border-amber/20 text-amber px-2.5 py-1 rounded-full font-medium">
                      {step.tag}
                    </span>
                  </div>
                  <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-3">{step.sub}</div>
                  <p className="text-spec-white/65 leading-relaxed mb-4 max-w-2xl font-medium">{step.description}</p>

                  {/* Spec line */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-deep-dark/60 border border-spec-white/8 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber/60" />
                    <span className="font-mono-spec text-xs text-spec-white/40">{step.spec}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal-item mt-16 flex justify-center" style={revealStyle}>
          <Link
            href="/assessment"
            className="cta-amber inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-amber"
          >
            Заяви безплатен оглед
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
