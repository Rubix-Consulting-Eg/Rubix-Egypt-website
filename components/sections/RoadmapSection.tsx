"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MONTH_LABELS = [
  "M0",
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "M6",
  "M7",
  "M8",
  "M9",
  "M10",
  "M11",
  "M12",
];

interface RoadmapItem {
  product: string;
  objective: string;
  months: number[];
}

interface Phase {
  id: string;
  label: string;
  color: string;
  bgColor: string;
  priority: string;
  items: RoadmapItem[];
}

const phases: Phase[] = [
  {
    id: "01",
    label: "Core Build",
    color: "#e53935",
    bgColor: "rgba(229,57,53,0.12)",
    priority: "Maximum",
    items: [
      {
        product: "Rashad",
        objective:
          "Build core platform and establish internal operational readiness for future commercialization",
        months: [0, 1, 2],
      },
      {
        product: "WorCare",
        objective:
          "Deliver a market-ready SaaS platform and prepare for enterprise and government acquisition",
        months: [0, 1, 2],
      },
    ],
  },
  {
    id: "02",
    label: "Strategic Activation",
    color: "#00897b",
    bgColor: "rgba(0,137,123,0.12)",
    priority: "High",
    items: [
      {
        product: "DiagnifyAI",
        objective:
          "Complete structured build and readiness progression for selective healthcare market entry",
        months: [2, 3, 4, 5],
      },
      {
        product: "Rashad Consulting Agents",
        objective:
          "Define requirements and begin development of an AI-enabled consulting support layer",
        months: [2, 3, 4, 5],
      },
      {
        product: "Rubix Excavation Office – USA",
        objective:
          "Activate sourcing channels, ecosystem relationships, and opportunity scouting in the US market",
        months: [2, 3, 4, 5],
      },
    ],
  },
  {
    id: "03",
    label: "Venture Platform Launch",
    color: "#1565c0",
    bgColor: "rgba(21,101,192,0.12)",
    priority: "High",
    items: [
      {
        product: "SparkThon Operating Model",
        objective:
          "Reset the model, complete Cohort 1 closure logic, and reposition SparkThon as a hybrid commercial offering",
        months: [3, 4, 5, 6],
      },
      {
        product: "SparkThon Platform",
        objective:
          "Build and launch a basic digital platform in Q2 to manage startup applications, incubation, and tracking",
        months: [3, 4, 5, 6],
      },
      {
        product: "US Ecosystem Roadshow",
        objective:
          "Prepare market-entry and ecosystem outreach to create a sustainable pipeline of startup applications",
        months: [3, 4, 5, 6],
      },
    ],
  },
  {
    id: "04",
    label: "Optimization & Readiness",
    color: "#6a1b9a",
    bgColor: "rgba(106,27,154,0.12)",
    priority: "Medium",
    items: [
      {
        product: "YANA",
        objective:
          "Assess product maturity, refine proposition, and prepare for selective commercialization",
        months: [6, 7, 8],
      },
      {
        product: "iVision",
        objective:
          "Validate readiness, strengthen use case definition, and improve go-to-market preparedness",
        months: [6, 7, 8],
      },
    ],
  },
  {
    id: "05",
    label: "Expansion Build",
    color: "#ef6c00",
    bgColor: "rgba(239,108,0,0.12)",
    priority: "Medium",
    items: [
      {
        product: "Traviom",
        objective:
          "Complete further development and strengthen commercial readiness for future market activation",
        months: [7, 8, 9, 10, 11, 12],
      },
      {
        product: "BIMLens Expansion Track",
        objective:
          "Identify and activate market opportunities beyond KSA in coordination with Rubix Studio",
        months: [7, 8, 9, 10, 11, 12],
      },
    ],
  },
  {
    id: "06",
    label: "Ongoing Maintenance & Pipeline Conversion",
    color: "#78909c",
    bgColor: "rgba(120,144,156,0.12)",
    priority: "Controlled",
    items: [
      {
        product: "Sulhafa",
        objective:
          "Maintain stability, close development gaps, and support controlled regional growth",
        months: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      {
        product: "USA-Sourced Opportunities",
        objective:
          "Screen, qualify, and selectively convert sourced MVPs or services into partnership or commercialization candidates",
        months: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    ],
  },
];

const priorityChip: Record<string, { bg: string; color: string }> = {
  Maximum: { bg: "rgba(229,57,53,0.2)", color: "#ef5350" },
  High: { bg: "rgba(255,193,7,0.2)", color: "#ffc107" },
  Medium: { bg: "rgba(33,150,243,0.2)", color: "#42a5f5" },
  Controlled: { bg: "rgba(120,144,156,0.2)", color: "#90a4ae" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function GanttBar({
  months,
  color,
  delay,
}: {
  months: number[];
  color: string;
  delay: number;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(13, 1fr)",
        gap: "2px",
        width: "100%",
      }}
    >
      {MONTHS.map((m) => {
        const active = months.includes(m);
        return (
          <Box key={m} sx={{ position: "relative" }}>
            {active ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: delay + m * 0.04,
                  ease: "easeOut",
                }}
                style={{
                  height: 28,
                  backgroundColor: color,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {m}
                </span>
              </motion.div>
            ) : (
              <Box
                sx={{
                  height: 28,
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: "4px",
                  border: "1px dashed rgba(255,255,255,0.06)",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default function RoadmapSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      id="roadmap"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <Box sx={{ px: { xs: 2, sm: 3 } }}>
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
              STRATEGIC ROADMAP
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 1,
                fontWeight: 700,
                fontSize: { xs: "1.75rem", sm: "2.125rem" },
              }}
            >
              Project Pipeline & Phases
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 4,
                maxWidth: 700,
                lineHeight: 1.7,
              }}
            >
              A structured 13-month roadmap (Month 0 through Month 12) outlining
              the phased build, activation, and scaling of Rubix AI Pulse&apos;s
              product portfolio — from core platform development through market
              expansion and pipeline conversion.
            </Typography>
          </Box>
        </motion.div>

        {/* Phases with inline month headers */}
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            pb: 2,
          }}
        >
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: phaseIdx * 0.08 }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.06)",
                  bgcolor: "rgba(255,255,255,0.02)",
                  overflow: "hidden",
                }}
              >
                {/* Phase header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 1.5,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    bgcolor: phase.bgColor,
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      bgcolor: phase.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "0.75rem",
                      }}
                    >
                      {phase.id}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {phase.label}
                    </Typography>
                  </Box>
                  <Chip
                    label={phase.priority}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 22,
                      bgcolor: priorityChip[phase.priority]?.bg,
                      color: priorityChip[phase.priority]?.color,
                      flexShrink: 0,
                    }}
                  />
                </Box>

                {/* Scrollable content with month headers per phase */}
                <Box
                  sx={{
                    overflowX: "auto",
                    "&::-webkit-scrollbar": { height: 4 },
                    "&::-webkit-scrollbar-thumb": {
                      bgcolor: "rgba(255,255,255,0.12)",
                      borderRadius: 2,
                    },
                  }}
                >
                  <Box sx={{ minWidth: isMobile ? 880 : "auto" }}>
                    {/* Month labels row inside the phase */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "180px 1fr",
                          md: "260px 1fr",
                        },
                        gap: 2,
                        px: 2,
                        pt: 1,
                        pb: 0.5,
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          color: "text.secondary",
                          fontSize: "0.65rem",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        Product
                      </Typography>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(13, 1fr)",
                          gap: "2px",
                        }}
                      >
                        {MONTH_LABELS.map((m) => (
                          <Typography
                            key={m}
                            variant="caption"
                            sx={{
                              textAlign: "center",
                              fontWeight: 600,
                              color: "text.secondary",
                              fontSize: "0.65rem",
                            }}
                          >
                            {m}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    {/* Items */}
                    {phase.items.map((item, itemIdx) => (
                      <Box
                        key={item.product}
                        sx={{
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "180px 1fr",
                            md: "260px 1fr",
                          },
                          gap: 2,
                          px: 2,
                          py: 1.5,
                          alignItems: "center",
                          borderBottom:
                            itemIdx < phase.items.length - 1
                              ? "1px solid rgba(255,255,255,0.04)"
                              : "none",
                          "&:hover": { bgcolor: "rgba(255,255,255,0.02)" },
                          transition: "background 0.2s",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 700,
                              color: phase.color,
                              fontSize: "0.85rem",
                              mb: 0.25,
                            }}
                          >
                            {item.product}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.4,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              fontSize: "0.7rem",
                            }}
                          >
                            {item.objective}
                          </Typography>
                        </Box>
                        <GanttBar
                          months={item.months}
                          color={phase.color}
                          delay={phaseIdx * 0.1 + itemIdx * 0.05}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 3,
              px: { xs: 2, sm: 3 },
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            {Object.entries(priorityChip).map(([label, style]) => (
              <Box
                key={label}
                sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: style.color,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  {label} Priority
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
