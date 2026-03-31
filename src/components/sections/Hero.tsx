import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useRecruitment } from '../RecruitmentProvider';

const Hero = () => {
  const { t } = useTranslation();
  const { openRecruitment } = useRecruitment();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#0A0F1E] transition-all duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/5 dark:from-blue-900/20 dark:to-transparent" />
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#1A73E8]/10 dark:bg-[#1B3A6B]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-800/10 rounded-full blur-[100px]" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#1A73E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            {t('hero.badge')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            {t('hero.title')} <br />
            <span className="text-blue-600 dark:text-blue-400">
              {t('hero.titleAccent')}
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            {t('hero.desc')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.div 
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 0 25px rgba(37, 99, 235, 0.4)"
              }} 
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <button 
                onClick={() => openRecruitment()}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-blue-200 dark:shadow-none transition-all hover:bg-blue-700"
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                {t('nav.contact')}
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-12 flex items-center gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" alt="User" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                +500
              </div>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-base leading-none mb-1">1,200+ {t('hero.stats.partnersDesc')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{t('hero.stats.community')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
            <img 
              src="https://res.cloudinary.com/dev6op61z/image/upload/v1774618499/t%C3%A9l%C3%A9charger_4_yscrls.jpg" 
              alt="Professional Workspace" 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            
            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -left-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[180px]"
            >
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 mb-2">
                <CheckCircle size={18} />
              </div>
              <p className="text-slate-900 dark:text-white font-bold text-sm mb-1">{t('hero.stats.quality')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{t('hero.stats.qualityDesc')}</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-8 -right-8 p-4 bg-blue-600 text-white rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <Star size={14} className="fill-current" />
                </div>
                <p className="font-bold text-sm">{t('hero.stats.topRated')}</p>
              </div>
              <p className="text-blue-100 text-xs">{t('hero.stats.topRatedDesc')}</p>
            </motion.div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
