"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SummarizeIcon from "@mui/icons-material/Summarize";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import DescriptionIcon from "@mui/icons-material/Description";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import DatasetIcon from "@mui/icons-material/Dataset";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
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
const innerCard = {
  bgcolor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 2,
};
const sectionTitle = {
  fontWeight: 700,
  mb: 2,
  color: "primary.light",
  fontSize: "1.1rem",
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

      <Typography variant="h6" sx={{ ...sectionTitle }}>
        End-to-end workflow
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            n: 1,
            title: "Opportunity / RFP Intake",
            text: "Captures opportunity inputs, client requirements, and project parameters from documents or structured forms",
          },
          {
            n: 2,
            title: "Requirement Intelligence",
            text: "Extracts, structures, and interprets scope, deliverables, timelines, evaluation criteria, and resource implications",
          },
          {
            n: 3,
            title: "Knowledge Retrieval & Context Build",
            text: "Pulls from Rubix templates, prior work, methodologies, credentials, and reusable content to build a smarter working base",
          },
          {
            n: 4,
            title: "Proposal & Response Enablement",
            text: "Supports the creation of technical responses, pricing logic, presentation content, and submission-ready materials.",
          },
          {
            n: 5,
            title: "Delivery Readiness & Mobilization",
            text: "Helps teams align roles, resources, priorities, and startup requirements once an opportunity moves forward.",
          },
          {
            n: 6,
            title: "Project Intelligence Support",
            text: "Provides consultants with agent-based assistance throughout execution to improve speed, structure, and quality.",
          },
          {
            n: 7,
            title: "Learning & Knowledge Reinforcement",
            text: "Learning & Knowledge Reinforcement",
          },
        ].map((s) => (
          <Grid item xs={12} sm={6} key={s.n}>
            <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                sx={{ color: "primary.main", mb: 0.5 }}
              >
                {s.n}. {s.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                {s.text}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ ...sectionTitle }}>
        AI Models Overview
      </Typography>
      <Typography sx={{ ...bodyText, mb: 3 }}>
        Rashad uses 8 main AI models to make proposal creation fast, accurate,
        and professional. Each model has a specific role in a controlled
        workflow.
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            icon: DatasetIcon,
            title: "1. Document Intelligence Engine",
            desc: "Transforms unstructured inputs into structured project intelligence.",
          },
          {
            icon: SummarizeIcon,
            title: "2. Summary & Insight Agent",
            desc: "Creates concise and decision-ready understanding of opportunities and requirements.",
          },
          {
            icon: QuestionAnswerIcon,
            title: "3. Knowledge Agent",
            desc: "Connects users to relevant Rubix content, past work, and reusable strategic assets.",
          },
          {
            icon: DescriptionIcon,
            title: "4. Proposal Generation Agent",
            desc: "Supports the creation of structured, branded, and high-quality response documents.",
          },
          {
            icon: DescriptionIcon,
            title: "5. Professional Profile Engine",
            desc: "Converts CVs into structured and visually organized professional summaries.",
          },
          {
            icon: SlideshowIcon,
            title: "6. Presentation Agent",
            desc: "Transforms approved content into polished client-facing presentations.",
          },
          {
            icon: RequestQuoteIcon,
            title: "7. Delivery Support Agents",
            desc: "Assists consultants during mobilization and project execution with guided intelligence and task acceleration.",
          },
          {
            icon: SummarizeIcon,
            title: "8. Learning Engine",
            desc: "Captures patterns, feedback, and reusable assets to improve future output quality over time.",
          },
        ].map((m) => (
          <Grid item xs={12} sm={6} key={m.title}>
            <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <m.icon
                  sx={{ color: "primary.main", mt: 0.25, fontSize: 24 }}
                />
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>
                    {m.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5, lineHeight: 1.7 }}
                  >
                    {m.desc}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ ...sectionTitle, mb: 1 }}>
        Project Timeline — Rashad Milestones
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        Timeline and phases are planned for 5–6 milestones; full details will be
        updated as the project progresses.
      </Typography>
      <Box sx={{ position: "relative", pl: { xs: 3, sm: 4 }, mb: 4 }}>
        <Box
          sx={{
            position: "absolute",
            left: { xs: 6, sm: 8 },
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: "primary.main",
            borderRadius: 1,
            opacity: 0.4,
          }}
        />
        {[
          {
            label: "PROJECT KICKOFF",
            title: "Rashad Engine – Project Initiated",
            desc: "Project scope defined with Mr. Hisham Darwish. Teams assembled across UI/UX, Front-End, Back-End, and AI disciplines.",
            filled: true,
          },
          {
            label: "12 MARCH 2026",
            title: "UI/UX – Phase 1 Deadline",
            desc: "UI/UX team deadline for Landing Page and Authentication screen designs.",
            filled: true,
          },
          {
            label: "17 MARCH 2026",
            title: "Front-End & Back-End – Phase 1 Deadline",
            desc: "Both development teams deliver Phase 1 implementation. Integration of Landing Page, Authentication, and Summary Agent begins.",
            filled: true,
          },
          {
            label: "19 MARCH 2026",
            title: "Phase 1 Full Delivery Target",
            desc: "Full Phase 1 complete: Landing Page, Authentication system, Summary & Q&A AI Agents live and tested.",
            filled: true,
          },
          {
            label: "TBD – PHASE 2",
            title: "Phase 2 Kickoff – Input & Summary Pages",
            desc: "Standard Mode, Detailed Mode, 3-tab Summary Page, full AI proposal generation, and export functionality.",
            filled: false,
          },
        ].map((m, i) => (
          <Box key={i} sx={{ position: "relative", pb: 3 }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: -22, sm: -30 },
                top: 0,
                width: 14,
                height: 14,
                borderRadius: "50%",
                bgcolor: m.filled ? "primary.main" : "transparent",
                border: "2px solid",
                borderColor: "primary.main",
              }}
            />
            <Card sx={{ ...card, p: 2, ml: 1 }}>
              <Chip
                label={m.label}
                size="small"
                sx={{
                  mb: 1,
                  bgcolor: "primary.900",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                }}
              />
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.5 }}>
                {m.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                {m.desc}
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" sx={{ ...sectionTitle, mb: 1 }}>
        Rashad Development Phases
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        A structured 7-phase development roadmap building Rashad from a document
        intelligence engine into a full consulting lifecycle platform.
      </Typography>

      <Grid container spacing={3}>
        {/* ── PHASE 1 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 1"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Document Intelligence &amp; Analysis
              </Typography>
              <Chip
                label="Delivered"
                size="small"
                sx={{
                  bgcolor: "rgba(76,175,80,0.2)",
                  color: "#4caf50",
                  fontWeight: 600,
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Delivered:
              </Box>{" "}
              19/3
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Foundation Layer – Making sense of complex documents automatically
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Build the core intelligence layer that reads, understands, and
              structures unstructured project documents. This phase establishes
              Rashad&apos;s ability to intelligently process RFPs and project
              briefs from any format: PDF, Word, scanned documents, or direct
              data input. The system automatically extracts critical
              information, organizes it into structured actionable data,
              generates comprehensive summaries, and provides an interactive
              Q&amp;A agent for deep exploration before moving to proposal
              generation.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={100} status="Completed" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "Document Intelligence Engine",
                  desc: "Reads and structures unstructured RFP files and user-provided data",
                },
                {
                  title: "Summary & Insight Agent",
                  desc: "Generates project summaries and identifies key insights, risks, and requirements",
                },
                {
                  title: "Q&A Agent",
                  desc: "Answers any question about the RFP or extracted summary, enabling deep exploration and clarification",
                },
              ].map((a) => (
                <Grid item xs={12} sm={4} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Document upload interface, processing indicators, data extraction review screens",
                },
                {
                  label: "Frontend",
                  text: "File upload components, real-time processing status, structured data display",
                },
                {
                  label: "Backend",
                  text: "Document parsing engine, AI extraction pipeline, data structuring service, Q&A API",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}
                >
                  UI/UX Team
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Phase 1 Design
                </Typography>
                <AnimatedProgressBar value={100} status="Completed" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Front-End Team
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Phase 1 Implementation
                </Typography>
                <AnimatedProgressBar value={100} status="Completed" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Back-End Team
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Auth APIs
                </Typography>
                <AnimatedProgressBar value={100} status="Completed" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    display: "block",
                    mb: 1,
                  }}
                >
                  AI Team
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Summary Agent
                    </Typography>
                    <AnimatedProgressBar value={100} status="Completed" />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Q&A Agent
                    </Typography>
                    <AnimatedProgressBar value={100} status="Completed" />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                      Extraction Agent
                    </Typography>
                    <AnimatedProgressBar value={100} status="Completed" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Completed Agents Videos */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ ...sectionTitle, mt: 1 }}>
            Completed Agents
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ ...innerCard, p: 0, overflow: "hidden" }}>
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Chip
                    label="Completed"
                    size="small"
                    sx={{
                      bgcolor: "rgba(76,175,80,0.2)",
                      color: "#4caf50",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                  <Typography variant="subtitle2" fontWeight={700}>
                    Extraction Agent
                  </Typography>
                </Box>
                <VideoPlayer
                  src="/videos/Extraction agent.mp4"
                  title="Extraction Agent Demo"
                />
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                      fontSize: "0.85rem",
                    }}
                  >
                    Converts unstructured RFP files (PDF, Word) into structured
                    data — extracting project overview, scope, deliverables,
                    timelines, team requirements, and evaluation criteria.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ ...innerCard, p: 0, overflow: "hidden" }}>
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Chip
                    label="Completed"
                    size="small"
                    sx={{
                      bgcolor: "rgba(76,175,80,0.2)",
                      color: "#4caf50",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                  <Typography variant="subtitle2" fontWeight={700}>
                    Summary &amp; Q&amp;A Agent
                  </Typography>
                </Box>
                <VideoPlayer
                  src="/videos/Summary  Q&A agent.mp4"
                  title="Summary & Q&A Agent Demo"
                />
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                      fontSize: "0.85rem",
                    }}
                  >
                    Creates structured summaries of projects from extracted data
                    and answers questions to help users understand the RFP and
                    project requirements in detail.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* ── PHASE 2 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3 }}>
            {/* Phase 2 header */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 2"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Input Page, Summary Page, AI Agents
              </Typography>
              <Chip
                label="In Progress"
                size="small"
                sx={{
                  bgcolor: "rgba(255,193,7,0.2)",
                  color: "#ffc107",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              User Interface &amp; Agent Integration Layer – Where intelligence
              meets interaction
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Build the user-facing interface that brings Phase 1 agents to
              life. This phase delivers complete user experience: an intuitive
              input page where users upload RFPs or enter project data manually,
              a dynamic summary page that displays extracted insights with
              editing capabilities, and seamless integration of all AI agents
              into an interactive workflow. Users can review, validate, and
              refine AI-generated outputs before proceeding to proposal
              generation.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                sx={{ mb: 1.5, color: "primary.light" }}
              >
                User Experience Flow
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                {[
                  "Upload RFP",
                  "AI processes & extracts data",
                  "Review structured summary",
                  "Ask questions via Q&A agent",
                  "Validate & proceed to proposal",
                ].map((step, i, arr) => (
                  <Box
                    key={step}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Chip
                      label={step}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "text.secondary",
                        fontSize: "0.72rem",
                      }}
                    />
                    {i < arr.length - 1 && (
                      <Typography
                        sx={{ color: "text.disabled", fontSize: "0.75rem" }}
                      >
                        →
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, mt: 3, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Input page design, summary dashboard, Q&A chat interface, data editing workflows",
                },
                {
                  label: "Frontend",
                  text: "Drag-drop upload, manual data entry forms, interactive summary cards, chat components",
                },
                {
                  label: "Backend",
                  text: "Agent orchestration layer, real-time processing pipeline, validation APIs",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* ── Section A: All Teams — deadline April 6 ── */}
            <Box
              sx={{
                ...innerCard,
                p: 2.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  UI/UX, Frontend &amp; Backend Teams
                </Typography>
                <Chip
                  label="Deadline: April 6, 2026"
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,193,7,0.15)",
                    color: "#ffc107",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    UI/UX Team
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Phase 2 Design
                  </Typography>
                  <AnimatedProgressBar value={80} status="In Progress" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    Front-End Team
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Phase 2 Implementation
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    Back-End Team
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Phase 2 APIs
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              </Grid>
            </Box>

            {/* ── Section B: AI Team — deadline April 16 ── */}
            <Box sx={{ ...innerCard, p: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  AI Team
                </Typography>
                <Chip
                  label="Deadline: April 16, 2026"
                  size="small"
                  sx={{
                    bgcolor: "rgba(190,14,91,0.15)",
                    color: "primary.light",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                  }}
                />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Proposal Agent
                  </Typography>
                  <AnimatedProgressBar value={30} status="In Progress" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Presentation Agent
                  </Typography>
                  <AnimatedProgressBar value={30} status="In Progress" />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>

        {/* ── PHASE 3 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3, opacity: 0.65 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 3"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Proposal Generation Engine
              </Typography>
              <Chip
                label="Planned"
                size="small"
                sx={{
                  bgcolor: "rgba(100,149,237,0.2)",
                  color: "#6495ed",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Estimated duration:
              </Box>{" "}
              2 weeks - 3 weeks
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Core Proposal Builder – From requirements to ready proposals in
              minutes
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Deliver Rashad&apos;s primary value: generating complete,
              high-quality technical proposals based on structured project data
              and internal knowledge.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={0} status="Not Started" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "Knowledge Agent",
                  desc: "Connects users to relevant Rubix content, past work, and reusable strategic assets",
                },
                {
                  title: "Proposal Generation Agent",
                  desc: "Supports creation of structured, branded, and high-quality response documents",
                },
              ].map((a) => (
                <Grid item xs={12} sm={6} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Knowledge base search interface, proposal editor, template selection, version control",
                },
                {
                  label: "Frontend",
                  text: "Rich text editor, section navigator, template gallery, export options",
                },
                {
                  label: "Backend",
                  text: "Knowledge base integration, AI proposal generation engine, template management, content assembly",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              {[
                { team: "UI/UX Team", task: "Phase 3 Design" },
                { team: "Front-End Team", task: "Phase 3 Implementation" },
                { team: "Back-End Team", task: "Phase 3 APIs" },
                { team: "AI Team", task: "Phase 3 Agents" },
              ].map((t) => (
                <Grid item xs={12} sm={6} md={3} key={t.team}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {t.team}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t.task}
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* ── PHASE 4 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3, opacity: 0.6 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 4"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Commercial &amp; Financial Proposals
              </Typography>
              <Chip
                label="Planned"
                size="small"
                sx={{
                  bgcolor: "rgba(100,149,237,0.2)",
                  color: "#6495ed",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Estimated time:
              </Box>{" "}
              TBD
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Commercial Intelligence – Smart pricing and commercial structures
              that win
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Extend Rashad to generate complete commercial and financial
              proposals, including pricing models, cost breakdowns, resource
              allocation and team budget.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={0} status="Not Started" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "Commercial Proposal Agent",
                  desc: "Generates complete commercial proposals with professional structure and positioning",
                },
                {
                  title: "Pricing Intelligence Module",
                  desc: "Applies smart pricing logic based on project scope, resources, and market benchmarks",
                },
              ].map((a) => (
                <Grid item xs={12} sm={6} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Pricing strategy builder, cost breakdown tables, budget allocation interface, scenario comparison",
                },
                {
                  label: "Frontend",
                  text: "Dynamic pricing calculators, interactive cost tables, chart components, export tools",
                },
                {
                  label: "Backend",
                  text: "Pricing logic engine, resource costing service, financial proposal API, ROI calculator",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              {[
                { team: "UI/UX Team", task: "Phase 4 Design" },
                { team: "Front-End Team", task: "Phase 4 Implementation" },
                { team: "Back-End Team", task: "Phase 4 APIs" },
                { team: "AI Team", task: "Phase 4 Agents" },
              ].map((t) => (
                <Grid item xs={12} sm={6} md={3} key={t.team}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {t.team}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t.task}
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* ── PHASE 5 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3, opacity: 0.55 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 5"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Mobilization &amp; Delivery Support
              </Typography>
              <Chip
                label="Planned"
                size="small"
                sx={{
                  bgcolor: "rgba(100,149,237,0.2)",
                  color: "#6495ed",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Estimated time:
              </Box>{" "}
              TBD
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Project Activation – From proposal to project kickoff seamlessly
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Help teams transition from winning the bid to launching the
              project. Automate mobilization planning, team assignments, kickoff
              preparation, and early execution.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={0} status="Not Started" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "Delivery Support Agents",
                  desc: "Assists consultants during mobilization and project execution with guided intelligence",
                },
                {
                  title: "Mobilization Planner",
                  desc: "Automates team assignments, kickoff preparation, and early execution planning",
                },
              ].map((a) => (
                <Grid item xs={12} sm={6} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Mobilization dashboard, team assignment interface, kickoff checklist, timeline views",
                },
                {
                  label: "Frontend",
                  text: "Workflow components, team org chart builder, Gantt charts, task trackers",
                },
                {
                  label: "Backend",
                  text: "Mobilization workflow engine, resource allocation service, notification system, delivery tracking",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              {[
                { team: "UI/UX Team", task: "Phase 5 Design" },
                { team: "Front-End Team", task: "Phase 5 Implementation" },
                { team: "Back-End Team", task: "Phase 5 APIs" },
                { team: "AI Team", task: "Phase 5 Agents" },
              ].map((t) => (
                <Grid item xs={12} sm={6} md={3} key={t.team}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {t.team}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t.task}
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* ── PHASE 6 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3, opacity: 0.5 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 6"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                RFP Agent Creator
              </Typography>
              <Chip
                label="Planned"
                size="small"
                sx={{
                  bgcolor: "rgba(100,149,237,0.2)",
                  color: "#6495ed",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Estimated time:
              </Box>{" "}
              TBD
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Custom Intelligence – Self-Service Agent Builder – Build your own
              specialized proposal agents
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Enable Rubix teams to reverse the workflow and generate
              professional RFP documents based on client requirements and
              project data. When clients provide project needs informally
              (conversations, briefs, meetings), this agent transforms that
              input into structured, professional RFP files that can be shared
              with vendors or used internally. Teams can customize RFP
              templates, define evaluation criteria, specify deliverables, and
              automatically generate complete tender documents — turning client
              discussions into formal procurement documentation.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={0} status="Not Started" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "RFP Agent Creator Platform",
                  desc: "Transforms informal client inputs into structured, professional RFP documents",
                },
                {
                  title: "Agent Training Interface",
                  desc: "Allows teams to train and configure specialized agents for specific procurement needs",
                },
              ].map((a) => (
                <Grid item xs={12} sm={6} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Agent builder wizard, training data uploader, configuration screens, testing interface",
                },
                {
                  label: "Frontend",
                  text: "Drag-drop agent builder, dataset manager, preview console, agent library",
                },
                {
                  label: "Backend",
                  text: "Agent configuration engine, training pipeline, agent execution runtime, registry system",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              {[
                { team: "UI/UX Team", task: "Phase 6 Design" },
                { team: "Front-End Team", task: "Phase 6 Implementation" },
                { team: "Back-End Team", task: "Phase 6 APIs" },
                { team: "AI Team", task: "Phase 6 Agents" },
              ].map((t) => (
                <Grid item xs={12} sm={6} md={3} key={t.team}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {t.team}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t.task}
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* ── PHASE 7 ── */}
        <Grid item xs={12}>
          <Card sx={{ ...card, p: 3, opacity: 0.45 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Chip
                label="Phase 7"
                size="small"
                sx={{
                  bgcolor: "rgba(190,14,91,0.2)",
                  color: "primary.light",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                }}
              />
              <Typography variant="subtitle1" fontWeight={700}>
                Consulting Agents Ecosystem
              </Typography>
              <Chip
                label="Planned"
                size="small"
                sx={{
                  bgcolor: "rgba(100,149,237,0.2)",
                  color: "#6495ed",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.82rem", mb: 2 }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 600, color: "primary.light" }}
              >
                Estimated time:
              </Box>{" "}
              TBD
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "primary.light",
                fontStyle: "italic",
                mb: 2,
                fontSize: "0.82rem",
              }}
            >
              Expert Network – AI-powered consulting expertise across the entire
              engagement lifecycle
            </Typography>

            <Typography sx={{ ...bodyText, mb: 3 }}>
              Expand Rashad into a full consulting platform with agents covering
              research, diagnostics, strategy formulation, implementation
              planning, and post-delivery support.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Overall Progress
              </Typography>
              <AnimatedProgressBar value={0} status="Not Started" />
            </Box>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Agents Delivered
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  title: "Research & Market Analysis Agent",
                  desc: "Delivers deep market insights and competitive intelligence to support strategy",
                },
                {
                  title: "Diagnostic & Assessment Agent",
                  desc: "Evaluates organizational and project health through structured diagnostics",
                },
                {
                  title: "Strategy Formulation Agent",
                  desc: "Assists teams in building data-driven strategic recommendations and plans",
                },
                {
                  title: "Implementation Roadmap Agent",
                  desc: "Converts strategies into clear, actionable implementation plans and timelines",
                },
                {
                  title: "Post-Delivery Support Agent",
                  desc: "Provides ongoing guidance and monitoring during post-project delivery phases",
                },
                {
                  title: "Learning Engine",
                  desc: "Continuously improves output quality by capturing patterns, feedback, and reusable assets",
                },
              ].map((a) => (
                <Grid item xs={12} sm={6} md={4} key={a.title}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ color: "primary.light", mb: 0.5 }}
                    >
                      {a.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {a.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Implementation
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {[
                {
                  label: "UI/UX",
                  text: "Research dashboard, diagnostic tools, strategy canvas, roadmap visualizer, feedback portal",
                },
                {
                  label: "Frontend",
                  text: "Multi-agent interface, data visualization, assessment forms, interactive roadmaps",
                },
                {
                  label: "Backend",
                  text: "Research engine, diagnostic logic, strategy algorithms, roadmap builder, learning pipeline",
                },
              ].map((row) => (
                <Grid item xs={12} sm={4} key={row.label}>
                  <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                      }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {row.text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="subtitle2"
              fontWeight={700}
              sx={{ mb: 2, color: "primary.light" }}
            >
              Team Progress
            </Typography>
            <Grid container spacing={2}>
              {[
                { team: "UI/UX Team", task: "Phase 7 Design" },
                { team: "Front-End Team", task: "Phase 7 Implementation" },
                { team: "Back-End Team", task: "Phase 7 APIs" },
                { team: "AI Team", task: "Phase 7 Agents" },
              ].map((t) => (
                <Grid item xs={12} sm={6} md={3} key={t.team}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {t.team}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {t.task}
                  </Typography>
                  <AnimatedProgressBar value={0} status="Not Started" />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
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

      <Typography variant="h6" sx={{ ...sectionTitle }}>
        Key Dimensions of WorCare
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            icon: PsychologyIcon,
            label: "Mental Well-Being",
            sub: "Manage stress, improve focus, and access mindfulness resources.",
          },
          {
            icon: FavoriteIcon,
            label: "Emotional Well-Being",
            sub: "Boost morale with recognition programs, support channels, and a safe workplace.",
          },
          {
            icon: FitnessCenterIcon,
            label: "Physical Well-Being",
            sub: "Track health, join wellness challenges, and access fitness programs and insurance support.",
          },
          {
            icon: SelfImprovementIcon,
            label: "Purpose Well-Being",
            sub: "Grow through career development, training, mentorship, and goal alignment.",
          },
          {
            icon: AccountBalanceWalletIcon,
            label: "Financial Well-Being",
            sub: "Plan and manage finances with budgeting tools and stability support.",
          },
        ].map((d) => (
          <Grid item xs={12} sm={6} key={d.label} sx={{ minHeight: "120px" }}>
            <Card sx={{ ...innerCard, p: 2, height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <d.icon
                  sx={{ color: "primary.main", fontSize: 24, mt: 0.25 }}
                />
                <Box>
                  <Typography variant="body2" fontWeight={700}>
                    {d.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5, lineHeight: 1.6 }}
                  >
                    {d.sub}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}
      >
        Well-being apps ranking (by downloads)
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                #
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                APP
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                DOWNLOADS
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                ANDROID
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                IOS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                r: 1,
                app: "Happify",
                dl: "+500k",
                and: "3.6★ (3.4K)",
                ios: "4.5★ (4.7K)",
              },
              {
                r: 2,
                app: "Tuhoon",
                dl: "+100k",
                and: "4.6★ (2.63K)",
                ios: "4.7★ (654)",
              },
              {
                r: 3,
                app: "Wellable",
                dl: "+100k",
                and: "–",
                ios: "4.5★ (2.8K)",
              },
              {
                r: 4,
                app: "BetterUp",
                dl: "+50k",
                and: "–",
                ios: "4.5★ (423)",
              },
              {
                r: 5,
                app: "MantraCare",
                dl: "+50k",
                and: "–",
                ios: "1.0★ (1)",
              },
              {
                r: 6,
                app: "Takalam",
                dl: "+10k",
                and: "3.2★ (52)",
                ios: "5.0★ (1)",
              },
              { r: 7, app: "VIWELL", dl: "+1k", and: "–", ios: "5.0★ (2)" },
              {
                r: 8,
                app: "Wellness360",
                dl: "+1k",
                and: "–",
                ios: "4.0★ (1)",
              },
              { r: 9, app: "Woliba", dl: "+1k", and: "–", ios: "2.7★ (65)" },
              { r: 10, app: "Wellics", dl: "+100", and: "–", ios: "–" },
              { r: 11, app: "MindTales", dl: "–", and: "–", ios: "–" },
            ].map((row) => (
              <TableRow
                key={row.app}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>
                  {row.r}
                </TableCell>
                <TableCell sx={{ color: "text.secondary", fontWeight: 500 }}>
                  {row.app}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{row.dl}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  {row.and}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  {row.ios}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 1, color: "primary.light" }}
      >
        Comparative Analysis – Coverage by Dimension
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mb: 2 }}
      >
        High = Strong coverage · Low = Limited or no coverage
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              {[
                "APP",
                "MENTAL",
                "EMOTIONAL",
                "PHYSICAL",
                "PURPOSE",
                "FINANCIAL",
              ].map((h) => (
                <TableCell
                  key={h}
                  sx={{ fontWeight: 700, color: "primary.light" }}
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                app: "Happify",
                m: "High",
                e: "High",
                p: "Low",
                pur: "High",
                f: "Low",
              },
              {
                app: "Tuhoon",
                m: "High",
                e: "High",
                p: "Low",
                pur: "Low",
                f: "Low",
              },
              {
                app: "Wellable",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "Low",
              },
              {
                app: "BetterUp",
                m: "High",
                e: "High",
                p: "Low",
                pur: "High",
                f: "Low",
              },
              {
                app: "MantraCare",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "Low",
              },
              {
                app: "Takalam",
                m: "High",
                e: "High",
                p: "Low",
                pur: "Low",
                f: "Low",
              },
              {
                app: "VIWELL",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "Low",
              },
              {
                app: "Wellness360",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "Low",
              },
              {
                app: "Woliba",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "High",
              },
              {
                app: "Wellics",
                m: "High",
                e: "High",
                p: "High",
                pur: "High",
                f: "Low",
              },
              {
                app: "MindTales",
                m: "High",
                e: "High",
                p: "Low",
                pur: "High",
                f: "Low",
              },
            ].map((row) => (
              <TableRow
                key={row.app}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ fontWeight: 500, color: "text.secondary" }}>
                  {row.app}
                </TableCell>
                {[row.m, row.e, row.p, row.pur, row.f].map((v, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      color: v === "High" ? "primary.light" : "text.secondary",
                    }}
                  >
                    {v}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}
      >
        Competitive Feature Comparison
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mb: 1 }}
      >
        Y = Feature present · N = Feature absent
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 2, ...card, overflow: "hidden" }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell
                sx={{ fontWeight: 700, color: "primary.light", minWidth: 160 }}
              >
                APP / FEATURE
              </TableCell>
              {[
                "Happify",
                "Tuhoon",
                "Wellable",
                "BetterUp",
                "MantraCare",
                "Takalam",
                "VIWELL",
                "Wellness360",
                "Woliba",
                "Wellics",
                "MindTales",
              ].map((app) => (
                <TableCell
                  key={app}
                  align="center"
                  sx={{ fontWeight: 700, color: "primary.light", minWidth: 68 }}
                >
                  {app}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                f: "Mental Health Programs",
                y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              },
              {
                f: "Emotional Support / Therapy",
                y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              },
              { f: "1-on-1 Coaching", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              {
                f: "AI-Driven Personalization",
                y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              },
              {
                f: "Physical Activity Tracking",
                y: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
              },
              {
                f: "Fitness Device Integration",
                y: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
              },
              { f: "Nutrition Programs", y: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Sleep Programs", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
              {
                f: "Stress Management Tools",
                y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              },
              { f: "Guided Meditations", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Goal Setting", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Progress Tracking", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              {
                f: "Gamification / Challenges",
                y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
              },
              {
                f: "Rewards / Incentives",
                y: [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
              },
              { f: "Financial Wellness", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Social / Community", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
              {
                f: "Enterprise Dashboard / HR",
                y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
              },
              {
                f: "Corporate Wellness Programs",
                y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
              },
            ].map((row) => (
              <TableRow
                key={row.f}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ fontWeight: 500, color: "text.secondary" }}>
                  {row.f}
                </TableCell>
                {row.y.map((v, i) => (
                  <TableCell
                    key={i}
                    align="center"
                    sx={{ color: v ? "primary.light" : "text.secondary" }}
                  >
                    {v ? "Y" : "N"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, mt: 4, color: "primary.light" }}
      >
        The 5-Dimension Coverage Gap
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Dimension
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Apps Covering It
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Market Saturation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { dim: "Mental", apps: "11 / 11", sat: "🔴 Fully saturated" },
              { dim: "Emotional", apps: "11 / 11", sat: "🔴 Fully saturated" },
              { dim: "Physical", apps: "7 / 11", sat: "🟡 Moderately covered" },
              { dim: "Purpose", apps: "8 / 11", sat: "🟡 Moderately covered" },
              { dim: "Financial", apps: "1 / 11", sat: "🟢 Nearly empty" },
            ].map((r) => (
              <TableRow
                key={r.dim}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                  {r.dim}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{r.apps}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{r.sat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}
      >
        Feature-Level Gap Analysis
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, lineHeight: 1.6 }}
      >
        These features exist in 90–100% of competitors. Users expect them by
        default. Not having them is an immediate disqualifier.
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Feature
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, color: "primary.light" }}
                align="right"
              >
                Coverage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { f: "Mental Health Programs", c: "11 / 11 — 100%" },
              { f: "Emotional Support / Therapy", c: "11 / 11 — 100%" },
              { f: "Stress Management Tools", c: "11 / 11 — 100%" },
              { f: "Goal Setting", c: "11 / 11 — 100%" },
              { f: "Progress Tracking", c: "11 / 11 — 100%" },
              { f: "AI-Driven Personalization", c: "10 / 11 — 91%" },
              { f: "Guided Meditations", c: "9 / 11 — 82%" },
            ].map((r) => (
              <TableRow
                key={r.f}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ color: "text.secondary" }}>{r.f}</TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "primary.light", fontWeight: 600 }}
                >
                  {r.c}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 700, mb: 1.5, mt: 3, color: "primary.light" }}
      >
        Competitive Features
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, lineHeight: 1.6 }}
      >
        Present in roughly half the market. Having them signals maturity.
        Missing them signals a gap.
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Feature
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, color: "primary.light" }}
                align="right"
              >
                Coverage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { f: "Physical Activity Tracking", c: "9 / 11 — 82%" },
              { f: "Gamification / Challenges", c: "8 / 11 — 73%" },
              { f: "Nutrition Programs", c: "6 / 11 — 55%" },
              { f: "HR Dashboard & Analytics", c: "6 / 11 — 55%" },
              { f: "Rewards / Incentives", c: "5 / 11 — 45%" },
              { f: "Corporate Wellness Programs", c: "5 / 11 — 45%" },
              { f: "Fitness Device Integration", c: "5 / 11 — 45%" },
            ].map((r) => (
              <TableRow
                key={r.f}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ color: "text.secondary" }}>{r.f}</TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "primary.light", fontWeight: 600 }}
                >
                  {r.c}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 700, mb: 1.5, mt: 3, color: "primary.light" }}
      >
        Differentiation Features
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, lineHeight: 1.6 }}
      >
        Rare in the market. Covering these creates a clear reason to choose
        WorCare over anyone else.
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Feature
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Coverage
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Why It Matters
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
              }}
            >
              <TableCell sx={{ color: "text.secondary" }}>
                Sleep Programs
              </TableCell>
              <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>
                4 / 11 — 36%
              </TableCell>
              <TableCell sx={{ color: "text.secondary" }}>
                Sleep directly drives productivity — employers care deeply about
                this
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
              }}
            >
              <TableCell sx={{ color: "text.secondary" }}>
                Financial Wellness
              </TableCell>
              <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>
                1 / 11 — 9%
              </TableCell>
              <TableCell sx={{ color: "text.secondary" }}>
                The #1 source of employee stress globally — almost no app
                addresses it
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, mt: 4, color: "primary.light" }}
      >
        Competitor Weakness Breakdown
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ mb: 4, ...card, overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Competitor
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                Key Gap
              </TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>
                WorCare Advantage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                comp: "Happify",
                gap: "No physical, no financial",
                adv: "Cover both and you outclass it across the board",
              },
              {
                comp: "Tuhoon",
                gap: "No physical, no purpose, no financial",
                adv: "Strong on mental only — very limited scope",
              },
              {
                comp: "BetterUp",
                gap: "No physical, no financial",
                adv: "Premium-priced but incomplete on 2 dimensions",
              },
              {
                comp: "Takalam",
                gap: "Covers only mental & emotional",
                adv: "Essentially a therapy app, not a well-being platform",
              },
              {
                comp: "Woliba",
                gap: "Only competitor with financial — but 1k downloads",
                adv: "Proves the demand exists, hasn't executed on growth",
              },
              {
                comp: "MantraCare / Wellable",
                gap: "Missing financial only",
                adv: "Close to full — WorCare must also cover financial to beat them",
              },
            ].map((r, i) => (
              <TableRow
                key={r.comp}
                sx={{
                  "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" },
                }}
              >
                <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                  {r.comp}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{r.gap}</TableCell>
                <TableCell sx={{ color: "primary.light" }}>{r.adv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

function AIStudiesContent() {
  return (
    <>
      {/* ========== McKinsey & Company ========== */}
      <Box
        sx={{
          borderLeft: "4px solid",
          borderColor: "primary.main",
          pl: 2,
          mb: 4,
          py: 0.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            color: "primary.light",
            fontSize: "1.15rem",
          }}
        >
          McKinsey & Company
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontSize: "0.8rem" }}
        >
          Source: McKinsey Official Website (mckinsey.com)
        </Typography>
      </Box>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 2 }}>
          McKinsey Lilli – AI Knowledge Assistant
        </Typography>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
            fontSize: "0.8rem",
          }}
        >
          Why It Was Created
        </Typography>
        <Box
          component="ul"
          sx={{ m: 0, pl: 2.5, ...bodyText, mb: 2, "& li": { mb: 0.5 } }}
        >
          <li>
            McKinsey: 100+ years of experience, 100,000+ documents, experts
            across 70+ countries
          </li>
          <li>Before Lilli: finding info and experts took days or weeks</li>
          <li>
            Goal: turn McKinsey&apos;s knowledge into instant, actionable
            insights
          </li>
        </Box>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
            fontSize: "0.8rem",
          }}
        >
          What Lilli Does
        </Typography>
        <Box
          component="ul"
          sx={{ m: 0, pl: 2.5, ...bodyText, mb: 2, "& li": { mb: 0.5 } }}
        >
          <li>Searches internal knowledge in seconds</li>
          <li>Highlights 5–7 key sources</li>
          <li>Summarizes insights clearly</li>
          <li>Provides links and expert contacts</li>
          <li>Two modes: Internal and External</li>
        </Box>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
            fontSize: "0.8rem",
          }}
        >
          How It Helps
        </Typography>
        <Box
          component="ul"
          sx={{ m: 0, pl: 2.5, ...bodyText, mb: 2, "& li": { mb: 0.5 } }}
        >
          <li>
            <strong>Saves Time</strong> – weeks → hours/minutes
          </li>
          <li>
            <strong>Improves Thinking</strong> – tests logic, anticipates
            questions, connects insights
          </li>
          <li>
            <strong>Inspires Ideas</strong> – cross-industry comparisons and new
            perspectives
          </li>
        </Box>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
            fontSize: "0.8rem",
          }}
        >
          How It Works
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText, mb: 2 }}>
          User asks a question → scans knowledge base → selects key content →
          summarizes → shows sources & experts
        </Typography>

        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
            fontSize: "0.8rem",
          }}
        >
          Impact
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText }}>
          Boosts productivity, insight quality, and creativity. Changes how
          consultants work, enabling better work, not just faster work.
        </Typography>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          QuantumBlack – McKinsey&apos;s AI Consulting Arm
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText, mb: 2 }}>
          QuantumBlack is McKinsey&apos;s dedicated AI and advanced analytics
          division, focused on building and deploying AI solutions for client
          organizations.
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
          }}
        >
          Key capabilities
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 2.5,
            color: "text.secondary",
            mb: 2,
            "& li": { mb: 0.5 },
          }}
        >
          <li>
            Developed by 200+ engineers, designers, product managers, and data
            scientists
          </li>
          <li>Works with 1,000+ industry practitioners</li>
          <li>
            Deploys AI solutions through three models: Client-managed
            deployment; Managed service; Fully delivered AI-as-a-service
          </li>
        </Box>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
          }}
        >
          Core focus
        </Typography>
        <Box
          component="ul"
          sx={{ m: 0, pl: 2.5, color: "text.secondary", "& li": { mb: 0.5 } }}
        >
          <li>Identifying high-value AI opportunities</li>
          <li>Building production-grade AI and agentic systems</li>
          <li>Redesigning business workflows using AI</li>
        </Box>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          How McKinsey Uses AI
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              title: "AI Strategy",
              text: "Define enterprise AI strategies; integrate AI into existing systems; redesign workflows and scale deployment.",
            },
            {
              title: "AI Transformation",
              text: "Move companies from isolated AI experiments to enterprise-wide impact.",
            },
            {
              title: "Data Transformation",
              text: "Help organizations unlock the value of data through improvements in technology, processes, and capabilities.",
            },
            {
              title: "Digital Twins",
              text: "Create virtual simulations of assets, processes, and people to support smarter decision-making.",
            },
            {
              title: "Social Impact",
              text: "Use AI and advanced analytics to build scalable solutions addressing global challenges.",
            },
          ].map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Box sx={{ ...innerCard, p: 1.5 }}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ color: "primary.light", mb: 0.5 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 700, mb: 1.5, color: "primary.light" }}
      >
        Industries Where McKinsey Applies AI
      </Typography>
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {[
          {
            ind: "Life Sciences",
            desc: "Accelerating drug discovery by 1–2 years using machine learning models",
          },
          {
            ind: "Mining & Manufacturing",
            desc: "Using OptimusAI to optimize production through large-scale sensor data",
          },
          {
            ind: "Insurance",
            desc: "AI systems that reduce claims processing time by up to 50%",
          },
          {
            ind: "Retail",
            desc: "Converting real-time transaction data into instant operational decisions",
          },
          {
            ind: "Telecommunications",
            desc: "AI-powered training tools to upskill large customer service teams",
          },
          {
            ind: "Banking",
            desc: "Generative AI chatbots for customer interaction and support",
          },
          {
            ind: "Public Sector",
            desc: "AI solutions across education, healthcare, taxation, urban development, and transportation",
          },
        ].map((item) => (
          <Grid item xs={12} sm={6} key={item.ind}>
            <Box sx={{ ...innerCard, p: 1.5 }}>
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ color: "text.primary" }}
              >
                {item.ind}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "0.875rem" }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* ========== Boston Consulting Group ========== */}
      <Box
        sx={{
          mt: 5,
          pt: 4,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            px: 2,
            py: 0.5,
            bgcolor: "background.default",
            borderRadius: 1,
            border: "1px solid rgba(190, 14, 91, 0.3)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: "primary.light", letterSpacing: 0.5 }}
          >
            NEW COMPANY
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderLeft: "4px solid",
          borderColor: "primary.main",
          pl: 2,
          mb: 4,
          py: 0.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            color: "primary.light",
            fontSize: "1.15rem",
          }}
        >
          Boston Consulting Group (BCG) — AI at Scale
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontSize: "0.8rem" }}
        >
          Source: bcg.com/capabilities/artificial-intelligence
        </Typography>
      </Box>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          Core Statement
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText, mb: 1.5 }}>
          BCG helps organizations combine human and technological capabilities
          to maximize value, productivity, and innovation from AI.
        </Typography>
        <Typography
          variant="body2"
          sx={{ ...bodyText, fontWeight: 600, color: "primary.light" }}
        >
          Predictive AI + Generative AI = stronger, sustained AI value creation
        </Typography>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          BCG AI Services
        </Typography>
        <Grid container spacing={1.5}>
          {[
            {
              name: "AI Agents",
              desc: "Autonomous agents that observe, plan, and act; streamline processes and augment human potential.",
            },
            {
              name: "Generative AI",
              desc: "Content creation using deep learning and GANs to disrupt or enhance business.",
            },
            {
              name: "Responsible AI",
              desc: "Strategic programs based on five pillars to deploy AI responsibly.",
            },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Box sx={{ ...innerCard, p: 1.5 }}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ color: "primary.light" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    mt: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          AI Approach
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText, mb: 2 }}>
          Every AI transformation is customized for the organization&apos;s
          context and goals.
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "primary.light",
            display: "block",
            mb: 0.5,
          }}
        >
          10-20-70 focus
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 2.5,
            color: "text.secondary",
            "& li": { mb: 0.5 },
          }}
        >
          <li>Algorithms (10%)</li>
          <li>Tech & data (20%)</li>
          <li>People & processes (70%)</li>
        </Box>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          Strategic Plays: DRI Framework
        </Typography>
        <Grid container spacing={1.5}>
          {[
            {
              name: "Deploy GenAI in Everyday Tools",
              desc: "Capture near-term cost and efficiency gains.",
            },
            {
              name: "Reshape Critical Functions",
              desc: "Transform core business operations.",
            },
            {
              name: "Invent New Business Models",
              desc: "Create entirely new AI-driven value.",
            },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Box sx={{ ...innerCard, p: 1.5 }}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{ color: "primary.light" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    mt: 0.5,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" sx={{ ...bodyText, mt: 2 }}>
          BCG strengthens these plays by ensuring robust technology, skilled
          people, and risk-aware foundations.
        </Typography>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          BCG X Products & Ecosystem
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 2.5,
            color: "text.secondary",
            mb: 2,
            "& li": { mb: 0.75 },
          }}
        >
          <li>
            <strong>BCG X Products</strong> – ready-to-use AI solutions backed
            by science, IP, and advanced AI components
          </li>
          <li>
            <strong>AI Ecosystem & Partners</strong> – collaborations with AWS,
            Google, IBM, Microsoft, Salesforce, SAP, OpenAI, Anthropic,
            LangChain, Palantir, etc.
          </li>
        </Box>
        <Typography variant="body2" sx={{ ...bodyText }}>
          Supports optimizing technology, reshaping functions, inventing
          opportunities, and reimagining organizations.
        </Typography>
      </Card>

      <Card sx={{ ...card, p: 3, mb: 3 }}>
        <Typography variant="subtitle2" sx={{ ...cardTitle, mb: 1.5 }}>
          Key Insight
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText, mb: 1 }}>
          Only 25% of companies achieve ROI from AI investments.
        </Typography>
        <Typography variant="body2" sx={{ ...bodyText }}>
          Leaders succeed by rethinking workflows, aligning incentives, and
          focusing on value.
        </Typography>
      </Card>
    </>
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
              label: "Phase 2 / 7",
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
