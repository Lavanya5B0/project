import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, X, Heart, Bookmark, Compass, HeartHandshake, Headphones, Shirt } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

const iconMap = {
  Bookmark: Bookmark,
  Headphones: Headphones,
  Shirt: Shirt,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Compass: Compass
};

export default function GiftReveal({ onNext }) {
  const [openedGifts, setOpenedGifts] = useState({});
  const [activeModalGift, setActiveModalGift] = useState(null);

  const handleOpenGift = (gift) => {
    // Trigger confetti
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }

    setOpenedGifts((prev) => ({ ...prev, [gift.id]: true }));
    setActiveModalGift(gift);
  };

  return (
    <section id="gifts" className="section gifts-section">
      <div className="section-header">
        <span className="section-tag">Interactive Surprises</span>
        <h2 className="section-title">Choose Your Gift 🎁</h2>
        <p className="section-subtitle">
          Touch a box to unwrap a piece of my heart crafted specially for you.
        </p>
      </div>

      <div className="gifts-grid">
        {storyData.gifts.map((gift) => {
          const isOpened = !!openedGifts[gift.id];
          const IconComponent = iconMap[gift.icon] || Gift;

          return (
            <div 
              key={gift.id}
              className={`gift-card glass-card ${isOpened ? 'opened' : ''}`}
              onClick={() => handleOpenGift(gift)}
            >
              <div className="gift-ribbon-v"></div>
              <div className="gift-ribbon-h"></div>

              <div className="gift-card-inner">
                <div className="gift-box-icon">
                  <Gift size={42} className="gift-svg" />
                  <span className="gift-sparkle">✨</span>
                </div>

                <div className="gift-teaser-content">
                  <span className="gift-badge">{gift.badge}</span>
                  <h3 className="gift-teaser-title">"{gift.teaser}"</h3>
                </div>

                <div className="gift-action-bar">
                  <span className="tap-reveal-btn">
                    <Sparkles size={16} />
                    {isOpened ? "View Surprise Again" : "Tap to Reveal"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gift Detail Modal */}
      {activeModalGift && (
        <div className="modal-backdrop" onClick={() => setActiveModalGift(null)}>
          <div className="modal-content glass-modal fadeInUp" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalGift(null)} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={16} />
                <span>{activeModalGift.badge}</span>
              </div>
              <h3 className="modal-title">{activeModalGift.title}</h3>
            </div>

            {activeModalGift.image && (
              <div className={`modal-image-wrapper ${activeModalGift.isProduct ? 'product-wrapper' : ''}`}>
                <img 
                  src={activeModalGift.image} 
                  alt={activeModalGift.title} 
                  className={`modal-image ${activeModalGift.isProduct ? 'product-image' : ''}`} 
                  loading="lazy"
                />
              </div>
            )}

            <div className="modal-body">
              <p className="modal-text">{activeModalGift.message}</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setActiveModalGift(null)}>
                <Heart size={18} />
                Hold Close To Heart
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Next Chapter Transition Button */}
      {onNext && (
        <NextChapterBtn 
          onClick={onNext} 
          text="Tap to discover what happened next →" 
        />
      )}
    </section>
  );
}
