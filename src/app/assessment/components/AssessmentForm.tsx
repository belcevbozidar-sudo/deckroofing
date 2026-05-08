'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const propertyTypes = [
  { id: 'house', label: 'Къща', code: 'КЩ' },
  { id: 'villa', label: 'Вила', code: 'ВЛ' },
  { id: 'block', label: 'Блок / вход', code: 'БЛ' },
  { id: 'commercial', label: 'Търговски обект', code: 'ТО' },
  { id: 'new-build', label: 'Нов строеж', code: 'НС' },
  { id: 'other', label: 'Друг имот', code: 'ДР' },
];

const roofSizeRanges = [
  { id: 'under-80', label: 'До 80 кв.м' },
  { id: '80-150', label: '80 – 150 кв.м' },
  { id: '150-300', label: '150 – 300 кв.м' },
  { id: '300-plus', label: '300+ кв.м' },
];

const roofNeeds = [
  { id: 'active-leak', label: 'Има теч', urgency: 'high', desc: 'Влиза вода или има мокри петна' },
  { id: 'tiles', label: 'Керемидите са разместени', urgency: 'medium', desc: 'Нужни са пренареждане или подмяна' },
  { id: 'waterproofing', label: 'Трябва хидроизолация', urgency: 'medium', desc: 'Проблем с влага, фуги или плоска част' },
  { id: 'gutters', label: 'Улуци и обшивки', urgency: 'planned', desc: 'Подмяна, монтаж или ремонт на детайли' },
  { id: 'new-roof', label: 'Нов покрив', urgency: 'planned', desc: 'Цялостно изграждане или основен ремонт' },
];

export default function AssessmentForm() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({
    propertyType: '',
    roofSizeRange: '',
    roofNeed: '',
    name: '',
    location: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-amber/15 border-2 border-amber/40 flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8991C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-spec-white mb-4">Запитването е изпратено</h2>
          <p className="text-spec-white/60 text-lg leading-relaxed mb-8 font-medium">
            Влади Билд 24 ЕООД ще се свърже с вас, за да уточни безплатния оглед и най-подходящото решение за покрива.
          </p>
          <div className="p-6 bento-card rounded-2xl text-left mb-8">
            <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-4">Какво следва</div>
            {[
              'Уточняваме адреса и удобен час за оглед',
              'Проверяваме покрива, керемидите, улуците и рисковите места',
              'Подготвяме оферта според нужния ремонт и материалите',
              'Работата започва след договор и ясна гаранция',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <div className="w-5 h-5 rounded-full bg-amber/15 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono-spec text-xs text-amber font-bold">{i + 1}</span>
                </div>
                <span className="text-sm text-spec-white/65 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/home" className="text-amber hover:text-amber-light transition-colors text-sm font-bold">
            Към Влади Билд 24
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-10 blueprint-grid-fine">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link href="/home" className="inline-flex items-center gap-2 text-spec-white/40 hover:text-spec-white/70 transition-colors text-sm font-medium mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
            </svg>
            Назад към Влади Билд 24
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-amber" />
            <span className="font-mono-spec text-xs text-amber uppercase tracking-widest">Безплатен оглед</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-spec-white tracking-tight mb-4">
            Кажете ни за<br />
            <span className="text-amber">вашия покрив.</span>
          </h1>
          <p className="text-spec-white/55 text-lg font-medium leading-relaxed">
            Три кратки стъпки, за да подготвим оглед за ремонт, пренареждане на керемиди, хидроизолация, улуци, обшивки или нов покрив.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 h-1 rounded-full overflow-hidden bg-spec-white/10">
              <div
                className="h-full bg-amber rounded-full transition-all duration-500"
                style={{ width: step >= s ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>

          {/* Step 1: Property Type */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-black text-spec-white mb-2">За какъв имот е огледът?</h2>
              <p className="text-spec-white/40 text-sm font-medium mb-6">Изберете най-близкия вариант.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelected({ ...selected, propertyType: type.id })}
                    className={`p-5 rounded-xl border text-left transition-all ${
                      selected.propertyType === type.id
                        ? 'border-amber bg-amber/10 text-spec-white' :'border-spec-white/10 bg-graphite/20 text-spec-white/60 hover:border-spec-white/25 hover:text-spec-white/80'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center text-amber font-mono-spec text-sm font-black mb-3">
                      {type.code}
                    </div>
                    <div className="text-sm font-bold">{type.label}</div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => selected.propertyType && setStep(2)}
                disabled={!selected.propertyType}
                className="cta-amber w-full py-4 rounded-full font-black uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                Продължи
              </button>
            </div>
          )}

          {/* Step 2: Roof size + need */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-black text-spec-white mb-2">Размер и нужда?</h2>
              <p className="text-spec-white/40 text-sm font-medium mb-6">Приблизително е достатъчно. Огледът ще потвърди точния обхват.</p>

              <div className="mb-8">
                <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-3">Размер на покрива</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {roofSizeRanges.map((range) => (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => setSelected({ ...selected, roofSizeRange: range.id })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selected.roofSizeRange === range.id
                          ? 'border-amber bg-amber/10 text-spec-white' :'border-spec-white/10 bg-graphite/20 text-spec-white/60 hover:border-spec-white/25'
                      }`}
                    >
                      <span className="text-sm font-bold">{range.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-3">Какво трябва да се направи?</div>
                <div className="space-y-3">
                  {roofNeeds.map((need) => (
                    <button
                      key={need.id}
                      type="button"
                      onClick={() => setSelected({ ...selected, roofNeed: need.id })}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-4 ${
                        selected.roofNeed === need.id
                          ? 'border-amber bg-amber/10' :'border-spec-white/10 bg-graphite/20 hover:border-spec-white/25'
                      }`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${
                        need.urgency === 'high' ? 'bg-red-500' :
                        need.urgency === 'medium' ? 'bg-amber' : 'bg-spec-white/30'
                      }`} />
                      <div>
                        <div className={`text-sm font-bold mb-0.5 ${selected.roofNeed === need.id ? 'text-spec-white' : 'text-spec-white/70'}`}>
                          {need.label}
                        </div>
                        <div className="text-xs text-spec-white/40 font-medium">{need.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-full border border-spec-white/15 text-spec-white/60 hover:text-spec-white hover:border-spec-white/30 transition-all text-sm font-bold"
                >
                  Назад
                </button>
                <button
                  type="button"
                  onClick={() => selected.roofSizeRange && selected.roofNeed && setStep(3)}
                  disabled={!selected.roofSizeRange || !selected.roofNeed}
                  className="cta-amber flex-1 py-4 rounded-full font-black uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  Продължи
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact info */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-black text-spec-white mb-2">Къде да се свържем?</h2>
              <p className="text-spec-white/40 text-sm font-medium mb-6">Телефонът е най-важен, за да уточним безплатния оглед.</p>

              <div className="space-y-4 mb-8">
                {[
                  { key: 'name', label: 'Вашето име', placeholder: 'Иван Иванов', type: 'text' },
                  { key: 'location', label: 'Населено място / адрес', placeholder: 'София, Пловдив, Варна...', type: 'text' },
                  { key: 'phone', label: 'Телефон', placeholder: '0892 392 879', type: 'tel' },
                  { key: 'email', label: 'Имейл (по желание)', placeholder: 'email@example.com', type: 'email' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={selected[field.key as keyof typeof selected]}
                      onChange={(e) => setSelected({ ...selected, [field.key]: e.target.value })}
                      className="w-full bg-graphite/25 border border-spec-white/10 rounded-xl px-5 py-4 text-spec-white placeholder:text-spec-white/20 focus:outline-none focus:border-amber/50 transition-colors text-sm font-medium"
                    />
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bento-card rounded-xl p-5 mb-6">
                <div className="font-mono-spec text-xs text-spec-white/30 uppercase tracking-widest mb-3">Обобщение</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-spec-white/40">Имот</span>
                    <span className="text-spec-white font-medium text-right">{propertyTypes.find(r => r.id === selected.propertyType)?.label}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-spec-white/40">Размер</span>
                    <span className="text-spec-white font-medium text-right">{roofSizeRanges.find(r => r.id === selected.roofSizeRange)?.label}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-spec-white/40">Нужда</span>
                    <span className="text-spec-white font-medium text-right">{roofNeeds.find(c => c.id === selected.roofNeed)?.label}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-full border border-spec-white/15 text-spec-white/60 hover:text-spec-white hover:border-spec-white/30 transition-all text-sm font-bold"
                >
                  Назад
                </button>
                <button
                  type="submit"
                  disabled={!selected.name || !selected.phone}
                  className="cta-amber flex-1 py-4 rounded-full font-black uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  Изпрати запитване
                </button>
              </div>

              <p className="text-xs text-spec-white/25 text-center mt-5 font-medium">
                За директен контакт: 0892 392 879. Безплатен оглед, договор и гаранция.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
