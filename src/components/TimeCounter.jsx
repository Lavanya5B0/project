import React, { useState, useEffect } from 'react';
import { Clock, Heart, Infinity } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

export default function TimeCounter({ onNext }) {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date(storyData.dateMet).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - startDate);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="counter" className="section counter-section">
      <div className="counter-card glass-card">
        <div className="counter-icon-badge">
          <Clock size={28} className="gold-accent pulse" />
        </div>

        <h2 className="section-title">{storyData.timeCounter.heading}</h2>

        <p className="counter-since">
          Counting every precious second since <strong>{storyData.dateMetFormatted}</strong>
        </p>

        <div className="counter-grid">
          <div className="counter-unit">
            <div className="counter-value">{timeElapsed.days}</div>
            <div className="counter-label">Days</div>
          </div>
          <div className="counter-sep">:</div>

          <div className="counter-unit">
            <div className="counter-value">
              {String(timeElapsed.hours).padStart(2, '0')}
            </div>
            <div className="counter-label">Hours</div>
          </div>
          <div className="counter-sep">:</div>

          <div className="counter-unit">
            <div className="counter-value">
              {String(timeElapsed.minutes).padStart(2, '0')}
            </div>
            <div className="counter-label">Minutes</div>
          </div>
          <div className="counter-sep">:</div>

          <div className="counter-unit highlight">
            <div className="counter-value">
              {String(timeElapsed.seconds).padStart(2, '0')}
            </div>
            <div className="counter-label">Seconds</div>
          </div>
        </div>

        <div className="counter-footer">
          <Heart size={20} className="heart-icon beat" />
          <p className="counter-text">{storyData.timeCounter.subtext}</p>
          <Infinity size={22} className="infinity-icon" />
        </div>

        {onNext && (
          <NextChapterBtn 
            onClick={onNext} 
            text="There's one more surprise waiting… 👀" 
          />
        )}
      </div>
    </section>
  );
}

