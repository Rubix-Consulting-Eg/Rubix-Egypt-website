"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import SummarizeIcon from "@mui/icons-material/Summarize";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DescriptionIcon from "@mui/icons-material/Description";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import DatasetIcon from "@mui/icons-material/Dataset";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScienceIcon from "@mui/icons-material/Science";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HubIcon from "@mui/icons-material/Hub";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BugReportIcon from "@mui/icons-material/BugReport";
import SectionWrapper from "@/components/ui/SectionWrapper";

const card = {
  bgcolor: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 2,
};
const bodyText = {
  color: "text.secondary",
  lineHeight: 1.75,
  fontSize: "0.9375rem",
};
const cardTitle = {
  fontWeight: 700,
  color: "primary.main",
  fontSize: "0.95rem",
};

function AnimatedProgressBar({
  value,
  status,
}: {
  value: number;
  status: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          flex: 1,
          height: 8,
          borderRadius: 1,
          bgcolor: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: 4,
            backgroundColor: value === 100 ? "#4caf50" : "#BE0E5B",
          }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          minWidth: 40,
          fontWeight: 600,
          color: value === 100 ? "#4caf50" : "text.secondary",
        }}
      >
        {value}%
      </Typography>
      <Chip
        label={status}
        size="small"
        sx={{
          fontSize: "0.7rem",
          fontWeight: 600,
          bgcolor:
            value === 100
              ? "rgba(76,175,80,0.2)"
              : value > 0
                ? "rgba(255,193,7,0.2)"
                : "rgba(255,255,255,0.08)",
          color:
            value === 100
              ? "#4caf50"
              : value > 0
                ? "#ffc107"
                : "text.secondary",
        }}
      />
    </Box>
  );
}

function ProjectAccordion({
  id,
  icon,
  title,
  subtitle,
  chips,
  open,
  onToggle,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  chips: { label: string; bg: string; color: string }[];
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <Box id={id} component="section" sx={{ scrollMarginTop: 100 }}>
      <Card
        onClick={onToggle}
        sx={{
          ...card,
          p: { xs: 2, sm: 3 },
          cursor: "pointer",
          transition: "border-color 0.2s, background 0.2s",
          borderColor: open ? "primary.main" : "rgba(255,255,255,0.08)",
          "&:hover": {
            borderColor: "primary.main",
            bgcolor: "rgba(255,255,255,0.06)",
          },
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: "12px",
              bgcolor: "primary.900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
              {chips.map((c) => (
                <Chip
                  key={c.label}
                  label={c.label}
                  size="small"
                  sx={{
                    bgcolor: c.bg,
                    color: c.color,
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", lineHeight: 1.5 }}
            >
              {subtitle}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{
              color: "text.secondary",
              flexShrink: 0,
              transition: "transform 0.3s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Card>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflowY: "hidden" }}
          >
            <Box sx={{ pt: 2, minWidth: 0, overflowX: "auto" }}>{children}</Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

function VideoPlayer({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        bgcolor: "#0A0A0F",
        overflow: "hidden",
        cursor: playing ? "default" : "pointer",
      }}
      onClick={!playing ? handlePlay : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        controls={playing}
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />

      {/* Placeholder overlay */}
      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            {/* Gradient background */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 0% 100% at 20% 20%, rgba(139, 123, 130, 0.288) 0%, rgba(241, 234, 241, 0) 70%)",
              }}
            />

            {/* Play button */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: { xs: 56, sm: 72 },
                height: { xs: 56, sm: 72 },
                borderRadius: "50%",
                bgcolor: "rgba(143, 67, 100, 0.35)",
                backdropFilter: "blur(12px)",
                border: "2px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(190,14,91,0.35)",
                  borderColor: "rgba(190,14,91,0.6)",
                  transform: "scale(1.08)",
                },
              }}
            >
              <PlayArrowIcon
                sx={{ fontSize: { xs: 28, sm: 36 }, color: "#fff" }}
              />
            </Box>

            {/* Title text */}
            <Typography
              sx={{
                position: "relative",
                zIndex: 1,
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "0.85rem", sm: "1rem" },
                textAlign: "center",
                px: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                position: "relative",
                zIndex: 1,
                color: "rgba(255,255,255,0.5)",
                mt: 0.5,
                fontWeight: 500,
              }}
            >
              Click to play
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

function RashadContent() {
  return (
    <>
      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography sx={{ ...bodyText, fontSize: "0.9375rem", mb: 2 }}>
          Rashad is Rubix’s flagship internal intelligence platform designed to
          support the consulting lifecycle end to end. It is being developed to
          help teams work faster, think sharper, and deliver more consistently
          by combining AI agents, structured knowledge, workflow automation, and
          decision support into one connected system.
        </Typography>
        <Typography sx={{ ...bodyText, fontSize: "0.9375rem" }}>
          Rather than functioning as a single-use proposal tool, Rashad is
          intended to become an intelligent operating layer for consulting work.
          It will support opportunity assessment, RFP understanding, knowledge
          retrieval, content generation, delivery acceleration, project
          mobilization, and institutional learning across Rubix.
        </Typography>
      </Card>
    </>
  );
}

function WorcareContent() {
  return (
    <>
      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "primary.light", mb: 1, fontWeight: 700 }}
        >
          WorCare – Supporting Your People, Elevating Your Business
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}>
          WorCare is a digital wellbeing and workplace engagement platform being
          developed to help organizations strengthen employee experience,
          engagement, and overall workplace health through structured digital
          journeys, meaningful content, and scalable service integration.
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
          AI Pulse is supporting the evolution of WorCare from concept to
          platform logic by shaping the product structure, experience flows, and
          digital foundation required for long-term scalability.
        </Typography>
      </Card>
    </>
  );
}

function RoadmapProjectContent({ objective }: { objective: string }) {
  return (
    <Card sx={{ ...card, p: 3 }}>
      <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
        Objective
      </Typography>
      <Typography variant="body2" sx={{ ...bodyText }}>
        {objective}
      </Typography>
    </Card>
  );
}

export default function ProjectsSection() {
  const [open, setOpen] = useState<string | null>("");

  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        setTimeout(() => {
          const el = document.getElementById(next);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
      return next;
    });
  }, []);

  return (
    <SectionWrapper id="projects" label="Products & Initiatives">
      <Typography
        variant="h2"
        sx={{
          mb: 1,
          fontWeight: 700,
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
        }}
      >
        Products & Initiatives
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        AI Pulse is building a portfolio of internal and market-facing platforms
        that enhance consulting delivery, improve decision-making, create
        operational efficiencies, and open new digital growth opportunities for
        Rubix.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ProjectAccordion
          id="rashad"
          icon={
            <RocketLaunchIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="Rashad Project"
          subtitle="Rubix’s AI-powered consulting intelligence system"
          chips={[
            {
              label: "Core Build",
              bg: "rgba(229,57,53,0.2)",
              color: "#ef5350",
            },
            {
              label: "Phase 1 / 7",
              bg: "rgba(190,14,91,0.2)",
              color: "primary.light",
            },
            {
              label: "In Development",
              bg: "rgba(255,193,7,0.2)",
              color: "#ffc107",
            },
            { label: "MVP: MAY 2026", bg: "#260312", color: "#FF6B9D" },
          ]}
          open={open === "rashad"}
          onToggle={() => toggle("rashad")}
        >
          <RashadContent />
        </ProjectAccordion>

        <ProjectAccordion
          id="worcare"
          icon={<FavoriteIcon sx={{ color: "primary.main", fontSize: 24 }} />}
          title="Worcare Project"
          subtitle="WorCare boosts employee well-being and engagement"
          chips={[
            {
              label: "Planned",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
            {
              label: "Core Build",
              bg: "rgba(229,57,53,0.2)",
              color: "#ef5350",
            },
            {
              label: "System Design Phase",
              bg: "rgba(33,150,243,0.2)",
              color: "#42a5f5",
            },
          ]}
          open={open === "worcare"}
          onToggle={() => toggle("worcare")}
        >
          <WorcareContent />
        </ProjectAccordion>

        <ProjectAccordion
          id="diagnify-ai"
          icon={
            <LocalHospitalIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="DiagnifyAI"
          subtitle="Complete structured build and readiness progression for selective healthcare market entry"
          chips={[
            {
              label: "Planned",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
            {
              label: "Strategic Activation",
              bg: "rgba(0,137,123,0.2)",
              color: "#00897b",
            },
            {
              label: "M2–M5",
              bg: "rgba(255,255,255,0.08)",
              color: "text.secondary",
            },
          ]}
          open={open === "diagnify-ai"}
          onToggle={() => toggle("diagnify-ai")}
        >
          <RoadmapProjectContent objective="Complete structured build and readiness progression for selective healthcare market entry. AI Pulse is supporting DiagnifyAI through structured build and readiness for selective healthcare market entry." />
        </ProjectAccordion>

        <ProjectAccordion
          id="sparkthon-platform"
          icon={<ViewInArIcon sx={{ color: "primary.main", fontSize: 24 }} />}
          title="SparkThon Platform"
          subtitle="Build and launch a basic digital platform in Q2 to manage startup applications, incubation, and tracking"
          chips={[
            {
              label: "Planned",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
            {
              label: "Venture Platform Launch",
              bg: "rgba(21,101,192,0.2)",
              color: "#1565c0",
            },
            {
              label: "M3–M6",
              bg: "rgba(255,255,255,0.08)",
              color: "text.secondary",
            },
          ]}
          open={open === "sparkthon-platform"}
          onToggle={() => toggle("sparkthon-platform")}
        >
          <RoadmapProjectContent objective="Build and launch a basic digital platform in Q2 to manage startup applications, incubation, and tracking—enabling SparkThon to scale operations and pipeline." />
        </ProjectAccordion>

        <ProjectAccordion
          id="sulhafa"
          icon={
            <SentimentSatisfiedAltIcon
              sx={{ color: "primary.main", fontSize: 24 }}
            />
          }
          title="Sulhafa"
          subtitle="Maintain stability, close development gaps, and support controlled regional growth"
          chips={[
            {
              label: "Planned",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
            {
              label: "Ongoing Maintenance",
              bg: "rgba(120,144,156,0.2)",
              color: "#78909c",
            },
            {
              label: "M3–M12",
              bg: "rgba(255,255,255,0.08)",
              color: "text.secondary",
            },
          ]}
          open={open === "sulhafa"}
          onToggle={() => toggle("sulhafa")}
        >
          <RoadmapProjectContent objective="Maintain stability, close development gaps, and support controlled regional growth for Sulhafa across the roadmap horizon." />
        </ProjectAccordion>
      </Box>
    </SectionWrapper>
  );
}
