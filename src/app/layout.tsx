import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/Toaster';
import '@/styles/globals.css';

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 pt-12 antialiased">
        <Navbar />

        <div className="container mx-auto h-full max-w-7xl pt-12">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
