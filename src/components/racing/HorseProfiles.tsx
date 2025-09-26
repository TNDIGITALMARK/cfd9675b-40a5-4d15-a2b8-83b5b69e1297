'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Horse {
  id: string;
  name: string;
  postPosition: number;
  jockey: string;
  trainer: string;
  owner: string;
  age: number;
  sex: 'C' | 'F' | 'G' | 'H';
  weight: number;
  odds: string;
  recentForm: string[];
  earnings: string;
  recordWins: number;
  recordPlaces: number;
  recordShows: number;
  recordStarts: number;
  silkColors: string[];
  breeding: {
    sire: string;
    dam: string;
  };
}

const mockHorses: Horse[] = [
  {
    id: '1',
    name: 'Thunder Bolt',
    postPosition: 1,
    jockey: 'M. Rodriguez',
    trainer: 'J. Patterson',
    owner: 'Golden Gate Stables',
    age: 4,
    sex: 'C',
    weight: 126,
    odds: '3-1',
    recentForm: ['1st', '3rd', '1st', '2nd', '1st'],
    earnings: '$1,250,000',
    recordWins: 8,
    recordPlaces: 3,
    recordShows: 2,
    recordStarts: 15,
    silkColors: ['#DC2626', '#FFFFFF'],
    breeding: {
      sire: 'Storm King',
      dam: 'Lightning Belle'
    }
  },
  {
    id: '2',
    name: 'Lightning Strike',
    postPosition: 2,
    jockey: 'J. Smith',
    trainer: 'A. Williams',
    owner: 'Meadowbrook Farm',
    age: 3,
    sex: 'C',
    weight: 123,
    odds: '5-2',
    recentForm: ['2nd', '1st', '4th', '1st', '3rd'],
    earnings: '$890,000',
    recordWins: 6,
    recordPlaces: 4,
    recordShows: 1,
    recordStarts: 12,
    silkColors: ['#2563EB', '#FCD34D'],
    breeding: {
      sire: 'Quick Silver',
      dam: 'Storm Dancer'
    }
  },
  {
    id: '3',
    name: 'Storm Chaser',
    postPosition: 3,
    jockey: 'A. Johnson',
    trainer: 'M. Davis',
    owner: 'Sunset Racing LLC',
    age: 4,
    sex: 'G',
    weight: 124,
    odds: '7-2',
    recentForm: ['3rd', '2nd', '1st', '5th', '2nd'],
    earnings: '$675,000',
    recordWins: 5,
    recordPlaces: 6,
    recordShows: 3,
    recordStarts: 18,
    silkColors: ['#059669', '#FFFFFF'],
    breeding: {
      sire: 'Wind Walker',
      dam: 'Rain Goddess'
    }
  }
];

interface HorseProfilesProps {
  raceId: string;
}

export function HorseProfiles({ raceId }: HorseProfilesProps) {
  const [selectedHorse, setSelectedHorse] = useState<string>(mockHorses[0].id);

  const selectedHorseData = mockHorses.find(h => h.id === selectedHorse) || mockHorses[0];

  return (
    <div className="space-y-6">
      <h2 className="font-montserrat text-3xl font-bold text-racing-navy">
        HORSE PROFILES & ANALYSIS
      </h2>

      <Tabs value={selectedHorse} onValueChange={setSelectedHorse} className="w-full">
        {/* Horse Selection Tabs */}
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
          {mockHorses.map((horse) => (
            <TabsTrigger
              key={horse.id}
              value={horse.id}
              className="text-xs font-semibold data-[state=active]:bg-racing-gold data-[state=active]:text-racing-navy"
            >
              #{horse.postPosition} {horse.name.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Horse Details */}
        {mockHorses.map((horse) => (
          <TabsContent key={horse.id} value={horse.id} className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Profile Card */}
              <Card className="lg:col-span-2 border-racing-gold/20">
                <CardHeader className="bg-gradient-to-r from-racing-navy to-racing-green text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-montserrat text-2xl mb-2">
                        #{horse.postPosition} {horse.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{horse.age}yo {horse.sex}</span>
                        <span>•</span>
                        <span>{horse.weight} lbs</span>
                        <span>•</span>
                        <Badge className="bg-racing-gold text-racing-navy font-bold">
                          {horse.odds}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {horse.silkColors.map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-montserrat font-semibold text-racing-navy mb-3">Connections</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jockey:</span>
                          <span className="font-semibold">{horse.jockey}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Trainer:</span>
                          <span className="font-semibold">{horse.trainer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Owner:</span>
                          <span className="font-semibold text-xs">{horse.owner}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-montserrat font-semibold text-racing-navy mb-3">Record</h4>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Starts:</span>
                          <span className="font-semibold">{horse.recordStarts}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Win-Place-Show:</span>
                          <span className="font-semibold text-racing-green">
                            {horse.recordWins}-{horse.recordPlaces}-{horse.recordShows}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Earnings:</span>
                          <span className="font-semibold text-racing-gold">{horse.earnings}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Form */}
                  <div>
                    <h4 className="font-montserrat font-semibold text-racing-navy mb-3">Recent Form</h4>
                    <div className="flex gap-2">
                      {horse.recentForm.map((result, index) => (
                        <div
                          key={index}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            result === '1st'
                              ? 'bg-racing-gold text-racing-navy'
                              : result === '2nd'
                              ? 'bg-racing-green text-white'
                              : result === '3rd'
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-400 text-white'
                          }`}
                        >
                          {result === '1st' ? '1' : result === '2nd' ? '2' : result === '3rd' ? '3' : result.slice(0, 1)}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats & Betting */}
              <div className="space-y-4">
                <Card className="border-racing-green/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-montserrat text-lg text-racing-navy">
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-racing-gold/10 rounded-lg">
                      <p className="text-2xl font-bold text-racing-gold">{horse.odds}</p>
                      <p className="text-sm text-racing-navy font-semibold">Morning Line Odds</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <p className="font-bold text-racing-navy">{Math.round((horse.recordWins / horse.recordStarts) * 100)}%</p>
                        <p className="text-muted-foreground">Win Rate</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <p className="font-bold text-racing-navy">{Math.round(((horse.recordWins + horse.recordPlaces) / horse.recordStarts) * 100)}%</p>
                        <p className="text-muted-foreground">Place Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-racing-navy/20">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-montserrat text-lg text-racing-navy">
                      Breeding
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sire:</span>
                      <span className="font-semibold">{horse.breeding.sire}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dam:</span>
                      <span className="font-semibold">{horse.breeding.dam}</span>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full bg-racing-green hover:bg-racing-green/90 text-white">
                  View Full Past Performances
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}