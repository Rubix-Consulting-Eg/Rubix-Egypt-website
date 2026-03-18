"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
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

function ResearchAccordion({
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
  children?: React.ReactNode;
}) {
  const hasContent = !!children;

  return (
    <Box id={id} component="section" sx={{ scrollMarginTop: 100 }}>
      <Card
        onClick={hasContent ? onToggle : undefined}
        sx={{
          ...card,
          p: { xs: 2, sm: 3 },
          cursor: hasContent ? "pointer" : "default",
          transition: "border-color 0.2s, background 0.2s",
          borderColor: open ? "primary.main" : "rgba(255,255,255,0.08)",
          "&:hover": hasContent
            ? {
                borderColor: "primary.main",
                bgcolor: "rgba(255,255,255,0.06)",
              }
            : {},
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
          {hasContent && (
            <IconButton
              size="small"
              sx={{
                flexShrink: 0,
                color: "text.secondary",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </Box>
      </Card>
      {hasContent && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Box sx={{ pt: 3, pb: 1 }}>{children}</Box>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Box>
  );
}

function WorcareResearchContent() {
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
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>#</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>APP</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>DOWNLOADS</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>ANDROID</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>IOS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { r: 1, app: "Happify", dl: "+500k", and: "3.6★ (3.4K)", ios: "4.5★ (4.7K)" },
              { r: 2, app: "Tuhoon", dl: "+100k", and: "4.6★ (2.63K)", ios: "4.7★ (654)" },
              { r: 3, app: "Wellable", dl: "+100k", and: "–", ios: "4.5★ (2.8K)" },
              { r: 4, app: "BetterUp", dl: "+50k", and: "–", ios: "4.5★ (423)" },
              { r: 5, app: "MantraCare", dl: "+50k", and: "–", ios: "1.0★ (1)" },
              { r: 6, app: "Takalam", dl: "+10k", and: "3.2★ (52)", ios: "5.0★ (1)" },
              { r: 7, app: "VIWELL", dl: "+1k", and: "–", ios: "5.0★ (2)" },
              { r: 8, app: "Wellness360", dl: "+1k", and: "–", ios: "4.0★ (1)" },
              { r: 9, app: "Woliba", dl: "+1k", and: "–", ios: "2.7★ (65)" },
              { r: 10, app: "Wellics", dl: "+100", and: "–", ios: "–" },
              { r: 11, app: "MindTales", dl: "–", and: "–", ios: "–" },
            ].map((row) => (
              <TableRow key={row.app} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>{row.r}</TableCell>
                <TableCell sx={{ color: "text.secondary", fontWeight: 500 }}>{row.app}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{row.dl}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{row.and}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{row.ios}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "primary.light" }}>
        Comparative Analysis – Coverage by Dimension
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
        High = Strong coverage · Low = Limited or no coverage
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              {["APP", "MENTAL", "EMOTIONAL", "PHYSICAL", "PURPOSE", "FINANCIAL"].map((h) => (
                <TableCell key={h} sx={{ fontWeight: 700, color: "primary.light" }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { app: "Happify", m: "High", e: "High", p: "Low", pur: "High", f: "Low" },
              { app: "Tuhoon", m: "High", e: "High", p: "Low", pur: "Low", f: "Low" },
              { app: "Wellable", m: "High", e: "High", p: "High", pur: "High", f: "Low" },
              { app: "BetterUp", m: "High", e: "High", p: "Low", pur: "High", f: "Low" },
              { app: "MantraCare", m: "High", e: "High", p: "High", pur: "High", f: "Low" },
              { app: "Takalam", m: "High", e: "High", p: "Low", pur: "Low", f: "Low" },
              { app: "VIWELL", m: "High", e: "High", p: "High", pur: "High", f: "Low" },
              { app: "Wellness360", m: "High", e: "High", p: "High", pur: "High", f: "Low" },
              { app: "Woliba", m: "High", e: "High", p: "High", pur: "High", f: "High" },
              { app: "Wellics", m: "High", e: "High", p: "High", pur: "High", f: "Low" },
              { app: "MindTales", m: "High", e: "High", p: "Low", pur: "High", f: "Low" },
            ].map((row) => (
              <TableRow key={row.app} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ fontWeight: 500, color: "text.secondary" }}>{row.app}</TableCell>
                {[row.m, row.e, row.p, row.pur, row.f].map((v, i) => (
                  <TableCell key={i} sx={{ color: v === "High" ? "primary.light" : "text.secondary" }}>{v}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}>
        Competitive Feature Comparison
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
        Y = Feature present · N = Feature absent
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 2, ...card, overflow: "hidden" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light", minWidth: 160 }}>APP / FEATURE</TableCell>
              {["Happify", "Tuhoon", "Wellable", "BetterUp", "MantraCare", "Takalam", "VIWELL", "Wellness360", "Woliba", "Wellics", "MindTales"].map((app) => (
                <TableCell key={app} align="center" sx={{ fontWeight: 700, color: "primary.light", minWidth: 68 }}>{app}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { f: "Mental Health Programs", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Emotional Support / Therapy", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "1-on-1 Coaching", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "AI-Driven Personalization", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Physical Activity Tracking", y: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0] },
              { f: "Fitness Device Integration", y: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Nutrition Programs", y: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Sleep Programs", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Stress Management Tools", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Guided Meditations", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Goal Setting", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Progress Tracking", y: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Gamification / Challenges", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Rewards / Incentives", y: [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Financial Wellness", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0] },
              { f: "Social / Community", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Enterprise Dashboard / HR", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
              { f: "Corporate Wellness Programs", y: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1] },
            ].map((row) => (
              <TableRow key={row.f} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ fontWeight: 500, color: "text.secondary" }}>{row.f}</TableCell>
                {row.y.map((v, i) => (
                  <TableCell key={i} align="center" sx={{ color: v ? "primary.light" : "text.secondary" }}>{v ? "Y" : "N"}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: "primary.light" }}>
        The 5-Dimension Coverage Gap
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Dimension</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Apps Covering It</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Market Saturation</TableCell>
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
              <TableRow key={r.dim} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>{r.dim}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{r.apps}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{r.sat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "primary.light" }}>Feature-Level Gap Analysis</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
        These features exist in 90–100% of competitors. Users expect them by default. Not having them is an immediate disqualifier.
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Feature</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }} align="right">Coverage</TableCell>
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
              <TableRow key={r.f} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ color: "text.secondary" }}>{r.f}</TableCell>
                <TableCell align="right" sx={{ color: "primary.light", fontWeight: 600 }}>{r.c}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, mt: 3, color: "primary.light" }}>Competitive Features</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
        Present in roughly half the market. Having them signals maturity. Missing them signals a gap.
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Feature</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }} align="right">Coverage</TableCell>
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
              <TableRow key={r.f} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ color: "text.secondary" }}>{r.f}</TableCell>
                <TableCell align="right" sx={{ color: "primary.light", fontWeight: 600 }}>{r.c}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, mt: 3, color: "primary.light" }}>Differentiation Features</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
        Rare in the market. Covering these creates a clear reason to choose WorCare over anyone else.
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Feature</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Coverage</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Why It Matters</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
              <TableCell sx={{ color: "text.secondary" }}>Sleep Programs</TableCell>
              <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>4 / 11 — 36%</TableCell>
              <TableCell sx={{ color: "text.secondary" }}>Sleep directly drives productivity — employers care deeply about this</TableCell>
            </TableRow>
            <TableRow sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
              <TableCell sx={{ color: "text.secondary" }}>Financial Wellness</TableCell>
              <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>1 / 11 — 9%</TableCell>
              <TableCell sx={{ color: "text.secondary" }}>The #1 source of employee stress globally — almost no app addresses it</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: "primary.light" }}>Competitor Weakness Breakdown</Typography>
      <TableContainer component={Paper} sx={{ mb: 4, ...card, overflowX: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "rgba(190, 14, 91, 0.12)" }}>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Competitor</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>Key Gap</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>WorCare Advantage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { comp: "Happify", gap: "No physical, no financial", adv: "Cover both and you outclass it across the board" },
              { comp: "Tuhoon", gap: "No physical, no purpose, no financial", adv: "Strong on mental only — very limited scope" },
              { comp: "BetterUp", gap: "No physical, no financial", adv: "Premium-priced but incomplete on 2 dimensions" },
              { comp: "Takalam", gap: "Covers only mental & emotional", adv: "Essentially a therapy app, not a well-being platform" },
              { comp: "Woliba", gap: "Only competitor with financial — but 1k downloads", adv: "Proves the demand exists, hasn't executed on growth" },
              { comp: "MantraCare / Wellable", gap: "Missing financial only", adv: "Close to full — WorCare must also cover financial to beat them" },
            ].map((r) => (
              <TableRow key={r.comp} sx={{ "&:nth-of-type(even)": { bgcolor: "rgba(255,255,255,0.02)" } }}>
                <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>{r.comp}</TableCell>
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

export default function ResearchSection() {
  const [open, setOpen] = useState<string | null>(null);

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
    <SectionWrapper id="research" label="RESEARCH & DEVELOPMENT">
      <Typography
        variant="h2"
        sx={{
          mb: 1,
          fontWeight: 700,
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
        }}
      >
        Research & Development
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
        AI Pulse continuously conducts product, AI, and market intelligence
        research to support better design decisions, stronger product strategy,
        and more informed innovation across Rubix.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ResearchAccordion
          id="rd-rashad"
          icon={
            <RocketLaunchIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="Rashad Project"
          subtitle="Research initiatives supporting Rashad's AI-powered consulting intelligence system, including competitive landscape analysis and emerging AI application studies."
          chips={[
            {
              label: "Ongoing",
              bg: "#260312",
              color: "#FF6B9D",
            },
            {
              label: "AI Intelligence",
              bg: "rgba(190,14,91,0.2)",
              color: "primary.light",
            },
          ]}
          open={open === "rd-rashad"}
          onToggle={() => toggle("rd-rashad")}
        >
          <Typography variant="h6" sx={{ ...sectionTitle, mb: 1 }}>
            AI & Product Intelligence Studies
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}
          >
            Ongoing research into emerging AI applications, competitive
            product models, consulting technology trends, and scalable digital
            business opportunities.
          </Typography>
          <AIStudiesContent />
        </ResearchAccordion>

        <ResearchAccordion
          id="rd-worcare"
          icon={
            <FavoriteIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="Worcare Project"
          subtitle="Research into employee wellbeing platforms, workplace engagement models, and digital wellness solutions to support WorCare's product strategy."
          chips={[
            {
              label: "Ongoing",
              bg: "#260312",
              color: "#FF6B9D",
            },
            {
              label: "Market Research",
              bg: "rgba(190,14,91,0.2)",
              color: "primary.light",
            },
          ]}
          open={open === "rd-worcare"}
          onToggle={() => toggle("rd-worcare")}
        >
          <WorcareResearchContent />
        </ResearchAccordion>

        <ResearchAccordion
          id="rd-diagnify"
          icon={
            <LocalHospitalIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="DiagnifyAI"
          subtitle="Research into AI-driven healthcare diagnostics, clinical decision support, and selective market entry strategies."
          chips={[
            {
              label: "Coming Soon",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
          ]}
          open={open === "rd-diagnify"}
          onToggle={() => toggle("rd-diagnify")}
        />

        <ResearchAccordion
          id="rd-sparkthon"
          icon={
            <ViewInArIcon sx={{ color: "primary.main", fontSize: 24 }} />
          }
          title="SparkThon Platform"
          subtitle="Research into venture platform models, startup incubation frameworks, and digital pipeline management systems."
          chips={[
            {
              label: "Coming Soon",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
          ]}
          open={open === "rd-sparkthon"}
          onToggle={() => toggle("rd-sparkthon")}
        />

        <ResearchAccordion
          id="rd-sulhafa"
          icon={
            <SentimentSatisfiedAltIcon
              sx={{ color: "primary.main", fontSize: 24 }}
            />
          }
          title="Sulhafa"
          subtitle="Research into regional growth strategies, development gap analysis, and controlled platform scaling approaches."
          chips={[
            {
              label: "Coming Soon",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
          ]}
          open={open === "rd-sulhafa"}
          onToggle={() => toggle("rd-sulhafa")}
        />
      </Box>
    </SectionWrapper>
  );
}
