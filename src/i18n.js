import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n.use(reactI18nextModule).init({
  resources: {
    en: {
      translations: {
        videoFrameTitle: 'Nordic Excellence Worldwide'
      }
    },
    dk: {
      translations: {
        videoFrameTitle: 'Nordic Fortræffelighed I hele verden'
      }
    },
    no: {
      translations: {
        videoFrameTitle: 'nordic fortreffelighet over hele verden'
      }
    },
    se: {
      translations: {
        videoFrameTitle: 'nordic kompetens i hela världen'
      }
    }
  },
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true
  }
});

export default i18n;
