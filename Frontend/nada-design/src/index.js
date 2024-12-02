import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from '../src/i18';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider

// import global_en from '../src/translations/en/global.json'
// import global_hi from '../src/translations/hi/global.json'
// import ii8next from 'ii8next'

// ii8next.init({
//   interpolation : {escapeValue:false},
//   lng:"en",
//   resources:{
//     en:{
//       global:global_en
//     },
//     hi{}
//   }
// })
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
