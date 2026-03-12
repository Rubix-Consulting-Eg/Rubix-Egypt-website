"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Projects", href: "#projects" },
      { label: "Team", href: "#team" },
      { label: "Vision", href: "#vision" },
      { label: "Location", href: "#location" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        pt: 8,
        pb: 4,
        bgcolor: "#0A0A0F",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #BE0E5B40, transparent)",
          opacity: 0.6,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 5, md: 6 },
            mb: 5,
          }}
        >
          {/* Brand block */}
          <Box sx={{ maxWidth: 320 }}>
            <Link href="#" sx={{ display: "inline-block", mb: 2 }}>
              <Image
                src="/logo.png"
                alt="Rubix Egypt"
                width={130}
                height={44}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                mb: 2,
                fontSize: "0.9rem",
              }}
            >
              AI Intelligence, Product Engineering & Digital Platforms for
              Rubix.
            </Typography>
          </Box>

          {/* Link columns */}
          {columns.map((col) => (
            <Box key={col.title}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  letterSpacing: 1.5,
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  display: "block",
                  mb: 1.5,
                }}
              >
                {col.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    component={motion.a}
                    whileHover={{ x: 4 }}
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": { color: "primary.light" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.8rem",
            }}
          >
            © {new Date().getFullYear()} Rubix Egypt. Part of Rubix.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
