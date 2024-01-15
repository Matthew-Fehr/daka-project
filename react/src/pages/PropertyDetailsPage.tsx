import * as React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place";
import { Button, Typography, Box, useTheme } from "@mui/material";
import Placeholder1 from "../assets/images/casa.png";
import { useParams } from "react-router-dom";
import Property from "../models/Property";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";
import getPropertyByIDFromDB from "../services/GetPropertyByIDFromDB";
import EmailIcon from "@mui/icons-material/Email";
// import ResponsiveCarousel from "../components/Carousel";
import ImageCarousel from "../components/ImageCarousel";

/**
 * the homepage component
 * @returns Container with links to other components on the dashboard
 */

const emptyProperty: Property = {
  id: 0,
  title_de: "Haus in Loma Plata",
  title_es: "Casa en Loma Plata",
  title_en: "House in Loma Plata",
  description_de:
      "Beschreibung",
  description_es:
      "Descripcion",
  description_en: "Description",
  location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  google_maps: "https://goo.gl/maps/SQCiszY4eGiXH2BDA",
  type: "house",
  area: 1411,
  area_unit: "meter",
  price: 500000,
  currency: "USD",
  price_unit: "/m²",
  publish_date: new Date("2023-08-01"),
  images: [Placeholder1],
};

function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = React.useState<Property>(emptyProperty);
  const theme = useTheme();
  const language = useContext(LanguageContext);

  // const propertyList: Property[] = [
  //   {
  //     id: 1,
  //     title_de: "Haus in Loma Plata",
  //     title_es: "Casa en Loma Plata",
  //     title_en: "Casa en Loma Plata",
  //     description_de:
  //       "Das Haus hat unter anderem: 3 Schlafzimmer\n" +
  //       "Küche mit Einbauschränken\n" +
  //       "1 Badezimmer mit Waschzimmer\n" +
  //       "Abstellraum\n" +
  //       "Ganz Eingezäunt\n" +
  //       "Garage\n" +
  //       "2 Zisternen",
  //     description_es:
  //       "Tiene entre otro 3 dormitorios\n" +
  //       "Cocina con muebles \n" +
  //       "Un Baño con lavandería\n" +
  //       "Garaje\n" +
  //       "Deposito\n" +
  //       "Dos aljibes\n" +
  //       "Completamente Cercado",
  //     description_en: "Nll",
  //     location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  //     googleMaps: "https://goo.gl/maps/SQCiszY4eGiXH2BDA",
  //     type: "house",
  //     area: 1411,
  //     area_measurement: "meter",
  //     price: 500000,
  //     currency: "USD",
  //     price_unit: "/m²",
  //     published_date: new Date("2023-08-01"),
  //     images: [Placeholder1],
  //   },
  //   {
  //     id: 2,
  //     title_de: "Haus in Loma Plata",
  //     title_en: "Lote grande en la zona de Bergfeld",
  //     title_es: "Lote grande en la zona de Bergfeld",
  //     description_de:
  //       "Das Haus hat unter anderem: 3 Schlafzimmer\n" +
  //       "Küche mit Einbauschränken\n" +
  //       "1 Badezimmer mit Waschzimmer\n" +
  //       "Abstellraum\n" +
  //       "Ganz Eingezäunt\n" +
  //       "Garage\n" +
  //       "2 Zisternen",
  //     description_es:
  //       "Casa de los Klassens\n" +
  //       "Cocina con muebles \n" +
  //       "Un Baño con lavandería\n" +
  //       "Garaje\n" +
  //       "Deposito\n" +
  //       "Dos aljibes\n" +
  //       "Completamente Cercado",
  //     description_en: "Null",
  //     location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  //     googleMaps: "https://goo.gl/maps/6R6pDYDiiNr55QDC9",
  //     type: "lot",
  //     area: 1411,
  //     area_measurement: "meter",
  //     price: 600000,
  //     currency: "Grs",
  //     price_unit: "/h",
  //     published_date: new Date("2023-08-10"),
  //     images: [Placeholder2],
  //   },
  // ];

  function getPriceUnit(unit: string): string {
    switch (unit) {
      case "sqmeter":
        return "/m²";
      case "hectar":
        return "/ha";
      case "total":
        return" Total"
    }
    return "";
  }

  function getAreaUnit(unit: string): string {
    switch (unit) {
      case "sqmeter":
        return "m²";
      case "hectar":
        return "ha";
      case "total":
        return" Total"
    }
    return "";
  }

  function updatePropertyList() {
    if (id!==undefined) {
      getPropertyByIDFromDB(parseInt(id))
    .then((res) => {
        setProperty(res.property);
      })
          .catch((e) => {
            console.error(e);
          });
    }

  }

  React.useEffect(() => {
    updatePropertyList();
  },[]);

  // function getProperty(id: string | undefined) {
  //   if (id != null) {
  //     for (let i = 0; i < propertyList.length; i++) {
  //       if (propertyList[i].id === parseInt(id)) {
  //         setProperty(propertyList[i]);
  //       }
  //     }
  //   }
  //   // return propertyList[parseInt(id)];
  // }

  return (
    <Box
      position="relative"
      gap="3rem"
      display="flex"
      flexWrap="wrap"
      maxWidth={{ xs: "95%", md: "90%" }}
      margin="auto"
      marginBottom="10rem"
      alignContent="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        position="relative"
        display="flex"
        columnGap="4rem"
        rowGap="2rem"
        width="100%"
        marginBottom="5rem"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          position="relative"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "60%" }}
          // height="35rem"
          maxWidth={{ xs: "100%", md: "60rem" }}
          maxHeight={{ xs: "30rem", md: "60rem" }}
        >
          {/*<ResponsiveCarousel/>*/}
            <ImageCarousel images={property.images}/>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "40%" }}
          height={{ xs: "100%", md: "100%" }}
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
          alignItems="center"
        >
          <Box
            marginY="1rem"
            display="flex"
            padding="0.2rem"
            width="90%"
            minHeight="5rem"
            style={{ borderRadius: "inherit" }}
            sx={{ backgroundColor: "dimgray" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontSize="1.8rem"
              fontWeight="bold"
              display="flex"
              align="center"
            >
              {language === null || language.language === "Español"
                ? property.title_es
                : language.language==="Deutsch"? property.title_de:property.title_en}
            </Typography>
          </Box>

          <Box
            display="flex"
            padding="1rem"
            width="85%"
            style={{ borderRadius: "inherit" }}
            sx={{ backgroundColor: "dimgray" }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              display="flex"
              fontSize="1.5rem"
              width="100%"
              minHeight="7rem"
              marginLeft="1rem"
              sx={{ whiteSpace: "pre-line" }}
            >
              {language === null || language.language === "Español"
                  ? property.description_es
                  : language.language==="Deutsch"? property.description_de : property.description_en}
            </Typography>
          </Box>

          <Box
              display="flex"
              padding="1rem"
              marginTop="1rem"
              width="85%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyItems="end"
              justifyContent="center"
              alignItems="center"
          >
            <Typography display="flex" fontSize="1.5rem">
              <u>{language.DetailsPage.area}</u>:  {property.area.toLocaleString("DE")} {getAreaUnit(property.area_unit)}
            </Typography>
          </Box>

          <Box
            display="flex"
            padding="1rem"
            marginY="1rem"
            width="85%"
            style={{ borderRadius: "inherit" }}
            sx={{ backgroundColor: "dimgray" }}
            justifyItems="end"
            justifyContent="center"
            alignItems="center"
          >
            <Typography display="flex" fontSize="1.5rem" fontWeight="bold">
              {property.price.toLocaleString("DE")} {property.currency}
              {getPriceUnit(property.price_unit)}
            </Typography>
          </Box>

          <Box
            display="flex"
            padding="1rem"
            gap="1rem"
            marginBottom="1rem"
            width="85%"
            // style={{ borderRadius: "inherit" }}
            // sx={{backgroundColor: "gray"}}
            justifyItems="end"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <a href="https://wa.link/vk73bu" target="_blank" rel="noreferrer">
              <Button
                style={{
                  backgroundColor: "green",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  width: "10rem",
                }}
              >
                <WhatsAppIcon style={{ marginRight: "0.5rem" }} /> WhatsApp
              </Button>
            </a>
            {property.type==="ranch"? <a
                href="mailto:inmobiliariadaka7@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
              <Button
                  style={{
                    backgroundColor: "darkcyan",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    width: "10rem",
                  }}
              >
              <EmailIcon style={{ marginRight: "0.5rem" }} />  Mail
              </Button>
            </a>:
            <a href={property.google_maps} target="_blank" rel="noreferrer">
              <Button
                style={{
                  backgroundColor: "darkcyan",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  width: "10rem",
                }}
              >
                <PlaceIcon style={{ marginRight: "0.5rem" }} />
                Maps
              </Button>
            </a>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyDetailsPage;
