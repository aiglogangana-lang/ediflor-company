import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = ({ onPostuler }: { onPostuler?: (post: string) => void }) => {
  const { t } = useTranslation();
  
  const services = [
    { 
      id: 'pliage', 
      type: 'video',
      src: 'https://res.cloudinary.com/dev6op61z/video/upload/v1774618173/Pinterest_2_nluril.mp4'
    },
    { 
      id: 'pli', 
      type: 'video',
      src: 'https://res.cloudinary.com/dev6op61z/video/upload/v1774618179/Pinterest_fu9efr.mp4'
    },
    { 
      id: 'emballage', 
      type: 'image',
      src: 'https://res.cloudinary.com/dev6op61z/image/upload/v1774622142/t%C3%A9l%C3%A9charger_5_yckgkn.jpg'
    },
    { 
      id: 'etiquetage', 
      type: 'image',
      src: 'https://res.cloudinary.com/dev6op61z/image/upload/v1774614905/WhatsApp_Image_2026-03-27_at_11.31.44_cvwtmt.jpg'
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              {t('services.badge')}
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
              {t('services.title')} <br />
              <span className="text-blue-600 dark:text-blue-400 italic font-serif">{t('services.titleAccent')}</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md pb-2">
            {t('services.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-3xl">
          {services.map((s, idx) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 p-8 md:p-12 flex flex-col justify-between transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <div className="mb-12">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                  <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800 relative group/media">
                  {s.type === 'video' ? (
                    <video 
                      src={s.src} 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    />
                  ) : (
                    <img 
                      src={s.src} 
                      alt={t(`services.items.${s.id}.title`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {t(`services.items.${s.id}.title`)}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                  {t(`services.items.${s.id}.desc`)}
                </p>
              </div>

              <button 
                onClick={() => onPostuler?.(t(`services.items.${s.id}.title`))}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:gap-5 transition-all"
              >
                {t('services.apply')}
                <div className="h-px w-8 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-12" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
