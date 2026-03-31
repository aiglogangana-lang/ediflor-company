import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingApplyButton from './FloatingApplyButton';
import CoinBurst from './CoinBurst';
import { useRecruitment } from './RecruitmentProvider';

const Layout = () => {
  const { openRecruitment } = useRecruitment();
  const handleApply = () => {
    openRecruitment('Agent d\'Étiquetage');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans scroll-smooth transition-colors">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingApplyButton onApply={handleApply} />
      <CoinBurst />
    </div>
  );
};

export default Layout;
