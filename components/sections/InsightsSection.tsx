"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WebIcon from "@mui/icons-material/Web";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HandymanIcon from "@mui/icons-material/Handyman";
import ScienceIcon from "@mui/icons-material/Science";

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(motionValue, "change", (v) =>
    setDisplay(String(Math.round(v)) + suffix),
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      onUpdate: (v) => motionValue.set(v),
    });
    return () => controls.stop();
  }, [isInView, value, motionValue]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  { value: 8, label: "Team Members" },
  { value: 2, label: "Active Projects" },
  { value: 5, label: "Projects Pipeline" },
];

const focusItems = [
  {
    icon: SmartToyIcon,
    title: "Automation & Intelligence",
    desc: "Designing AI agents and smart workflows that improve speed, quality, and decision support.",
  },
  {
    icon: HandymanIcon,
    title: "AI Products & Platforms",
    desc: "Building proprietary digital products with clear business value and long-term scalability.",
  },
  {
    icon: WebIcon,
    title: "Product Engineering",
    desc: "Developing robust web and mobile platforms with scalable architecture and strong user experience.",
  },
  {
    icon: ScienceIcon,
    title: "Applied Innovation",
    desc: "Translating strategic ideas into testable, buildable, and commercially viable technology solutions.",
  },
];

export default function InsightsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#111118",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            INSIGHTS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
            }}
          >
            At a Glance
          </Typography>
        </motion.div>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((card, i) => (
            <Grid item xs={12} sm={4} key={card.label}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.08)",
                    bgcolor: "rgba(255,255,255,0.04)",
                    "&:hover": {
                      borderColor: "rgba(190,14,91,0.5)",
                      bgcolor: "rgba(255,255,255,0.06)",
                    },
                    transition: "all 0.25s",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "primary.main",
                        lineHeight: 1.2,
                        textAlign: "center",
                      }}
                    >
                      <AnimatedNumber value={card.value} />
                    </Typography>
                    <Typography sx={{ fontWeight: 600, mt: 1 }}>
                      {card.label}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}
          >
            Focus Areas — Rubix AI Pulse
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.8,
              maxWidth: 720,
            }}
          >
            Rubix AI Pulse develops intelligent digital products and AI-enabled
            systems that strengthen Rubix internally while creating scalable
            offerings for the market. Our focus areas include:
          </Typography>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            {focusItems.map((item, i) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <Box
                  sx={{
                    p: 2.5,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.08)",
                    bgcolor: "rgba(255,255,255,0.03)",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.12)",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                    transition: "all 0.2s",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      bgcolor: "primary.900",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon sx={{ color: "primary.main", fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ mb: 0.5 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography
            sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 800 }}
          >
            We connect strategy, engineering, and AI to help Rubix build sharper
            capabilities, stronger digital assets, and more scalable service
            models.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
