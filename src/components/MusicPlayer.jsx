import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onTogglePlay }) {
  const audioCtxRef = useRef(null);
  const synthTimerRef = useRef(null);
  const [synthActive, setSynthActive] = useState(false);

  // Synthesize soft romantic ambient piano/pad progression using Web Audio API
  const startRomanticSynth = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setSynthActive(true);

      // Warm chord frequency progressions (Cmaj9, Am9, Fmaj7, G7sus4)
      const chordProgressions = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
        [220.00, 261.63, 329.63, 392.00], // Am7 (A3, C4, E4, G4)
        [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
        [196.00, 246.94, 293.66, 349.23]  // G7 (G3, B3, D4, F4)
      ];

      let step = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        
        const now = audioCtxRef.current.currentTime;
        const freqs = chordProgressions[step % chordProgressions.length];
        step++;

        freqs.forEach((freq, idx) => {
          const osc = audioCtxRef.current.createOscillator();
          const gain = audioCtxRef.current.createGain();

          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now);

          // Soft swell attack and gentle decay
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.04, now + 1.2);
          gain.gain.exponentialRampToValueAtTime(0.0005, now + 3.8);

          osc.connect(gain);
          gain.connect(audioCtxRef.current.destination);

          osc.start(now);
          osc.stop(now + 4.0);
        });
      };

      playChord();
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
      synthTimerRef.current = setInterval(playChord, 4000);
    } catch (err) {
      console.warn("Audio synthesis error:", err);
    }
  };

  const stopRomanticSynth = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setSynthActive(false);
  };

  useEffect(() => {
    if (isPlaying) {
      startRomanticSynth();
    } else {
      stopRomanticSynth();
    }

    return () => {
      if (synthTimerRef.current) clearInterval(synthTimerRef.current);
    };
  }, [isPlaying]);

  return (
    <div className={`music-player-floating ${isPlaying ? 'playing' : ''}`}>
      <button 
        className="music-toggle-btn"
        onClick={onTogglePlay}
        title={isPlaying ? "Mute Background Music" : "Play Romantic Melodies"}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <>
            <Volume2 className="music-icon pulse" size={20} />
            <span className="equalizer-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </span>
          </>
        ) : (
          <>
            <VolumeX className="music-icon" size={20} />
            <span className="music-btn-label">Music Off</span>
          </>
        )}
      </button>
    </div>
  );
}
