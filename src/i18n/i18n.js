import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import gu from './gu.json';
import hi from './hi.json';
import en from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      gu,
      hi,
      en
    },
    lng: 'gu', // default language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
