"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cubes = [
  // Top-left area
  {
    size: 40,
    x: "8%",
    y: "12%",
    dur: 20,
    delay: 0,
    rot: 45,
    opacity: 0.1,
    dirX: 1,
    dirY: -1,
  },
  {
    size: 24,
    x: "18%",
    y: "8%",
    dur: 16,
    delay: 2,
    rot: 30,
    opacity: 0.12,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 32,
    x: "4%",
    y: "28%",
    dur: 22,
    delay: 1,
    rot: 60,
    opacity: 0.13,
    dirX: 1,
    dirY: 1,
  },
  // Top-right area
  {
    size: 56,
    x: "88%",
    y: "15%",
    dur: 24,
    delay: 3,
    rot: 15,
    opacity: 0.14,
    dirX: -1,
    dirY: -1,
  },
  {
    size: 28,
    x: "94%",
    y: "25%",
    dur: 18,
    delay: 0.5,
    rot: 50,
    opacity: 0.15,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 44,
    x: "82%",
    y: "6%",
    dur: 21,
    delay: 4,
    rot: 35,
    opacity: 0.16,
    dirX: 1,
    dirY: -1,
  },
  // Bottom-left area
  {
    size: 36,
    x: "6%",
    y: "72%",
    dur: 19,
    delay: 5,
    rot: 20,
    opacity: 0.18,
    dirX: 1,
    dirY: -1,
  },
  {
    size: 20,
    x: "14%",
    y: "88%",
    dur: 17,
    delay: 1.5,
    rot: 55,
    opacity: 0.16,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 48,
    x: "2%",
    y: "55%",
    dur: 23,
    delay: 2.5,
    rot: 40,
    opacity: 0.15,
    dirX: 1,
    dirY: 1,
  },
  // Bottom-right area
  {
    size: 30,
    x: "78%",
    y: "82%",
    dur: 15,
    delay: 0.8,
    rot: 25,
    opacity: 0.17,
    dirX: -1,
    dirY: -1,
  },
  {
    size: 42,
    x: "92%",
    y: "68%",
    dur: 20,
    delay: 6,
    rot: 45,
    opacity: 0.16,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 26,
    x: "86%",
    y: "92%",
    dur: 18,
    delay: 3.5,
    rot: 10,
    opacity: 0.18,
    dirX: 1,
    dirY: 1,
  },
  // Center and edges
  {
    size: 38,
    x: "50%",
    y: "8%",
    dur: 22,
    delay: 4.5,
    rot: 50,
    opacity: 0.05,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 22,
    x: "50%",
    y: "92%",
    dur: 16,
    delay: 1.2,
    rot: 35,
    opacity: 0.17,
    dirX: 1,
    dirY: -1,
  },
  {
    size: 34,
    x: "28%",
    y: "45%",
    dur: 19,
    delay: 2.8,
    rot: 20,
    opacity: 0.16,
    dirX: 1,
    dirY: 1,
  },
  {
    size: 46,
    x: "72%",
    y: "48%",
    dur: 21,
    delay: 0.3,
    rot: 55,
    opacity: 0.2,
    dirX: -1,
    dirY: -1,
  },
  // Extra spread
  {
    size: 18,
    x: "35%",
    y: "18%",
    dur: 14,
    delay: 5.2,
    rot: 65,
    opacity: 0.21,
    dirX: 1,
    dirY: -1,
  },
  {
    size: 52,
    x: "62%",
    y: "78%",
    dur: 25,
    delay: 2,
    rot: 5,
    opacity: 0.24,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 30,
    x: "42%",
    y: "65%",
    dur: 17,
    delay: 3.8,
    rot: 40,
    opacity: 0.26,
    dirX: -1,
    dirY: -1,
  },
  {
    size: 24,
    x: "55%",
    y: "32%",
    dur: 18,
    delay: 4.2,
    rot: 75,
    opacity: 0.27,
    dirX: 1,
    dirY: 1,
  },
  {
    size: 40,
    x: "22%",
    y: "58%",
    dur: 20,
    delay: 0.6,
    rot: 12,
    opacity: 0.25,
    dirX: 1,
    dirY: -1,
  },
  {
    size: 28,
    x: "68%",
    y: "22%",
    dur: 16,
    delay: 5.5,
    rot: 28,
    opacity: 0.26,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 34,
    x: "15%",
    y: "38%",
    dur: 23,
    delay: 1.8,
    rot: 48,
    opacity: 0.25,
    dirX: -1,
    dirY: 1,
  },
  {
    size: 36,
    x: "80%",
    y: "38%",
    dur: 19,
    delay: 4.8,
    rot: 22,
    opacity: 0.26,
    dirX: 1,
    dirY: -1,
  },
];

function FloatingCube({
  size,
  x,
  y,
  dur,
  delay,
  rot,
  opacity,
  dirX,
  dirY,
}: (typeof cubes)[number]) {
  const moveY = 18;
  const moveX = 12;
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        border: `1px solid rgba(190, 14, 91, ${Math.min(opacity * 3, 0.25)})`,
        borderRadius: size > 35 ? 6 : 4,
        background: `linear-gradient(135deg, rgba(190, 14, 91, ${opacity}) 0%, rgba(190, 14, 91, ${opacity * 0.3}) 100%)`,
        transformOrigin: "center center",
        pointerEvents: "none",
      }}
      animate={{
        y: [0, dirY * -moveY, 0, dirY * moveY * 0.7, 0],
        x: [0, dirX * moveX, dirX * -moveX * 0.6, dirX * moveX * 0.5, 0],
        rotate: [rot, rot + 90, rot + 180, rot + 270, rot + 360],
        scale: [1, 1.08, 0.95, 1.04, 1],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#0A0A0F",
      }}
    >
      {/* Radial glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(38,3,18,0.4) 0%, transparent 60%)",
          animation: "pulse 4s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.8 },
            "50%": { opacity: 1 },
          },
        }}
      />

      {/* Dot grid */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm1 1h1v1H1V1zm1-1h1v1H2V0zm1 1h1v1H3V1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating cubes — hidden on xs to keep narrow screens clean */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          display: { xs: "none", sm: "block" },
        }}
      >
        {cubes.map((c, i) => (
          <FloatingCube key={i} {...c} />
        ))}
      </Box>

      {/* Accent glow orbs */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, sm: 300 },
          height: { xs: 180, sm: 300 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(243, 17, 115, 0.18) 0%, transparent 70%)",
          top: "15%",
          left: "-5%",
          filter: "blur(60px)",
          animation: "orbFloat1 20s ease-in-out infinite",
          "@keyframes orbFloat1": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(30px, -20px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: 160, sm: 250 },
          height: { xs: 160, sm: 250 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201, 34, 106, 0.01) 0%, transparent 70%)",
          bottom: "10%",
          right: "-3%",
          filter: "blur(50px)",
          animation: "orbFloat2 15s ease-in-out infinite",
          "@keyframes orbFloat2": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(-25px, 15px)" },
          },
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 2 },
          width: "100%",
          maxWidth: 860,
          mx: "auto",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          {/* Tagline heading */}
          <motion.div variants={item}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
                fontWeight: 800,
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #FF6B9D 50%, #BE0E5B 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                maxWidth: 700,
                mx: "auto",
                mb: { xs: 1, sm: 1.5 },
                letterSpacing: "-0.02em",
                lineHeight: 1.9,
              }}
            >
              Rubix AI Pulse
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                fontWeight: 500,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 600,
                mx: "auto",
                mb: { xs: 2, sm: 3 },
                letterSpacing: "0.05em",
              }}
            >
              AI Intelligence & Product Engineering Hub
            </Typography>
          </motion.div>

          {/* Description paragraphs */}
          <motion.div variants={item}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                maxWidth: 800,
                mx: "auto",
                mb: { xs: 1.5, sm: 2 },
                lineHeight: 1.8,
                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1.05rem" },
                px: { xs: 1, sm: 0 },
              }}
            >
              Rubix AI Pulse is the specialized AI and product engineering hub
              within Rubix, established to design, build, and scale intelligent
              digital products, internal AI systems, and automation engines that
              strengthen consulting delivery and unlock new business value.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.5)",
                maxWidth: 800,
                mx: "auto",
                mb: { xs: 3, sm: 4 },
                lineHeight: 1.8,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                px: { xs: 1, sm: 0 },
                display: { xs: "none", sm: "block" },
              }}
            >
              We combine AI engineering, product development, workflow
              automation, and human-centered design to transform ideas into
              deployable platforms. From internal consulting intelligence
              systems to market-facing digital products, AI Pulse helps Rubix
              move faster, deliver sharper outcomes, and build scalable
              technology assets with real commercial and operational impact.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                gap: { xs: 1.5, sm: 1.5 },
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 0 },
              }}
            >
              <Button
                component={motion.a}
                href="#projects"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "primary.main",
                  px: 3,
                  py: 1.5,
                  width: { xs: "100%", sm: "auto" },
                  minWidth: { sm: 200 },
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Products
              </Button>
              <Button
                component={motion.a}
                href="#about"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  px: 3,
                  py: 1.5,
                  width: { xs: "100%", sm: "auto" },
                  minWidth: { sm: 200 },
                  "&:hover": {
                    borderColor: "primary.light",
                    color: "primary.light",
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn About AI Pulse
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Box>

      <motion.a
        href="#about"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
      </motion.a>
    </Box>
  );
}
