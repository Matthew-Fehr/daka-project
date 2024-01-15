import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import ListingCard from "../components/ListingCard";
import CardMedia from "@mui/material/CardMedia";
import Banner from "../assets/images/Banner.jpg";
import MenuItem from "@mui/material/MenuItem";
import { LanguageContext } from "../languages/LanguageContext";

/**
 * the homepage component
 * @returns Container with links to other components on the dashboard
 */

function HomePage() {
  const theme = useTheme();
  const language = React.useContext(LanguageContext);
  const [order, setOrder] = React.useState("date_desc");
  const [type, setType] = React.useState("all");

  const handleOrderChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  };
  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  // React.useEffect(() => {}, []);

  return (
    <Box position="relative" sx={{ minWidth: "100%" }}>
      {/* Banner */}
      <Box
        marginBottom="3rem"
        marginX="auto"
        position="relative"
        width="95%"
        height={{ xs: "7rem", md: "12rem" }}
        borderRadius="20px"
      >
        <CardMedia
          component="img"
          height="100%"
          sx={{ borderRadius: "30px", margin: 0 }}
          image={Banner}
          alt="Daka"
        />
        <Typography
          right={{ xs: "10%", md: "10%" }}
          top={{ xs: "12%", md: "20%" }}
          position="absolute"
          maxWidth={{ xs: "12rem", md: "20rem" }}
          fontSize={{ xs: "1.8rem", md: "2.5rem" }}
          textAlign="center"
          fontStyle="italic"
          fontWeight="bold"
        >
          {language.MainBanner.message}
        </Typography>
      </Box>
      {/* Filter and order bar */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        width="95%"
        marginX="auto"
        marginY="2rem"
        borderRadius="20px"
        minHeight="5rem"
        style={{ backgroundColor: theme.palette.common.dakaYellow }}
      >
        {/* Filter Options */}
        <Box
          minWidth={{ xs: "90%", sm: "15rem" }}
          margin={{ xs: "0.5rem", sm: "1rem" }}
        >
          <FormControl fullWidth>
            <InputLabel sx={{ color: theme.palette.common.lightText }}>
              {language.FilterComponent.label}
            </InputLabel>
            <Select
              variant="filled"
              value={type}
              onChange={handleTypeChange}
              sx={{ borderBottom: "none" }}
            >
              <MenuItem value={"all"}>{language.FilterComponent.all}</MenuItem>
              <MenuItem value={"house"}>
                {language.FilterComponent.house}
              </MenuItem>
              <MenuItem value={"ranch"}>
                {language.FilterComponent.ranch}
              </MenuItem>
              <MenuItem value={"lot"}>{language.FilterComponent.lot}</MenuItem>
              <MenuItem value={"commercial"}>
                {language.FilterComponent.business}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Sort options */}
        <Box
          minWidth={{ xs: "95%", sm: "15rem" }}
          margin={{ xs: "0.5rem", sm: "1rem" }}
          position={{ xs: "relative", sm: "absolute" }}
          right={{ xs: "0rem", sm:"2rem", lg: "2.2rem", xl:"4rem" }}
        >
          <FormControl fullWidth>
            <InputLabel sx={{ color: theme.palette.common.lightText }}>
              {language.OrderComponent.label}
            </InputLabel>
            <Select variant="filled" value={order} onChange={handleOrderChange}>
              <MenuItem value={"date_desc"}>
                {language.OrderComponent.newest}
              </MenuItem>
              {/* <MenuItem value={"date_asc"}>Menos precio</MenuItem> */}
              <MenuItem value={"price_desc"}>
                {language.OrderComponent.priceDesc}
              </MenuItem>
              <MenuItem value={"price_asc"}>
                {language.OrderComponent.priceAsc}
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <ListingCard order={order} filterType={type} />
    </Box>
  );
}

export default HomePage;
