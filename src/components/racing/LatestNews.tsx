'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  timestamp: string;
  category: string;
  imageUrl?: string;
  urgent?: boolean;
}

const latestNews: NewsItem[] = [
  {
    id: '1',
    title: "Thundering Lucky Claim's First Place",
    summary: "Thundering Lucky dominated the field in yesterday's featured race at Belmont Park, securing a decisive victory...",
    timestamp: '2 hours ago',
    category: 'Race Results',
    urgent: true
  },
  {
    id: '2',
    title: 'New Betting Regulations Announced',
    summary: 'Racing authorities have announced new regulations for betting pools starting next season...',
    timestamp: '4 hours ago',
    category: 'Regulations'
  },
  {
    id: '3',
    title: 'Top Jockeys Prepare for Premier Cup',
    summary: 'Leading jockeys from around the world are making final preparations for the upcoming Premier Cup...',
    timestamp: '6 hours ago',
    category: 'Analysis'
  },
  {
    id: '4',
    title: 'Weather Update: Track Conditions',
    summary: 'Current weather patterns suggest optimal track conditions for this weekend\'s races...',
    timestamp: '8 hours ago',
    category: 'Track Updates'
  }
];

const categoryColors: { [key: string]: string } = {
  'Race Results': 'bg-racing-gold text-racing-navy',
  'Regulations': 'bg-racing-green text-white',
  'Analysis': 'bg-racing-navy text-white',
  'Track Updates': 'bg-blue-500 text-white'
};

export function LatestNews() {
  return (
    <div className="space-y-4">
      <h2 className="font-montserrat text-2xl font-bold text-racing-navy mb-6">
        LATEST RACING NEWS
      </h2>

      <div className="space-y-4">
        {latestNews.map((news) => (
          <Card
            key={news.id}
            className={`transition-all duration-200 hover:shadow-lg cursor-pointer hover:border-racing-gold/50 ${
              news.urgent ? 'border-racing-gold shadow-sm' : ''
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`text-xs font-semibold ${categoryColors[news.category] || 'bg-gray-500 text-white'}`}>
                      {news.category.toUpperCase()}
                    </Badge>
                    {news.urgent && (
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">
                        BREAKING
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-montserrat text-racing-navy leading-tight line-clamp-2">
                    {news.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {news.summary}
                </p>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    {news.timestamp}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-racing-green hover:text-racing-navy hover:bg-racing-gold/10 text-xs font-semibold"
                  >
                    READ MORE →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Updates Ticker */}
      <Card className="bg-racing-navy text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-montserrat flex items-center gap-2">
            <span className="w-2 h-2 bg-racing-gold rounded-full animate-pulse"></span>
            LIVE UPDATES
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Belmont Race 6:</span>
              <span className="text-racing-gold font-semibold">STARTING</span>
            </div>
            <div className="flex justify-between">
              <span>Churchill Race 8:</span>
              <span className="text-racing-gold font-semibold">POST TIME 4:15</span>
            </div>
            <div className="flex justify-between">
              <span>Santa Anita Conditions:</span>
              <span className="text-racing-gold font-semibold">FAST</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full mt-4 bg-racing-navy hover:bg-racing-dark-navy text-white">
        View All News
      </Button>
    </div>
  );
}