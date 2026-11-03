import React, { useState } from 'react';
import { Heart, RotateCcw, Sparkles, Stars, Maximize2, X } from 'lucide-react';
import { storyData } from '../data/storyData';

export default function FinalWish({ onReplay }) {
  const { finalWish } = storyData;
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="final" className="section final-section">
      <div className="final-card glass-card fadeInUp">
        <div className="final-icon-header">
          <Stars size={26} className="gold-accent" />
          <Heart size={38} className="heart-icon beat" />
          <Stars size={26} className="gold-accent" />
        </div>

        <blockquote className="final-main-quote">
          "{finalWish.mainQuote}"
        </blockquote>

        <div className="final-gratitude-box">
          <h3 className="gratitude-title">
            <Sparkles size={18} className="gold-accent" />
            {finalWish.gratitudeHeading}
          </h3>

          <ul className="gratitude-list">
            {finalWish.gratitudePoints.map((point, idx) => (
              <li key={idx} className="gratitude-item">
                <span className="bullet-heart">❤️</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {finalWish.specialNote && (
            <div className="gratitude-special-section">
              <span className="special-lead">{finalWish.specialNote.lead}</span>
              <div className="special-highlight-item">
                <span className="bullet-heart">❤️</span>
                <span className="special-highlight-text">{finalWish.specialNote.highlight}</span>
              </div>
              <p className="special-detail-text">{finalWish.specialNote.detail}</p>
            </div>
          )}
        </div>

        {finalWish.finalPhoto && (
          <div 
            className="final-photo-frame"
            onClick={() => setIsZoomed(true)}
            title="Click to view full photo"
          >
            <img 
              src={finalWish.finalPhoto} 
              alt="Our Sunset Moment" 
              className="final-photo"
              loading="lazy"
            />
            <div className="final-photo-overlay">
              <Maximize2 size={20} className="zoom-icon" />
              <span>Tap to Expand</span>
            </div>
            <span className="photo-caption-badge">{finalWish.finalPhotoCaption}</span>
          </div>
        )}

        {finalWish.closingWish && (
          <div className="final-birthday-closing">
            <div className="birthday-crown-icons">
              <Sparkles size={20} className="gold-accent" />
              <span className="cake-emoji">🎂</span>
              <Sparkles size={20} className="gold-accent" />
            </div>
            <h3 className="final-birthday-text">{finalWish.closingWish}</h3>
            {finalWish.closingWishSub && (
              <p className="final-birthday-sub">{finalWish.closingWishSub}</p>
            )}
          </div>
        )}

        <div className="final-action">
          <button className="btn btn-primary btn-glow btn-replay" onClick={onReplay}>
            <RotateCcw size={20} className="spin-on-hover" />
            {finalWish.replayButtonText}
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isZoomed && (
        <div className="lightbox-backdrop" onClick={() => setIsZoomed(false)}>
          <div className="lightbox-content glass-modal fadeInUp" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsZoomed(false)} aria-label="Close photo preview">
              <X size={26} />
            </button>
            <div className="lightbox-image-wrapper">
              <img 
                src={finalWish.finalPhoto} 
                alt="Our Sunset Moment" 
                className="lightbox-image" 
              />
            </div>
            <div className="lightbox-info" style={{ textAlign: 'center' }}>
              <h3 className="lightbox-title" style={{ fontSize: '1.4rem', margin: 0 }}>
                {finalWish.finalPhotoCaption}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
