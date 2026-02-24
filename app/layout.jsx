import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: 'MachiningTalent | Precision Machining Recruiting',
  description: 'A recruiting platform connecting CNC shops with proven machinists, programmers, and manufacturing leaders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-grain font-[var(--font-manrope)] text-slate-100">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
