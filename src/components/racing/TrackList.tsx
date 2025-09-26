'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Track {
  id: string;
  name: string;
  location: string;
  state: string;
  surface: string[];
  established: string;
  status: 'active' | 'seasonal' | 'closed';
  upcomingRaces: number;
  totalRaces: number;
  website?: string;
}

const tracks: Track[] = [
  {
    id: '1',
    name: 'Churchill Downs',
    location: 'Louisville, KY',
    state: 'KY',
    surface: ['Dirt', 'Turf'],
    established: '1875',
    status: 'active',
    upcomingRaces: 12,
    totalRaces: 45,
    website: 'churchilldowns.com'
  },
  {
    id: '2',
    name: 'Belmont Park',
    location: 'Elmont, NY',
    state: 'NY',
    surface: ['Dirt', 'Turf'],
    established: '1905',
    status: 'active',
    upcomingRaces: 8,
    totalRaces: 38,
    website: 'belmont.com'
  },
  {
    id: '3',
    name: 'Santa Anita Park',
    location: 'Arcadia, CA',
    state: 'CA',
    surface: ['Dirt', 'Turf'],
    established: '1934',
    status: 'active',
    upcomingRaces: 15,
    totalRaces: 52,
    website: 'santaanita.com'
  },
  {
    id: '4',
    name: 'Pimlico Race Course',
    location: 'Baltimore, MD',
    state: 'MD',
    surface: ['Dirt'],
    established: '1870',
    status: 'seasonal',
    upcomingRaces: 6,
    totalRaces: 22,
    website: 'pimlico.com'
  },
  {
    id: '5',
    name: 'Keeneland',
    location: 'Lexington, KY',
    state: 'KY',
    surface: ['Dirt', 'Turf'],
    established: '1936',
    status: 'seasonal',
    upcomingRaces: 9,
    totalRaces: 28,
    website: 'keeneland.com'
  },
  {
    id: '6',
    name: 'Del Mar Thoroughbred Club',
    location: 'Del Mar, CA',
    state: 'CA',
    surface: ['Dirt', 'Turf'],
    established: '1937',
    status: 'seasonal',
    upcomingRaces: 11,
    totalRaces: 33,
    website: 'delmar.com'
  },
  {
    id: '7',
    name: 'Saratoga Race Course',
    location: 'Saratoga Springs, NY',
    state: 'NY',
    surface: ['Dirt', 'Turf'],
    established: '1863',
    status: 'seasonal',
    upcomingRaces: 0,
    totalRaces: 40,
    website: 'saratoga.com'
  },
  {
    id: '8',
    name: 'Gulfstream Park',
    location: 'Hallandale Beach, FL',
    state: 'FL',
    surface: ['Dirt', 'Turf'],
    established: '1939',
    status: 'active',
    upcomingRaces: 18,
    totalRaces: 56,
    website: 'gulfstream.com'
  }
];

export function TrackList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [stateFilter, setStateFilter] = useState('all');

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || track.status === statusFilter;
    const matchesState = stateFilter === 'all' || track.state === stateFilter;

    return matchesSearch && matchesStatus && matchesState;
  });

  const uniqueStates = [...new Set(tracks.map(track => track.state))].sort();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-racing-green text-white';
      case 'seasonal': return 'bg-racing-gold text-racing-navy';
      case 'closed': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="border-racing-gold/20">
        <CardHeader className="pb-4">
          <CardTitle className="font-montserrat text-lg text-racing-navy">
            Filter Tracks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Search tracks by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="seasonal">Seasonal</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {uniqueStates.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Track Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredTracks.length} of {tracks.length} tracks
        </p>
        <div className="flex gap-2">
          <Badge className="bg-racing-green text-white">
            {tracks.filter(t => t.status === 'active').length} Active
          </Badge>
          <Badge className="bg-racing-gold text-racing-navy">
            {tracks.filter(t => t.status === 'seasonal').length} Seasonal
          </Badge>
        </div>
      </div>

      {/* Track Cards */}
      <div className="space-y-4">
        {filteredTracks.map((track) => (
          <Card key={track.id} className="border-racing-navy/10 hover:border-racing-gold/50 transition-all duration-200 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-montserrat text-xl font-bold text-racing-navy">
                      {track.name}
                    </h3>
                    <Badge className={getStatusColor(track.status)}>
                      {track.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-racing-green font-semibold">{track.location}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-racing-gold">{track.upcomingRaces}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Races</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Established</p>
                  <p className="font-semibold text-racing-navy">{track.established}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Surfaces</p>
                  <p className="font-semibold text-racing-navy">{track.surface.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">State</p>
                  <p className="font-semibold text-racing-navy">{track.state}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Races</p>
                  <p className="font-semibold text-racing-navy">{track.totalRaces}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-racing-green hover:bg-racing-green/90 text-white">
                  View Schedule
                </Button>
                <Button variant="outline" className="border-racing-navy text-racing-navy hover:bg-racing-navy hover:text-white">
                  Track Info
                </Button>
                {track.website && (
                  <Button variant="ghost" className="text-racing-gold hover:text-racing-navy hover:bg-racing-gold/10">
                    Visit Website →
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTracks.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              No tracks found matching your criteria
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filter options
            </p>
          </CardContent>
        </Card>
      )}

      {/* Load More */}
      {filteredTracks.length > 0 && (
        <div className="text-center pt-6">
          <Button variant="outline" className="border-racing-navy text-racing-navy hover:bg-racing-navy hover:text-white">
            Load More Tracks
          </Button>
        </div>
      )}
    </div>
  );
}