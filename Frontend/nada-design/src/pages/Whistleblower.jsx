import React from 'react';
import Reveal from '../components/Reveal/Reveal';
import Platforms from '../components/Platforms/Platforms';
import Contactus from '../components/ContactUs/ContactUs';
import { useTranslation } from 'react-i18next';
const Whistleblower = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <Reveal/>
      <Platforms/>
      <Contactus/>
    </>
  );
};

export default Whistleblower;
