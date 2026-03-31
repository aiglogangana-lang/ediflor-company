import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: t('testimonials.items.t1.name'),
      role: t('testimonials.items.t1.role'),
      quote: t('testimonials.items.t1.quote'),
      image: "https://i.pravatar.cc/150?u=jean"
    },
    {
      name: t('testimonials.items.t2.name'),
      role: t('testimonials.items.t2.role'),
      quote: t('testimonials.items.t2.quote'),
      image: "https://i.pravatar.cc/150?u=marie"
    },
    {
      name: t('testimonials.items.t3.name'),
      role: t('testimonials.items.t3.role'),
      quote: t('testimonials.items.t3.quote'),
      image: "https://i.pravatar.cc/150?u=thomas"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t('testimonials.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{t('testimonials.title')} <span className="text-blue-600 dark:text-blue-400 italic">{t('testimonials.titleAccent')}</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t('testimonials.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-blue-100 dark:text-blue-900 group-hover:text-blue-200 dark:group-hover:text-blue-800 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
