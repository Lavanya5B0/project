import React from 'react';
import { Heart, ShieldAlert, Globe, Sparkles } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

const cardIconMap = {
  Heart: Heart,
  ShieldAlert: ShieldAlert,
  Globe: Globe,
  Sparkles: Sparkles
};

export default function LoveStory({ onNext }) {
  const { storyCards } = storyData;

  return (
    <section id="lovestory" className="section lovestory-section">
      <div className="section-header">
        <span className="section-tag">Authentic Reflections</span>
        <h2 className="section-title">{storyCards.heading}</h2>
        <p className="section-subtitle">{storyCards.subheading}</p>
      </div>

      <div className="story-cards-grid">
        {storyCards.cards.map((card) => {
          const IconComp = cardIconMap[card.icon] || Heart;

          return (
            <div 
              key={card.id} 
              className={`story-card glass-card theme-${card.colorTheme}`}
            >
              <div className="story-card-top">
                <div className="story-icon-box">
                  <IconComp size={26} className="story-icon" />
                </div>
                <span className="story-card-badge">{card.badge}</span>
              </div>

              <h3 className="story-card-title">{card.title}</h3>
              <p className="story-card-text">{card.description}</p>

              <div className="story-card-corner-decor">
                <Sparkles size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {onNext && (
        <NextChapterBtn 
          onClick={onNext} 
          text="Reveal the final surprise… 🎁" 
        />
      )}
    </section>
  );
}

