import i18n from 'i18next/index';
import { initReactI18next } from 'react-i18next/src/index';
import detector from 'i18next-browser-languagedetector/index';

import translationEN from './locales/en/translation.json';
import translationPTBR from './locales/pt-BR/translation.json';

// TODO: Provide a way to extend languages.
const resources = {
  en: {
    translation: translationEN
  },
  'pt-BR': {
    translation: translationPTBR
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // use en if detected lng is not available,

    keySeparator: '.', // Using this we can make the i18n file better to merge and adminitrate

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
