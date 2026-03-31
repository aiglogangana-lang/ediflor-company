import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

const ImageWithSkeleton = ({ src, alt, className, referrerPolicy }: { src: string, alt: string, className?: string, referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative w-full h-full bg-slate-800", className)}>
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <ImageIcon className="text-slate-700 w-10 h-10" />
        </div>
      )}
      {!hasError && (
        <img 
          src={src} 
          alt={alt}
          className={cn("w-full h-full object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          referrerPolicy={referrerPolicy}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

const MachineGallery = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<null | any>(null);

  const items = [
    { 
      type: 'video', 
      src: "https://res.cloudinary.com/dev6op61z/video/upload/v1774615181/WhatsApp_Video_2026-03-27_at_11.31.43_k8shoz.mp4", 
      title: t('gallery.items.etiquetage.title'),
      desc: t('gallery.items.etiquetage.desc')
    },
    { 
      type: 'video', 
      src: "https://res.cloudinary.com/dev6op61z/video/upload/v1774615171/WhatsApp_Video_2026-03-27_at_11.31.44_abc45o.mp4", 
      title: t('gallery.items.pliage.title'),
      desc: t('gallery.items.pliage.desc')
    },
    { 
      type: 'image', 
      src: "https://res.cloudinary.com/dev6op61z/image/upload/v1774623091/our_factory_in_China_ye58js.jpg", 
      title: t('gallery.items.qualite.title'),
      desc: t('gallery.items.qualite.desc')
    },
    { 
      type: 'image', 
      src: "https://res.cloudinary.com/dev6op61z/image/upload/v1774622142/t%C3%A9l%C3%A9charger_5_yckgkn.jpg", 
      title: t('gallery.items.logistique.title'),
      desc: t('gallery.items.logistique.desc')
    },
    { 
      type: 'image', 
      src: "https://res.cloudinary.com/dev6op61z/image/upload/v1774615057/WhatsApp_Image_2026-03-27_at_11.31.56_xqrdid.jpg", 
      title: t('gallery.items.materiel.title'),
      desc: t('gallery.items.materiel.desc')
    },
    { 
      type: 'image', 
      src: "https://res.cloudinary.com/dev6op61z/image/upload/v1774618041/pilau_masala_label_design_hsg4dp.jpg", 
      title: t('gallery.items.fini.title'),
      desc: t('gallery.items.fini.desc')
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('gallery.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('gallery.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => item.type === 'video' && setSelectedVideo(item)}
              className={cn(
                "group relative rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700",
                item.type === 'video' ? "cursor-pointer" : ""
              )}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full flex items-center justify-center relative">
                  <ImageWithSkeleton 
                    src={item.src.replace('.mp4', '.jpg')} 
                    alt={item.title}
                    className="opacity-50 group-hover:opacity-70 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <ImageWithSkeleton 
                  src={item.src} 
                  alt={item.title}
                  className="transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-gray-200 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden relative"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
                >
                  <X size={24} />
                </button>
                <div className="aspect-video bg-black">
                   <video 
                    src={selectedVideo.src} 
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 bg-slate-900">
                  <h4 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h4>
                  <p className="text-gray-400">{selectedVideo.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MachineGallery;
