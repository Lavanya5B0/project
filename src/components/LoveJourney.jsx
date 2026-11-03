import React from 'react';
import { Calendar, Heart, Infinity, Sparkles } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

export default function LoveJourney({ onNext }) {
  return (
    <section id="journey" className="section journey-section">
      <div className="section-header">
        <span className="section-tag">Timeline of Us</span>
        <h2 className="section-title">Our Love Journey ❤️</h2>
        <p className="section-subtitle">
          Every chapter, every turn, and every step that led us to right here.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {storyData.milestones.map((milestone, idx) => {
          const isEven = idx % 2 === 0;
          const isForever = milestone.id === 'm9';

          return (
            <div 
              key={milestone.id} 
              className={`timeline-item ${isEven ? 'left' : 'right'} ${isForever ? 'forever-item' : ''}`}
            >
              <div className="timeline-node">
                {isForever ? (
                  <Infinity size={20} className="node-icon infinity" />
                ) : (
                  <Heart size={16} className="node-icon" />
                )}
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <span className="timeline-date">
                    <Calendar size={14} />
                    {milestone.date}
                  </span>
                  <span className="timeline-tag">{milestone.tag}</span>
                </div>

                <h3 className="timeline-title">{milestone.title}</h3>

                {milestone.image && (
                  <div className="timeline-image-wrapper">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title} 
                      className="timeline-image" 
                      loading="lazy"
                    />
                  </div>
                )}

                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {onNext && (
        <NextChapterBtn 
          onClick={onNext} 
          text="Are you ready for this? 🥹" 
        />
      )}
    </section>
  );
}

