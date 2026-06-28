import type {Metadata} from 'next';
import { Fredoka, Lilita_One } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['300', '400', '500', '600', '700'],
});

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  variable: '--font-lilita-one',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Drink Spot | New Jersey\'s First Dirty Soda Shop',
  description: 'Handcrafted dirty sodas, creative flavor combinations, and refreshing specialty drinks in Belford, New Jersey.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${lilitaOne.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
