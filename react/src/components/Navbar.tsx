import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/images/DAKA_logo.png";
import { Link, useTheme } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";
import LanguageSelector from "./LanguageSelector";

function Navbar() {
  const theme = useTheme();
  const language = useContext(LanguageContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const pages = [
    { name: language.Navbar.about, path: "/about" },
    { name: language.Navbar.contact, path: "/contact" },
    { name: language.Navbar.home, path: "/" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        minWidth: "100%",
        display: "block",
        boxShadow: "none",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div
        style={{
          justifyContent: "center",
          backgroundColor: theme.palette.common.dakaYellow,
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            justifyContent: "inherit",
            display: "flex",
            fontWeight: 700,
            fontStyle: "italic",
            color: theme.palette.common.darkText,
            textDecoration: "none",
          }}
        >
          Inmobiliaria DAKA
        </Typography>
      </div>
      <Toolbar
        disableGutters
        sx={{
          minWidth: "100%",
          backgroundColor: theme.palette.background.default,
          paddingY: "1rem",
        }}
      >
        <Button href="/" style={{ height: "3rem", marginRight: "1rem" }}>
          <img src={Logo} style={{ height: "inherit" }} alt="Logo" />
        </Button>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            flexDirection: { xs: "row-reverse", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon sx={{ color: theme.palette.common.lightText }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.path}
                value={page.path}
                selected={window.location.pathname === page.path}
              >
                <Typography textAlign="center">
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    href={page.path}
                  >
                    {page.name}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              fontSize="inherit"
            >
              <Typography marginLeft="1rem">
                {language.Navbar.language}:
              </Typography>
              <LanguageSelector />
            </Box>
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            flexDirection: { xs: "none", md: "row-reverse" },
            mr: "3rem",
          }}
        >
          {/*<Button*/}
          {/*  style={{ height: "auto", width: "min-content" }}*/}
          {/*  sx={{ alignSelf: "center", border: 0 }}*/}
          {/*>*/}
          <LanguageSelector />
          {/*<img src={ES} height="100%" alt="LangFlag" />*/}
          {/*</Button>*/}
          {pages.map((page) => (
            <Button
              key={page.path}
              value={page.path}
              href={page.path}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
