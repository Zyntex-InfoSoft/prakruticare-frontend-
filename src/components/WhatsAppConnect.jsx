import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight, MessageCircle, HeartPulse, Wind, Flame, UtensilsCrossed,
  Pill, Bandage, Gem, Droplets, Dumbbell, Sparkles
} from 'lucide-react';

const WhatsAppConnect = () => {
  const { t } = useTranslation();

  const ailments = [
    { key: 'gas', Icon: Wind, bg: '#e8f5e9', fg: '#2e7d32' },
    { key: 'acidity', Icon: Flame, bg: '#fff3e0', fg: '#e65100' },
    { key: 'athapo', Icon: UtensilsCrossed, bg: '#f3e5f5', fg: '#7b1fa2' },
    { key: 'piles', Icon: Pill, bg: '#ffebee', fg: '#c62828' },
    { key: 'fissure', Icon: Bandage, bg: '#e3f2fd', fg: '#1565c0' },
    { key: 'stone', Icon: Gem, bg: '#fce4ec', fg: '#ad1457' },
    { key: 'diabetes', Icon: Droplets, bg: '#fff8e1', fg: '#f57f17' },
    { key: 'muscle_pain', Icon: Dumbbell, bg: '#e0f2f1', fg: '#00695c' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleWhatsApp = (ailmentKey) => {
    const ailmentName = t(`treatments.ailments.${ailmentKey}`);
    const message = t('whatsapp_message', { ailment: ailmentName });
    window.open(`https://wa.me/919925963739?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="whatsapp-connect" className="wac-section">
      <div className="wac-bg-dots" />
      <div className="wac-bg-glow" />
      <div className="wac-bg-glow2" />

      <div className="container wac-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="wac-header"
        >
          <div className="wac-badge">
            <MessageCircle size={14} />
            <span>{t('whatsapp_connect.badge')}</span>
          </div>
          <h2 className="wac-title">
            {t('whatsapp_connect.title_p1')} <br />
            <span className="wac-highlight">{t('whatsapp_connect.title_h1')}</span>
          </h2>
          <p className="wac-subtitle">{t('whatsapp_connect.subtitle')}</p>
        </motion.div>

        {/* Practitioner Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="wac-strip"
        >
          <div className="wac-strip-avatar">
            <HeartPulse size={22} />
          </div>
          <div className="wac-strip-info">
            <strong>{t('contact.practitioner1')}</strong>
            {/* <span>{t('whatsapp_connect.practitioner_role')}</span> */}
          </div>
          <div className="wac-strip-sep" />
          <div className="wac-strip-status">
            <span className="wac-dot" />
            <span>{t('whatsapp_connect.response_time')}</span>
          </div>
        </motion.div>

        {/* Ailment Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="wac-grid"
        >
          {ailments.map((item) => {
            const { Icon } = item;
            return (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="wac-card"
                onClick={() => handleWhatsApp(item.key)}
              >
                <div className="wac-card-inner">
                  <div className="wac-card-icon" style={{ background: item.bg }}>
                    <Icon size={22} style={{ color: item.fg }} />
                  </div>
                  <div className="wac-card-text">
                    <h4>{t(`treatments.ailments.${item.key}`)}</h4>
                    <p>{t(`whatsapp_connect.ailment_desc.${item.key}`)}</p>
                  </div>
                </div>
                <div className="wac-card-footer">
                  <div className="wac-card-wa">
                    <MessageCircle size={14} />
                  </div>
                  <span>{t('whatsapp_connect.chat_btn')}</span>
                  <ArrowRight size={14} className="wac-card-arrow" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="wac-cta"
        >
          <div className="wac-cta-left">
            <Sparkles size={20} />
            <p>{t('whatsapp_connect.cta_text')}</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919925963739"
            target="_blank"
            rel="noopener noreferrer"
            className="wac-cta-btn"
          >
            <MessageCircle size={18} />
            <span>{t('whatsapp_connect.cta_btn')}</span>
          </motion.a>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .wac-section {
          padding: 120px 0;
          background: linear-gradient(175deg, #f4faf6 0%, #faf8f4 50%, #f2f8f5 100%);
          position: relative;
          overflow: hidden;
        }

        .wac-bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(10, 38, 26, 0.025) 1px, transparent 0);
          background-size: 32px 32px;
          z-index: 0;
        }

        .wac-bg-glow {
          position: absolute;
          top: -150px;
          right: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 211, 102, 0.07) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .wac-bg-glow2 {
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .wac-container { position: relative; z-index: 1; }

        /* Header */
        .wac-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .wac-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 22px;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: white;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 24px;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.25);
        }

        .wac-title {
          font-size: 3.4rem;
          color: var(--primary);
          line-height: 1.12;
          margin-bottom: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .wac-highlight {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .wac-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Practitioner Strip */
        .wac-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 16px 36px;
          background: white;
          border-radius: 100px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(37, 211, 102, 0.12);
          max-width: 560px;
          margin: 0 auto 56px;
        }

        .wac-strip-avatar {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-vibrant) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .wac-strip-info { display: flex; flex-direction: column; }
        .wac-strip-info strong { font-size: 1rem; color: var(--primary); font-weight: 700; }
        .wac-strip-info span { font-size: 0.78rem; color: var(--text-muted); font-weight: 500; }

        .wac-strip-sep {
          width: 1px;
          height: 36px;
          background: rgba(0, 0, 0, 0.08);
        }

        .wac-strip-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #128c7e;
          font-weight: 600;
        }

        .wac-dot {
          width: 9px;
          height: 9px;
          background: #25d366;
          border-radius: 50%;
          animation: wac-pulse 2s ease-in-out infinite;
        }

        @keyframes wac-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 0 0 7px rgba(37, 211, 102, 0); }
        }

        /* Grid */
        .wac-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }

        .wac-card {
          background: white;
          border-radius: 22px;
          padding: 24px;
          cursor: pointer;
          border: 1.5px solid rgba(0, 0, 0, 0.04);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 190px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .wac-card:hover {
          border-color: rgba(37, 211, 102, 0.35);
          box-shadow: 0 16px 40px rgba(37, 211, 102, 0.1), 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .wac-card:hover .wac-card-wa { background: #25d366; color: white; }
        .wac-card:hover .wac-card-footer { color: #128c7e; }
        .wac-card:hover .wac-card-arrow { transform: translateX(4px); }

        .wac-card-inner {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .wac-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wac-card-text h4 {
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 3px;
          font-weight: 700;
        }

        .wac-card-text p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .wac-card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          transition: color 0.3s;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        .wac-card-wa {
          width: 28px;
          height: 28px;
          background: #e8f5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #25d366;
          transition: all 0.3s;
          flex-shrink: 0;
        }

        .wac-card-arrow {
          margin-left: auto;
          transition: transform 0.3s;
        }

        /* CTA */
        .wac-cta {
          background: linear-gradient(145deg, var(--primary) 0%, #163d28 100%);
          border-radius: 24px;
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: 0 16px 50px rgba(10, 38, 26, 0.18);
        }

        .wac-cta-left {
          display: flex;
          align-items: center;
          gap: 14px;
          color: white;
        }

        .wac-cta-left p {
          font-size: 1.1rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .wac-cta-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #25d366;
          color: white;
          border-radius: 100px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
          transition: all 0.3s;
        }

        .wac-cta-btn:hover {
          background: #1db954;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .wac-grid { grid-template-columns: repeat(2, 1fr); }
          .wac-title { font-size: 2.8rem; }
        }

        @media (max-width: 1024px) {
          .wac-title { font-size: 2.6rem; }
          .wac-subtitle { font-size: 1.05rem; }
        }

        @media (max-width: 768px) {
          .wac-section { padding: 80px 0; }
          .wac-title { font-size: 2.2rem; }
          .wac-strip {
            flex-wrap: wrap;
            border-radius: 20px;
            padding: 18px;
            gap: 12px;
            justify-content: flex-start;
          }
          .wac-strip-sep { display: none; }
          .wac-cta {
            flex-direction: column;
            text-align: center;
            padding: 28px;
          }
          .wac-cta-left { justify-content: center; }
          .wac-card { min-height: auto; }
        }

        @media (max-width: 480px) {
          .wac-grid { grid-template-columns: 1fr; gap: 14px; }
          .wac-card { padding: 20px; }
          .wac-title { font-size: 1.9rem; }
          .wac-cta-btn { padding: 12px 24px; font-size: 0.9rem; }
        }
      `}} />
    </section>
  );
};

export default WhatsAppConnect;
