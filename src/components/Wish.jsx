import React from 'react';
import { 
  Heart, 
  Stars, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Camera, 
  ShieldAlert, 
  Calendar,
  ArrowDown
} from 'lucide-react';
import NextChapterBtn from './NextChapterBtn';

export default function Wish({ onContinue }) {
  return (
    <section id="wish" className="section wish-section">
      {/* Chapter 2 Header Card */}
      <div className="wish-header-card glass-card fadeInUp">
        <div className="heart-crown">
          <Stars size={24} className="gold-accent" />
          <Heart size={32} className="heart-icon beat" />
          <Stars size={24} className="gold-accent" />
        </div>

        <h1 className="wish-main-heading">
          How It All Began... ❤️
        </h1>

        <p className="wish-subheading">
          Sometimes the most beautiful stories begin completely by accident.
        </p>

        <div className="wish-divider">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </div>
      </div>

      {/* Memory Book Story Timeline */}
      <div className="story-timeline-wrapper">
        <div className="story-timeline-line"></div>

        {/* MEMORY 1: WHERE IT ALL BEGAN */}
        <div className="story-card-wrapper left fadeInUp">
          <div className="story-node">
            <span>💸</span>
          </div>
          <div className="story-card glass-card">
            <div className="story-card-header">
              <span className="story-date-badge">
                <Calendar size={13} /> 22 AUGUST 2022
              </span>
            </div>
            <h3 className="story-card-heading">Where It All Began</h3>
            <p className="story-card-text">
              Our story began on August 22, 2022 — completely unexpectedly.
            </p>
            <p className="story-card-text">
              That day, my brother's mobile phone wasn't working, so he gave me his number to send some money.
            </p>
            <p className="story-card-text">
              I sent the money without ever imagining that this tiny moment would eventually become the beginning of something so important in my life.
            </p>
            
            <div className="story-flow-pill">
              <span className="pill-item">💸 Money</span>
              <span className="pill-arrow">→</span>
              <span className="pill-item">📱 Phone Number</span>
              <span className="pill-arrow">→</span>
              <span className="pill-item">❤️ Us</span>
            </div>

            <div className="story-card-footer">
              Neither of us knew it then...<br />
              but this was the first little chapter of us.
            </div>
          </div>
        </div>

        {/* MEMORY 2: THE PHONE CALL */}
        <div className="story-card-wrapper right fadeInUp">
          <div className="story-node">
            <Phone size={16} />
          </div>
          <div className="story-card glass-card">
            <h3 className="story-card-heading">One Simple Phone Call</h3>
            <p className="story-card-text">
              A few days later, my brother went to Bangalore.
            </p>
            <p className="story-card-text">
              Suddenly, his phone was switched off, and my parents were worried and tense.
            </p>
            <p className="story-card-text">
              So I called you to ask whether my brother was coming or not.
            </p>
            <p className="story-card-text">
              It was supposed to be just a simple phone call...
            </p>
            <p className="story-card-text story-highlight-inline">
              but somehow, that call became the reason we started talking.
            </p>
            
            <div className="story-callout-box">
              <Phone size={18} className="gold-accent" />
              <span>During that conversation, we saved each other's numbers.</span>
            </div>

            <div className="story-card-footer">
              Sometimes one ordinary call can change everything.
            </div>
          </div>
        </div>

        {/* MEMORY 3: FROM ANNA TO KANNA */}
        <div className="story-card-wrapper left fadeInUp">
          <div className="story-node">
            <Heart size={16} className="heart-icon beat" />
          </div>
          <div className="story-card glass-card">
            <h3 className="story-card-heading">From 'Anna' to 'Kanna' ❤️</h3>
            <p className="story-card-text">
              At first, I used to call you <strong>'Anna'</strong>...
            </p>
            <p className="story-card-text">
              but slowly, things changed, and now I call you <strong>'Kanna.'</strong> ❤️
            </p>

            <div className="name-transform-container">
              <span className="name-chip initial">Anna</span>
              <div className="heart-pulse-divider">
                <span className="line-sm"></span>
                <Heart size={18} className="heart-icon beat" />
                <span className="line-sm"></span>
              </div>
              <span className="name-chip final">Kanna ❤️</span>
            </div>
          </div>
        </div>

        {/* MEMORY 4: THE FIRST FLIRTY MESSAGE */}
        <div className="story-card-wrapper right fadeInUp">
          <div className="story-node">
            <MessageCircle size={16} />
          </div>
          <div className="story-card glass-card">
            <h3 className="story-card-heading">And Then... You Started Flirting 😌❤️</h3>
            <p className="story-card-text">
              A few days later, whenever I posted my pictures on my status, you started replying with little messages.
            </p>
            <p className="story-card-text">
              One of the first messages that stayed with me was...
            </p>

            <div className="flirty-quote-card">
              <div className="flirty-chat-icon">💌</div>
              <Sparkles size={16} className="gold-accent quote-sparkle-top" />
              <p className="handwritten-quote">
                "Beautiful girl got a beautiful eyes." ❤️
              </p>
              <Sparkles size={16} className="gold-accent quote-sparkle-bottom" />
            </div>

            <p className="story-card-text story-highlight-inline" style={{ marginTop: '0.8rem' }}>
              And somehow, that little message became the beginning of so many conversations...
            </p>
            <p className="story-card-text">
              and those conversations slowly became something much more meaningful.
            </p>
          </div>
        </div>

        {/* MEMORY 5: SOMEHOW, IT BECAME US */}
        <div className="story-card-wrapper left fadeInUp">
          <div className="story-node">
            <span>🫶</span>
          </div>
          <div className="story-card glass-card">
            <h3 className="story-card-heading">Somewhere Along the Way...</h3>
            <p className="story-card-text">
              From that first unexpected conversation on August 22, 2022, until today, we have shared so many moments together.
            </p>
            
            <ul className="story-bullet-list">
              <li>We laughed.</li>
              <li>We cared for each other.</li>
              <li>We argued.</li>
              <li>We misunderstood each other.</li>
              <li>We faced problems that sometimes made our relationship difficult.</li>
            </ul>

            <div className="emotional-pause-banner">
              <p className="pause-sub">But through everything...</p>
              <h4 className="pause-main">WE NEVER GAVE UP ON EACH OTHER. ❤️</h4>
            </div>
          </div>
        </div>

        {/* MEMORY 6: OUR FIRST MEETING */}
        <div className="story-card-wrapper right fadeInUp">
          <div className="story-node">
            <Camera size={16} />
          </div>
          <div className="story-card glass-card">
            <div className="story-card-header">
              <span className="story-date-badge highlight-date">
                <Calendar size={13} /> 29 AUGUST 2024
              </span>
            </div>
            <h3 className="story-card-heading">The Day We Finally Met</h3>
            <p className="story-card-text">
              Then came another very special day.
            </p>
            <p className="story-card-text highlight-bold-date">
              29 August 2024.
            </p>
            <p className="story-card-text">
              The day we finally met for the first time.
            </p>
            <p className="story-card-text">
              I remember being so nervous and tense. My heart was full of excitement and fear at the same time.
            </p>
            <p className="story-card-text">
              Then you came near the metro side and sat with me.
            </p>
            <p className="story-card-text story-highlight-inline">
              And that day, we took our very first picture together. 📸❤️
            </p>

            {/* Photo Placeholder Frame */}
            <div className="story-photo-frame">
              <div className="photo-placeholder-inner">
                <Camera size={34} className="camera-icon-pulse" />
                <span className="photo-frame-title">Our First Picture 📸</span>
                <span className="photo-frame-meta">Metro Side • 29 August 2024</span>
              </div>
              <p className="photo-frame-caption">
                "Our first picture.<br />
                Our first meeting.<br />
                One unforgettable day."
              </p>
            </div>
          </div>
        </div>

        {/* MEMORY 7: THE HARD PARTS */}
        <div className="story-card-wrapper left fadeInUp">
          <div className="story-node">
            <ShieldAlert size={16} />
          </div>
          <div className="story-card glass-card calm-theme-card">
            <h3 className="story-card-heading">It Wasn't Always Easy...</h3>
            <p className="story-card-text">
              After that, we continued facing so many arguments, misunderstandings, and difficult moments in our relationship.
            </p>
            <p className="story-card-text">
              There were days when things felt complicated.
            </p>
            <p className="story-card-text">
              There were moments when we didn't understand each other.
            </p>
            <div className="resilience-box">
              <p>
                But somehow, after every fight, every problem, and every difficult day...
              </p>
              <p className="resilience-highlight">
                we still found our way back to each other.
              </p>
            </div>
          </div>
        </div>

        {/* MEMORY 8: THE TRUTH ABOUT US */}
        <div className="story-card-wrapper right fadeInUp">
          <div className="story-node">
            <Stars size={16} className="gold-accent" />
          </div>
          <div className="story-card glass-card">
            <h3 className="story-card-heading">Our Story Was Never Perfect.</h3>
            <p className="story-card-text">
              Because our story was never perfect.
            </p>
            
            <div className="real-highlight-card">
              <span className="real-sub">But it was always</span>
              <h2 className="real-title">REAL. ❤️</h2>
            </div>

            <p className="story-card-text text-center">
              And maybe that's what makes our story special.
            </p>
          </div>
        </div>

        {/* MEMORY 9: HOW IT STARTED (VISUAL SUMMARY) */}
        <div className="story-card-wrapper center-wide fadeInUp">
          <div className="story-node summary-node">
            <Sparkles size={18} className="gold-accent" />
          </div>
          <div className="story-card glass-card summary-card">
            <h3 className="story-card-heading text-center">How It Started ✨</h3>
            
            <div className="visual-story-flow">
              <div className="flow-step">
                <span className="flow-icon">💸</span>
                <span className="flow-text">A simple money transfer</span>
              </div>
              <ArrowDown size={16} className="flow-arrow" />

              <div className="flow-step">
                <span className="flow-icon">📱</span>
                <span className="flow-text">A phone call</span>
              </div>
              <ArrowDown size={16} className="flow-arrow" />

              <div className="flow-step">
                <span className="flow-icon">❤️</span>
                <span className="flow-text">Two saved contacts</span>
              </div>
              <ArrowDown size={16} className="flow-arrow" />

              <div className="flow-step">
                <span className="flow-icon">💌</span>
                <span className="flow-text">A few unexpected messages</span>
              </div>
              <ArrowDown size={16} className="flow-arrow" />

              <div className="flow-step highlight-step">
                <span className="flow-icon">🥹❤️</span>
                <span className="flow-text">"Beautiful girl got a beautiful eyes."</span>
              </div>
              <ArrowDown size={16} className="flow-arrow" />

              <div className="flow-step final-us-step">
                <span className="flow-icon">🫶</span>
                <span className="flow-text">US</span>
              </div>
            </div>

            <div className="summary-conclusion-text">
              <p>It didn't begin with a romantic proposal.</p>
              <p>It didn't begin with a perfect first meeting.</p>
              <p className="summary-highlight-line">
                It began with the smallest, most unexpected moments...
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* FINAL SECTION */}
      <div className="final-story-section glass-card fadeInUp">
        <div className="final-heart-crown">
          <Heart size={36} className="heart-icon beat" />
        </div>

        <h2 className="final-story-heading">
          And Somehow... That Little Beginning Became US.
        </h2>

        <p className="final-story-lead">
          And after everything we've been through,
        </p>
        <p className="final-story-lead highlight-bold">
          here we are...
        </p>
        <p className="final-story-lead highlight-rose">
          still choosing each other. ❤️
        </p>

        <div className="final-story-divider">
          <span className="line"></span>
          <Heart size={14} className="gold-accent" />
          <span className="line"></span>
        </div>

        <div className="final-story-paragraphs">
          <p>Our story isn't perfect. It never was.</p>
          <p className="story-emphasis-line">But it's ours.</p>
          <p>And I wouldn't change the way it began for anything.</p>
        </div>

        <div className="final-love-quote-badge">
          "From one unexpected phone call...<br />
          to a story I never want to end. ❤️"
        </div>

        <NextChapterBtn 
          onClick={onContinue} 
          text="There’s more waiting for you… 👀" 
        />
      </div>
    </section>
  );
}
