export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
} as const;

export const softSpring = {
  type: "spring",
  stiffness: 250,
  damping: 25,
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: smoothEase },
  },
};

/** Slide in from the left — useful for side-by-side reveal layouts */
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

/** Slide in from the right — useful for side-by-side reveal layouts */
export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

/**
 * Returns opacity-only variants when the user has prefers-reduced-motion
 * enabled, otherwise returns the provided variants unchanged.
 * Usage: whileInView="visible" initial="hidden" variants={reducedMotion(fadeInUp)}
 */
export function reducedMotion<T extends object>(variants: T): T {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) return variants;

  // Strip out transform-based keys, keeping only opacity transitions
  return {
    ...(variants as Record<string, unknown>),
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  } as T;
}
