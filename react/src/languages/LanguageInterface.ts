export default interface Language {
  language: string;

  Navbar: {
    home: string;
    contact: string;
    about: string;
    language: string;
  };

  Footer: {
    followUsAt: string;
  };

  MainBanner: {
    message: string;
  };

  FilterComponent: {
    label: string;
    all: string;
    house: string;
    ranch: string;
    business: string;
    lot: string;
  };

  OrderComponent: {
    label: string;
    newest: string;
    priceAsc: string;
    priceDesc: string;
  };

  CardComponent: {
    details: string;
  };

  DetailsPage: {
    area: string;
  },

  ContactPage: {
    category: {
      label: string;
      search: string;
      offer: string;
      other: string;
    };
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    request:{
      errorTitle: string;
      errorMessage: string;
      incompleteMessage: string;
      successTitle: string;
      successMessage: string;
    }
  }

  AboutUsPage: {
    whoAreWe: string;
    motto: string;
    weAre: {
      bold1: string;
      normal1: string;
      bold2: string;
      normal2: string;
      bold3: string;
      normal3: string;
      bold4: string;
      normal4: string;
      bold5: string;
      normal5: string;
    };
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      content: string;
    };
  };
}
