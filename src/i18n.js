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
        ReadMoreBtn: 'Read More',
        ReadGlexBtn: 'Read the new glex',
        CustomerSurveyBtn: 'Customer Survey'
      }
    },
    dk: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'sager',
        InsightsMenu: 'indsigter',
        AboutUsMenu: 'om os',
        ContactMenu: 'kontakt',
        NEWTitle: 'nordic ekspertise på verdensplan',
        WhoWeWorkWithTitle: 'Who We Work With',
        RightInsiderKnowledgeTitle: 'Who We Work With',
        ProvenSurveySolutionsTitle: 'Who We Work With',
        ProvenByCustomersTitle: 'Who We Work With',
        PositiveChangeTitle: 'Who We Work With',
        OurSurveySolutionsTitle: 'Who We Work With',
        ReadMoreBtn: 'Read More',
        ReadGlexBtn: 'Read the new glex',
        CustomerSurveyBtn: 'Customer Survey'
      }
    },
    no: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'saker',
        InsightsMenu: 'innsikt',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakt',
        NEWTitle: 'nordic fortreffelighet over hele verden',
        WhoWeWorkWithTitle: 'Who We Work With',
        ReadMoreBtn: 'Read More',
        ReadGlexBtn: 'Read the new glex',
        CustomerSurveyBtn: 'Customer Survey'
      }
    },
    se: {
      translations: {
        SolutionsMenu: 'lösningar',
        CasesMenu: 'fall',
        InsightsMenu: 'insikter',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakta',
        NEWTitle: 'nordic kompetens i hela världen',
        WhoWeWorkWithTitle: 'Who We Work With',
        ReadMoreBtn: 'Read More',
        ReadGlexBtn: 'Read the new glex',
        CustomerSurveyBtn: 'Customer Survey'
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
