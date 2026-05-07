import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialBadge from '@/components/TestimonialBadge';
import { Jost } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-jost',
});



export const metadata = {
  title: 'Gregorio World | Professional Coaching & Transformation',
  description: 'Join Gregorio on a journey of self-discovery and transformation through professional programs and coaching.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jost.variable} antialiased`}>
        <Header />
        <TestimonialBadge />
        {children}
        <Footer />
      </body>
    </html>
  );
}
