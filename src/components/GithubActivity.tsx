import { useEffect, useState } from "react";
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

export function GithubActivity() {
  const [user, setUser] = useState<GitHubUser>(FALLBACK_USER);
  const [events, setEvents] = useState<GitHubEvent[]>(FALLBACK_EVENTS);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

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

  // Theme-aware green color for GitHub chart SVG
  const chartColor = theme === "dark" ? "39d353" : "216e39";
  const chartUrl = `https://ghchart.rshah.org/${chartColor}/abhishekx17`;

  return (
    <section id="activity" className="py-20 border-t border-border/60 relative select-none">
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
              <Activity className="h-3.5 w-3.5 text-ink-muted" />
              <span>Live GitHub API</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              GitHub Live Activity & Repositories
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
                  <Flame className="h-4 w-4" />
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

          {/* GitHub Real Contribution SVG Chart Container */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm relative overflow-hidden space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-emerald-500">
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

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Live GitHub API</span>
                </div>
              </div>
            </div>

            {/* GitHub Contribution SVG Image (Real Live Chart for abhishekx17) */}
            <div className="overflow-x-auto pb-2 custom-scrollbar flex justify-center">
              <div className="min-w-[700px] w-full max-w-4xl p-4 bg-surface-elevated border border-border rounded-2xl">
                <img
                  src={chartUrl}
                  alt="Abhishek's Real GitHub Contribution Chart"
                  className="w-full h-auto object-contain rounded-lg transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Footer Direct Link */}
            <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-ink-muted flex-wrap gap-2 font-mono">
              <span className="text-ink-faint text-[11px]">
                Directly synced with github.com/abhishekx17
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:underline inline-flex items-center gap-1.5"
              >
                View Profile on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
