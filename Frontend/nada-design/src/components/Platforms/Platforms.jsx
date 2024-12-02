import React from 'react';
import './Platforms.css'; // Import your CSS file for styling
import { useTranslation } from 'react-i18next'; // Import i18next hook to handle language change

const Platforms = () => {
  const { t } = useTranslation(); 

  return (
    <div className="card-container">
      <div className="card">
        <div className="icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX75e3tZM64uEybrSCaJBn2C4tYZgHxzPQmQ&s" alt="Secure Platform" />
        </div>
        <h3>{t('whistleblower.upload_proof')} </h3>
        <a href="https://share.streamlit.io/your-link" target="_blank" rel="noopener noreferrer">
          <button className="streamlit-link">{t('whistleblower.go_to_streamlit')}</button>
        </a>
      </div>

      <div className="card">
        <div className="icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHq-vaUK8MlOy8sPlCE5cHlSF9w7jUJ6YDQ&s" alt="WhatsApp Messaging" />
        </div>
        <h3>{t('whistleblower.whatsapp_messaging')}</h3>
        <button className="whatsapp-link" onClick={() => window.open('https://wa.me/41798078518', '_blank')}>{t('whistleblower.chat_on_whatsapp')}</button>
        </div>

      <div className="card">
        <div className="icon">
          <img src="data:image/png;base64,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" alt="Anonymous Email" />
        </div>
        <h3>{t('whistleblower.anonymous_email')}</h3>
        <a href="mailto:nada@example.com">
       <button className="gmail-link">{t('whistleblower.email_nada')}</button>
       </a>
        
      </div>
    </div>
  );
};

export default Platforms;
