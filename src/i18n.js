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
        NordicTitle: 'nordic excellence worldwide',
        PositiveChangeTitle: 'We drive positive change',
        ProvenSurveySolutionsTitle: 'We do proven survey solutions',
        RightInsiderKnowledgeTitle: 'We have the right insider Knowledge',
        MeasureWorldWideTitle: 'We measure worldwide',
        ProvenByCustomersTitle: 'We are proven by our customers',
        WhoWeWorkWithTitle: 'Who We Work With',
        OurSurveySolutionsTitle: 'Our proven survey solutions',
        KeepYouUpdatedTitle: 'We love to keep you updated',
        ReadMoreBtn: 'Read More',
        ReadNewGlexBtn: 'Read the new glex',
        SubmitBtn: 'Submit',
        CustomerSurveyBtn: 'Customer Survey',
        EmployeeSurveyBtn: 'Employee Survey',
        EmployeeExperienceBtn: 'Employee Experience',
        CustomerExperienceBtn: 'Customer Experience',
        OfferBtnTitle: 'Get new insights in our survey rapport',
        OfferBtnTrialTitle: 'Try our survey trial version',
        SearchPlaceholder: 'Type to search...',
        ChangeIconTitle: 'change language',
        NavReturnTitle: 'Back to Main Navigation',
        ReturnToTopBtn: 'Return To Top'
      }
    },
    dk: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'sager',
        InsightsMenu: 'indsigter',
        AboutUsMenu: 'om os',
        ContactMenu: 'kontakt',
        NordicTitle: 'nordic ekspertise på verdensplan',
        PositiveChangeTitle: 'We drive positive change',
        ProvenSurveySolutionsTitle: 'We do proven survey solutions',
        RightInsiderKnowledgeTitle: 'We have the right insider Knowledge',
        MeasureWorldWideTitle: 'We measure worldwide',
        ProvenByCustomersTitle: 'We are proven by our customers',
        WhoWeWorkWithTitle: 'Who We Work With',
        OurSurveySolutionsTitle: 'Our proven survey solutions',
        KeepYouUpdatedTitle: 'We love to keep you updated',
        ReadMoreBtn: 'Read More',
        ReadNewGlexBtn: 'Read the new glex',
        SubmitBtn: 'Submit',
        CustomerSurveyBtn: 'Customer Survey',
        EmployeeSurveyBtn: 'Employee Survey',
        EmployeeExperienceBtn: 'Employee Experience',
        CustomerExperienceBtn: 'Customer Experience',
        OfferBtnTitle: 'Get new insights in our survey rapport',
        OfferBtnTrialTitle: 'Try our survey trial version',
        SearchPlaceholder: 'Type to search...',
        ChangeIconTitle: 'change language',
        NavReturnTitle: 'Back to Main Navigation',
        ReturnToTopBtn: 'Return To Top'
      }
    },
    no: {
      translations: {
        SolutionsMenu: 'løsninger',
        CasesMenu: 'saker',
        InsightsMenu: 'innsikt',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakt',
        NordicTitle: 'nordic ekspertise på verdensplan',
        PositiveChangeTitle: 'We drive positive change',
        ProvenSurveySolutionsTitle: 'We do proven survey solutions',
        RightInsiderKnowledgeTitle: 'We have the right insider Knowledge',
        MeasureWorldWideTitle: 'We measure worldwide',
        ProvenByCustomersTitle: 'We are proven by our customers',
        WhoWeWorkWithTitle: 'Who We Work With',
        OurSurveySolutionsTitle: 'Our proven survey solutions',
        KeepYouUpdatedTitle: 'We love to keep you updated',
        ReadMoreBtn: 'Read More',
        ReadNewGlexBtn: 'Read the new glex',
        SubmitBtn: 'Submit',
        CustomerSurveyBtn: 'Customer Survey',
        EmployeeSurveyBtn: 'Employee Survey',
        EmployeeExperienceBtn: 'Employee Experience',
        CustomerExperienceBtn: 'Customer Experience',
        OfferBtnTitle: 'Get new insights in our survey rapport',
        OfferBtnTrialTitle: 'Try our survey trial version',
        SearchPlaceholder: 'Type to search...',
        ChangeIconTitle: 'change language',
        NavReturnTitle: 'Back to Main Navigation',
        ReturnToTopBtn: 'Return To Top'
      }
    },
    se: {
      translations: {
        SolutionsMenu: 'lösningar',
        CasesMenu: 'fall',
        InsightsMenu: 'insikter',
        AboutUsMenu: 'om oss',
        ContactMenu: 'kontakta',
        NordicTitle: 'nordic ekspertise på verdensplan',
        PositiveChangeTitle: 'We drive positive change',
        ProvenSurveySolutionsTitle: 'We do proven survey solutions',
        RightInsiderKnowledgeTitle: 'We have the right insider Knowledge',
        MeasureWorldWideTitle: 'We measure worldwide',
        ProvenByCustomersTitle: 'We are proven by our customers',
        WhoWeWorkWithTitle: 'Who We Work With',
        OurSurveySolutionsTitle: 'Our proven survey solutions',
        KeepYouUpdatedTitle: 'We love to keep you updated',
        ReadMoreBtn: 'Read More',
        ReadNewGlexBtn: 'Read the new glex',
        SubmitBtn: 'Submit',
        CustomerSurveyBtn: 'Customer Survey',
        EmployeeSurveyBtn: 'Employee Survey',
        EmployeeExperienceBtn: 'Employee Experience',
        CustomerExperienceBtn: 'Customer Experience',
        OfferBtnTitle: 'Get new insights in our survey rapport',
        OfferBtnTrialTitle: 'Try our survey trial version',
        SearchPlaceholder: 'Type to search...',
        ChangeIconTitle: 'change language',
        NavReturnTitle: 'Back to Main Navigation',
        ReturnToTopBtn: 'Return To Top'
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
