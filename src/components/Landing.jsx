import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function Landing({ onStart }) {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isNoFleeing, setIsNoFleeing] = useState(false);

  const messages = storyData.landing.noPlayfulMessages;

  const handleNoClickOrHover = (e) => {
    e.preventDefault();
    const nextCount = noCount + 1;
    setNoCount(nextCount);
    setIsNoFleeing(true);

    // Calculate a playful random shift within container bounds
    const randomX = (Math.random() - 0.5) * 260;
    const randomY = (Math.random() - 0.5) * 180;
    setNoPosition({ x: randomX, y: randomY });
  };

  const currentNoText = messages[noCount % messages.length];

  return (
    <section id="landing" className="section landing-section">
      <div className="landing-content glass-card fadeInUp">
        <div className="romantic-badge">
          <Sparkles size={16} className="sparkle-icon" />
          <span>A Love Story Crafted For You</span>
          <Sparkles size={16} className="sparkle-icon" />
        </div>

        <h1 className="landing-title">
          {storyData.landing.question}
        </h1>

        <p className="landing-subtitle">
          Take a deep breath and step inside our memories...
        </p>

        <div className="landing-actions">
          <button 
            className="btn btn-primary btn-glow"
            onClick={onStart}
            aria-label="Start reliving our story"
          >
            <Heart size={20} className="heart-icon beat" />
            {storyData.landing.yesButtonText}
          </button>

          <button
            className={`btn btn-secondary btn-playful ${isNoFleeing ? 'fleeing' : ''}`}
            onClick={handleNoClickOrHover}
            onMouseEnter={handleNoClickOrHover}
            style={{
              transform: isNoFleeing ? `translate(${noPosition.x}px, ${noPosition.y}px)` : 'none'
            }}
            aria-label="Playful No button"
          >
            {currentNoText}
          </button>
        </div>

        {noCount > 0 && (
          <p className="landing-hint">
            (P.S. There is only one true answer anyway 😉)
          </p>
        )}
      </div>

      <div className="scroll-indicator" onClick={onStart}>
        <span>Begin Journey</span>
        <ArrowRight size={16} className="rotate-90" />
      </div>
    </section>
  );
}
