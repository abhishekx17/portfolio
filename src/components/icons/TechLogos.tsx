import type { SVGProps } from "react";

export function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NodeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 289" fill="currentColor" {...props}>
      <path
        fill="#339933"
        d="M128 0L9.8 68.2v152.6L128 289l118.2-68.2V68.2L128 0zm78.2 201.2l-78.2 45.1-78.2-45.1V111l78.2-45.1 78.2 45.1v90.2z"
      />
      <path
        fill="#339933"
        d="M128 85.3l-50 28.9v57.7l50 28.9 50-28.9v-57.7l-50-28.9zm27 71.6l-27 15.6-27-15.6v-31.2l27-15.6 27 15.6v31.2z"
      />
    </svg>
  );
}

export function MongoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill="#13AA52"
        d="M12 1.5c-.3 0-.6.1-.8.4C9.5 4.3 4 12.2 4 16.5 4 20.6 7.6 24 12 24s8-3.4 8-7.5c0-4.3-5.5-12.2-7.2-14.6-.2-.3-.5-.4-.8-.4zm.5 20.3v-5.6c.7-.1 1.2-.8 1.2-1.5 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .7.5 1.4 1.2 1.5v5.6c-3.1-.4-5.5-2.9-5.5-6 0-3.2 4.1-9.5 5.6-11.7 1.5 2.2 5.6 8.5 5.6 11.7 0 3.1-2.4 5.6-5.1 6z"
      />
    </svg>
  );
}

export function ExpressLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text
        x="50%"
        y="65%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="currentColor"
      >
        ex
      </text>
    </svg>
  );
}

export function TypeScriptLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M1.5 1.5h21v21h-21zM13.7 18.2c.4.8 1.2 1.3 2.4 1.3 1.2 0 1.9-.6 1.9-1.4 0-1-.7-1.3-2.3-1.9-2.2-.8-3.3-1.7-3.3-3.6 0-2.2 1.8-3.7 4.5-3.7 2.1 0 3.5.8 4.3 2.4l-1.9 1.2c-.4-.9-1.2-1.4-2.3-1.4-1.1 0-1.7.5-1.7 1.2 0 .8.6 1.2 2 1.7 2.4.9 3.6 1.8 3.6 3.8 0 2.4-1.9 3.9-4.8 3.9-2.6 0-4.3-1.1-5.1-2.7l1.7-1.2zm-6.2-7.3v10.6H5.2V10.9H1.4V9h11v1.9H7.5z"
      />
    </svg>
  );
}

export function TailwindLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill="#06B6D4"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
      />
    </svg>
  );
}

export function GitLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38.002 1.802.424.423.422.64 1.157.424 1.802l2.66 2.66c.645-.216 1.38.002 1.802.424.604.604.604 1.582 0 2.188-.604.604-1.582.604-2.187 0-.423-.423-.64-1.158-.424-1.803L12.88 8.44c-.216.645.002 1.38-.424 1.802-.423.423-1.157.64-1.802.424l-2.66 2.66c.216.645-.002 1.38-.424 1.802-.604.604-1.582.604-2.187 0-.604-.604-.604-1.582 0-2.188.423-.423 1.157-.64 1.802-.424l2.76-2.76v-6.42L2.627 8.708c-.603.604-.603 1.582 0 2.188l10.479 10.479c.604.604 1.582.604 2.188 0l8.252-8.253c.604-.604.604-1.582 0-2.188z"
      />
    </svg>
  );
}

export function NextLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" fill="currentColor" {...props}>
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="#FFF" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path d="M149.508 157.52L69.142 54H54v72h14.4V75.437l68.742 89.26a89.57 89.57 0 0012.366-7.177z" fill="#FFF" />
        <path d="M126 54h14v72h-14z" fill="#FFF" />
      </g>
    </svg>
  );
}

export function ReduxLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fill="#764ABC"
        d="M21.5 15.3c-.6 0-1.1.2-1.5.6-.4.4-.7 1-.7 1.6 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-.6-.2-1.2-.7-1.6-.4-.4-.9-.6-1.5-.6zm-19 0c-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.7-.6zm9.5-12.8c-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.6 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-.6-.2-1.2-.7-1.6-.4-.4-.9-.6-1.6-.6z"
      />
    </svg>
  );
}

export function RestApiLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export const TechLogos = {
  react: ReactLogo,
  node: NodeLogo,
  mongo: MongoLogo,
  express: ExpressLogo,
  typescript: TypeScriptLogo,
  tailwind: TailwindLogo,
  git: GitLogo,
  next: NextLogo,
  redux: ReduxLogo,
  rest: RestApiLogo,
};
