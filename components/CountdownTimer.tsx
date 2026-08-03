import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate?: string; // optional – default is Sept 1, 2026
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate = "2026-09-01T00:00:00" 
}) => {
  // 🐞 Debug: check which date is actually being used
  console.log('🔍 CountdownTimer targetDate:', targetDate);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const formattedDate = new Date(targetDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in animation-delay-500">
      <h3 className="text-white text-xl font-semibold text-center mb-6">Event Starts In</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white text-sm font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-white mt-6 text-sm">
      </p>
    </div>
  );
};

export default CountdownTimer;