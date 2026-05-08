'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router?.push('/home');
    };

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history?.back();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-charcoal p-4">
            <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <h1 className="text-9xl font-bold text-amber opacity-20">404</h1>
                    </div>
                </div>

                <h2 className="text-2xl font-medium text-spec-white mb-2">Страницата не е намерена</h2>
                <p className="text-spec-white/70 mb-8">
                    Този адрес не съществува. Можем да ви върнем към сайта на Влади Билд 24.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center justify-center gap-2 bg-amber text-deep-dark px-6 py-3 rounded-lg font-medium hover:bg-amber-light transition-colors duration-200"
                    >
                        <Icon name="ArrowLeftIcon" size={16} />
                        Назад
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="inline-flex items-center justify-center gap-2 border border-spec-white/15 bg-graphite/20 text-spec-white px-6 py-3 rounded-lg font-medium hover:border-amber/50 transition-colors duration-200"
                    >
                        <Icon name="HomeIcon" size={16} />
                        Към началото
                    </button>
                </div>
            </div>
        </div>
    );
}
