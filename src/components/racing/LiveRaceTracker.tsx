'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface RacePosition {
  horse: string;
  jockey: string;
  position: number;
  odds: string;
  color: string;
}

const mockRaceData: RacePosition[] = [
  { horse: 'Thunder Bolt', jockey: 'M. Rodriguez', position: 1, odds: '3-1', color: '#DC2626' },
  { horse: 'Lightning Strike', jockey: 'J. Smith', position: 2, odds: '5-2', color: '#2563EB' },
  { horse: 'Storm Chaser', jockey: 'A. Johnson', position: 3, odds: '7-2', color: '#059669' },
  { horse: 'Wind Runner', jockey: 'L. Brown', position: 4, odds: '4-1', color: '#7C2D12' },
  { horse: 'Fire Dancer', jockey: 'K. Wilson', position: 5, odds: '6-1', color: '#7C3AED' },
];

export function LiveRaceTracker() {
  const [isLive, setIsLive] = useState(true);
  const [raceProgress, setRaceProgress] = useState(65); // Progress percentage

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setRaceProgress((prev) => {
          if (prev >= 100) {
            setIsLive(false);
            return 100;
          }
          return prev + Math.random() * 2;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-montserrat text-xl text-racing-navy">
            LIVE RACE TRACKER
          </CardTitle>
          <Badge
            className={`${isLive ? 'bg-red-500' : 'bg-racing-green'} text-white animate-pulse`}
          >
            {isLive ? 'LIVE' : 'FINISHED'}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Churchill Downs • Race 5 • 1 1/8 miles</p>
          <p>Post Time: 3:15 PM EST</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Track Visualization */}
        <div className="relative">
          <div className="bg-racing-green/10 rounded-full h-32 w-full border-2 border-racing-green/30 relative overflow-hidden">
            {/* Track */}
            <div className="absolute inset-2 border-2 border-racing-green/50 rounded-full">
              <div className="absolute inset-2 border border-racing-green/30 rounded-full">
                {/* Finish Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-racing-gold z-10"></div>

                {/* Horse positions */}
                {mockRaceData.slice(0, 5).map((horse, index) => {
                  const angle = (raceProgress + (index * 5)) % 360;
                  const radius = 45 - (index * 3);
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      key={horse.horse}
                      className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                      style={{
                        backgroundColor: horse.color,
                        left: `${x}%`,
                        top: `${y}%`
                      }}
                      title={`${horse.horse} (${horse.position})`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="bg-racing-navy/20 rounded-full h-2">
                <div
                  className="bg-racing-gold h-2 rounded-full transition-all duration-500"
                  style={{ width: `${raceProgress}%` }}
                />
              </div>
              <p className="text-xs text-center mt-1 text-racing-navy font-medium">
                {Math.round(raceProgress)}% Complete
              </p>
            </div>
          </div>
        </div>

        {/* Current Standings */}
        <div className="space-y-2">
          <h4 className="font-semibold text-racing-navy font-montserrat">Current Positions</h4>
          {mockRaceData.map((horse, index) => (
            <div key={horse.horse} className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-racing-navy w-6">{horse.position}</span>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: horse.color }}
                />
                <div>
                  <p className="font-semibold text-sm text-racing-navy">{horse.horse}</p>
                  <p className="text-xs text-muted-foreground">{horse.jockey}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-racing-green">{horse.odds}</p>
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full bg-racing-navy hover:bg-racing-dark-navy text-white">
          View Full Race Details
        </Button>
      </CardContent>
    </Card>
  );
}