import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Card from '../components/Card/Card';
import Helpline from '../components/Helpline/Helpline';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <Card/>
      <Helpline />
    </>
  );
};

export default Home;
