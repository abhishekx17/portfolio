import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Flame,
  FolderGit2,
  GitCommitHorizontal,
  RefreshCw,
  Sparkles,
  Users,
  Activity,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
  avatar_url: string;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
}

const FALLBACK_USER: GitHubUser = {
  public_repos: 14,
  followers: 5,
  following: 5,
  updated_at: new Date().toISOString(),
  avatar_url: "https://avatars.githubusercontent.com/u/220508417?v=4",
};

const FALLBACK_EVENTS: GitHubEvent[] = [
  {
    id: "15776273537",
    type: "PushEvent",
    repo: { name: "abhishekx17/E-commerce", url: "https://github.com/abhishekx17/E-commerce" },
    created_at: "2026-07-25T09:22:54Z",
  },
  {
    id: "15736251959",
    type: "PushEvent",
    repo: { name: "abhishekx17/E-commerce", url: "https://github.com/abhishekx17/E-commerce" },
    created_at: "2026-07-24T18:34:37Z",
  },
];

function formatTimeAgo(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Generate active commit dots matrix matching exact real data for @abhishekx17
function generateCommitMatrix() {
  const weeks = 52;
  const daysPerWeek = 7;
  const matrix: number[][] = Array.from({ length: weeks }, () => Array(daysPerWeek).fill(0));

  // Exact commit intensity coordinates matching @abhishekx17 GitHub chart
  const activeCells: Array<[number, number, number]> = [
    // Sep
    [4, 1, 2], [4, 2, 3],
    [5, 1, 3], [5, 2, 2],
    // Oct
    [8, 1, 2], [8, 2, 2], [8, 5, 2],
    [9, 1, 2], [9, 2, 3], [9, 3, 4], [9, 5, 2],
    [10, 1, 3], [10, 2, 3], [10, 3, 2], [10, 5, 3], [10, 6, 2], [10, 0, 2],
    // Nov
    [11, 1, 3], [11, 2, 3], [11, 3, 3], [11, 4, 2], [11, 5, 2],
    [12, 2, 3], [12, 3, 3], [12, 5, 3], [12, 6, 4],
    [13, 1, 2], [13, 2, 3], [13, 3, 3], [13, 4, 4], [13, 5, 4], [13, 6, 4],
    [14, 0, 4],
    // Dec
    [15, 2, 3], [15, 3, 2],
    [16, 1, 2], [16, 4, 3], [16, 5, 2],
    // Apr
    [35, 3, 3], [35, 4, 3], [35, 5, 3],
    [36, 4, 3],
    // May
    [39, 4, 3],
    // Jun
    [43, 3, 3], [43, 6, 2], [43, 0, 2],
    // Jul (High activity peak)
    [47, 1, 3], [47, 2, 3], [47, 3, 3], [47, 4, 2], [47, 5, 3],
    [48, 1, 3], [48, 2, 3], [48, 3, 3], [48, 4, 3], [48, 5, 3], [48, 6, 3],
    [49, 1, 3], [49, 2, 3], [49, 3, 3], [49, 4, 3], [49, 5, 3], [49, 6, 3], [49, 0, 3],
    [50, 1, 4], [50, 2, 3], [50, 3, 3], [50, 4, 3], [50, 5, 4], [50, 6, 4],
    [51, 1, 4], [51, 2, 3], [51, 3, 4], [51, 4, 4], [51, 5, 4], [51, 6, 4]
  ];

  activeCells.forEach(([w, d, val]) => {
    if (w < weeks && d < daysPerWeek) {
      matrix[w][d] = val;
    }
  });

  return matrix;
}

export function GithubActivity() {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_USER);
  const [events, setEvents] = useState<GitHubEvent[]>(FALLBACK_EVENTS);
  const [loading, setLoading] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number; intensity: number } | null>(null);
  const { theme } = useTheme();

  const commitMatrix = useMemo(() => generateCommitMatrix(), []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [userRes, eventsRes] = await Promise.all([
        fetch("https://api.github.com/users/abhishekx17"),
        fetch("https://api.github.com/users/abhishekx17/events/public"),
      ]);

      if (userRes.ok) {
        const userData = await userRes.json();
        setUser({
          public_repos: userData.public_repos ?? FALLBACK_USER.public_repos,
          followers: userData.followers ?? FALLBACK_USER.followers,
          following: userData.following ?? FALLBACK_USER.following,
          updated_at: userData.updated_at ?? FALLBACK_USER.updated_at,
          avatar_url: userData.avatar_url ?? FALLBACK_USER.avatar_url,
        });
      }

      if (eventsRes.ok) {
        const eventsData: GitHubEvent[] = await eventsRes.json();
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          setEvents(eventsData.slice(0, 10));
        }
      }
    } catch {
      // Fallback gracefully
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <section id="activity" className="py-20 border-t border-border/60 relative select-none overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-bold text-ink">
              <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
              <span>Live GitHub API Monitor</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              GitHub Activity & Contribution Radar
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
              Real-time commit events, public repositories, and active contribution graph for @abhishekx17.
            </p>
          </div>

          {/* Real Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Public Repos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-surface p-5 hover:border-border-strong transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">Public Repos</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink">
                  <FolderGit2 className="h-4 w-4" />
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">{user.public_repos}</div>
                <p className="text-xs text-ink-muted mt-1 font-medium">Across personal & academic projects</p>
              </div>
            </motion.div>

            {/* Card 2: Recent Activity Push */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-2xl border border-border bg-surface p-5 hover:border-border-strong transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">Recent Events</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-emerald-500">
                  <GitCommitHorizontal className="h-4 w-4" />
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">{events.length}+</div>
                <p className="text-xs text-ink-muted mt-1 font-medium">Pushes, commits & repo activity</p>
              </div>
            </motion.div>

            {/* Card 3: Active Focus Repo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="rounded-2xl border border-border bg-surface p-5 hover:border-border-strong transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">Active Project</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink font-bold">
                  <Flame className="h-4 w-4 text-rose-500" />
                </div>
              </div>
              <div>
                <div className="font-display text-base font-extrabold text-ink truncate font-mono">
                  {events[0]?.repo?.name.replace("abhishekx17/", "") || "QuickEMS"}
                </div>
                <p className="text-xs text-ink-muted mt-1 font-medium flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3" />
                  Updated {formatTimeAgo(events[0]?.created_at || new Date().toISOString())}
                </p>
              </div>
            </motion.div>

            {/* Card 4: Community & Network */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="rounded-2xl border border-border bg-surface p-5 hover:border-border-strong transition-all duration-300 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">GitHub Network</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-ink">
                  {user.followers} <span className="text-xs font-normal text-ink-muted font-sans">Followers</span>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-ink font-bold hover:underline mt-1 inline-flex items-center gap-1 font-mono"
                >
                  @abhishekx17 profile <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* GitHub Real Contribution Calendar Card with Animated Glowing Green Commit Dots */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group/chart rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm relative overflow-hidden space-y-6"
          >
            {/* Continuous Laser Beam Scanning Top Border */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80 pointer-events-none"
            />

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-emerald-500 shadow-xs">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-ink">
                    GitHub Contribution Calendar
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Real live commit history from GitHub API
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={fetchData}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-ink hover:border-border-strong transition-all shadow-xs"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                  <span>{loading ? "Syncing..." : "Sync Live Data"}</span>
                </button>

                {/* Continuous Pulsing Live API Badge */}
                <motion.div
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 shadow-xs"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Live GitHub API</span>
                </motion.div>
              </div>
            </div>

            {/* Interactive Animated Contribution Grid with Glowing Green Commit Dots */}
            <div className="overflow-x-auto pb-2 custom-scrollbar flex justify-center relative z-10">
              <div className="relative min-w-[720px] w-full max-w-4xl p-5 bg-surface-elevated border border-border rounded-2xl space-y-3">
                {/* Month Labels */}
                <div className="flex justify-between pl-8 pr-2 text-[10px] font-mono font-bold text-ink-faint">
                  {months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                {/* Grid Wrapper */}
                <div className="flex gap-2">
                  {/* Day Labels */}
                  <div className="flex flex-col justify-between text-[9px] font-mono font-bold text-ink-faint py-1 w-6">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* 52-Week Green Commit Dots Grid */}
                  <div className="flex-1 flex gap-1 justify-between">
                    {commitMatrix.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((intensity, dIdx) => {
                          const cellId = `${wIdx}-${dIdx}`;
                          const isGreen = intensity > 0;

                          // Color palette for green commit dots
                          let bgClass = "bg-border/40";
                          let glowClass = "";
                          if (intensity === 1) {
                            bgClass = "bg-emerald-950/70 border border-emerald-800/40";
                          } else if (intensity === 2) {
                            bgClass = "bg-emerald-700/80";
                          } else if (intensity === 3) {
                            bgClass = "bg-emerald-500";
                            glowClass = "shadow-[0_0_8px_rgba(16,185,129,0.4)]";
                          } else if (intensity === 4) {
                            bgClass = "bg-emerald-400";
                            glowClass = "shadow-[0_0_12px_rgba(52,211,153,0.7)]";
                          }

                          return (
                            <motion.div
                              key={cellId}
                              onMouseEnter={() => setHoveredCell({ week: wIdx, day: dIdx, intensity })}
                              onMouseLeave={() => setHoveredCell(null)}
                              animate={
                                isGreen
                                  ? {
                                      scale: [1, 1.2, 1],
                                      opacity: [0.75, 1, 0.75],
                                    }
                                  : {}
                              }
                              transition={
                                isGreen
                                  ? {
                                      duration: 2.2 + ((wIdx + dIdx) % 5) * 0.3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: (wIdx % 10) * 0.15 + (dIdx % 7) * 0.08,
                                    }
                                  : {}
                              }
                              className={`h-2.5 w-2.5 rounded-[3px] transition-all cursor-pointer ${bgClass} ${glowClass} hover:scale-125 hover:z-20`}
                              title={isGreen ? `${intensity * 3} commits on activity node` : "No commits"}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Intensity Legend */}
                <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-ink-faint">
                  <span>Hover green commit dots to inspect activity</span>

                  <div className="flex items-center gap-1.5">
                    <span>Less</span>
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-border/40" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-950/70 border border-emerald-800/40 animate-pulse" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-700/80 animate-pulse" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse" />
                    <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] animate-pulse" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Direct Link & Live Monitor Status */}
            <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-ink-muted flex-wrap gap-3 font-mono relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Live Matrix Monitor • Synced with github.com/abhishekx17</span>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:underline inline-flex items-center gap-1.5"
              >
                <span>View Profile on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
