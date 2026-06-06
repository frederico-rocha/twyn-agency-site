type Props = {
  className?: string;
  color?: string;
  strokeWidth?: number;
};

export function Squiggle({ className, color = "currentColor", strokeWidth = 6 }: Props) {
  return (
    <svg
      viewBox="0 0 300 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 14 C 20 2, 40 26, 60 14 S 100 2, 120 14 S 160 26, 180 14 S 220 2, 240 14 S 280 26, 298 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Star({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
        fill={color}
      />
    </svg>
  );
}

export function ArrowDoodle({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 30 C 30 10, 60 50, 90 25"
        stroke={color}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M82 14 L95 24 L86 36"
        stroke={color}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
