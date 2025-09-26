'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';

interface RaceDetailsHeaderProps {
  raceId: string;
}

// Mock race data - in real app, this would fetch from API
const getRaceDetails = (id: string) => ({
  id,
  title: 'Kentucky Derby Classic',
  track: 'Churchill Downs',
  date: '2024-10-26',
  postTime: '15:45',
  raceNumber: 7,
  distance: '1 1/4 miles',
  surface: 'Dirt',
  purse: '$3,000,000',
  grade: 'Grade I',
  ageRestriction: '3yo',
  conditions: 'Fast',
  weather: 'Clear, 72°F',
  fieldSize: 12
});

export function RaceDetailsHeader({ raceId }: RaceDetailsHeaderProps) {
  const race = getRaceDetails(raceId);

  // Create post time as Date object
  const postTimeDate = new Date();
  postTimeDate.setHours(15, 45, 0, 0); // 3:45 PM
  if (postTimeDate < new Date()) {
    postTimeDate.setDate(postTimeDate.getDate() + 1); // Tomorrow if time has passed
  }

  return (
    <div className="bg-racing-navy text-white">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.8), rgba(26, 35, 50, 0.9)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Race Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-racing-gold text-racing-navy font-semibold">
                  RACE {race.raceNumber}
                </Badge>
                <Badge className="bg-racing-green text-white">
                  {race.grade}
                </Badge>
                <Badge className="bg-white/20 text-white">
                  {race.ageRestriction}
                </Badge>
              </div>

              <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-4 text-racing-gold">
                {race.title}
              </h1>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-300">Track</p>
                  <p className="font-semibold text-lg">{race.track}</p>
                </div>
                <div>
                  <p className="text-gray-300">Distance</p>
                  <p className="font-semibold text-lg">{race.distance}</p>
                </div>
                <div>
                  <p className="text-gray-300">Surface</p>
                  <p className="font-semibold text-lg">{race.surface}</p>
                </div>
                <div>
                  <p className="text-gray-300">Purse</p>
                  <p className="font-semibold text-lg text-racing-gold">{race.purse}</p>
                </div>
              </div>
            </div>

            {/* Post Time & Countdown */}
            <Card className="bg-black/40 backdrop-blur-sm border-racing-gold/30 p-6 min-w-[300px]">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-racing-gold font-montserrat font-semibold text-lg mb-2">
                    POST TIME
                  </p>
                  <p className="text-2xl font-bold">
                    {race.date} • {race.postTime}
                  </p>
                </div>

                <CountdownTimer targetTime={postTimeDate} />

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-racing-gold/30 text-sm">
                  <div className="text-center">
                    <p className="text-gray-300">Field Size</p>
                    <p className="font-semibold">{race.fieldSize} horses</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300">Weather</p>
                    <p className="font-semibold">{race.weather}</p>
                  </div>
                </div>

                <Button className="w-full bg-racing-gold text-racing-navy hover:bg-racing-light-gold font-semibold">
                  PLACE BET
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}