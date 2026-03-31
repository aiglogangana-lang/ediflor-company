import React, { createContext, useContext, useState, ReactNode } from 'react';
import RecruitmentModal from './RecruitmentModal';

interface RecruitmentContextType {
  openRecruitment: (poste?: string) => void;
  closeRecruitment: () => void;
}

const RecruitmentContext = createContext<RecruitmentContextType | undefined>(undefined);

export const RecruitmentProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPost, setInitialPost] = useState('');

  const openRecruitment = (poste?: string) => {
    setInitialPost(poste || '');
    setIsOpen(true);
  };

  const closeRecruitment = () => {
    setIsOpen(false);
  };

  return (
    <RecruitmentContext.Provider value={{ openRecruitment, closeRecruitment }}>
      {children}
      <RecruitmentModal 
        isOpen={isOpen} 
        onClose={closeRecruitment} 
        initialPost={initialPost} 
      />
    </RecruitmentContext.Provider>
  );
};

export const useRecruitment = () => {
  const context = useContext(RecruitmentContext);
  if (context === undefined) {
    throw new Error('useRecruitment must be used within a RecruitmentProvider');
  }
  return context;
};
