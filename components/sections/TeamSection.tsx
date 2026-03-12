"use client";

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const team = [
  {
    initials: "HD",
    name: "Hisham Darwish",
    role: "General Manager",
    desc: "Provides strategic direction, business alignment, prioritization, and executive oversight across AI Pulse initiatives.",
    image: "/Mr Hesham.jpeg",
  },
  {
    initials: "YB",
    name: "Youssef El-Badry",
    role: "Technical Lead & AI Architect",
    desc: "Leads system architecture, technical delivery planning, and AI solution design across the hub.",
    image: "/Yossif Elbadry.jpeg",
  },
  {
    initials: "AN",
    name: "Abdelrhman Nashaat",
    role: "Product Engineering Lead – Mobile",
    desc: "Leads mobile product engineering and contributes to cross-platform solution design and implementation.",
    image: "/abdo.jpeg",
  },
  {
    initials: "ME",
    name: "Mahmoud El-Naha",
    role: "AI Engineer",
    desc: "Develops AI pipelines, evaluates model performance, and improves output quality across intelligent systems.",
    image: "/mahmoud.jpeg",
  },
  {
    initials: "AW",
    name: "Abdallah Wagih",
    role: "AI Engineer",
    desc: "Develops AI pipelines, evaluates model performance, and improves output quality across intelligent systems.",
    image: "/Abduallh wagih.jpeg",
  },
  {
    initials: "YK",
    name: "Youssef Khaled",
    role: "Backend Engineer",
    desc: "Develops backend architecture, APIs, integrations, and business logic for core platforms.",
    image: "/youssef khaled.jpeg",
  },
  {
    initials: "AF",
    name: "Abdel-Rahman Fathy",
    role: "Frontend Engineer",
    desc: "Builds responsive interfaces and translates product requirements into scalable front-end experiences.",
    image: "/Abdel-Rahman Fathy.jpeg",
  },
  {
    initials: "ZA",
    name: "Zeyad Abdelazim",
    role: "UI/UX Lead",
    desc: "Leads product experience design, user journeys, interface standards, and design direction.",
    image: "/zeyad.jpeg",
  },
  {
    initials: "AK",
    name: "Aladdin Khaled",
    role: "UI/UX Designer",
    desc: "Designs interfaces, prototypes, and interaction flows that improve usability and product clarity.",
    image: "/aladdin.png",
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
  hidden: {},
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TeamSection() {
  return (
    <SectionWrapper id="team" label="THE PEOPLE BEHIND IT">
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 5 } }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2.125rem" },
          }}
        >
          Rubix{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            AI Pulse Team
          </Box>
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: 560,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A focused multidisciplinary team of AI engineers, product developers,
          designers, and technical leaders building the platforms, systems, and
          intelligence capabilities that power Rubix&apos;s next generation of
          delivery and growth.
        </Typography>
      </Box>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <Grid container spacing={3} justifyContent="center">
          {team.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <motion.div variants={fadeUp} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 3,
                    border: "1px solid rgba(255,255,255,0.06)",
                    bgcolor: "rgba(255,255,255,0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(190,14,91,0.4)",
                      bgcolor: "rgba(255,255,255,0.04)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(190,14,91,0.08)",
                    },
                  }}
                >
                  {/* Profile image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 100, sm: 120 },
                      height: { xs: 100, sm: 120 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      mb: 2,
                      flexShrink: 0,
                      border: "3px solid rgba(190,14,91,0.3)",
                      boxShadow: "0 0 20px rgba(190,14,91,0.1)",
                    }}
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 600px) 100px, 120px"
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          bgcolor: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 800,
                            color: "#fff",
                            fontSize: { xs: "1.5rem", sm: "1.75rem" },
                          }}
                        >
                          {member.initials}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Name */}
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      mb: 0.75,
                      color: "#fff",
                    }}
                  >
                    {member.name}
                  </Typography>

                  {/* Role chip */}
                  <Chip
                    label={member.role}
                    size="small"
                    sx={{
                      mb: 1.5,
                      px: 0.5,
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      height: 24,
                      bgcolor: "rgba(190,14,91,0.1)",
                      color: "primary.main",
                      border: "1px solid rgba(190,14,91,0.2)",
                    }}
                  />

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.65,
                      fontSize: "0.82rem",
                    }}
                  >
                    {member.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </SectionWrapper>
  );
}
