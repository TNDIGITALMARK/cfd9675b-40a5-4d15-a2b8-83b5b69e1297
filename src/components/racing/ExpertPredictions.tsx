'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ExpertPick {
  id: string;
  expertName: string;
  expertise: string;
  credibility: number;
  pick: {
    win: string;
    place: string;
    show: string;
  };
  confidence: 'High' | 'Medium' | 'Low';
  reasoning: string;
  avatar?: string;
}

const expertPicks: ExpertPick[] = [
  {
    id: '1',
    expertName: 'Sarah Mitchell',
    expertise: 'Track Handicapper',
    credibility: 87,
    pick: {
      win: 'Lightning Strike',
      place: 'Thunder Bolt',
      show: 'Storm Chaser'
    },
    confidence: 'High',
    reasoning: 'Lightning Strike has shown exceptional form in recent workouts and has a favorable post position.'
  },
  {
    id: '2',
    expertName: 'Mike Rodriguez',
    expertise: 'Breeding Analyst',
    credibility: 82,
    pick: {
      win: 'Thunder Bolt',
      place: 'Lightning Strike',
      show: 'Fire Dancer'
    },
    confidence: 'Medium',
    reasoning: 'Thunder Bolt\'s bloodline suggests strong performance on dirt tracks, especially at this distance.'
  },
  {
    id: '3',
    expertName: 'Jennifer Park',
    expertise: 'Speed Figure Expert',
    credibility: 91,
    pick: {
      win: 'Storm Chaser',
      place: 'Thunder Bolt',
      show: 'Lightning Strike'
    },
    confidence: 'High',
    reasoning: 'Speed figures indicate Storm Chaser has been improving consistently over the last three races.'
  }
];

interface ExpertPredictionsProps {
  raceId: string;
}

export function ExpertPredictions({ raceId }: ExpertPredictionsProps) {
  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'High': return 'bg-racing-green text-white';
      case 'Medium': return 'bg-racing-gold text-racing-navy';
      case 'Low': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="font-montserrat text-2xl font-bold text-racing-navy">
        EXPERT PREDICTIONS
      </h3>

      <div className="space-y-4">
        {expertPicks.map((expert) => (
          <Card key={expert.id} className="border-racing-gold/20 hover:border-racing-gold/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-montserrat text-racing-navy">
                    {expert.expertName}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{expert.expertise}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getConfidenceColor(expert.confidence)}>
                    {expert.confidence}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-racing-green">{expert.credibility}%</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Picks */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-racing-gold/10 rounded-lg">
                  <p className="text-xs font-semibold text-racing-navy mb-1">WIN</p>
                  <p className="font-bold text-sm text-racing-navy">{expert.pick.win}</p>
                </div>
                <div className="text-center p-3 bg-racing-green/10 rounded-lg">
                  <p className="text-xs font-semibold text-racing-navy mb-1">PLACE</p>
                  <p className="font-bold text-sm text-racing-navy">{expert.pick.place}</p>
                </div>
                <div className="text-center p-3 bg-racing-navy/10 rounded-lg">
                  <p className="text-xs font-semibold text-racing-navy mb-1">SHOW</p>
                  <p className="font-bold text-sm text-racing-navy">{expert.pick.show}</p>
                </div>
              </div>

              {/* Reasoning */}
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {expert.reasoning}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Consensus Pick */}
      <Card className="border-2 border-racing-gold bg-gradient-to-br from-racing-gold/5 to-transparent">
        <CardHeader className="pb-4">
          <CardTitle className="font-montserrat text-xl text-racing-navy flex items-center gap-2">
            <span className="w-2 h-2 bg-racing-gold rounded-full animate-pulse"></span>
            EXPERT CONSENSUS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Most Picked to Win</p>
              <p className="text-2xl font-bold text-racing-navy">Thunder Bolt</p>
              <p className="text-sm text-racing-green">67% of experts</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Place Favorite</p>
                <p className="font-semibold text-racing-navy">Lightning Strike</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Show Value</p>
                <p className="font-semibold text-racing-navy">Storm Chaser</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-racing-navy hover:bg-racing-dark-navy text-white">
        View All Expert Analysis
      </Button>
    </div>
  );
}