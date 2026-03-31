import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Languages, Sun, Moon, Search, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

import { useRecruitment } from './RecruitmentProvider';
import { ALL_LANGUAGES } from '../constants/languages';
import { translateObject } from '../services/gemini';
import { resources } from '../i18n';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { openRecruitment } = useRecruitment();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  
  const changeLanguage = async (lng: string) => {
    // Check if language already exists in i18next resources
    if (i18n.hasResourceBundle(lng, 'translation')) {
      i18n.changeLanguage(lng);
      setIsLangOpen(false);
      setIsMobileMenuOpen(false);
      return;
    }

    // Check localStorage for cached translation
    const cached = localStorage.getItem(`translation_${lng}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      i18n.addResourceBundle(lng, 'translation', parsed, true, true);
      i18n.changeLanguage(lng);
      setIsLangOpen(false);
      setIsMobileMenuOpen(false);
      return;
    }

    // Otherwise, translate using AI
    setIsTranslating(true);
    try {
      const targetLangName = ALL_LANGUAGES.find(l => l.code === lng)?.name || lng;
      const translated = await translateObject(resources.fr.translation, targetLangName);
      
      // Cache and add to i18next
      localStorage.setItem(`translation_${lng}`, JSON.stringify(translated));
      i18n.addResourceBundle(lng, 'translation', translated, true, true);
      i18n.changeLanguage(lng);
    } catch (error) {
      console.error("Dynamic translation failed:", error);
    } finally {
      setIsTranslating(false);
      setIsLangOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const filteredLanguages = ALL_LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">E</div>
          <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
            EDIFLOR
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-all hover:text-blue-600 hover:scale-105",
                location.pathname === link.href ? "text-blue-600" : "text-slate-600 dark:text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                disabled={isTranslating}
                className="p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-2 disabled:opacity-50"
                aria-label="Select Language"
              >
                {isTranslating ? <Loader2 size={20} className="animate-spin" /> : <Languages size={20} />}
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col"
                  >
                    <div className="p-2 border-b border-slate-100 dark:border-slate-700">
                      <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="text"
                          placeholder="Rechercher une langue..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border-none rounded-lg text-xs outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {filteredLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            "w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50",
                            i18n.language === lang.code ? "text-blue-600 font-bold bg-blue-50/50 dark:bg-blue-900/10" : "text-slate-600 dark:text-slate-300"
                          )}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="flex-1">{lang.name}</span>
                          {i18n.language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                        </button>
                      ))}
                      {filteredLanguages.length === 0 && (
                        <div className="p-4 text-center text-xs text-slate-500">Aucune langue trouvée</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-800",
                isDark ? "text-yellow-400" : "text-blue-600"
              )}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-all duration-400",
              isDark ? "text-yellow-400" : "text-blue-600"
            )}
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-slate-900 dark:text-white" /> : <Menu className="text-slate-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-slate-100 dark:border-slate-800 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-medium py-2 border-b border-slate-50 dark:border-slate-800",
                  location.pathname === link.href ? "text-blue-600" : "text-slate-600 dark:text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-300 font-medium text-xs uppercase tracking-widest">{t('nav.language')}</span>
                {isTranslating && <Loader2 size={14} className="animate-spin text-blue-600" />}
              </div>
              
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-xs outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2">
                {filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    disabled={isTranslating}
                    className={cn(
                      "px-3 py-2 rounded-lg border flex items-center gap-2 transition-all text-[10px] disabled:opacity-50",
                      i18n.language === lang.code 
                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 font-bold" 
                        : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                    )}
                  >
                    <span>{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
