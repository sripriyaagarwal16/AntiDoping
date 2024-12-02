import React from 'react';
import './ContactUs.css';
import flashlight from "../../assets/Flashlights.png"
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

function Contactus() {
  const { t } = useTranslation(); 

  return (
    <div className="main-container">
      {/* Header Section */}
      <div className="header">
        <h1>{t('whistleblower.whatsapp_number')}</h1>
        <div className="contact-box">
          <p>Send Anonymous Texts to</p>
          <div className="contact-info">
         <a href="tel:+41798078518" target="_blank" rel="noopener noreferrer">
        <button className="contact-number">+41 79 807 85 18</button>
         </a>
        <a href="https://wa.me/41798078518" target="_blank" rel="noopener noreferrer">
        <button className="whatsapp-button">WhatsApp</button>
         </a>
        </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="cont">
        <div className="image-section">
          <div className="image-background">
            <img src={flashlight}/>
          </div>
        </div>
        <div className="text-section">
          <h2>{t('whistleblower.why_report')}</h2>
          <p> 
            <strong>{t('whistleblower.role_of_whistleblower')}</strong> 
          </p>
          <p>
          {t('whistleblower.why_vigilance')}
          </p>
          <p>
          {t('whistleblower.all_info')}
          </p>
          <p>
            <strong> {t('whistleblower.Why_report')}</strong>  {t('whistleblower.vigilence')}
          </p>
          <p>
            <strong>{t('whistleblower.language_is_not_a_barrier')} </strong> {t('whistleblower.language')}


          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
