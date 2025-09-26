'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: Date;
  className?: string;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetTime, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetTime.getTime() - new Date().getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="text-center">
        <div className="bg-racing-gold text-racing-navy font-bold text-lg px-3 py-1 rounded">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300 mt-1">HRS</div>
      </div>
      <div className="text-racing-gold font-bold">:</div>
      <div className="text-center">
        <div className="bg-racing-gold text-racing-navy font-bold text-lg px-3 py-1 rounded">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300 mt-1">MIN</div>
      </div>
      <div className="text-racing-gold font-bold">:</div>
      <div className="text-center">
        <div className="bg-racing-gold text-racing-navy font-bold text-lg px-3 py-1 rounded">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300 mt-1">SEC</div>
      </div>
    </div>
  );
}