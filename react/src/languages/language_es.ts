import Language from "./LanguageInterface";

const languageEs: Language = {
  language: "Español",

  Navbar: {
    home: "Inicio",
    contact: "Contacto",
    about: "Sobre Nosotros",
    language: "Idioma",
  },

  Footer: {
    followUsAt: "Seguinos en ",
  },

  MainBanner: {
    message: "La tranquilidad de acertar",
  },

  FilterComponent: {
    label: "Filtrar por",
    all: "Todos",
    house: "Casas",
    ranch: "Estancias",
    business: "Negocios",
    lot: "Lotes",
  },

  OrderComponent: {
    label: "Ordenar por",
    newest: "Más recientes",
    priceAsc: "Menor Precio",
    priceDesc: "Mayor precio",
  },

  CardComponent: {
    details: "Detalles",
  },

  DetailsPage: {
    area: "Superficie Total",
  },

  ContactPage: {
    category: {
      label: "Categoria",
      search: "Busco inmobiliaria",
      offer: "Ofrezco inmobiliaria",
      other: "Otro",
    },
    name: "Nombre",
    email: "Dirección electrónico",
    phone: "Número de teléfono",
    message: "Mensaje",
    send: "Enviar",
    request:{
      errorTitle: "Error!",
      errorMessage: "Un problema ocurrió al enviar el formulario. Por favor intenta nuevamente más tarde.",
      incompleteMessage: "Por favor completa todos los campos requeridos.",
      successTitle: "Exitoso!",
      successMessage: "Muchas gracias por su mensaje! Le contactamos lo antes possible.",
    }
  },

  AboutUsPage: {
    whoAreWe: "Quienes somos?",
    motto: '"Somos diferentes, porque mejoramos cada dia"',
    weAre: {
      bold1: "Somos un emprendimiento ",
      normal1: "fundado en 2022 por la ",
      bold2: "familia Klassen. ",
      normal2: "Nuestro objetivo es ser intermediarios de ",
      bold3: "confianza ",
      normal3: "en la compra y venta de ",
      bold4: "lotes, casas y estancias. ",
      normal4:
        "Nos apasiona brindar el mejor servicio posible y ayudar a nuestros clientes a encontrar el lugar perfecto para ",
      bold5: "construir sus sueños. ",
      normal5: "¡Bienvenidos a nuestra familia de bienes raíces!",
    },
    vision: {
      title: "Visión",
      content:
        "Nuestra visión es ser líderes en el mercado, reconocidos por nuestra excelencia en servicios inmobiliarios y por establecer relaciones de confianza a largo plazo con nuestros clientes.",
    },
    mission: {
      title: "Misión",
      content:
        "En DAKA, nuestra misión es ofrecer servicios inmobiliarios de calidad, comprometidos con la satisfacción del cliente y la transparencia en cada transacción.",
    },
    values: {
      title: "Valores",
      content:
        "Compromiso \n Honestidad \n Excelencia \n Profesionalismo \n Innovación",
    },
  },
};

export default languageEs;
