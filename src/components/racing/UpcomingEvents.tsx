'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface RaceEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  track: string;
  raceNumber: number;
  distance: string;
  surface: string;
  purse: string;
  featured: boolean;
}

const upcomingRaces: RaceEvent[] = [
  {
    id: '1',
    title: 'Kentucky Derby Classic',
    date: 'Oct 26, 2024',
    time: '3:45 PM',
    track: 'Churchill Downs',
    raceNumber: 7,
    distance: '1 1/4 miles',
    surface: 'Dirt',
    purse: '$3,000,000',
    featured: true
  },
  {
    id: '2',
    title: 'Preakness Stakes',
    date: 'Oct 26, 2024',
    time: '5:20 PM',
    track: 'Pimlico',
    raceNumber: 11,
    distance: '1 3/16 miles',
    surface: 'Dirt',
    purse: '$1,650,000',
    featured: true
  },
  {
    id: '3',
    title: 'Kentucky Juvenile',
    date: 'Oct 28, 2024',
    time: '2:15 PM',
    track: 'Keeneland',
    raceNumber: 8,
    distance: '1 1/16 miles',
    surface: 'Turf',
    purse: '$500,000',
    featured: false
  },
  {
    id: '4',
    title: 'Breeders Stakes',
    date: 'Oct 29, 2024',
    time: '4:30 PM',
    track: 'Santa Anita',
    raceNumber: 9,
    distance: '1 1/8 miles',
    surface: 'Dirt',
    purse: '$750,000',
    featured: false
  }
];

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      <h2 className="font-montserrat text-2xl font-bold text-racing-navy mb-6">
        UPCOMING EVENTS
      </h2>

      <div className="space-y-4">
        {upcomingRaces.map((race) => (
          <Card
            key={race.id}
            className={`transition-all duration-200 hover:shadow-lg cursor-pointer ${
              race.featured ? 'border-racing-gold shadow-md bg-gradient-to-br from-racing-gold/5 to-transparent' : 'hover:border-racing-gold/50'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {race.featured && (
                      <Badge className="bg-racing-gold text-racing-navy text-xs font-semibold">
                        FEATURED
                      </Badge>
                    )}
                    <span className="text-racing-green font-semibold text-sm">
                      Race {race.raceNumber}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-montserrat text-racing-navy leading-tight">
                    {race.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold text-racing-navy">{race.date}</p>
                    <p className="text-muted-foreground">{race.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-racing-navy">{race.track}</p>
                    <p className="text-muted-foreground">{race.distance} • {race.surface}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="text-sm">
                    <span className="text-racing-green font-semibold">Purse: </span>
                    <span className="font-bold text-racing-navy">{race.purse}</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-racing-green hover:bg-racing-green/90 text-white text-xs"
                  >
                    VIEW ODDS
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full mt-4 bg-racing-navy hover:bg-racing-dark-navy text-white">
        View All Events
      </Button>
    </div>
  );
}