'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface RaceAnalyticsProps {
  raceId: string;
}

const speedData = [
  { horse: 'Thunder Bolt', speed: 95, workouts: 4 },
  { horse: 'Lightning Strike', speed: 92, workouts: 5 },
  { horse: 'Storm Chaser', speed: 89, workouts: 3 },
  { horse: 'Wind Runner', speed: 87, workouts: 4 },
  { horse: 'Fire Dancer', speed: 85, workouts: 2 },
];

const bettingData = [
  { name: 'Thunder Bolt', value: 25, odds: '3-1' },
  { name: 'Lightning Strike', value: 30, odds: '5-2' },
  { name: 'Storm Chaser', value: 20, odds: '7-2' },
  { name: 'Others', value: 25, odds: 'Various' },
];

const COLORS = ['#1a2332', '#d4af37', '#2d5016', '#6b7280'];

const trackRecords = [
  { distance: '6f', time: '1:08.23', holder: 'Speed Demon', year: '2019' },
  { distance: '1m', time: '1:34.56', holder: 'Track Master', year: '2021' },
  { distance: '1¼m', time: '2:01.45', holder: 'Derby King', year: '2020' },
  { distance: '1½m', time: '2:28.78', holder: 'Distance Runner', year: '2018' },
];

export function RaceAnalytics({ raceId }: RaceAnalyticsProps) {
  return (
    <div className="space-y-6">
      <h3 className="font-montserrat text-2xl font-bold text-racing-navy">
        RACE ANALYTICS & DATA
      </h3>

      <Tabs defaultValue="speed" className="w-full">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="speed">Speed Figures</TabsTrigger>
          <TabsTrigger value="betting">Betting Trends</TabsTrigger>
          <TabsTrigger value="track">Track Records</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
        </TabsList>

        <TabsContent value="speed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat text-lg text-racing-navy">
                Latest Speed Figures
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Based on recent workout performance and past race times
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={speedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="horse"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="speed" fill="hsl(var(--racing-navy))" />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-4 grid grid-cols-2 lg:grid-cols-5 gap-4">
                {speedData.map((horse) => (
                  <div key={horse.horse} className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold text-racing-navy text-sm">{horse.horse}</p>
                    <p className="text-2xl font-bold text-racing-gold">{horse.speed}</p>
                    <p className="text-xs text-muted-foreground">{horse.workouts} workouts</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="betting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat text-lg text-racing-navy">
                Current Betting Distribution
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Money wagered by horse (last updated 2 minutes ago)
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:w-1/2">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={bettingData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {bettingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-full lg:w-1/2 space-y-3">
                  {bettingData.map((horse, index) => (
                    <div key={horse.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="font-semibold text-racing-navy">{horse.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-racing-gold">{horse.value}%</p>
                        <p className="text-xs text-muted-foreground">{horse.odds}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="track" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat text-lg text-racing-navy">
                Churchill Downs Track Records
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Current track records by distance
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trackRecords.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-racing-gold text-racing-navy font-bold">
                        {record.distance}
                      </Badge>
                      <div>
                        <p className="font-semibold text-racing-navy">{record.holder}</p>
                        <p className="text-sm text-muted-foreground">{record.year}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-racing-green">{record.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-racing-navy/5 rounded-lg">
                <p className="text-sm text-racing-navy">
                  <strong>Today's Race Distance:</strong> 1¼ miles
                </p>
                <p className="text-sm text-muted-foreground">
                  Record to beat: <span className="font-semibold text-racing-green">2:01.45</span> set by Derby King in 2020
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conditions" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-lg text-racing-navy">
                  Current Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-racing-green/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Track</p>
                    <p className="font-bold text-racing-green">FAST</p>
                  </div>
                  <div className="text-center p-3 bg-racing-gold/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Weather</p>
                    <p className="font-bold text-racing-navy">Clear</p>
                  </div>
                  <div className="text-center p-3 bg-racing-navy/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Temp</p>
                    <p className="font-bold text-racing-navy">72°F</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Wind</p>
                    <p className="font-bold text-racing-navy">5 mph</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat text-lg text-racing-navy">
                  Track Bias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Inside Posts (1-4):</span>
                    <Badge className="bg-racing-green text-white">Favored</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Middle Posts (5-8):</span>
                    <Badge className="bg-racing-gold text-racing-navy">Neutral</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Outside Posts (9+):</span>
                    <Badge className="bg-gray-500 text-white">Challenging</Badge>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Analysis based on last 20 races at this distance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}