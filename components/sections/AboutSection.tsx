"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about" label="ABOUT US">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            About Rubix AI Pulse
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 40px rgba(190,14,91,0.18)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 48px rgba(190,14,91,0.28)",
                  },
                }}
              >
                <Box
                  component="img"
                  src="/about-rubix.jpeg"
                  alt="Rubix AI Pulse overview"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Text content */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <motion.div variants={fadeUp}>
              <Typography
                sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
              >
                Rubix AI Pulse is Rubix&apos;s dedicated AI intelligence and
                product engineering hub, focused on building digital products,
                AI agents, intelligent workflows, and scalable technology
                platforms that support both internal performance and external
                market growth. Its role is not limited to development execution;
                it serves as a strategic engine that converts Rubix&apos;s
                ideas, methodologies, and opportunities into usable digital
                solutions.
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

            <motion.div variants={fadeUp}>
              <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
                At AI Pulse, we design and develop:
              </Typography>
            </motion.div>

            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              {[
                "AI-powered products and platforms",
                "Internal intelligence and automation systems",
                "Web and mobile experiences",
                "Productized solutions that support Rubix\u2019s growth agenda",
              ].map((text) => (
                <motion.li key={text} variants={fadeUp}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1,
                      py: 0.5,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {text}
                    </Typography>
                  </Box>
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
          </Grid>
        </Grid>

        {/* Future Vision */}
        <motion.div variants={fadeUp}>
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(190,14,91,0.08) 0%, rgba(255,107,157,0.04) 100%)",
              border: "1px solid rgba(190,14,91,0.15)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
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
              sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
            >
              Rubix AI Pulse aims to become the intelligence and product
              engineering backbone behind Rubix&apos;s next wave of growth. Our
              ambition is to build the internal systems, digital products, and
              AI-enabled capabilities that make Rubix faster, smarter, and more
              scalable.
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
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
