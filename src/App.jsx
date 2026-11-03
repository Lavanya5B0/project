import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import MusicPlayer from './components/MusicPlayer';
import Landing from './components/Landing';
import Wish from './components/Wish';
import GiftReveal from './components/GiftReveal';
import TimeCounter from './components/TimeCounter';
import FinalSurprise from './components/FinalSurprise';
import FinalWish from './components/FinalWish';
import './App.css';

const CHAPTERS = [
  { id: 'landing', title: 'The Invitation 💌' },
  { id: 'wish', title: 'A Special Wish 🌟' },
  { id: 'gifts', title: 'Choose Your Gift 🎁' },
  { id: 'counter', title: 'Our Time Together ⏳' },
  { id: 'surprise', title: 'Hidden Surprise 👀' },
  { id: 'final', title: 'Forever Wish 💌' }
];

export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ch = parseInt(params.get('chapter'), 10);
      if (!isNaN(ch) && ch >= 1 && ch <= CHAPTERS.length) return ch - 1;
    } catch {}
    return 0;
  });
  const [maxUnlockedChapter, setMaxUnlockedChapter] = useState(5);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToChapter = (targetIndex) => {
    if (targetIndex === currentChapterIndex || targetIndex < 0 || targetIndex >= CHAPTERS.length) return;
    if (targetIndex > maxUnlockedChapter) return; // Prevent skipping ahead without unlocking

    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setCurrentChapterIndex(targetIndex);
      window.scrollTo({ top: 0, behavior: 'instant' });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 300);
  };

  const handleNextChapter = () => {
    const nextIdx = currentChapterIndex + 1;
    if (nextIdx < CHAPTERS.length) {
      if (nextIdx > maxUnlockedChapter) {
        setMaxUnlockedChapter(nextIdx);
      }
      setIsTransitioning(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        setCurrentChapterIndex(nextIdx);
        window.scrollTo({ top: 0, behavior: 'instant' });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 350);
      }, 300);
    }
  };

  const handleStartJourney = () => {
    setIsPlayingMusic(true);
    handleNextChapter();
  };

  const handleReplayStory = () => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setCurrentChapterIndex(0);
      window.scrollTo({ top: 0, behavior: 'instant' });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 300);
  };

  const renderActiveChapter = () => {
    switch (currentChapterIndex) {
      case 0:
        return <Landing onStart={handleStartJourney} />;
      case 1:
        return <Wish onContinue={handleNextChapter} />;
      case 2:
        return <GiftReveal onNext={handleNextChapter} />;
      case 3:
        return <TimeCounter onNext={handleNextChapter} />;
      case 4:
        return <FinalSurprise onNext={handleNextChapter} />;
      case 5:
        return <FinalWish onReplay={handleReplayStory} />;
      default:
        return <Landing onStart={handleStartJourney} />;
    }
  };

  return (
    <div className="app-container">
      {/* Ambient Sparkles & Dust Particle Background */}
      <ParticleCanvas />

      {/* Floating Ambient Music Player */}
      <MusicPlayer 
        isPlaying={isPlayingMusic} 
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)} 
      />

      {/* Chapter Navigation & Progress Bar */}
      <header className="chapter-progress-header glass-card">
        <div className="chapter-progress-inner">
          <div className="chapter-info">
            <span className="chapter-badge">Chapter {currentChapterIndex + 1} of {CHAPTERS.length}</span>
            <h2 className="chapter-title-text">{CHAPTERS[currentChapterIndex].title}</h2>
          </div>

          <div className="chapter-dots-container">
            {CHAPTERS.map((ch, idx) => {
              const isCurrent = idx === currentChapterIndex;
              const isUnlocked = idx <= maxUnlockedChapter;

              return (
                <button
                  key={ch.id}
                  className={`chapter-dot ${isCurrent ? 'active' : ''} ${isUnlocked ? 'unlocked' : 'locked'}`}
                  onClick={() => isUnlocked && goToChapter(idx)}
                  disabled={!isUnlocked}
                  title={`${ch.title}${!isUnlocked ? ' (Locked)' : ''}`}
                  aria-label={`Jump to ${ch.title}`}
                >
                  <span className="dot-inner"></span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Single Active Chapter View with Cinematic Transition */}
      <main className={`chapter-view-container ${isTransitioning ? 'cinematic-exit' : 'cinematic-enter'}`}>
        {renderActiveChapter()}
      </main>
    </div>
  );
}
