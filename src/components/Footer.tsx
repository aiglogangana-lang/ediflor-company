import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Loader2, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
              <span className="font-bold text-2xl tracking-tight">EDIFLOR</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, label: 'fb' },
                { icon: <Linkedin size={20} />, label: 'in' },
                { icon: <Twitter size={20} />, label: 'tw' },
                { icon: <Instagram size={20} />, label: 'ig' }
              ].map((s, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.links.title')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">{t('nav.careers')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+33 (0)4 94 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@ediflor.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>83490 LE MUY, France</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.newsletter.title')}</h4>
            <p className="text-gray-400 mb-4 text-sm">{t('footer.newsletter.desc')}</p>
            {isSuccess ? (
              <div className="text-green-400 font-bold text-sm">{t('footer.newsletter.success')}</div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  required
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EDIFLOR COMPANY. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
