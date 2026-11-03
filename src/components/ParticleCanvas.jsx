import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle generator
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 45);
    const particles = [];

    const colors = [
      'rgba(244, 227, 230, 0.6)', // soft rose
      'rgba(212, 175, 55, 0.4)',  // subtle gold
      'rgba(255, 255, 255, 0.7)', // warm white
      'rgba(232, 197, 200, 0.5)'  // blush
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2, // slow float upward
        alpha: Math.random(),
        maxAlpha: Math.random() * 0.6 + 0.3,
        alphaStep: Math.random() * 0.01 + 0.005,
        alphaGrowing: Math.random() > 0.5
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Twinkle effect
        if (p.alphaGrowing) {
          p.alpha += p.alphaStep;
          if (p.alpha >= p.maxAlpha) p.alphaGrowing = false;
        } else {
          p.alpha -= p.alphaStep;
          if (p.alpha <= 0.1) p.alphaGrowing = true;
        }

        // Reset if off top of screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}
