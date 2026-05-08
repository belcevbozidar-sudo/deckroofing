'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Ремонт на покрив',
    code: 'POKRIV-REMONT',
    price: 'Оферта след оглед',
    description: 'За течове, счупени керемиди, компрометирани участъци и нужда от бърза намеса.',
    features: [
      'Безплатен оглед',
      'Ремонт с качествени материали',
      'Договор и гаранция',
      'Работа в цялата страна',
    ],
    highlight: false,
  },
  {
    name: 'Пълна грижа',
    code: 'VLADI-BILD-24',
    price: '-30% от труда',
    description: 'Най-подходящо, когато покривът има нужда от няколко дейности наведнъж.',
    features: [
      'Пренареждане на керемиди',
      'Хидроизолация',
      'Улуци и обшивки',
      'Гарантирано качество',
      'Писмен договор',
    ],
    highlight: true,
  },
  {
    name: 'Нов покрив',
    code: 'NOV-POKRIV',
    price: 'По проект и оглед',
    description: 'За имоти, при които ремонтът не е достатъчен и е нужен нов покрив.',
    features: [
      'Оценка на състоянието',
      'Избор на материали',
      'Изпълнение с гаранция',
      'Улуци и детайли при нужда',
      'Финална проверка',
      'Договор преди работа',
    ],
    highlight: false,
  },
];

export default function MaintenanceSection() {
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
              }, i * 120);
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
    transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.7s cubic-bezier(0.22,1,0.36,1)',
  };

  return (
    <section id="maintenance" ref={sectionRef} className="py-24 md:py-32 bg-deep-dark blueprint-grid-fine relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal-item text-center mb-16" style={revealStyle}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-amber" />
            <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Промоция и контакт</span>
            <div className="w-6 h-px bg-amber" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-spec-white leading-tight mb-5">
            Обадете се сега<br />
            <span className="text-amber">0892 392 879.</span>
          </h2>
          <p className="text-lg text-spec-white/60 leading-relaxed max-w-2xl mx-auto font-medium">
            Влади Билд 24 ЕООД предлага безплатен оглед, работа в цялата страна и -30% отстъпка от труда за ограничено време.
          </p>
        </div>

        {/* Tier cards */}
        <div className="reveal-item grid grid-cols-1 md:grid-cols-3 gap-5 mb-16" style={revealStyle}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                tier.highlight
                  ? 'bg-amber/8 border-2 border-amber/50' :'bento-card'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber text-deep-dark font-mono-spec text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Най-търсено
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-2">{tier.code}</div>
                <h3 className={`text-2xl font-black mb-1 ${tier.highlight ? 'text-amber' : 'text-spec-white'}`}>
                  {tier.name}
                </h3>
                <div className="font-mono-spec text-lg font-bold text-spec-white/80">{tier.price}</div>
              </div>

              <p className="text-sm text-spec-white/55 leading-relaxed mb-6 font-medium">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-spec-white/70">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      tier.highlight ? 'bg-amber/20' : 'bg-spec-white/8'
                    }`}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={tier.highlight ? '#E8991C' : '#F4F3EF'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/assessment"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  tier.highlight
                    ? 'cta-amber shadow-amber'
                    : 'border border-spec-white/15 text-spec-white/70 hover:border-spec-white/30 hover:text-spec-white'
                }`}
              >
                Заяви оглед
              </Link>
            </div>
          ))}
        </div>

        {/* Final CTA block */}
        <div className="reveal-item relative bg-graphite/20 border border-spec-white/8 rounded-3xl p-10 md:p-14 overflow-hidden" style={revealStyle}>
          {/* Blueprint corner marks */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber/30 rounded-tl" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber/30 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber/30 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber/30 rounded-br" />

          {/* Ambient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="font-mono-spec text-xs text-amber uppercase tracking-widest mb-6">
              Ние пазим дома ви отгоре
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-spec-white leading-tight mb-6">
              Покривът не чака<br />
              <span className="text-amber">следващия дъжд.</span>
            </h2>
            <p className="text-lg text-spec-white/60 leading-relaxed mb-10 font-medium">
              Един оглед е достатъчен, за да знаете дали ви трябва ремонт, пренареждане на керемиди, хидроизолация, улуци, обшивки или нов покрив.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+359892392879"
                className="cta-amber inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-black uppercase tracking-widest shadow-amber"
              >
                Обади се сега
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                'Безплатен оглед',
                'Договор + гаранция',
                'Качествени материали',
                '-30% отстъпка от труда',
              ].map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm text-spec-white/50 font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8991C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
