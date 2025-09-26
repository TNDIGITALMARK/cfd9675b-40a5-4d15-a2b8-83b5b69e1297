import { Suspense } from 'react';
import { Header } from '@/components/racing/Header';
import { RaceDetailsHeader } from '@/components/racing/RaceDetailsHeader';
import { HorseProfiles } from '@/components/racing/HorseProfiles';
import { ExpertPredictions } from '@/components/racing/ExpertPredictions';
import { RaceAnalytics } from '@/components/racing/RaceAnalytics';
import { TrackConditions } from '@/components/racing/TrackConditions';
import { Footer } from '@/components/racing/Footer';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    id: string;
  };
}

export default function RaceDetailsPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Suspense fallback={<div className="animate-pulse bg-muted h-32" />}>
          <RaceDetailsHeader raceId={params.id} />
        </Suspense>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Horse Profiles & Analysis */}
            <div className="lg:col-span-2 space-y-8">
              <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
                <HorseProfiles raceId={params.id} />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
                <RaceAnalytics raceId={params.id} />
              </Suspense>
            </div>

            {/* Sidebar - Predictions & Conditions */}
            <div className="lg:col-span-1 space-y-6">
              <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
                <ExpertPredictions raceId={params.id} />
              </Suspense>

              <Suspense fallback={<div className="animate-pulse bg-muted h-48 rounded-lg" />}>
                <TrackConditions raceId={params.id} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}