import React from 'react';
import Services from '../components/sections/Services';
import { useRecruitment } from '../components/RecruitmentProvider';

const ServicesPage = () => {
  const { openRecruitment } = useRecruitment();
  const handlePostuler = (post: string) => {
    openRecruitment(post);
  };

  return (
    <div className="pt-20">
      <Services onPostuler={handlePostuler} />
    </div>
  );
};

export default ServicesPage;
