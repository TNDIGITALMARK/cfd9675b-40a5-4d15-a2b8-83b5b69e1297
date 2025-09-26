'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface RaceEvent {
  id: string;
  date: string;
  title: string;
  track: string;
  grade: string;
  purse: string;
  raceNumber: number;
  time: string;
  featured: boolean;
}

const mockEvents: RaceEvent[] = [
  {
    id: '1',
    date: '2024-10-26',
    title: 'Kentucky Derby Classic',
    track: 'Churchill Downs',
    grade: 'Grade I',
    purse: '$3,000,000',
    raceNumber: 7,
    time: '3:45 PM',
    featured: true
  },
  {
    id: '2',
    date: '2024-10-26',
    title: 'Preakness Stakes',
    track: 'Pimlico',
    grade: 'Grade I',
    purse: '$1,650,000',
    raceNumber: 11,
    time: '5:20 PM',
    featured: true
  },
  {
    id: '3',
    date: '2024-10-27',
    title: 'Belmont Futurity',
    track: 'Belmont Park',
    grade: 'Grade II',
    purse: '$400,000',
    raceNumber: 8,
    time: '4:15 PM',
    featured: false
  },
  {
    id: '4',
    date: '2024-10-27',
    title: 'Santa Anita Derby',
    track: 'Santa Anita',
    grade: 'Grade I',
    purse: '$1,000,000',
    raceNumber: 9,
    time: '6:30 PM',
    featured: true
  },
  {
    id: '5',
    date: '2024-10-28',
    title: 'Keeneland Stakes',
    track: 'Keeneland',
    grade: 'Grade III',
    purse: '$250,000',
    raceNumber: 6,
    time: '2:15 PM',
    featured: false
  },
  {
    id: '6',
    date: '2024-10-29',
    title: 'Del Mar Handicap',
    track: 'Del Mar',
    grade: 'Grade II',
    purse: '$500,000',
    raceNumber: 10,
    time: '5:45 PM',
    featured: false
  }
];

export function RacingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>('2024-10-26');
  const [filter, setFilter] = useState<string>('all');

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const getEventsForDate = (dateString: string) => {
    return mockEvents.filter(event => {
      if (filter === 'featured' && !event.featured) return false;
      if (filter === 'grade1' && event.grade !== 'Grade I') return false;
      return event.date === dateString;
    });
  };

  const hasEventsOnDate = (day: number) => {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return getEventsForDate(dateString).length > 0;
  };

  const selectedEvents = getEventsForDate(selectedDate);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'Grade I': return 'bg-racing-gold text-racing-navy';
      case 'Grade II': return 'bg-racing-green text-white';
      case 'Grade III': return 'bg-racing-navy text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="border-racing-gold/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="font-montserrat text-xl text-racing-navy">
              {monthNames[currentMonth]} {currentYear}
            </CardTitle>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Races</SelectItem>
                <SelectItem value="featured">Featured Only</SelectItem>
                <SelectItem value="grade1">Grade I Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-muted-foreground p-2">
                {day}
              </div>
            ))}

            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`empty-${i}`} className="p-2"></div>
            ))}

            {/* Calendar days */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const hasEvents = hasEventsOnDate(day);
              const isSelected = selectedDate === dateString;
              const isToday = day === currentDate.getDate();

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(dateString)}
                  className={`p-2 text-sm rounded-lg transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-racing-gold text-racing-navy font-bold'
                      : hasEvents
                      ? 'bg-racing-navy/10 text-racing-navy hover:bg-racing-navy/20 font-semibold'
                      : 'text-muted-foreground hover:bg-muted/50'
                  } ${
                    isToday ? 'ring-2 ring-racing-green ring-opacity-50' : ''
                  }`}
                >
                  {day}
                  {hasEvents && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-racing-green rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Events */}
      <Card className="border-racing-green/20">
        <CardHeader>
          <CardTitle className="font-montserrat text-xl text-racing-navy">
            Events for {new Date(selectedDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedEvents.length > 0 ? (
            <div className="space-y-4">
              {selectedEvents.map((event) => (
                <Card key={event.id} className={`transition-all duration-200 hover:shadow-md ${
                  event.featured ? 'border-racing-gold bg-gradient-to-r from-racing-gold/5 to-transparent' : 'hover:border-racing-gold/50'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {event.featured && (
                            <Badge className="bg-racing-gold text-racing-navy text-xs font-semibold">
                              FEATURED
                            </Badge>
                          )}
                          <Badge className={`text-xs font-semibold ${getGradeColor(event.grade)}`}>
                            {event.grade.toUpperCase()}
                          </Badge>
                        </div>
                        <h4 className="font-montserrat font-bold text-racing-navy">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.track}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-racing-green">Race {event.raceNumber}</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Purse</p>
                        <p className="font-bold text-racing-gold">{event.purse}</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-racing-green hover:bg-racing-green/90 text-white text-xs"
                      >
                        VIEW DETAILS
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No races scheduled for this date</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-racing-gold">{mockEvents.length}</p>
            <p className="text-sm text-muted-foreground">Total Events</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-racing-green">{mockEvents.filter(e => e.featured).length}</p>
            <p className="text-sm text-muted-foreground">Featured Races</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-racing-navy">{mockEvents.filter(e => e.grade === 'Grade I').length}</p>
            <p className="text-sm text-muted-foreground">Grade I Stakes</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}