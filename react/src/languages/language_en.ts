import Language from "./LanguageInterface";

const languageEs: Language = {
  language: "English",

  Navbar: {
    home: "Home",
    contact: "Contact",
    about: "About Us",
    language: "Language",
  },

  Footer: {
    followUsAt: "Follow us at ",
  },

  MainBanner: {
    message: "Tranquility of getting it right",
  },

  FilterComponent: {
    label: "Filter by",
    all: "All",
    house: "Houses",
    ranch: "Ranches",
    business: "Businesses",
    lot: "Lots",
  },

  OrderComponent: {
    label: "Sort by",
    newest: "Newest",
    priceAsc: "Lowest Price",
    priceDesc: "Highest Price",
  },

  CardComponent: {
    details: "Details",
  },

  DetailsPage: {
    area: "Total Area",
  },

  ContactPage: {
    category: {
      label: "Category",
      search: "Looking for a property",
      offer: "I have a property to offer",
      other: "Other",
    },
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    send: "Submit",
    request:{
      errorTitle: "Error!",
      errorMessage: "An error ocurred when sending the form. Please try again later.",
      incompleteMessage: "Please fill out all required fields.",
      successTitle: "Success!",
      successMessage: "Thank you for your message! We will get back to you as soon as possible.",
    }
  },

  AboutUsPage: {
    whoAreWe: "Who are we?",
    motto: '"We are different, because we improve every day"',
    weAre: {
      bold1: "We are a small business ",
      normal1: "founded in 2022 by the ",
      bold2: "Klassen family. ",
      normal2: "Our objective is to be ",
      bold3: "trusted ",
      normal3: "intermediaries in the buying and selling of ",
      bold4: "lots, houses, and ranches. ",
      normal4:
        "We are passionate about providing the best possible service and helping our clients find the perfect place to ",
      bold5: "build their dreams. ",
      normal5: "Welcome to our real estate family!",
    },
    vision: {
      title: "Vision",
      content:
        "Our vision is to be market leaders, recognized for our excellence in real estate services and for establishing long-term trusted relationships with our clients.",
    },
    mission: {
      title: "Mission",
      content:
        "At DAKA, our mission is to offer quality real estate services, committed to customer satisfaction and transparency in every transaction.",
    },
    values: {
      title: "Values",
      content:
        "Commitment \n Honesty \n Excellence \n Professionalism \n Innovation",
    },
  },
};

export default languageEs;
