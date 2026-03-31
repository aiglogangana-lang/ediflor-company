import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Upload, Loader2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { improveText } from '../services/gemini';

interface RecruitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPost?: string;
}

const RecruitmentModal = ({ isOpen, onClose, initialPost = '' }: RecruitmentModalProps) => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: initialPost,
    message: '',
    cv: null as File | null
  });

  useEffect(() => {
    if (isOpen) {
      const directions: ('left' | 'right' | 'top' | 'bottom')[] = ['left', 'right', 'top', 'bottom'];
      setDirection(directions[Math.floor(Math.random() * directions.length)]);
      setFormData(prev => ({ ...prev, poste: initialPost }));
      setIsSuccess(false);
    }
  }, [isOpen, initialPost]);

  const handleImproveMessage = async () => {
    if (!formData.message) return;
    setAiLoading(true);
    try {
      const improved = await improveText(
        formData.message, 
        `Candidature pour le poste de ${formData.poste || 'collaborateur'}`,
        i18n.language
      );
      setFormData({ ...formData, message: improved });
    } catch (error) {
      console.error("AI Improvement error:", error);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          ...formData,
          cv_name: formData.cv ? formData.cv.name : 'No CV attached'
        }, publicKey);
      } else {
        await new Promise(r => setTimeout(r, 1500));
      }
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert(t('careers.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] md:max-h-[88vh] border border-slate-100 dark:border-slate-700"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-blue-400" />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 transition-colors z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <X size={18} />
            </button>

            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <div className="py-16 text-center">
                  <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{t('careers.form.success')}</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xs mx-auto leading-relaxed">{t('careers.form.successMsg')}</p>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 active:scale-95"
                  >
                    {t('careers.form.back')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <Sparkles size={12} />
                      {t('hero.badge')}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">{t('careers.form.title')}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t('careers.desc')}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.nom')}</label>
                        <input 
                          required
                          type="text" 
                          value={formData.nom}
                          onChange={e => setFormData({...formData, nom: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-sm shadow-sm" 
                          placeholder="Ex: Martin"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.prenom')}</label>
                        <input 
                          required
                          type="text" 
                          value={formData.prenom}
                          onChange={e => setFormData({...formData, prenom: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-sm shadow-sm" 
                          placeholder="Ex: Jean"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.email')}</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-sm shadow-sm" 
                          placeholder="jean.martin@email.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.tel')}</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.telephone}
                          onChange={e => setFormData({...formData, telephone: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-sm shadow-sm" 
                          placeholder="+33 6 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.poste')}</label>
                      <div className="relative">
                        <select 
                          required
                          value={formData.poste}
                          onChange={e => setFormData({...formData, poste: e.target.value})}
                          className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-sm shadow-sm appearance-none"
                        >
                          <option value="">{t('careers.form.postePlaceholder')}</option>
                          <option value="Pliage">{t('services.items.pliage.title')}</option>
                          <option value="Mise sous pli">{t('services.items.pli.title')}</option>
                          <option value="Étiquetage">{t('services.items.etiquetage.title')}</option>
                          <option value="Conditionnement">{t('services.items.emballage.title')}</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <Loader2 size={16} className={aiLoading ? "animate-spin" : "hidden"} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.message')}</label>
                        <button 
                          type="button"
                          onClick={handleImproveMessage}
                          disabled={aiLoading || !formData.message}
                          className="text-[11px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline disabled:opacity-50 transition-opacity"
                        >
                          {aiLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                          {t('careers.form.aiImprove')}
                        </button>
                      </div>
                      <textarea 
                        required
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-2xl px-5 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none resize-none transition-all text-sm shadow-sm" 
                        placeholder={t('careers.form.messagePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase ml-1 tracking-wider">{t('careers.form.cv')}</label>
                      <label className="block border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-blue-400 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all cursor-pointer bg-gray-50/50 dark:bg-slate-900/30 group">
                        <Upload className="mx-auto text-gray-400 mb-2 group-hover:text-blue-500 transition-colors" size={24} />
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {formData.cv ? (formData.cv as File).name : t('careers.form.cvPlaceholder')}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept=".pdf,.doc,.docx"
                          onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) setFormData({...formData, cv: file});
                          }}
                        />
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-blue-500/25 active:scale-[0.98]"
                      >
                        {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : (
                          <>
                            {t('careers.form.submit')}
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RecruitmentModal;
