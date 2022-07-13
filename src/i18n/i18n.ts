import * as i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru', 'ua'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'localStorage'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/assets/locales/{{lng}}/translation.json`,
    },
  });

export default i18n;
