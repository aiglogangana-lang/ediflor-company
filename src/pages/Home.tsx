import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import { useRecruitment } from '../components/RecruitmentProvider';

const Home = () => {
  const { openRecruitment } = useRecruitment();
  const handlePostuler = (post: string) => {
    openRecruitment(post);
  };

  return (
    <>
      <Hero />
      <About />
      <Services onPostuler={handlePostuler} />
      <Testimonials />
    </>
  );
};

export default Home;
