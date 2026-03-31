import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.items.q1.q'),
      answer: t('faq.items.q1.a')
    },
    {
      question: t('faq.items.q2.q'),
      answer: t('faq.items.q2.a')
    },
    {
      question: t('faq.items.q3.q'),
      answer: t('faq.items.q3.a')
    },
    {
      question: t('faq.items.q4.q'),
      answer: t('faq.items.q4.a')
    },
    {
      question: t('faq.items.q5.q'),
      answer: t('faq.items.q5.a')
    },
    {
      question: t('faq.items.q6.q'),
      answer: t('faq.items.q6.a')
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('faq.title')} <span className="text-blue-600 dark:text-blue-400 italic">{t('faq.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('faq.desc')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={cn("text-gray-400 transition-transform duration-200", openIndex === i ? "rotate-180" : "")} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-slate-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
