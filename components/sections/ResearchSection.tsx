"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
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
              label: "Coming Soon",
              bg: "rgba(120,144,156,0.2)",
              color: "#90a4ae",
            },
          ]}
          open={open === "rd-worcare"}
          onToggle={() => toggle("rd-worcare")}
        />

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
