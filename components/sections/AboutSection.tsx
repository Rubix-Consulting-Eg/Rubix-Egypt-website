"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WebIcon from "@mui/icons-material/Web";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

const capabilities = [
  { icon: SmartToyIcon, label: "AI Products & Platforms" },
  { icon: SettingsIcon, label: "Internal Intelligence Systems" },
  { icon: WebIcon, label: "Productized Digital Solutions" },
  { icon: PhoneAndroidIcon, label: " Web & Mobile Experiences" },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about" label="ABOUT US">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={7}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: "1.75rem", sm: "2.125rem" },
                }}
              >
                About Rubix AI Pulse
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
              >
                Rubix AI Pulse is Rubix’s dedicated AI intelligence and product
                engineering hub, focused on building digital products, AI
                agents, intelligent workflows, and scalable technology platforms
                that support both internal performance and external market
                growth. Its role is not limited to development execution; it
                serves as a strategic engine that converts Rubix’s ideas,
                methodologies, and opportunities into usable digital solutions.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography
                sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
              >
                Our team brings together product thinkers, AI engineers,
                software developers, designers, and technical architects to
                build systems that enhance consulting precision, improve
                operational speed, and create new digitally enabled offerings.
                AI Pulse supports Rubix by developing proprietary platforms,
                accelerating internal efficiency, and enabling the
                commercialization of technology-led solutions across sectors.
              </Typography>
            </motion.div>
            <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
              At AI Pulse, we design and develop:
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {[
                "AI-powered products and platforms",
                "Internal intelligence and automation systems",
                "Web and mobile experiences",
                "Productized solutions that support Rubix’s growth agenda",
              ].map((text) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                    color: "text.secondary",
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ color: "primary.main", fontSize: 20 }}
                  />
                  {text}
                </motion.li>
              ))}
            </Box>
            <motion.div variants={fadeUp}>
              <Typography
                sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}
              >
                Our focus is to turn knowledge, processes, and ideas into
                scalable digital assets that improve how Rubix operates,
                delivers, and grows.
              </Typography>
            </motion.div>

            {/* Future Vision – integrated into About */}
            <motion.div variants={fadeUp}>
              <Typography
                variant="h3"
                sx={{
                  mt: 4,
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: "1.35rem", sm: "1.5rem" },
                  background:
                    "linear-gradient(135deg, #BE0E5B, #FF6B9D)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Future Vision
              </Typography>
              <Typography
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
              >
                Rubix AI Pulse aims to become the intelligence and product
                engineering backbone behind Rubix&apos;s next wave of growth. Our
                ambition is to build the internal systems, digital products, and
                AI-enabled capabilities that make Rubix faster, smarter, and
                more scalable.
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: 1.8 }}
              >
                Over time, AI Pulse will continue transforming strategic ideas
                into deployable platforms, strengthening consulting performance,
                and creating new technology-led value propositions that position
                Rubix as a truly AI-native business.
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <GlassCard hover={false} sx={{ p: 3 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                "& .MuiSvgIcon-root": { color: "primary.main", fontSize: 32 },
              }}
            >
              {capabilities.map(({ icon: Icon, label }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", textAlign: "center" }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </GlassCard>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
