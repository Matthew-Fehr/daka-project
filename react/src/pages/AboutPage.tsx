import { Box, Typography, useTheme } from "@mui/material";
import * as React from "react";
import ModernHouseImg from "../assets/images/modernHouse.png";
import BannerImg from "../assets/images/Banner2.png";
import DakaLogoImg from "../assets/images/DAKA_logo.png";
import RanchFamilyImg from "../assets/images/ranchFamily.jpg";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";

/**
 * the homepage component
 * @returns Container with links to other components on the dashboard
 */

function AboutPage() {
  const theme = useTheme();
  const language = useContext(LanguageContext);

  return (
    <Box
      position="relative"
      gap="1.5rem"
      display="flex"
      flexWrap="wrap"
      maxWidth={{ xs: "95%", md: "95%", xl: "90rem" }}
      margin="auto"
      marginBottom="15rem"
      alignContent="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        position="relative"
        display="flex"
        columnGap="2rem"
        rowGap="1rem"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "60%" }}
          height={{ xs: "100%", md: "100%" }}
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
          alignItems="left"
          justifyContent="center"
        >
          <Box
            display="flex"
            marginX="1.5rem"
            // width="90%"
            // minHeight="5rem"
            // style={{ borderRadius: "inherit" }}
            // sx={{ backgroundColor: "gray" }}
            justifyContent="left"
            alignItems="center"
          >
            <Typography
              fontSize={{ xs: "4rem", md: "5rem" }}
              fontStyle="italic"
              fontWeight="bold"
              display="flex"
              align="center"
              color={theme.palette.common.lightText}
            >
              DAKA
            </Typography>
          </Box>
          <Box
            display="flex"
            marginX="1.5rem"
            marginBottom="1rem"
            // padding="0.2rem"
            // width="90%"
            // minHeight="5rem"
            // style={{ borderRadius: "inherit" }}
            // sx={{ backgroundColor: "gray" }}
            justifyContent="left"
            alignItems="center"
          >
            <Typography
              fontSize={{ xs: "2rem", md: "4rem" }}
              fontWeight="lighter"
              display="flex"
              align="center"
              color={theme.palette.common.lightText}
            >
              {language.AboutUsPage.whoAreWe}
            </Typography>
          </Box>
        </Box>
        <Box
          position="relative"
          display="flex"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "40%" }}
          height={{ xs: "100%", md: "15rem" }}
          maxWidth={{ xs: "100%", md: "60rem" }}
          maxHeight={{ xs: "100%", md: "60rem" }}
        >
          <img
            width="100%"
            height="100%"
            style={{ borderRadius: "inherit" }}
            src={ModernHouseImg}
            alt="property_image"
          />
        </Box>
      </Box>
      {/* 2nd row */}
      <Box
        position="relative"
        display="flex"
        width="100%"
        marginTop="0rem"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="1.5rem"
          width="100%"
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
        >
          <Box
            display="flex"
            marginX="1.5rem"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontSize={{ xs: "1.5rem", md: "3rem" }}
              fontStyle="italic"
              fontWeight="bold"
              letterSpacing="0.2rem"
              align="center"
              display="flex"
              paddingY="0.5rem"
              color={theme.palette.common.lightText}
            >
              {language.AboutUsPage.motto}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* 3rd row */}
      <Box
        position="relative"
        display="flex"
        columnGap="2rem"
        rowGap="1rem"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          position="relative"
          display="flex"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "40%" }}
          height={{ xs: "100%", md: "100%" }}
          maxWidth={{ xs: "100%", md: "60rem" }}
          maxHeight={{ xs: "100%", md: "100%" }}
        >
          <img
            width="100%"
            height="100%"
            style={{ borderRadius: "inherit" }}
            src={RanchFamilyImg}
            alt="property_image"
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "60%" }}
          height={{ xs: "100%", md: "100%" }}
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
          alignItems="left"
          justifyContent="center"
        >
          <Box
            display="flex"
            marginX="1rem"
            paddingY="1rem"
            // width="90%"
            // minHeight="5rem"
            // style={{ borderRadius: "inherit" }}
            // sx={{ backgroundColor: "gray" }}
            justifyContent="left"
            alignItems="center"
          >
            <Typography
              fontSize={{ xs: "1rem", md: "2rem" }}
              align="center"
              fontWeight="light"
              color={theme.palette.common.lightText}
            >
              <b>{language.AboutUsPage.weAre.bold1}</b>
              {language.AboutUsPage.weAre.normal1}
              <b>{language.AboutUsPage.weAre.bold2}</b>
              {language.AboutUsPage.weAre.normal2}
              <b>{language.AboutUsPage.weAre.bold3}</b>
              {language.AboutUsPage.weAre.normal3}
              <b>{language.AboutUsPage.weAre.bold4}</b>
              {language.AboutUsPage.weAre.normal4}
              <b>{language.AboutUsPage.weAre.bold5}</b>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/*  4th row */}
      <Box
        position="relative"
        display="flex"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          borderRadius="1.5rem"
          width={{ xs: "100%", md: "100%" }}
          height={{ xs: "100%", md: "100%" }}
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
          alignItems="center"
        >
          {/* Vision Component */}
          <Box
            display="flex"
            flexDirection="column"
            borderRadius="1.5rem"
            width={{ xs: "100%", md: "33%" }}
            height={{ xs: "100%", md: "100%" }}
            sx={{ backgroundColor: theme.palette.common.boxContainer }}
            alignItems="center"
          >
            {/* Title Vision */}
            <Box
              marginTop="1rem"
              marginBottom={{ xs: "0.5rem", md: "1rem" }}
              display="flex"
              width="95%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={{ xs: "2rem", md: "3rem" }}
                align="center"
                fontWeight="bold"
                color={theme.palette.common.lightText}
              >
                {language.AboutUsPage.vision.title}
              </Typography>
            </Box>
            {/* Content Vision */}
            <Box
              display="flex"
              padding="1rem"
              marginBottom="1rem"
              width="88%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={{ xs: "1rem", md: "2rem" }}
                align="center"
                fontWeight="light"
                color={theme.palette.common.lightText}
              >
                {language.AboutUsPage.vision.content}
              </Typography>
            </Box>
          </Box>
          {/*  Mision Component */}
          <Box
            display="flex"
            flexDirection="column"
            borderRadius="1.5rem"
            width={{ xs: "100%", md: "33%" }}
            height={{ xs: "100%", md: "100%" }}
            sx={{ backgroundColor: theme.palette.common.boxContainer }}
            alignItems="center"
          >
            {/* Title Vision */}
            <Box
              marginY={{ xs: "0.5rem", md: "1rem" }}
              display="flex"
              padding="0rem"
              width="95%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={{ xs: "2rem", md: "3rem" }}
                align="center"
                fontWeight="bold"
                color={theme.palette.common.lightText}
              >
                {language.AboutUsPage.mission.title}
              </Typography>
            </Box>
            {/* Content Vision */}
            <Box
              display="flex"
              padding="1rem"
              marginBottom="1rem"
              height="100%"
              width="88%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="initial"
            >
              <Typography
                fontSize={{ xs: "1rem", md: "2rem" }}
                align="center"
                fontWeight="light"
                color={theme.palette.common.lightText}
              >
                {language.AboutUsPage.mission.content}
              </Typography>
            </Box>
          </Box>
          {/*  Values Component */}
          <Box
            display="flex"
            flexDirection="column"
            borderRadius="1.5rem"
            width={{ xs: "100%", md: "33%" }}
            height={{ xs: "100%", md: "100%" }}
            sx={{ backgroundColor: theme.palette.common.boxContainer }}
            alignItems="center"
          >
            {/* Title Values */}
            <Box
              marginY={{ xs: "0.5rem", md: "1rem" }}
              display="flex"
              padding="0rem"
              width="95%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={{ xs: "2rem", md: "3rem" }}
                align="center"
                fontWeight="bold"
                color={theme.palette.common.lightText}
              >
                {language.AboutUsPage.values.title}
              </Typography>
            </Box>
            {/* Content Values */}
            <Box
              display="flex"
              padding="1rem"
              marginBottom="1rem"
              height="100%"
              width="88%"
              style={{ borderRadius: "inherit" }}
              sx={{ backgroundColor: "dimgray" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={{ xs: "1rem", md: "2rem" }}
                align="center"
                fontWeight="light"
                color={theme.palette.common.lightText}
                whiteSpace="break-spaces"
                lineHeight={{ xs: "2rem", md: "4rem" }}
              >
                {language.AboutUsPage.values.content}
              </Typography>
            </Box>
          </Box>
          {/*  End of Values Component */}
        </Box>
      </Box>
      {/*  5th row */}
      <Box
        position="relative"
        display="flex"
        width="100%"
        marginTop="0rem"
        flexDirection="column"
      >
        <Box
          display="flex"
          position="relative"
          flexDirection="column"
          borderRadius="1.5rem"
          width="100%"
          height={{ xs: "7rem", md: "15rem" }}
          sx={{ backgroundColor: theme.palette.common.boxContainer }}
        >
          <Box
            position="relative"
            display="flex"
            height="inherit"
            borderRadius="1.5rem"
            width="100%"
          >
            <img
              width="100%"
              height="inherit"
              style={{ borderRadius: "inherit" }}
              src={BannerImg}
              alt="property_image"
            />
            {window.innerWidth >= theme.breakpoints.values.md ? (
              <CardMedia
                component="img"
                height="60%"
                style={{ width: "auto" }}
                sx={{
                  right: "38%",
                  top: "20%",
                  position: "absolute",
                }}
                image={DakaLogoImg}
                alt="property_image"
              />
            ) : (
              <CardMedia
                component="img"
                height="50%"
                style={{ width: "auto" }}
                sx={{
                  right: "30%",
                  top: "20%",
                  position: "absolute",
                }}
                image={DakaLogoImg}
                alt="property_image"
              />
            )}
            <Typography
              right={{ xs: "15%", md: "10%" }}
              top={{ xs: "25%", md: "20%" }}
              position="absolute"
              maxWidth={{ xs: "15rem", md: "20rem" }}
              fontSize={{ xs: "2rem", md: "2.5rem" }}
              textAlign="center"
              fontStyle="italic"
              fontWeight="bold"
            ></Typography>
          </Box>
        </Box>
      </Box>

      {/*  End of rows*/}
    </Box>
  );
}

export default AboutPage;
