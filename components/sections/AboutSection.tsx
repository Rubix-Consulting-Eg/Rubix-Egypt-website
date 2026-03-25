"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const capabilities = [
  {
    icon: PsychologyOutlinedIcon,
    text: "AI-powered products and platforms",
  },
  {
    icon: AutoFixHighOutlinedIcon,
    text: "Internal intelligence and automation systems",
  },
  {
    icon: DevicesOutlinedIcon,
    text: "Web and mobile experiences",
  },
  {
    icon: RocketLaunchOutlinedIcon,
    text: "Productized solutions that support Rubix\u2019s growth agenda",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" label="ABOUT US">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              textAlign: { xs: "center", md: "left" },
              color: "text.primary",
            }}
          >
            About Rubix AI Pulse
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Box
            sx={{
              width: 60,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #BE0E5B, #FF6B9D)",
              mb: 4,
              mx: { xs: "auto", md: 0 },
            }}
          />
        </motion.div>

        <Box sx={{ maxWidth: 900 }}>
          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                color: "text.secondary",
                mb: 2.5,
                lineHeight: 1.85,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Rubix AI Pulse is Rubix&apos;s dedicated AI intelligence and
              product engineering hub, focused on building digital products, AI
              agents, intelligent workflows, and scalable technology platforms
              that support both internal performance and external market growth.
              Its role is not limited to development execution; it serves as a
              strategic engine that converts Rubix&apos;s ideas, methodologies,
              and opportunities into usable digital solutions.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                color: "text.secondary",
                mb: 4,
                lineHeight: 1.85,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Our team brings together product thinkers, AI engineers, software
              developers, designers, and technical architects to build systems
              that enhance consulting precision, improve operational speed, and
              create new digitally enabled offerings. AI Pulse supports Rubix by
              developing proprietary platforms, accelerating internal
              efficiency, and enabling the commercialization of technology-led
              solutions across sectors.
            </Typography>
          </motion.div>
        </Box>

        <motion.div variants={fadeUp}>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            At AI Pulse, we design and develop:
          </Typography>
        </motion.div>

        <Grid container spacing={2.5}>
          {capabilities.map(({ icon: Icon, text }) => (
            <Grid item xs={12} sm={6} key={text}>
              <motion.div variants={fadeUp} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2.5,
                    p: 3,
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "primary.900",
                    }}
                  >
                    <Icon sx={{ color: "primary.main", fontSize: 24 }} />
                  </Box>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div variants={fadeUp}>
          <Typography
            sx={{
              color: "text.secondary",
              mt: 4,
              lineHeight: 1.85,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              maxWidth: 900,
            }}
          >
            Our focus is to turn knowledge, processes, and ideas into scalable
            digital assets that improve how Rubix operates, delivers, and grows.
          </Typography>
        </motion.div>

        {/* Future Vision */}
        <motion.div variants={fadeUp}>
          <Box
            sx={{
              mt: 7,
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, rgba(190,14,91,0.06) 0%, rgba(255,107,157,0.03) 50%, rgba(190,14,91,0.06) 100%)",
              border: "1px solid rgba(190,14,91,0.12)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, #BE0E5B, #FF6B9D, #BE0E5B)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2.5,
                fontWeight: 700,
                fontSize: { xs: "1.35rem", sm: "1.5rem" },
                background: "linear-gradient(135deg, #BE0E5B, #FF6B9D)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Future Vision
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                mb: 2,
                lineHeight: 1.85,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Rubix AI Pulse aims to become the intelligence and product
              engineering backbone behind Rubix&apos;s next wave of growth. Our
              ambition is to build the internal systems, digital products, and
              AI-enabled capabilities that make Rubix faster, smarter, and more
              scalable.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
              }}
            >
              Over time, AI Pulse will continue transforming strategic ideas
              into deployable platforms, strengthening consulting performance,
              and creating new technology-led value propositions that position
              Rubix as a truly AI-native business.
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
