import { motion } from "framer-motion";
import { smoothEase } from "../lib/motion";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: smoothEase }}
      className="mb-14 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-display text-xs font-bold tracking-widest text-accent uppercase">
          {index}
        </span>
        <span className="h-px w-10 bg-accent/40 rounded-full" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base md:text-lg text-ink-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
