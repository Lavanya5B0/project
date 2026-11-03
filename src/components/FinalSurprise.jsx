import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Eye, X, Sparkles, Heart, FileText, Ticket } from 'lucide-react';
import { storyData } from '../data/storyData';
import NextChapterBtn from './NextChapterBtn';

export default function FinalSurprise({ onNext }) {
  const [showTeaser, setShowTeaser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(storyData.finalSurprise.tabs[0]?.id || 'letter');

  useEffect(() => {
    // Reveal the "Wait... one more thing 👀" after 1.5 seconds when scrolled into view
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleRevealClick = () => {
    try {
      // Dramatic confetti explosion
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#E8C5C8', '#4A1525', '#FFFFFF']
      });
    } catch (err) {}

    setIsModalOpen(true);
  };

  const activeTab = storyData.finalSurprise.tabs.find((t) => t.id === activeTabId);

  return (
    <section id="surprise" className="section surprise-section">
      <div className="surprise-card glass-card">
        <div className="surprise-header">
          <Eye size={32} className="eye-icon pulse" />
          <h2 className="surprise-initial">{storyData.finalSurprise.initialText}</h2>
        </div>

        {showTeaser ? (
          <div className="surprise-teaser-content fadeInUp">
            <h3 className="surprise-teaser-text">{storyData.finalSurprise.teaserText}</h3>

            <button className="btn btn-primary btn-glow surprise-btn" onClick={handleRevealClick}>
              <Sparkles size={20} className="sparkle-icon" />
              {storyData.finalSurprise.revealButtonText}
              <Heart size={20} className="heart-icon beat" />
            </button>
          </div>
        ) : (
          <div className="surprise-loading-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        )}
      </div>

      {/* Dramatic Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content glass-modal dramatic-modal fadeInUp" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close surprise modal">
              <X size={26} />
            </button>

            <div className="modal-header text-center">
              <div className="sparkle-badge">
                <Sparkles size={18} />
                <span>Special Surprise Unlocked</span>
              </div>
              <h3 className="modal-title">{storyData.finalSurprise.modalTitle}</h3>
              <p className="modal-subtitle">{storyData.finalSurprise.modalSubtitle}</p>
            </div>

            {/* Tab navigation */}
            <div className="surprise-tabs">
              {storyData.finalSurprise.tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="tab-content-area">
              {activeTab?.type === 'letter' && (
                <div className="letter-view">
                  <FileText size={32} className="tab-icon" />
                  <h4 className="letter-heading">{activeTab.content.title}</h4>
                  {activeTab.content.salutation && (
                    <p className="letter-salutation">{activeTab.content.salutation}</p>
                  )}
                  <div className="letter-body">{activeTab.content.body}</div>
                  <p className="letter-signature">{activeTab.content.signature || '— Yours Always ❤️'}</p>
                </div>
              )}

              {activeTab?.type === 'ticket' && (
                <div className="ticket-view glass-card">
                  <div className="ticket-badge">{activeTab.content.badge || "Forever Promise"}</div>
                  <Ticket size={36} className="ticket-icon gold-accent" />
                  <h4 className="ticket-title">{activeTab.content.title}</h4>
                  <span className="ticket-validity">{activeTab.content.validUntil}</span>
                  
                  {activeTab.content.promises ? (
                    <div className="ticket-promises-list">
                      {activeTab.content.promises.map((p, i) => (
                        <div key={i} className="promise-card">
                          <div className="promise-card-header">
                            <span className="promise-icon">{p.icon}</span>
                            <h5 className="promise-title">{p.title}</h5>
                          </div>
                          <p className="promise-text">"{p.text.replace(/^"|"$/g, '')}"</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="ticket-perks">
                      {activeTab.content.perks?.map((perk, i) => (
                        <li key={i}>✨ {perk}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>
                <Heart size={18} />
                I Love You ❤️
              </button>
            </div>
          </div>
        </div>
      )}
      {onNext && (
        <NextChapterBtn 
          onClick={onNext} 
          text="Step into our final wish 💌" 
        />
      )}
    </section>
  );
}
