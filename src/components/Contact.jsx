import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, User, ShieldCheck, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-dots" />
      <div className="container contact-container">
        <div className="contact-grid">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="contact-info"
          >
            <span className="contact-badge">{t('contact.badge')}</span>
            <h2 className="contact-title">{t('contact.main_title')}</h2>
            <p className="contact-desc">{t('contact.desc')}</p>

            <div className="contact-list">
              <div className="contact-list-item">
                <div className="contact-list-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>{t('contact.location_title')}</strong>
                  <p>{t('contact.location_desc')}</p>
                </div>
              </div>
              <div className="contact-list-item">
                <div className="contact-list-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong>{t('contact.trust_title')}</strong>
                  <p>{t('contact.trust_desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="contact-card-wrap"
          >
            <div className="contact-card">
              <div className="contact-card-top">
                <div className="contact-card-avatar">
                  <User size={36} />
                </div>
              </div>
              <div className="contact-card-body">
                <h3>{t('contact.practitioner1')}</h3>
                {/* <span className="contact-card-email">
                  <Mail size={14} />
                  darshantank83@gmail.com
                </span> */}
                <div className="contact-card-divider" />
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:9925963739"
                  className="contact-phone-btn"
                >
                  <Phone size={18} />
                  <span>9925963739</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/919925963739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-wa-btn"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-section {
          background: var(--bg-cream, #faf8f4);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .contact-bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(10, 38, 26, 0.02) 1px, transparent 0);
          background-size: 36px 36px;
        }

        .contact-container { position: relative; z-index: 1; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Info Side */
        .contact-badge {
          display: inline-block;
          color: var(--accent);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-size: 0.78rem;
          margin-bottom: 18px;
        }

        .contact-title {
          font-size: 3.2rem;
          color: var(--primary);
          line-height: 1.12;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-vibrant, #1a4f35) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 480px;
        }

        .contact-list {
          display: grid;
          gap: 20px;
        }

        .contact-list-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px;
          background: white;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s;
        }

        .contact-list-item:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
        }

        .contact-list-icon {
          width: 44px;
          height: 44px;
          background: var(--accent-soft, rgba(212, 175, 55, 0.12));
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-list-item strong {
          display: block;
          font-size: 1rem;
          color: var(--primary);
          margin-bottom: 3px;
        }

        .contact-list-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Card Side */
        .contact-card-wrap { display: flex; justify-content: center; }

        .contact-card {
          width: 100%;
          max-width: 360px;
          background: white;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .contact-card-top {
          height: 100px;
          background: linear-gradient(135deg, var(--primary) 0%, #1a4f35 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card-avatar {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-card-body {
          padding: 32px 28px;
          text-align: center;
        }

        .contact-card-body h3 {
          font-size: 1.4rem;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .contact-card-email {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .contact-card-divider {
          width: 40px;
          height: 3px;
          background: var(--accent);
          border-radius: 10px;
          margin: 20px auto;
        }

        .contact-phone-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          background: var(--primary);
          color: white;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          margin-bottom: 10px;
          box-shadow: 0 8px 24px rgba(10, 38, 26, 0.15);
          transition: all 0.3s;
        }

        .contact-phone-btn:hover {
          box-shadow: 0 12px 32px rgba(10, 38, 26, 0.25);
        }

        .contact-wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          background: #25d366;
          color: white;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.2);
          transition: all 0.3s;
        }

        .contact-wa-btn:hover {
          background: #1db954;
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.35);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .contact-info { text-align: center; }
          .contact-desc { margin-left: auto; margin-right: auto; }
          .contact-list-item { text-align: left; }
          .contact-title { font-size: 2.6rem; }
        }

        @media (max-width: 640px) {
          .contact-section { padding: 80px 0; }
          .contact-title { font-size: 2.2rem; }
          .contact-card { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .contact-title { font-size: 1.9rem; }
          .contact-desc { font-size: 1rem; margin-bottom: 28px; }
          .contact-list-item { padding: 14px; gap: 12px; }
          .contact-card-body { padding: 24px 20px; }
        }
      `}} />
    </section>
  );
};

export default Contact;
