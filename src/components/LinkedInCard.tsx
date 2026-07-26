import { useState } from "react";
import { ArrowUpRight, Copy, Check, ShieldCheck, MapPin, Building2, GraduationCap, Briefcase } from "lucide-react";
import { linkedinDetails } from "../data/portfolio";
import { LinkedInIcon } from "./icons/SocialIcons";

interface LinkedInCardProps {
  onShowToast?: (message: string) => void;
  className?: string;
}

export function LinkedInCard({ onShowToast, className = "" }: LinkedInCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(linkedinDetails.profileUrl);
    setCopied(true);
    onShowToast?.("LinkedIn profile link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={linkedinDetails.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-4 sm:p-8 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 overflow-hidden shadow-xs ${className}`}
    >
      {/* Top Header Badge & External Arrow */}
      <div className="flex items-center justify-between z-10 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-surface-elevated text-ink">
            <LinkedInIcon className="h-4 w-4" />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
            LinkedIn Profile
          </span>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated border border-border text-ink opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="space-y-3.5 sm:space-y-4 z-10">
        {/* Profile Avatar & Name Header */}
        <div className="flex flex-row items-start gap-3 sm:gap-4">
          <div className="relative shrink-0">
            <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-2xl p-0.5 bg-surface-elevated border border-border shadow-xs overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src={linkedinDetails.profilePic}
                alt={`${linkedinDetails.name} LinkedIn Avatar`}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            {/* Online / Active Badge */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-surface" />
            </span>
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink truncate">
                {linkedinDetails.name}
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-elevated px-2 py-0.5 text-[10px] font-mono font-semibold text-ink-muted">
                <ShieldCheck className="h-3 w-3 text-emerald-500" />
                <span>Verified</span>
              </span>
            </div>

            <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed font-normal">
              {linkedinDetails.headline}
            </p>
          </div>
        </div>

        {/* Details & Location Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-elevated border border-border px-2.5 py-1 text-ink-muted text-[11px]">
            <MapPin className="h-3 w-3 text-ink-faint" />
            {linkedinDetails.location}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-elevated border border-border px-2.5 py-1 text-ink font-semibold text-[11px]">
            {linkedinDetails.connections}
          </span>
        </div>

        {/* Education & Experience Pills */}
        <div className="space-y-1.5 pt-1 text-xs text-ink-muted">
          <div className="flex items-center gap-2 truncate">
            <Building2 className="h-3.5 w-3.5 text-ink-faint shrink-0" />
            <span className="truncate">{linkedinDetails.company}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <GraduationCap className="h-3.5 w-3.5 text-ink-faint shrink-0" />
            <span className="truncate">{linkedinDetails.college}</span>
          </div>
        </div>

        {/* Open to Work Banner */}
        <div className="rounded-2xl border border-border bg-surface-elevated p-3 flex items-start gap-2.5 text-xs">
          <Briefcase className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
          <div className="min-w-0">
            <span className="block font-bold text-ink text-[11px] font-mono uppercase tracking-wider">
              Open to Work
            </span>
            <p className="text-[11px] text-ink-muted truncate">
              {linkedinDetails.openToWork}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono z-10">
        <span className="inline-flex items-center gap-1 text-ink font-bold group-hover:underline">
          <span>View Profile</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-elevated px-2.5 py-1 text-[11px] font-semibold text-ink-muted hover:text-ink hover:border-border-strong transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </a>
  );
}
