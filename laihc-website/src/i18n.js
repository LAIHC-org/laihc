import { createI18n } from 'vue-i18n';
import en from './locales/en';
import es from './locales/es';
import pt from './locales/pt';

const messages = { en, es, pt };

const userLocale = localStorage.getItem('locale') || 'es';

const i18n = createI18n({
  locale: userLocale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  legacy: false,
});

export default i18n;
