import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Flower2, FlaskConical, ArrowRight, Leaf } from 'lucide-react';

const Treatments = () => {
  const { t } = useTranslation();

  return (
    <section id="treatments" className="treat-section">
      <div className="treat-bg-accent"></div>
      <div className="container treat-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="treat-header"
        >
          <div className="treat-badge">
            <Leaf size={14} />
            <span>{t('treatments.title')}</span>
          </div>
          <h2 className="treat-title text-gradient">{t('treatments.title')}</h2>
          <div className="treat-line"></div>
        </motion.div>

        <div className="treat-cards">
          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="treat-card treat-card-dark"
          >
            <div className="treat-card-icon">
              <Flower2 size={28} />
            </div>
            <div className="treat-card-number">01</div>
            <h3>{t('treatments.gharghathu_upchar')}</h3>
            <p>{t('treatments.gharghathu_desc')}</p>
            <a href="#whatsapp-connect" className="treat-card-link">
              <span>{t('hero.cta_primary')}</span>
              <ArrowRight size={16} />
            </a>
            <div className="treat-card-glow"></div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="treat-card treat-card-light"
          >
            <div className="treat-card-icon treat-icon-light">
              <FlaskConical size={28} />
            </div>
            <div className="treat-card-number">02</div>
            <h3>{t('treatments.desi_oshadhi')}</h3>
            <p>{t('treatments.desi_desc')}</p>
            <a href="#whatsapp-connect" className="treat-card-link treat-link-dark">
              <span>{t('hero.cta_primary')}</span>
              <ArrowRight size={16} />
            </a>
            <div className="treat-card-glow treat-glow-light"></div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .treat-section {
          padding: 120px 0;
          background: var(--bg-cream);
          position: relative;
          overflow: hidden;
        }

        .treat-bg-accent {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .treat-container { position: relative; z-index: 1; }

        .treat-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .treat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: var(--accent-soft);
          color: var(--primary);
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .treat-title {
          font-size: 3.2rem;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .treat-line {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--accent-light));
          margin: 0 auto;
          border-radius: 10px;
        }

        .treat-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .treat-card {
          padding: 48px 44px;
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .treat-card-dark {
          background: linear-gradient(145deg, var(--primary) 0%, #163d28 100%);
          color: white;
        }

        .treat-card-light {
          background: white;
          color: var(--text-dark);
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        .treat-card-icon {
          width: 60px;
          height: 60px;
          background: rgba(212, 175, 55, 0.15);
          color: var(--accent);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        .treat-icon-light {
          background: var(--accent-soft);
          color: var(--primary);
        }

        .treat-card-number {
          position: absolute;
          top: 40px;
          right: 44px;
          font-size: 4rem;
          font-weight: 800;
          opacity: 0.06;
          line-height: 1;
        }

        .treat-card h3 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .treat-card p {
          font-size: 1.05rem;
          opacity: 0.8;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .treat-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: gap 0.3s;
        }

        .treat-card-link:hover { gap: 14px; }
        .treat-link-dark { color: var(--primary); }

        .treat-card-glow {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 180px;
          height: 180px;
          background: rgba(212, 175, 55, 0.08);
          border-radius: 50%;
        }

        .treat-glow-light {
          background: rgba(10, 38, 26, 0.03);
        }

        @media (max-width: 1024px) {
          .treat-title { font-size: 2.6rem; }
          .treat-card { padding: 40px 32px; }
          .treat-card h3 { font-size: 1.5rem; }
        }

        @media (max-width: 768px) {
          .treat-section { padding: 80px 0; }
          .treat-cards { grid-template-columns: 1fr; }
          .treat-title { font-size: 2.2rem; }
          .treat-card { padding: 32px 24px; }
          .treat-card h3 { font-size: 1.4rem; }
        }

        @media (max-width: 480px) {
          .treat-header { margin-bottom: 40px; }
          .treat-title { font-size: 1.9rem; }
        }
      `}} />
    </section>
  );
};

export default Treatments;
