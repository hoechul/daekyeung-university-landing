export default function CrownIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 42 L2 14 L16 26 L24 6 L32 20 L40 6 L48 26 L62 14 L60 42 Z"
        fill="currentColor"
      />
      <rect x="2" y="42" width="60" height="5" rx="1.5" fill="currentColor" />
      <circle cx="24" cy="4" r="3" fill="currentColor" />
      <circle cx="32" cy="4" r="3.4" fill="currentColor" />
      <circle cx="40" cy="4" r="3" fill="currentColor" />
    </svg>
  );
}
