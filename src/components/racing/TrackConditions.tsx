'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TrackConditionsProps {
  raceId: string;
}

interface WeatherData {
  condition: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  precipitation: number;
  visibility: number;
}

interface TrackData {
  surface: string;
  condition: 'Fast' | 'Good' | 'Yielding' | 'Soft' | 'Heavy';
  moisture: number;
  temperature: number;
  lastMaintenance: string;
  bias: string;
}

export function TrackConditions({ raceId }: TrackConditionsProps) {
  const [weather, setWeather] = useState<WeatherData>({
    condition: 'Clear',
    temperature: 72,
    humidity: 45,
    windSpeed: 5,
    windDirection: 'SW',
    precipitation: 0,
    visibility: 10
  });

  const [track, setTrack] = useState<TrackData>({
    surface: 'Dirt',
    condition: 'Fast',
    moisture: 15,
    temperature: 68,
    lastMaintenance: '6:00 AM',
    bias: 'Neutral'
  });

  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setWeather(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(20, Math.min(80, prev.humidity + (Math.random() - 0.5) * 5)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 2)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'fast': return 'bg-racing-green text-white';
      case 'good': return 'bg-racing-gold text-racing-navy';
      case 'yielding': return 'bg-orange-500 text-white';
      case 'soft': return 'bg-orange-600 text-white';
      case 'heavy': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear': return '☀️';
      case 'cloudy': return '☁️';
      case 'overcast': return '🌫️';
      case 'rain': return '🌧️';
      case 'thunderstorm': return '⛈️';
      default: return '☀️';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-montserrat text-xl font-bold text-racing-navy">
          TRACK CONDITIONS
        </h3>
        <Badge className={`${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'} text-white`}>
          {isLive ? 'LIVE' : 'OFFLINE'}
        </Badge>
      </div>

      {/* Current Weather */}
      <Card className="border-racing-gold/20">
        <CardHeader className="pb-4">
          <CardTitle className="font-montserrat text-lg text-racing-navy flex items-center gap-2">
            {getWeatherIcon(weather.condition)}
            Weather Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-racing-navy">{Math.round(weather.temperature)}°F</p>
              <p className="text-sm text-muted-foreground">Temperature</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-racing-navy">{weather.humidity}%</p>
              <p className="text-sm text-muted-foreground">Humidity</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-racing-navy">{Math.round(weather.windSpeed)} mph</p>
              <p className="text-sm text-muted-foreground">Wind {weather.windDirection}</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <p className="text-lg font-bold text-racing-navy">{weather.precipitation}"</p>
              <p className="text-sm text-muted-foreground">Precipitation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Track Surface */}
      <Card className="border-racing-green/20">
        <CardHeader className="pb-4">
          <CardTitle className="font-montserrat text-lg text-racing-navy flex items-center justify-between">
            Track Surface
            <Badge className={getConditionColor(track.condition)}>
              {track.condition.toUpperCase()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Surface Type:</span>
            <span className="font-semibold text-racing-navy">{track.surface}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Track Temperature:</span>
            <span className="font-semibold text-racing-navy">{track.temperature}°F</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Moisture Level:</span>
            <span className="font-semibold text-racing-navy">{track.moisture}%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Last Maintenance:</span>
            <span className="font-semibold text-racing-navy">{track.lastMaintenance}</span>
          </div>

          <div className="pt-3 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Track Bias:</span>
              <Badge className="bg-racing-navy text-white">{track.bias}</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on recent race results and surface analysis
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Forecast */}
      <Card className="border-racing-navy/20">
        <CardHeader className="pb-4">
          <CardTitle className="font-montserrat text-lg text-racing-navy">
            Race Day Forecast
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Post Time (3:45 PM):</span>
              <span className="font-semibold text-racing-navy">☀️ 74°F</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Mid-Race (4:00 PM):</span>
              <span className="font-semibold text-racing-navy">☀️ 75°F</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Finish (4:15 PM):</span>
              <span className="font-semibold text-racing-navy">☁️ 73°F</span>
            </div>
          </div>

          <div className="pt-3 border-t">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-racing-green rounded-full"></span>
              <span className="text-sm font-semibold text-racing-green">Optimal Conditions Expected</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Weather conditions should remain stable throughout the race period with minimal wind impact.
            </p>
          </div>
        </CardContent>
      </Card>

      <Button
        className="w-full bg-racing-navy hover:bg-racing-dark-navy text-white"
        onClick={() => setIsLive(!isLive)}
      >
        {isLive ? 'Pause Updates' : 'Resume Live Updates'}
      </Button>
    </div>
  );
}