'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep-dark/90 backdrop-blur-md border-b border-white/5 py-3' :'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3 group">
          <AppLogo
            src=""
            size={36}
            iconName="HomeModernIcon"
            text="Влади Билд 24"
            className="text-spec-white"
          />
        </Link>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Гаранция', href: '#guarantee' },
            { label: 'Услуги', href: '#materials' },
            { label: 'Процес', href: '#process' },
            { label: 'Обекти', href: '#projects' },
          ]?.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="text-sm font-medium text-spec-white/60 hover:text-spec-white transition-colors tracking-wide"
            >
              {item?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="tel:+359892392879"
          className="cta-amber px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap"
        >
          Обади се
        </Link>
      </div>
    </header>
  );
}
