import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import backend from 'i18next-http-backend'; // optional if you want to load translations from a server
import languageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en/global.json'; // English translations
import hiTranslations from './translations/hi/global.json'; // Hindi translations

i18n
//   .use(backend) // optional if using external translations
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug:true,
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations }
    },
    lng: 'en', // Default language is english
    fallbackLng: 'hi', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes XSS
    }
  });

export default i18n;
