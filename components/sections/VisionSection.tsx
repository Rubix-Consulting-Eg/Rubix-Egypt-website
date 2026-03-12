"use client";

import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function VisionSection() {
  return (
    <Box
      component="section"
      id="vision"
      sx={{
        py: { xs: 7, md: 12 },
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(38,3,18,0.35) 0%, transparent 70%)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 720,
          mx: "auto",
          textAlign: "center",
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
              background: "linear-gradient(135deg, #BE0E5B, #FF6B9D)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Future Vision
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
            Rubix AI Pulse aims to become the intelligence and product
            engineering backbone behind Rubix&apos;s next wave of growth. Our
            ambition is to build the internal systems, digital products, and
            AI-enabled capabilities that make Rubix faster, smarter, and more
            scalable.
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Over time, AI Pulse will continue transforming strategic ideas into
            deployable platforms, strengthening consulting performance, and
            creating new technology-led value propositions that position Rubix
            as a truly AI-native business.
          </Typography>
        </motion.div>
      </Box>
      {/* Abstract lines decoration */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: 120,
          opacity: 0.06,
          pointerEvents: "none",
        }}
        viewBox="0 0 1200 120"
        fill="none"
      >
        <motion.path
          d="M0 60 Q300 20 600 60 T1200 60"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#BE0E5B" />
            <stop offset="1" stopColor="#FF6B9D" />
          </linearGradient>
        </defs>
      </Box>
    </Box>
  );
}
