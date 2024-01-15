import React from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import { ReactComponent as DEFlag } from "../languages/flagIcons/4x3/DE.svg";
import { ReactComponent as PYFlag } from "../languages/flagIcons/4x3/PY.svg";
import { ReactComponent as USFlag } from "../languages/flagIcons/4x3/US.svg";
import { useLanguage } from "../languages/LanguageContext";
import languageDe from "../languages/language_ger";
import languageEs from "../languages/language_es";
import languageEn from "../languages/language_en";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

/**
 * @returns MenuItem to toggle between languages
 */

export default function LanguageSelector() {
  const setLanguage = useLanguage();
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState(
    localStorage.getItem("languageName")
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const availableLanguages = ["DE", "ES", "EN"];

  function Lang(language: string | null, navbar?: boolean) {
    const props = {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      minWidth: "2.5rem",
    };
    return (
      <Box display="flex">
        {language === "DE" && <DEFlag style={{ ...props }} />}
        {language === "ES" && <PYFlag style={{ ...props }} />}
        {language === "EN" && <USFlag style={{ ...props }} />}
        {navbar ? (
          <div />
        ) : (
          <Typography style={{ marginLeft: "1rem" }}>{language}</Typography>
        )}
      </Box>
    );
  }

  /**
   * checks wich language was selected and updates the language context and localStorage
   * @param selectedLanguage language that got selected
   */
  function changeLanguage(selectedLanguage: string) {
    if (selectedLanguage === "DE") {
      localStorage.setItem("languageName", "DE");
      setCurrentLanguage("DE");
      setLanguage(() => {
        return languageDe;
      });
    } else if (selectedLanguage === "EN") {
      localStorage.setItem("languageName", "EN");
      setLanguage(() => {
        setCurrentLanguage("EN");
        return languageEn;
      });
    } else {
      localStorage.setItem("languageName", "ES");
      setLanguage(() => {
        setCurrentLanguage("ES");
        return languageEs;
      });
    }
  }

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenLanguage(true);
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElNav(null);
    setOpenLanguage(false);
  };

  return (
    <Box display="flex">
      <IconButton onClick={handleOpenLangMenu}>
        {Lang(currentLanguage, true)}
      </IconButton>
      <Menu
        color="white"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        // keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={openLanguage}
        onClose={handleCloseLangMenu}
        sx={{
          color: "dimgray",
        }}
      >
        {availableLanguages.map((language: string) => (
          <MenuItem
            onClick={() => {
              handleCloseLangMenu();
              if (localStorage.getItem("languageName") !== language)
                changeLanguage(language);
            }}
            value={language}
            key={language}
            sx={{ color: "black" }}
          >
            {Lang(language)}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
