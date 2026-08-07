import { useState, useEffect, useRef, ReactNode } from "react";

/**
 * LazyMount — only renders children when the container element enters the
 * viewport (via IntersectionObserver). Uses `rootMargin` to start loading
 * slightly before the user would see it.
 */
interface LazyMountProps {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
}

export function LazyMount({
  children,
  rootMargin = "200px",
  className,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect(); // fire once
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {mounted ? children : null}
    </div>
  );
}
