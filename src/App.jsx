import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import WhatsAppConnect from './components/WhatsAppConnect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { Leaf, TreePine, Heart } from 'lucide-react';

import aboutImage from './assets/images/about.jpg';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />

        <Treatments />

        <WhatsAppConnect />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-bg-accent" />
          <div className="container about-container">
            <div className="about-grid">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="about-image"
              >
                <div className="about-img-wrapper">
                  <img src={aboutImage} alt="About PrakrutiCare" />
                </div>
                <div className="about-img-accent" />
                <div className="experience-box">
                  <span className="exp-num">{t('about.exp_years')}</span>
                  <span className="exp-text">{t('about.exp_text')}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="about-details"
              >
                <span className="about-label">{t('about.subtitle')}</span>
                <h2 className="about-title">
                  {t('about.title_p1')} <br />
                  <span className="about-accent">{t('about.title_h1')}</span> {t('about.title_p2')}
                </h2>
                <p className="about-desc">{t('about.desc')}</p>

                <div className="about-features">
                  <div className="about-feat">
                    <div className="about-feat-icon">
                      <TreePine size={20} />
                    </div>
                    <div>
                      <h4>{t('about.feature_1_title')}</h4>
                      <p>{t('about.feature_1_desc')}</p>
                    </div>
                  </div>
                  <div className="about-feat">
                    <div className="about-feat-icon">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4>{t('about.feature_2_title')}</h4>
                      <p>{t('about.feature_2_desc')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .about-section {
          padding: 130px 0;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .about-bg-accent {
          position: absolute;
          top: -200px;
          left: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .about-container { position: relative; z-index: 1; }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 80px;
          align-items: center;
        }

        /* Image Side */
        .about-image {
          position: relative;
          padding: 30px;
        }

        .about-img-wrapper {
          width: 100%;
          aspect-ratio: 0.85;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .about-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-img-accent {
          position: absolute;
          inset: 0;
          background: var(--accent-soft);
          border-radius: 32px;
          transform: rotate(5deg);
          z-index: 1;
        }

        .experience-box {
          position: absolute;
          bottom: 10px;
          right: 0;
          background: var(--primary);
          color: white;
          padding: 22px 28px;
          border-radius: 20px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 14px 40px rgba(10, 38, 26, 0.2);
        }

        .exp-num {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }

        .exp-text {
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.85;
        }

        /* Text Side */
        .about-label {
          display: inline-block;
          color: var(--accent);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-size: 0.78rem;
          margin-bottom: 18px;
        }

        .about-title {
          font-size: 3.2rem;
          color: var(--primary);
          line-height: 1.12;
          margin-bottom: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .about-accent { color: var(--accent); }

        .about-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .about-features {
          display: grid;
          gap: 24px;
        }

        .about-feat {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: var(--bg-cream, #faf8f4);
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          transition: all 0.3s;
        }

        .about-feat:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .about-feat-icon {
          width: 44px;
          height: 44px;
          background: var(--primary);
          color: var(--accent);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-feat h4 {
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .about-feat p {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-image {
            max-width: 500px;
            margin: 0 auto;
          }
          .about-title { font-size: 2.6rem; }
        }

        @media (max-width: 640px) {
          .about-section { padding: 80px 0; }
          .about-title { font-size: 2.2rem; }
          .about-image { padding: 20px; }
        }

        @media (max-width: 480px) {
          .about-section { padding: 60px 0; }
          .about-title { font-size: 1.9rem; }
          .about-desc { font-size: 1rem; margin-bottom: 28px; }
          .experience-box { padding: 16px 20px; }
          .exp-num { font-size: 2.2rem; }
          .about-feat { padding: 16px; gap: 12px; }
        }
      `}} />
    </div>
  );
}

export default App;
