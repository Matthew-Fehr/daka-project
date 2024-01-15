import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";

/**
 * the homepage component
 * @returns Container with links to other components on the dashboard
 */

function Footer() {
  const theme = useTheme();
  const language = useContext(LanguageContext);

  return (
    <Box
      position="absolute"
      marginTop="5rem"
      paddingBottom="0.5rem"
      style={{
        bottom: "0px",
        width: "100%",
        justifyContent: "center",
        backgroundColor: theme.palette.common.dakaYellow,
      }}
    >
      <Box
        position="relative"
        gap="1rem"
        marginTop="1rem"
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <a
          href="https://wa.link/vk73bu"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <WhatsAppIcon sx={{ display: "flex", justifySelf: "inherit" }} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085688201316"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/inmobiliaria.daka/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <InstagramIcon />
        </a>
        <a
          href="mailto:inmobiliariadaka7@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <EmailIcon />
        </a>
      </Box>
      <Typography
        variant="h6"
        component="a"
        fontSize="1rem"
        sx={{
          justifyContent: "inherit",
          display: "flex",
          fontWeight: 700,
          fontStyle: "italic",
          color: theme.palette.common.darkText,
          textDecoration: "none",
        }}
      >
        {language.Footer.followUsAt} inmobiliaria.daka
      </Typography>
      <Typography
        variant="h6"
        component="a"
        href="tel:+595 981 474583"
        fontSize="1rem"
        sx={{
          justifyContent: "inherit",
          display: "flex",
          fontWeight: 700,
          fontStyle: "italic",
          color: theme.palette.common.darkText,
          textDecoration: "none",
        }}
      >
        +595 981 474583
      </Typography>
    </Box>
  );
}

export default Footer;
