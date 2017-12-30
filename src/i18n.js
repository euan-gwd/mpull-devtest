import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n.use(reactI18nextModule).init({
  resources: {
    en: {
      translations: {
        SolutionsMenu: 'solutions',
        CasesMenu: 'cases',
        InsightsMenu: 'insights',
        AboutUsMenu: 'about us',
        ContactMenu: 'contact',
        VideoFrameTitle: 'nordic excellence worldwide',
        WhoWeWorkWithTitle: 'Who We Work With',
        ReadMoreBtn: 'Read More'
      }
    },
    dk: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'sager',
        InsightsMenu: 'indsigter',
        AboutUsMenu: 'om os',
        ContactMenu: 'kontakt',
        VideoFrameTitle: 'nordic ekspertise på verdensplan'
      }
    },
    no: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'saker',
        InsightsMenu: 'innsikt',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakt',
        VideoFrameTitle: 'nordic fortreffelighet over hele verden'
      }
    },
    se: {
      translations: {
        SolutionsMenu: 'lösningar',
        CasesMenu: 'fall',
        InsightsMenu: 'insikter',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakta',
        VideoFrameTitle: 'nordic kompetens i hela världen'
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
