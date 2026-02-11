import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, ArrowRight, ShieldCheck, Sparkles, Star, Award } from 'lucide-react';
import heroImage from '../assets/images/ayu2.jpg';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const yElement = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-grain"></div>

      <motion.div style={{ y: yElement, opacity }} className="hero-bg-leaf hero-leaf-1">
        <Leaf size={160} />
      </motion.div>
      <motion.div style={{ y: -yElement, opacity }} className="hero-bg-leaf hero-leaf-2">
        <Leaf size={100} />
      </motion.div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-badge"
          >
            <Star size={14} />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <h1 className="hero-title">
            {t('hero.title_p1')} <span className="hero-gold">{t('hero.title_h1')}</span> <br />
            {t('hero.title_p2')} <span className="hero-gold">{t('hero.title_h2')}</span>
          </h1>

          <p className="hero-desc">{t('hero.description')}</p>

          <div className="hero-btns">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#whatsapp-connect"
              className="hero-cta-primary"
            >
              <span>{t('hero.cta_primary')}</span>
              <ArrowRight size={18} />
            </motion.a>
            <a href="#about" className="hero-cta-secondary">
              {t('hero.cta_secondary')}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <div className="hero-trust-icon"><ShieldCheck size={22} /></div>
              <div>
                <strong>{t('hero.trust_title')}</strong>
                <p>{t('hero.trust_desc')}</p>
              </div>
            </div>
            <div className="hero-trust-divider"></div>
            <div className="hero-trust-item">
              <div className="hero-trust-icon"><Award size={22} /></div>
              <div>
                <strong>{t('about.exp_years')}</strong>
                <p>{t('about.exp_text')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(5, 20, 13, 0.80) 0%,
            rgba(10, 38, 26, 0.70) 50%,
            rgba(5, 20, 13, 0.75) 100%
          );
          z-index: 1;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          z-index: 1;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }

        .hero-bg-leaf {
          position: absolute;
          color: rgba(255, 255, 255, 0.06);
          z-index: 1;
        }

        .hero-leaf-1 { top: 8%; right: 6%; transform: rotate(35deg); }
        .hero-leaf-2 { bottom: 10%; left: 4%; transform: rotate(-20deg); }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          background: rgba(212, 175, 55, 0.12);
          backdrop-filter: blur(12px);
          color: var(--accent);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 100px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1.5px;
          margin-bottom: 32px;
        }

        .hero-title {
          font-size: 4.5rem;
          line-height: 1.08;
          color: white;
          margin-bottom: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .hero-gold {
          color: var(--accent);
          position: relative;
        }

        .hero-desc {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          max-width: 600px;
          margin-bottom: 44px;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 56px;
        }

        .hero-cta-primary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 100px;
          font-weight: 700;
          font-size: 1.05rem;
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.35);
          transition: all 0.3s;
        }

        .hero-cta-primary:hover {
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.5);
          transform: translateY(-2px);
        }

        .hero-cta-secondary {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          padding: 16px 8px;
          border-bottom: 2px solid rgba(212, 175, 55, 0.4);
          transition: all 0.3s;
        }

        .hero-cta-secondary:hover {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }

        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 24px 40px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .hero-trust-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.15);
        }

        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hero-trust-icon {
          width: 46px;
          height: 46px;
          background: rgba(212, 175, 55, 0.15);
          color: var(--accent);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-trust-item strong {
          display: block;
          font-size: 1rem;
          color: white;
          font-weight: 700;
        }

        .hero-trust-item p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.4rem; }
          .hero-section { padding: 100px 0 60px; }
          .hero-desc { font-size: 1.1rem; }
          .hero-trust-row { gap: 24px; padding: 22px 28px; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.6rem; }
          .hero-section { padding: 90px 0 50px; }
          .hero-btns { flex-direction: column; width: 100%; }
          .hero-cta-primary { width: 100%; justify-content: center; }
          .hero-cta-secondary { justify-content: center; }
          .hero-trust-row { flex-direction: column; gap: 20px; padding: 22px; }
          .hero-trust-divider { width: 60px; height: 1px; }
          .hero-badge { font-size: 0.7rem; padding: 8px 18px; }
          .hero-bg-leaf { display: none; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2rem; }
          .hero-desc { font-size: 1rem; margin-bottom: 32px; }
          .hero-btns { gap: 16px; margin-bottom: 40px; }
          .hero-cta-primary { padding: 14px 28px; font-size: 0.95rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
