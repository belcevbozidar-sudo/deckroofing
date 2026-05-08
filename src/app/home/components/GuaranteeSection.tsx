'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function GuaranteeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const [stamped, setStamped] = useState(false);

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
            // Trigger stamp after content reveals
            setTimeout(() => setStamped(true), 800);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
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
    <section
      id="guarantee"
      ref={sectionRef}
      className="relative py-24 md:py-32 blueprint-grid-fine noise-overlay"
      style={{ backgroundColor: '#1E2024' }}
    >
      {/* Ambient amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="reveal-item flex items-center gap-3 mb-12" style={revealStyle}>
          <div className="w-6 h-px bg-amber" />
          <span className="font-mono-spec text-xs text-amber uppercase tracking-widest font-medium">
            ВЛАДИ-БИЛД-24 · ГАРАНЦИЯ И ДОГОВОР
          </span>
        </div>

        {/* Main guarantee document */}
        <div className="reveal-item relative bg-graphite/30 border border-spec-white/10 rounded-2xl overflow-hidden" style={revealStyle}>

          {/* Blueprint header bar */}
          <div className="bg-deep-dark border-b border-spec-white/8 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-mono-spec text-xs text-spec-white/40 uppercase tracking-widest">Документ</span>
              <span className="font-mono-spec text-xs text-amber font-bold">VB24-POKRIV-DOGOVOR</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono-spec text-xs text-spec-white/30">Дата: 08.05.2026</span>
              <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 relative">
            {/* Stamp */}
            <div
              ref={stampRef}
              className={`absolute top-8 right-8 md:top-12 md:right-12 w-28 h-28 md:w-36 md:h-36 pointer-events-none transition-all duration-500 ${
                stamped ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: stamped ? 'rotate(-4deg) scale(1)' : 'rotate(-4deg) scale(1.3)',
                transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <svg viewBox="0 0 140 140" className="w-full h-full">
                <circle cx="70" cy="70" r="60" fill="none" stroke="#E8991C" strokeWidth="3" opacity="0.9" />
                <circle cx="70" cy="70" r="52" fill="none" stroke="#E8991C" strokeWidth="1" opacity="0.5" />
                <text x="70" y="58" textAnchor="middle" fill="#E8991C" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" letterSpacing="1">ДОГОВОР</text>
                <text x="70" y="76" textAnchor="middle" fill="#E8991C" fontSize="15" fontFamily="JetBrains Mono" fontWeight="900">ГАРАНЦИЯ</text>
                <text x="70" y="94" textAnchor="middle" fill="#E8991C" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" letterSpacing="1">КАЧЕСТВО</text>
              </svg>
            </div>

            {/* Guarantee headline */}
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-spec-white mb-6">
                Качествен ремонт<br />
                <span className="text-amber">с гаранция</span><br />
                и договор.
              </h2>
              <p className="text-lg text-spec-white/70 leading-relaxed mb-8 font-medium">
                Влади Билд 24 ЕООД работи с ясна уговорка, качествени материали и писмен договор. Получавате безплатен оглед, конкретна оферта и гаранция за извършената работа.
              </p>
            </div>

            {/* Guarantee terms grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                {
                  label: 'Работна зона',
                  value: 'Ремонт на покриви в цялата страна',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  label: 'Документи',
                  value: 'Договор + гаранция преди започване на работа',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
                {
                  label: 'Оглед',
                  value: 'Безплатен оглед и реална преценка на покрива',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  ),
                },
                {
                  label: 'Материали',
                  value: 'Качествени материали според вида покрив',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                  ),
                },
                {
                  label: 'Промоция',
                  value: '-30% отстъпка от труда за ограничено време',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                },
                {
                  label: 'Финал',
                  value: 'Гарантирано качество и проверка след ремонта',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="stat-card bento-card rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center text-amber shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono-spec text-xs text-spec-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-sm text-spec-white/80 leading-snug font-medium">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature line */}
            <div className="border-t border-spec-white/8 pt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest">Изпълнител</div>
                <div className="flex items-end gap-6">
                  <div>
                    <div className="font-mono-spec text-2xl text-amber/80 italic mb-1" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
                      Влади Билд 24
                    </div>
                    <div className="w-48 h-px bg-spec-white/20" />
                    <div className="font-mono-spec text-xs text-spec-white/30 mt-1.5">Влади Билд 24 ЕООД · Ремонт на покриви</div>
                  </div>
                  <div>
                    <div className="font-mono-spec text-xs text-spec-white/30 mb-1">Телефон</div>
                    <div className="font-mono-spec text-sm text-amber font-bold">0892 392 879</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="tel:+359892392879"
                className="cta-amber inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest shadow-amber shrink-0"
              >
                Обади се сега
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Supporting stats */}
        <div className="reveal-item grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" style={revealStyle}>
          {[
            { value: '5', label: 'Основни услуги', sub: 'ремонт, керемиди, хидроизолация, улуци, нов покрив' },
            { value: '-30%', label: 'Отстъпка от труда', sub: 'ограничено време' },
            { value: '100%', label: 'Цялата страна', sub: 'работим навсякъде в България' },
            { value: '0892', label: 'Директен телефон', sub: '392 879' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card bento-card rounded-xl p-5 text-center">
              <div className="text-3xl md:text-4xl font-black text-amber mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-spec-white">{stat.label}</div>
              <div className="font-mono-spec text-xs text-spec-white/40 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
