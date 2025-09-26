'use client';

import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';

export function HeroSection() {
  // Next featured race time (example: 2 hours from now)
  const nextRaceTime = new Date();
  nextRaceTime.setHours(nextRaceTime.getHours() + 2);

  return (
    <section className="relative h-[600px] overflow-hidden bg-racing-navy">
      {/* Background Racing Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-racing-navy via-racing-navy/80 to-transparent z-10" />
        {/* Using a placeholder racing image - this would be replaced with actual racing photography */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold leading-tight mb-6">
            THE THRILL OF
            <br />
            <span className="text-racing-gold">THE RACE, LIVE.</span>
          </h1>

          <p className="text-xl mb-8 text-gray-200">
            Experience the excitement of horse racing with live results, expert analysis, and comprehensive race coverage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-racing-gold text-racing-navy hover:bg-racing-light-gold font-semibold px-8"
            >
              EXPLORE RACES
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-racing-navy"
            >
              VIEW LIVE RESULTS
            </Button>
          </div>

          {/* Next Race Countdown */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-racing-gold/30">
            <h3 className="text-racing-gold font-montserrat font-semibold text-lg mb-3">
              NEXT FEATURED RACE
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <p className="text-sm text-gray-300">Kentucky Derby Classic</p>
                <p className="font-semibold">Churchill Downs • Race 7</p>
              </div>
              <CountdownTimer targetTime={nextRaceTime} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
}