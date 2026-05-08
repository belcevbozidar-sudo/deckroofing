import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Влади Билд 24 ЕООД — Ремонт на покриви в цялата страна',
  description: 'Влади Билд 24 ЕООД извършва ремонт на покриви, пренареждане на керемиди, хидроизолация, улуци, обшивки и нови покриви с договор и гаранция.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body>{children}
</body>
    </html>
  );
}
