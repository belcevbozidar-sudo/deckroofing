import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 px-6 md:px-10 bg-deep-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/home">
          <AppLogo
            src=""
            size={32}
            iconName="HomeModernIcon"
            text="Влади Билд 24"
            className="text-spec-white/70"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-spec-white/50">
          <a href="#guarantee" className="hover:text-spec-white transition-colors">Гаранция</a>
          <a href="#materials" className="hover:text-spec-white transition-colors">Услуги</a>
          <a href="#process" className="hover:text-spec-white transition-colors">Процес</a>
          <Link href="/assessment" className="hover:text-amber transition-colors">Безплатен оглед</Link>
        </div>

        {/* Legal */}
        <div className="flex items-center gap-5 text-xs text-spec-white/30 font-medium">
          <span>© 2026 Влади Билд 24 ЕООД</span>
          <span className="w-px h-3 bg-white/20" />
          <a href="tel:+359892392879" className="hover:text-spec-white/60 transition-colors">0892 392 879</a>
          <span>Цялата страна</span>
        </div>
      </div>
    </footer>
  );
}
