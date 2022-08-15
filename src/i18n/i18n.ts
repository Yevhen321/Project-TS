import * as i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import ru from '../locales/ru';

i18n
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
    resources: {
      en,
      ru,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// const { t, i18n } = useTranslation();

// const changeLanguage = (lng: string) => {
//   i18n.changeLanguage(lng);
// };
//     <Button
//       text={t('INPUT.COMMON_NAME', { ns: 'input' })}
//       onClick={() => changeLanguage('ru')}
//       />
