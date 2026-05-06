import HomeHero from '@/components/HomeHero';
import ClientsSection from '@/components/ClientsSection';
import FeatureCards from '@/components/FeatureCards';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import VideoCarousel from '@/components/VideoCarousel';
import FoundersSection from '@/components/FoundersSection';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HomeHero />
      <ClientsSection />
      <FeatureCards />
      <TestimonialsCarousel />
      <VideoCarousel />
      <FoundersSection />
    </main>
  );
}
