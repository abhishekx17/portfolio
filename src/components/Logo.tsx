import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9 w-9" }: LogoProps) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Abhishek Kumar logo"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        className="fill-secondary stroke-accent"
        strokeWidth="1.5"
      />
      <path
        d="M12 28V12h4.5l5.5 9.5V12H26v16h-4.5L16 18.5V28H12z"
        className="fill-primary"
      />
      <circle cx="32" cy="10" r="3" className="fill-accent" />
    </motion.svg>
  );
}
