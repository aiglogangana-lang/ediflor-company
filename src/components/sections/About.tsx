import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Globe, Star, Sparkles, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { label: t('about.points.p1'), value: "07", icon: <CheckCircle className="text-blue-500" /> },
    { label: t('hero.stats.partnersDesc'), value: "1200+", icon: <Globe className="text-blue-500" /> },
    { label: t('about.points.p3'), value: "759+", icon: <Star className="text-yellow-500" /> },
    { label: t('hero.stats.satisfactionDesc'), value: "100%", icon: <Sparkles className="text-purple-500" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://res.cloudinary.com/dev6op61z/image/upload/v1774618040/t%C3%A9l%C3%A9charger_2_ruhpa8.jpg" 
                alt="Working from home" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 p-8 bg-blue-600 text-white rounded-2xl shadow-xl hidden md:block max-w-xs"
            >
              <Quote size={32} className="mb-4 opacity-30" />
              <p className="text-xl font-bold mb-4">"{t('careers.job.quote')}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=32" alt="Manager" />
                </div>
                <p className="text-blue-100 text-sm font-semibold">— Patrick Menis, CEO</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A73E8]/10 dark:bg-[#1B3A6B]/30 text-[#1A73E8] dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                {t('about.badge')}
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#0D0D0D] dark:text-white mb-8 leading-tight tracking-tight">
                {t('about.title')}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {t('about.desc1')} {t('about.desc2')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white dark:bg-[#121212]/50 border border-slate-100 dark:border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-none backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-black text-[#0D0D0D] dark:text-white mb-2">{stat.value}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-[#0D0D0D] rounded-2xl font-bold text-lg shadow-xl transition-all"
              >
                {t('about.more')}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
