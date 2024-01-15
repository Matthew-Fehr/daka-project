import Language from "./LanguageInterface";

const language: Language = {
  language: "Deutsch",

  Navbar: {
    home: "Startseite",
    contact: "Kontakt",
    about: "Über uns",
    language: "Sprache",
  },

  Footer: {
    followUsAt: "Folge uns auf ",
  },

  MainBanner: {
    message: "Die Ruhe des Erfolgs",
  },

  FilterComponent: {
    label: "Filtern nach",
    all: "Alle",
    house: "Häuser",
    ranch: "Anwesen",
    business: "Geschäfte",
    lot: "Grundstücke",
  },

  OrderComponent: {
    label: "Sortieren nach",
    newest: "Neueste",
    priceAsc: "Niedrigster Preis",
    priceDesc: "Höchster Preis",
  },

  CardComponent: {
    details: "Details",
  },

  DetailsPage: {
    area: "Gesamtfläche",
  },

  ContactPage: {
    category: {
      label: "Kategorien",
      search: "Inmobilien suchen",
      offer: "Inmobilien anbieten",
      other: "Sonstiges",
    },
    name: "Name",
    email: "Email",
    phone: "Telefon Nummer",
    message: "Nachricht",
    send: "Senden",
    request:{
      errorTitle: "Fehler!",
      errorMessage: "Ein Fehler ist beim senden aufgetreten. Bitte versuchen sie es später erneut.",
      incompleteMessage: "Bitte füllen Sie alle Pflichtfelder aus.",
      successTitle: "Erfolg!",
      successMessage: "Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.",
    }
  },

  AboutUsPage: {
    whoAreWe: "Wer sind wir?",
    motto: '"Wir sind anders, weil wir uns jeden Tag verbessern"',
    weAre: {
      bold1: "Wir sind ein Unternehmen, ",
      normal1: "gegründet im Jahr 2022 von der ",
      bold2: "Familie Klassen. ",
      normal2: "Unser Ziel ist es, ein ",
      bold3: "vertrauenswürdiger ",
      normal3: "Vermittler für den Kauf und Verkauf von ",
      bold4: "Grundstücken, Häusern und Anwesen ",
      normal4:
        "zu sein. Es ist unsere Leidenschaft, den bestmöglichen Service zu bieten und unseren Kunden dabei zu helfen, den perfekten Ort zu verwirklichen, ",
      bold5: "wo sie ihre Träume verwirklichen können. ",
      normal5: "Willkommen in unserer Immobilienfamilie!",
    },
    vision: {
      title: "Vision",
      content:
        "Unsere Vision ist es, Marktführer zu sein, bekannt für unsere Exzellenz in Immobiliendienstleistungen und für den Aufbau langfristiger vertrauensvoller Beziehungen zu unseren Kunden.",
    },
    mission: {
      title: "Mission",
      content:
        "Bei DAKA ist unsere Mission, qualitativ hochwertige Immobiliendienstleistungen anzubieten, die sich auf Kundenzufriedenheit und Transparenz in jedem Geschäft konzentrieren.",
    },
    values: {
      title: "Werte",
      content:
        "Verpflichtung \n Ehrlichkeit \n Exzellenz \n Professionalität \n Innovation",
    },
  },
};

export default language;
