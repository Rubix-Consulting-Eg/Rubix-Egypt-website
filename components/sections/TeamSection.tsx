"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const team = [
  {
    initials: "HD",
    name: "Hisham Darwish",
    role: "Executive Sponsor / Strategic Lead",
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
    image: "/yossif khaled.jpeg",
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
    image: null as string | null,
  },
];

export default function TeamSection() {
  const swiperRef = useRef<SwiperType | null>(null);

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

      {/* Swiper with navigation */}
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            mx: { xs: 4, md: 3 },
            "& .swiper-pagination": {
              position: "relative",
              mt: 3,
              "& .swiper-pagination-bullet": {
                bgcolor: "rgba(255,255,255,0.25)",
                width: 8,
                height: 8,
                transition: "all 0.3s",
                "&.swiper-pagination-bullet-active": {
                  bgcolor: "primary.main",
                  width: 24,
                  borderRadius: 4,
                },
              },
            },
          }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1200, disableOnInteraction: true }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {team.map((member) => (
              <SwiperSlide key={member.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: { xs: 2, sm: 3 },
                      pb: { xs: 3, sm: 4 },
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.06)",
                      bgcolor: "rgba(255,255,255,0.02)",
                      transition: "all 0.3s ease",
                      cursor: "grab",
                      "&:hover": {
                        borderColor: `#BE0E5B`,
                        bgcolor: "rgba(255,255,255,0.04)",
                        transform: "translateY(-4px)",
                        boxShadow: `0 12px 40px #BE0E5B15`,
                      },
                    }}
                  >
                    {/* Profile image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: 100, sm: 120 },
                        height: { xs: 100, sm: 120 },
                        overflow: "hidden",
                        mb: 2,
                        flexShrink: 0,
                        boxShadow: `0 0 20px $#BE0E5B20`,
                      }}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="150px"
                        />
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            bgcolor: "#BE0E5B",
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
                        bgcolor: `#BE0E5B18`,
                        color: "#BE0E5B",
                        border: "1px solid",
                        borderColor: `#BE0E5B35`,
                      }}
                    />

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: "0.82rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {member.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </SectionWrapper>
  );
}
