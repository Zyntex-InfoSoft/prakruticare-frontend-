import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLang, setShowLang] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const close = () => setShowLang(false);
        if (showLang) document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [showLang]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLang(false);
    };

    const handleMobileNav = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 350);
    };

    const navLinks = [
        { name: t('nav.home'), href: '#' },
        { name: t('nav.treatments'), href: '#treatments' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const languages = [
        { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'en', name: 'English', flag: '🌐' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-inner">
                <a href="#" className="navbar-brand">
                    <div className="navbar-logo-icon">
                        <Leaf size={20} />
                    </div>
                    <span>Prakruti<span className="brand-accent">Care</span></span>
                </a>

                {/* Desktop Nav */}
                <div className="navbar-desktop">
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-lang-wrapper" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowLang(!showLang)}
                            className="navbar-lang-btn"
                        >
                            <Globe size={16} />
                            <span>{languages.find(l => l.code === i18n.language)?.name || 'Language'}</span>
                            <ChevronDown size={14} className={`lang-chevron ${showLang ? 'open' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {showLang && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.2 }}
                                    className="navbar-lang-dropdown"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                                        >
                                            <span className="lang-flag">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                            {i18n.language === lang.code && <span className="lang-check">✓</span>}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="navbar-mobile-menu"
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleMobileNav(e, link.href)} className="mobile-nav-link">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="mobile-lang-section">
                            <p className="mobile-lang-label">{t('nav.home') === 'Home' ? 'Language' : 'ભાષા'}</p>
                            <div className="mobile-lang-options">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { changeLanguage(lang.code); setIsOpen(false); }}
                                        className={`mobile-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: all 0.35s ease;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.03em;
        }

        .navbar-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-vibrant) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .brand-accent { color: var(--accent); }

        /* Desktop Nav */
        .navbar-desktop {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .navbar-links {
          display: flex;
          gap: 8px;
        }

        .nav-link {
          padding: 8px 18px;
          border-radius: 100px;
          font-weight: 500;
          font-size: 0.92rem;
          color: var(--text-muted);
          transition: all 0.25s;
        }

        .nav-link:hover {
          color: var(--primary);
          background: rgba(10, 38, 26, 0.04);
        }

        /* Language Dropdown */
        .navbar-lang-wrapper { position: relative; }

        .navbar-lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s;
        }

        .navbar-lang-btn:hover {
          background: var(--primary-light);
          transform: translateY(-1px);
        }

        .lang-chevron {
          transition: transform 0.2s;
        }

        .lang-chevron.open { transform: rotate(180deg); }

        .navbar-lang-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          min-width: 180px;
          z-index: 200;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 14px 20px;
          border: none;
          background: none;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .lang-option:hover { background: var(--bg-offwhite); }
        .lang-option.active { background: var(--accent-soft); color: var(--primary); font-weight: 700; }
        .lang-flag { font-size: 1.1rem; }
        .lang-check { margin-left: auto; color: var(--primary-vibrant); font-weight: 700; }

        /* Mobile */
        .navbar-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--primary);
          padding: 8px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
          -webkit-tap-highlight-color: transparent;
        }

        .navbar-mobile-toggle:hover { background: rgba(0,0,0,0.04); }

        .navbar-mobile-menu {
          overflow: hidden;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          position: relative;
          z-index: 100;
          width: 100%;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          gap: 4px;
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 20px;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-dark);
          border-radius: 14px;
          transition: all 0.2s;
          text-align: center;
          width: 100%;
        }

        .mobile-nav-link:hover { background: var(--bg-offwhite); color: var(--primary); }

        .mobile-lang-section {
          padding: 16px 24px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          text-align: center;
        }

        .mobile-lang-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .mobile-lang-options { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }

        .mobile-lang-btn {
          padding: 10px 20px;
          border-radius: 100px;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          background: white;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-dark);
        }

        .mobile-lang-btn:hover { border-color: var(--primary); }
        .mobile-lang-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        @media (max-width: 1024px) {
          .navbar-desktop { display: none; }
          .navbar-mobile-toggle { display: flex; }
          .navbar-inner { height: 64px; }
        }

        @media (max-width: 480px) {
          .navbar-brand { font-size: 1.2rem; }
          .navbar-logo-icon { width: 32px; height: 32px; }
          .navbar-inner { height: 58px; }
        }
      `}} />
        </nav>
    );
};

export default Navbar;
