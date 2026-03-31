import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;

    setIsSubmitting(true);
    try {
      const token = await executeRecaptcha('contact_form');
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, { ...formData, 'g-recaptcha-response': token }, publicKey);
      } else {
        await new Promise(r => setTimeout(r, 1500));
      }
      
      setIsSuccess(true);
      setFormData({ nom: '', email: '', sujet: '', message: '' });
    } catch (error) {
      console.error("Contact error:", error);
      alert(t('careers.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.description')}
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t('contact.phone')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">+33 (0)4 94 00 00 00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-400">+33 7 56 90 81 75</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t('contact.form.email')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">contact@ediflor.com</p>
                    <p className="text-gray-600 dark:text-gray-400">recrutement@ediflor.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t('contact.address')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">ZAC DES FERRIERES, REPENTENCE</p>
                    <p className="text-gray-600 dark:text-gray-400">83490 LE MUY, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                {t('contact.legal.title')}
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.activity')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{t('contact.legal.activityValue')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.creation')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{t('contact.legal.creationValue')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.manager')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{t('contact.legal.managerValue')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.capital')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{t('contact.legal.capitalValue')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.form')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">{t('contact.legal.formValue')}</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.siret')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">418 094 851 00021</span>
                </div>
                <div className="flex justify-between border-b border-slate-50 dark:border-slate-800 pb-2">
                  <span className="text-slate-500 dark:text-slate-400">{t('contact.legal.rcs')}</span>
                  <span className="text-slate-900 dark:text-white font-medium">RCS Lyon B 418 094 851</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-100 dark:border-slate-700 shadow-lg h-fit">
            {isSuccess ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('careers.form.success')}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{t('careers.form.successMsg')}</p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
                >
                  {t('contact.form.another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input 
                  required 
                  type="text" 
                  value={formData.nom}
                  onChange={e => setFormData({...formData, nom: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder={t('contact.form.name')}
                />
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder={t('contact.form.email')}
                />
                <input 
                  required 
                  type="text" 
                  value={formData.sujet}
                  onChange={e => setFormData({...formData, sujet: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder={t('contact.form.subject')}
                />
                <textarea 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                  placeholder={t('contact.form.message')}
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="mt-12 rounded-xl overflow-hidden h-64 border border-gray-200 dark:border-slate-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.742047744348!2d6.6822926156744386!3d43.473791708205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce97fec7094e9d3%3A0x7fe9c93e4517c39b!2sZAC+des+Ferrieres%2C+83490+Le+Muy!5e0!3m2!1sen!2sfr!4v1647444444444!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
