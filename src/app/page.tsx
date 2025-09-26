import { Suspense } from 'react';
import { Header } from '@/components/racing/Header';
import { HeroSection } from '@/components/racing/HeroSection';
import { UpcomingEvents } from '@/components/racing/UpcomingEvents';
import { LiveRaceTracker } from '@/components/racing/LiveRaceTracker';
import { LatestNews } from '@/components/racing/LatestNews';
import { Footer } from '@/components/racing/Footer';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Upcoming Events */}
            <div className="lg:col-span-1">
              <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                <UpcomingEvents />
              </Suspense>
            </div>

            {/* Middle Column - Live Race Tracker */}
            <div className="lg:col-span-1">
              <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                <LiveRaceTracker />
              </Suspense>
            </div>

            {/* Right Column - Latest News */}
            <div className="lg:col-span-1">
              <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                <LatestNews />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}