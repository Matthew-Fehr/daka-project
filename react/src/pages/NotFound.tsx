import { Container, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

/**
 * gets called when user uses invalid url
 * @returns error message
 */
function NotFound() {

    return (
        <Box paddingY="7rem" gap="1rem" position="relative" flexDirection={{ xs: "column", md: "row" }}>
            <Container style={{marginBottom: "3rem", position: "relative", minWidth:"100%", borderRadius:"20px"}}>
                <Typography variant="h3">Page In Progress</Typography>
            </Container>
        </Box>
    );
}

export default NotFound;
