import React from 'react';
import CarouselWithVideo from '../components/HeroSection/HeroSection';
import Card from '../components/Card/Card';
import Footer from '../components/Helpline/Helpline';
import { useTranslation } from 'react-i18next';
import ResultsManagementProcess from '../components/result/result'
import Sanctions from '../components/sanctions/sanctions'
const Home = () => {
  // const { t } = useTranslation();

  return (
    <>
      <CarouselWithVideo />
    {/* <ResultsManagementProcess/> */}
      <Card/>
   
      <Footer />
    </>
  );
};

export default Home;
