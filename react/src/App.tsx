import React from "react";
import "./App.css";
import { useTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import PageRouter from "./PageRouter";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import LanguageProvider from "./languages/LanguageContext";

const LandingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      position="absolute"
      style={{
        minHeight: "100%",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        borderRadius: 0,
      }}
    >
      <LanguageProvider>
        <Box style={{ minHeight: "9rem", maxWidth: "100%" }}>
          <Navbar />
        </Box>
        <PageRouter />
        <Footer />
      </LanguageProvider>
    </Box>
  );
};

export default LandingPage;
