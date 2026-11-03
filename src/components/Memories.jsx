import React, { useState } from 'react';
import { Calendar, Maximize2, X } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

export default function Memories({ onNext }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="memories" className="section memories-section">
      <div className="section-header">
        <span className="section-tag">Snapshot Gallery</span>
        <h2 className="section-title">Memories 📸</h2>
        <p className="section-subtitle">
          Moments frozen in time, forever cherished in our story.
        </p>
      </div>

      <div className="memories-grid">
        {storyData.memories.map((mem) => (
          <div 
            key={mem.id} 
            className="memory-card glass-card"
            onClick={() => setSelectedPhoto(mem)}
          >
            <div className="memory-image-container">
              <img 
                src={mem.image} 
                alt={mem.title} 
                className="memory-image" 
                loading="lazy"
              />
              <div className="memory-overlay">
                <Maximize2 size={24} className="zoom-icon" />
                <span>Tap to Expand</span>
              </div>
              <span className="memory-category-badge">{mem.category}</span>
            </div>

            <div className="memory-details">
              <div className="memory-date">
                <Calendar size={14} />
                <span>{mem.date}</span>
              </div>

              <h3 className="memory-title">
                {mem.title} — <span className="date-sub">{mem.date}</span>
              </h3>

              <p className="memory-description">{mem.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content glass-modal fadeInUp" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close Lightbox">
              <X size={26} />
            </button>

            <div className="lightbox-image-wrapper">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title} 
                className="lightbox-image" 
              />
            </div>

            <div className="lightbox-info">
              <div className="lightbox-header">
                <span className="memory-category-badge">{selectedPhoto.category}</span>
                <span className="lightbox-date">{selectedPhoto.date}</span>
              </div>

              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              <p className="lightbox-description">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {onNext && (
        <NextChapterBtn 
          onClick={onNext} 
          text="One more surprise… 🎁" 
        />
      )}
    </section>
  );
}

