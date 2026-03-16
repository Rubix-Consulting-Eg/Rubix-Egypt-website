"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Vision", href: "#vision" },
];

const projectLinks = [
  { label: "Rashad Project", href: "#rashad" },
  { label: "Worcare Project", href: "#worcare" },
];
const researchLinks = [
  { label: "AI & Product Intelligence Studies", href: "#ai-studies" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(
    null,
  );
  const [researchAnchor, setResearchAnchor] = useState<null | HTMLElement>(
    null,
  );
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [researchExpanded, setResearchExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "background-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 0.5 }}>
          <Box
            component="a"
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 0.75,
              borderRadius: 2,
            }}
          >
            <Image
              src="/logo.png"
              alt="Rubix Egypt"
              width={140}
              height={44}
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              href="#about"
              color="inherit"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              About
            </Button>
            <Button
              onClick={(e) => setProjectsAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Projects
            </Button>
            <Menu
              anchorEl={projectsAnchor}
              open={Boolean(projectsAnchor)}
              onClose={() => setProjectsAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  minWidth: 200,
                },
              }}
            >
              {projectLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={() => setProjectsAnchor(null)}
                  sx={{
                    py: 1.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
            <Button
              onClick={(e) => setResearchAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Research
            </Button>
            <Menu
              anchorEl={researchAnchor}
              open={Boolean(researchAnchor)}
              onClose={() => setResearchAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  minWidth: 200,
                },
              }}
            >
              {researchLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={() => setResearchAnchor(null)}
                  sx={{
                    py: 1.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
            {navLinks.slice(1).map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { md: "none" }, color: "inherit" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              href="#about"
              onClick={() => setMobileOpen(false)}
              sx={{ py: 2 }}
            >
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setProjectsExpanded(!projectsExpanded)}
              sx={{ py: 2 }}
            >
              <ListItemText primary="Projects" />
              {projectsExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={projectsExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {projectLinks.map((link) => (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton
                    href={link.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setProjectsExpanded(false);
                    }}
                    sx={{ py: 1.5, pl: 4 }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setResearchExpanded(!researchExpanded)}
              sx={{ py: 2 }}
            >
              <ListItemText primary="Research" />
              {researchExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={researchExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {researchLinks.map((link) => (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton
                    href={link.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setResearchExpanded(false);
                    }}
                    sx={{ py: 1.5, pl: 4 }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
          {navLinks.slice(1).map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                href={link.href}
                onClick={() => setMobileOpen(false)}
                sx={{ py: 2 }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              href="#about"
              onClick={() => setMobileOpen(false)}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary="Get In Touch"
                primaryTypographyProps={{
                  color: "primary.main",
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <></>
    </>
  );
}
