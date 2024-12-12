import React from 'react';
import VisionSection from "../components/VisionSection/VisionSection";
import Howtodoitsection from "../components/Howtodoitsection/Howtodoitsection";
import flow from "../assets/Flow.png"
import medals from "../assets/medals.png"
import Computers from "../assets/Computers.png"
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Process from '../components/Process/Process';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Helpline/Helpline';
const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <VisionSection />
     
 <Howtodoitsection
        heading={t('About Us.subheading')}
        text={t('About Us.how_we_do_it')}
        buttonLabel={t('About Us.cta')}
        image={flow}
        layout="image-right"
      />
      <WhyChooseUs/>
      <Process/>
      <Footer/>

 


    </>
  );
};

export default About;





