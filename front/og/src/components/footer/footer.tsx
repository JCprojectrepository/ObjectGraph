"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Alto Software株式会社
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
        <Typography variant="body2" color="text.secondary" align="center">
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © " + " Alto Software株式会社 " + new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}