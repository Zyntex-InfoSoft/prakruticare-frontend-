import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t('nav.home'), href: '#' },
    { label: t('nav.treatments'), href: '#treatments' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Leaf size={26} />
              <span>Prakruti<span className="footer-accent">Care</span></span>
            </div>
            <p className="footer-brand-desc">{t('footer.brand_desc')}</p>
            <div className="footer-socials">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href={href}
                  className="footer-social"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>{t('footer.quick_links')}</h4>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>
                    <ArrowUpRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>{t('footer.contact_info')}</h4>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>+91 99259 63739</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>prakruticare@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>{t('contact.location_desc')}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PrakrutiCare. {t('footer.rights')}</p>
          <div className="footer-legal">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--primary);
          color: white;
          padding: 80px 0 36px;
          position: relative;
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(46, 139, 87, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .footer-container { position: relative; z-index: 1; }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 50px;
        }

        /* Brand */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.7rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .footer-logo svg { color: var(--accent); }
        .footer-accent { color: var(--accent); }

        .footer-brand-desc {
          opacity: 0.6;
          line-height: 1.7;
          max-width: 340px;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s;
          text-decoration: none;
        }

        .footer-social:hover {
          background: var(--accent);
          color: var(--primary);
        }

        /* Links */
        .footer h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 22px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 0.82rem;
        }

        .footer-links ul {
          display: grid;
          gap: 14px;
        }

        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .footer-links a svg {
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-links a:hover svg {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        /* Contact */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.92rem;
          line-height: 1.4;
        }

        .footer-contact-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          opacity: 0.5;
        }

        /* Bottom */
        .footer-bottom {
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.35);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-legal a:hover { color: rgba(255, 255, 255, 0.7); }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer { padding: 60px 0 28px; }
          .footer-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-logo { font-size: 1.4rem; }
          .footer-brand-desc { font-size: 0.9rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
