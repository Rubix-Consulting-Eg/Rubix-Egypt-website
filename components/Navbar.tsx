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

const projectLinks = [
  { label: "Rashad Project", href: "#rashad" },
  { label: "Worcare Project", href: "#worcare" },
  { label: "DiagnifyAI", href: "#diagnify-ai" },
  { label: "Rashad Consulting Agents", href: "#rashad-consulting-agents" },
  { label: "Rubix Excavation Office – USA", href: "#rubix-excavation-usa" },
  { label: "SparkThon Operating Model", href: "#sparkthon-operating-model" },
  { label: "SparkThon Platform", href: "#sparkthon-platform" },
  { label: "US Ecosystem Roadshow", href: "#us-ecosystem-roadshow" },
  { label: "Sulhafa", href: "#sulhafa" },
];

const rdLinks = [
  { label: "Rashad Project", href: "#rd-rashad" },
  { label: "Worcare Project", href: "#rd-worcare" },
  { label: "DiagnifyAI", href: "#rd-diagnify" },
  { label: "SparkThon Platform", href: "#rd-sparkthon" },
  { label: "Sulhafa", href: "#rd-sulhafa" },
];

const trailingLinks = [
  { label: "Team", href: "#team" },
  { label: "Location", href: "#location" },
];

const btnSx = {
  color: "text.secondary",
  "&:hover": { color: "primary.main" },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
  const [rdAnchor, setRdAnchor] = useState<null | HTMLElement>(null);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [rdExpanded, setRdExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuPaperProps = {
    sx: {
      mt: 1.5,
      bgcolor: "background.paper",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 2,
      minWidth: 200,
    },
  };

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

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button href="#about" color="inherit" sx={btnSx}>
              About
            </Button>
            <Button href="#roadmap" color="inherit" sx={btnSx}>
              Roadmap
            </Button>

            {/* R&D dropdown */}
            <Button
              onClick={(e) => setRdAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={btnSx}
            >
              R&D
            </Button>
            <Menu
              anchorEl={rdAnchor}
              open={Boolean(rdAnchor)}
              onClose={() => setRdAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              PaperProps={menuPaperProps}
            >
              {rdLinks.map((link) => (
                <MenuItem
                  key={link.href}
                  component="a"
                  href={link.href}
                  onClick={() => setRdAnchor(null)}
                  sx={{
                    py: 1.5,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>

            {/* Projects dropdown */}
            <Button
              onClick={(e) => setProjectsAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={btnSx}
            >
              Projects
            </Button>
            <Menu
              anchorEl={projectsAnchor}
              open={Boolean(projectsAnchor)}
              onClose={() => setProjectsAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              PaperProps={menuPaperProps}
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

            {trailingLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                sx={btnSx}
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

      {/* Mobile drawer */}
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
              href="#roadmap"
              onClick={() => setMobileOpen(false)}
              sx={{ py: 2 }}
            >
              <ListItemText primary="Roadmap" />
            </ListItemButton>
          </ListItem>

          {/* R&D expandable */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setRdExpanded(!rdExpanded)}
              sx={{ py: 2 }}
            >
              <ListItemText primary="R&D" />
              {rdExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={rdExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {rdLinks.map((link) => (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton
                    href={link.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setRdExpanded(false);
                    }}
                    sx={{ py: 1.5, pl: 4 }}
                  >
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Projects expandable */}
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

          {trailingLinks.map((link) => (
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
    </>
  );
}
