'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Track {
  id: string;
  name: string;
  location: string;
  state: string;
  coordinates: { x: number; y: number };
  surface: string[];
  established: string;
  status: 'active' | 'seasonal' | 'closed';
  upcomingRaces: number;
}

const tracks: Track[] = [
  {
    id: '1',
    name: 'Churchill Downs',
    location: 'Louisville, KY',
    state: 'KY',
    coordinates: { x: 65, y: 58 },
    surface: ['Dirt', 'Turf'],
    established: '1875',
    status: 'active',
    upcomingRaces: 12
  },
  {
    id: '2',
    name: 'Belmont Park',
    location: 'Elmont, NY',
    state: 'NY',
    coordinates: { x: 85, y: 35 },
    surface: ['Dirt', 'Turf'],
    established: '1905',
    status: 'active',
    upcomingRaces: 8
  },
  {
    id: '3',
    name: 'Santa Anita',
    location: 'Arcadia, CA',
    state: 'CA',
    coordinates: { x: 15, y: 55 },
    surface: ['Dirt', 'Turf'],
    established: '1934',
    status: 'active',
    upcomingRaces: 15
  },
  {
    id: '4',
    name: 'Pimlico',
    location: 'Baltimore, MD',
    state: 'MD',
    coordinates: { x: 80, y: 42 },
    surface: ['Dirt'],
    established: '1870',
    status: 'seasonal',
    upcomingRaces: 6
  },
  {
    id: '5',
    name: 'Keeneland',
    location: 'Lexington, KY',
    state: 'KY',
    coordinates: { x: 67, y: 55 },
    surface: ['Dirt', 'Turf'],
    established: '1936',
    status: 'seasonal',
    upcomingRaces: 9
  },
  {
    id: '6',
    name: 'Del Mar',
    location: 'Del Mar, CA',
    state: 'CA',
    coordinates: { x: 12, y: 58 },
    surface: ['Dirt', 'Turf'],
    established: '1937',
    status: 'seasonal',
    upcomingRaces: 11
  }
];

export function TrackMap() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [hoveredTrack, setHoveredTrack] = useState<Track | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-racing-green';
      case 'seasonal': return 'text-racing-gold';
      case 'closed': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'bg-racing-green text-white';
      case 'seasonal': return 'bg-racing-gold text-racing-navy';
      case 'closed': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="border-racing-gold/20">
        <CardContent className="p-6">
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-racing-navy/10 overflow-hidden">
            {/* Simplified US Map Background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Very simplified US outline */}
                <path
                  d="M10,35 L15,25 L25,20 L35,15 L50,12 L70,15 L85,20 L90,25 L88,35 L85,45 L75,50 L60,52 L45,50 L30,48 L15,45 Z"
                  fill="hsl(var(--racing-navy))"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Track Markers */}
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
                  selectedTrack?.id === track.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                }`}
                style={{
                  left: `${track.coordinates.x}%`,
                  top: `${track.coordinates.y}%`
                }}
                onClick={() => setSelectedTrack(track)}
                onMouseEnter={() => setHoveredTrack(track)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    track.status === 'active'
                      ? 'bg-racing-green'
                      : track.status === 'seasonal'
                      ? 'bg-racing-gold'
                      : 'bg-red-500'
                  } ${
                    selectedTrack?.id === track.id ? 'ring-4 ring-racing-gold ring-opacity-50' : ''
                  }`}
                />

                {/* Track name tooltip */}
                {(hoveredTrack?.id === track.id || selectedTrack?.id === track.id) && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-racing-navy text-white text-xs rounded whitespace-nowrap">
                    {track.name}
                  </div>
                )}
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h4 className="font-montserrat font-semibold text-racing-navy text-sm mb-2">Track Status</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-racing-green rounded-full"></div>
                  <span>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-racing-gold rounded-full"></div>
                  <span>Seasonal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Track Details */}
      {selectedTrack && (
        <Card className="border-racing-gold shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-montserrat text-2xl font-bold text-racing-navy">
                  {selectedTrack.name}
                </h3>
                <p className="text-racing-green font-semibold">{selectedTrack.location}</p>
              </div>
              <Badge className={getStatusBadge(selectedTrack.status)}>
                {selectedTrack.status.toUpperCase()}
              </Badge>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Established</p>
                <p className="font-semibold text-racing-navy">{selectedTrack.established}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Surfaces</p>
                <p className="font-semibold text-racing-navy">{selectedTrack.surface.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Races</p>
                <p className="font-semibold text-racing-gold">{selectedTrack.upcomingRaces}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">State</p>
                <p className="font-semibold text-racing-navy">{selectedTrack.state}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-racing-green hover:bg-racing-green/90 text-white">
                View Schedule
              </Button>
              <Button variant="outline" className="border-racing-navy text-racing-navy hover:bg-racing-navy hover:text-white">
                Track Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!selectedTrack && (
        <Card className="border-racing-navy/20">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              Click on a track marker above to view detailed information
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}