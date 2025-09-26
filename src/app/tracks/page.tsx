import { Suspense } from 'react';
import { Header } from '@/components/racing/Header';
import { TrackMap } from '@/components/racing/TrackMap';
import { RacingCalendar } from '@/components/racing/RacingCalendar';
import { TrackList } from '@/components/racing/TrackList';
import { Footer } from '@/components/racing/Footer';

export const dynamic = 'force-dynamic';

export default function TracksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-racing-navy text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-4 text-racing-gold">
                TRACK & SCHEDULE EXPLORER
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Discover racing venues across the country, view upcoming schedules, and explore track details with our interactive map.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Interactive Map */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat text-3xl font-bold text-racing-navy mb-6">
                  INTERACTIVE TRACK MAP
                </h2>
                <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                  <TrackMap />
                </Suspense>
              </div>

              <div>
                <h2 className="font-montserrat text-3xl font-bold text-racing-navy mb-6">
                  TRACK DIRECTORY
                </h2>
                <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
                  <TrackList />
                </Suspense>
              </div>
            </div>

            {/* Right Column - Racing Calendar */}
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-racing-navy mb-6">
                RACING CALENDAR
              </h2>
              <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                <RacingCalendar />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}