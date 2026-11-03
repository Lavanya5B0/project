import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function NextChapterBtn({ onClick, text, icon: Icon = ArrowRight }) {
  return (
    <div className="next-chapter-container">
      <button 
        className="next-chapter-btn btn-glow"
        onClick={onClick}
        aria-label={text || "Navigate to next chapter"}
      >
        <span className="btn-sparkle-bg">✨</span>
        <Heart size={18} className="btn-heart-left beat" />
        <span className="btn-text-content">{text}</span>
        <Icon size={20} className="btn-icon-right transition-arrow" />
      </button>
    </div>
  );
}
