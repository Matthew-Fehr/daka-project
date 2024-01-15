import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography, Box, useTheme } from "@mui/material";
// import Placeholder1 from "../assets/images/casa.png";
// import Placeholder2 from "../assets/images/casa2.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";
import getPropertiesFromDB from "../services/GetPropertiesFromDB";
import {mediahost} from "../other/host.config";

/**
 * the homepage component
 * @returns Container with links to other components on the dashboard
 */

function ListingCard(props: { order: string; filterType: string }) {
  const { order, filterType } = props;
  const theme = useTheme();
  const language = useContext(LanguageContext);
  const [orderedListing, setOrderedListing] = React.useState<any[]>([]);
  const navigation = useNavigate();

  function updatePropertyList() {
    getPropertiesFromDB()
        .then((res) => {
          setOrderedListing(res.propertyList);
          orderBy(res.propertyList, order, filterType);
        })
        .catch((e) => {
          console.error(e);
        });
  }


  // const propertyListings = [
  //   {
  //     id: 1,
  //     title_es: "Casa en Loma Plata",
  //     title_de: "Großes Haus Loma Plata",
  //     title_en: "Big House in Loma Plata",
  //     location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  //     type: "house",
  //     price: 900000,
  //     currency: "USD",
  //     priceUnit: "/m²",
  //     publishDate: new Date("2023-08-01"),
  //     image: Placeholder1,
  //   },
  //   {
  //     id: 2,
  //     title_es: "Lote grande en la zona de Bergfeld",
  //     title_de: "Großes Grundstück in Bergfeld",
  //     title_en: "Big Lot in Bergfeld",
  //     location: "Bergfeld, Loma Plata",
  //     type: "house",
  //     price: 800000,
  //     currency: "Grs",
  //     priceUnit: "/h",
  //     publishDate: new Date("2023-08-02"),
  //     image: Placeholder2,
  //   },
  //   {
  //     id: 3,
  //     title_es: "Casa en Loma Plata",
  //     title_de: "Großes Haus Loma Plata",
  //     title_en: "Big House in Loma Plata",
  //     location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  //     type: "business",
  //     price: 700000,
  //     currency: "USD",
  //     priceUnit: "/m²",
  //     publishDate: new Date("2023-08-03"),
  //     image: Placeholder1,
  //   },
  //   {
  //     id: 4,
  //     title_es: "Lote grande en la zona de Bergfeld",
  //     title_de: "Großes Grundstück in Bergfeld",
  //     title_en: "Big Lot in Bergfeld",
  //     location: "Bergfeld, Loma Plata",
  //     type: "ranch",
  //     price: 600000,
  //     currency: "Grs",
  //     priceUnit: "/h",
  //     publishDate: new Date("2023-08-04"),
  //     image: Placeholder2,
  //   },
  //   {
  //     id: 5,
  //     title_es: "Casa en Loma Plata",
  //     title_de: "Großes Haus Loma Plata",
  //     title_en: "Big House in Loma Plata",
  //     location: "Calle Quebracho Blanco y Laguna (Loma Plata)",
  //     type: "ranch",
  //     price: 500000,
  //     currency: "USD",
  //     priceUnit: "/m²",
  //     publishDate: new Date("2023-08-05"),
  //     image: Placeholder1,
  //   },
  //   {
  //     id: 6,
  //     title_es: "Lote grande en la zona de Bergfeld",
  //     title_de: "Großes Grundstück in Bergfeld",
  //     title_en: "Big Lot in Bergfeld",
  //     location: "Bergfeld, Loma Plata",
  //     type: "lot",
  //     price: 400000,
  //     currency: "Grs",
  //     priceUnit: "Total",
  //     publishDate: new Date("2023-08-06"),
  //     image: Placeholder2,
  //   },
  // ];

  function getPropertyType(type: string): string {
    switch (language.language) {
      case "Español":
        switch (type) {
          case "lot":
            return "Lote";
          case "house":
            return "Casa";
          case "business":
            return "Negocio";
          case "ranch":
            return "Estancia";
        }
        return "";
      case "English":
        switch (type) {
          case "lot":
            return "Lot";
          case "house":
            return "House";
          case "business":
            return "Business";
          case "ranch":
            return "Ranch";
        }
        return "";
      case "Deutsch":
        switch (type) {
          case "lot":
            return "Grundstück";
          case "house":
            return "Haus";
          case "business":
            return "Geschäft";
          case "ranch":
            return "Land";
        }
        return "";
    }
    switch (type) {
      case "lot":
        return "Lote";
      case "house":
        return "Casa";
      case "business":
        return "Negocio";
      case "ranch":
        return "Estancia";
    }
    return "";
  }

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

  function orderBy(listings: any[], sortBy: string, filterType: string) {
    if (filterType !== "all") {
      listings = listings.filter((listing) => listing.type === filterType);
    }

    if (sortBy === "price_asc") {
      listings.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      listings.sort((a, b) => b.price - a.price);
    } else if (sortBy === "date_asc") {
      listings.sort((a, b) => {
        const dateA = new Date(a.publish_date);
        const dateB = new Date(b.publish_date);
        return dateA.getTime() - dateB.getTime();
      });
    } else if (sortBy === "date_desc") {
      listings.sort((a, b) => {
        const dateA = new Date(a.publish_date);
        const dateB = new Date(b.publish_date);
        return dateB.getTime() - dateA.getTime();
      });
    }

    // console.warn("Final List: ");
    // listings.forEach((listing) => {
    //   console.warn(listing);
    // });

    setOrderedListing(listings);
  }

  React.useEffect(() => {
    updatePropertyList()
  }, [order, filterType]);

  return (
    <Box
      gap="3rem"
      display="flex"
      flexWrap="wrap"
      maxWidth={{ xs: "95%", xl: "90rem" }}
      margin="auto"
      marginBottom="15rem"
      justifyContent="center"
      alignContent="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {orderedListing.map((property) => (
        <Card
          key={property.id}
          style={{ width: "20rem", borderRadius: "1.5rem" }}
          onClick={() => navigation(`/details/${property.id}`)}
        >
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="330"
              src={`${mediahost}${property.images}`}
              alt="Daka"
            />
            <CardContent style={{ height: "42%", display:"flex", flexDirection:"column"}}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                margin="0rem"
              >
                {language === null || language.language === "Español"
                  ? property.title_es
                  : language.language === "English"
                  ? property.title_en
                  : property.title_de}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {property.location}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                marginTop="0.4rem"
                marginBottom="auto"
              >
                {getPropertyType(property.type)}
              </Typography>
              <Box flexDirection="row" display="flex" marginTop="0.8rem">
                <Typography variant="h6" color="text.secondary" width="100%">
                  {property.price.toLocaleString("DE")} {property.currency}
                  {property.price_unit === "total"
                    ? " Total"
                    : getPriceUnit(property.price_unit)}
                </Typography>
              </Box>
              <Box flexDirection="row" display="flex" marginY="0.5rem">
                <Typography
                    variant="button"
                    width="100%"
                    align="center"
                    color={theme.palette.common.lightText}
                    borderRadius="20px"
                    paddingY="0.5rem"
                    paddingX="0.7rem"
                    style={{ backgroundColor: theme.palette.background.default }}
                >
                  {language.CardComponent.details}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default ListingCard;
