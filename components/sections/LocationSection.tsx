"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const images = [
  { src: "/location1.jpeg", alt: "Rubix office interior workspace" },
  { src: "/location.jpeg", alt: "Office building exterior" },
  { src: "/location3.jpeg", alt: "Building close-up view" },
  { src: "/location4.png", alt: "Office lounge and reception area" },
  { src: "/location5.png", alt: "Open workspace and collaboration area" },
  { src: "/location6.png", alt: "Conference room" },
];

const imgHover = {
  transition: "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 30px rgba(190,14,91,0.22)",
  },
} as const;

export default function LocationSection() {
  return (
    <Box
      component="section"
      id="location"
      sx={{
        py: { xs: 7, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left — Text */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    letterSpacing: 2,
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}
                >
                  WHERE TO FIND US
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: "1.75rem", sm: "2.125rem" },
                    background: "linear-gradient(135deg, #BE0E5B, #FF6B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Our Location
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Typography
                  sx={{ color: "text.secondary", mb: 3, lineHeight: 1.85 }}
                >
                  Rubix AI Pulse operates from the heart of 5th settlement,
                  positioned within a modern corporate hub that reflects our
                  commitment to innovation and excellence. Our workspace is
                  designed to foster collaboration, creative problem-solving,
                  and high-performance engineering.
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Typography
                  sx={{ color: "text.secondary", mb: 4, lineHeight: 1.85 }}
                >
                  Strategically located on 5th settlement — one of most
                  prominent business districts — our office provides seamless
                  connectivity, a professional environment, and the
                  infrastructure needed to deliver world-class AI and digital
                  solutions.
                </Typography>
              </motion.div>

              <Box
                component={motion.div}
                variants={fadeUp}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {[
                  {
                    icon: (
                      <LocationOnIcon
                        sx={{ color: "primary.main", fontSize: 22 }}
                      />
                    ),
                    text: "5th settlement, Cairo, Egypt",
                  },
                  {
                    icon: (
                      <BusinessIcon
                        sx={{ color: "primary.main", fontSize: 22 }}
                      />
                    ),
                    text: "Part of the Citi Business Complex",
                  },
                ].map((item) => (
                  <Box
                    key={item.text}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontWeight: 500 }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right — Image Gallery */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {/* Row 1: Hero image — unchanged */}
              <motion.div variants={fadeUp}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 220, sm: 300, md: 340 },
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 2,
                    border: "1px solid rgba(255,255,255,0.08)",
                    ...imgHover,
                  }}
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 58vw"
                    priority
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.6) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </motion.div>

              {/* Row 2: 3 images (swapped from bottom) — slightly larger */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                {[images[3], images[4], images[5]].map((img) => (
                  <motion.div
                    key={img.src}
                    variants={fadeUp}
                    style={{ flex: 1 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 130, sm: 175, md: 210 },
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.08)",
                        ...imgHover,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 900px) 33vw, 19vw"
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.45) 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Row 3: 2 images (swapped from middle) — slightly smaller */}
              <Box sx={{ display: "flex", gap: 2 }}>
                {[images[1], images[2]].map((img) => (
                  <motion.div
                    key={img.src}
                    variants={fadeUp}
                    style={{ flex: 1 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 100, sm: 130, md: 155 },
                        borderRadius: 3,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.08)",
                        ...imgHover,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 900px) 50vw, 29vw"
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.45) 100%)",
                          pointerEvents: "none",
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
