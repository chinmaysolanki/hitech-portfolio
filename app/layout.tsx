import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/lib/data';
import CyberBackground from '@/components/CyberBackground';

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="cyber-vignette" aria-hidden="true" />
        <div className="cyber-grid" aria-hidden="true" />
        <CyberBackground />
        {children}
        <div className="scanlines" aria-hidden="true" />
      </body>
    </html>
  );
}
