type LogoProps = {
  size?: number;
  variant?: "full" | "mark";
  className?: string;
};

export default function Logo({ size = 48, variant = "full", className = "" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Nanosh Hair Style"
      >
        {/* Outer circle */}
        <circle cx="24" cy="24" r="22" stroke="#C8A97E" strokeWidth="0.8" strokeOpacity="0.5" />

        {/* Stylized N — left vertical, right vertical, flowing diagonal strand */}
        {/* Left vertical bar */}
        <line x1="12" y1="13" x2="12" y2="35" stroke="#C8A97E" strokeWidth="2" strokeLinecap="round" />
        {/* Right vertical bar */}
        <line x1="36" y1="13" x2="36" y2="35" stroke="#C8A97E" strokeWidth="2" strokeLinecap="round" />
        {/* Flowing diagonal — a bezier curve instead of straight line */}
        <path
          d="M12 13 C16 18, 20 22, 24 24 C28 26, 32 30, 36 35"
          stroke="#C8A97E"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Subtle second strand echo */}
        <path
          d="M14 13 C18 19, 22 23, 26 25 C30 27, 34 31, 37 35"
          stroke="#C8A97E"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeOpacity="0.3"
          fill="none"
        />
      </svg>
    );
  }

  // Full lockup: mark + wordmark
  return (
    <svg
      width={size * 4.2}
      height={size}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nanosh Hair Style"
      style={{ direction: "ltr" }}
    >
      {/* Mark */}
      <circle cx="24" cy="24" r="22" stroke="#C8A97E" strokeWidth="0.7" strokeOpacity="0.45" />
      <line x1="12" y1="13" x2="12" y2="35" stroke="#C8A97E" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="13" x2="36" y2="35" stroke="#C8A97E" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M12 13 C16 18, 20 22, 24 24 C28 26, 32 30, 36 35"
        stroke="#C8A97E"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 13 C18 19, 22 23, 26 25 C30 27, 34 31, 37 35"
        stroke="#C8A97E"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeOpacity="0.28"
        fill="none"
      />

      {/* Thin vertical divider */}
      <line x1="54" y1="14" x2="54" y2="34" stroke="#C8A97E" strokeWidth="0.6" strokeOpacity="0.35" />

      {/* Wordmark — NANOSH */}
      <text
        x="62"
        y="26"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="16"
        fontWeight="400"
        letterSpacing="4"
        fill="#F2E8DC"
      >
        NANOSH
      </text>

      {/* Sub — HAIR STYLE */}
      <text
        x="63"
        y="37"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="7.5"
        fontWeight="300"
        letterSpacing="5"
        fill="#C8A97E"
        fillOpacity="0.85"
      >
        HAIR STYLE
      </text>
    </svg>
  );
}
