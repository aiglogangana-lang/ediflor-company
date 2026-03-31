import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t('howItWorks.steps.s1.title'),
      desc: t('howItWorks.steps.s1.desc'),
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: t('howItWorks.steps.s2.title'),
      desc: t('howItWorks.steps.s2.desc'),
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      title: t('howItWorks.steps.s3.title'),
      desc: t('howItWorks.steps.s3.desc'),
      icon: <ArrowRight className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('howItWorks.title')} <span className="text-blue-600 dark:text-blue-400 italic">{t('howItWorks.titleAccent')}</span> ?
          </h2>
          <p className="text-slate-500 dark:text-slate-400">{t('howItWorks.desc')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
