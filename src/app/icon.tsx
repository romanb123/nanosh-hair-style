import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0C0A0B",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="22" stroke="#C8A97E" strokeWidth="1.2" strokeOpacity="0.6" />
          <line x1="12" y1="13" x2="12" y2="35" stroke="#C8A97E" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="13" x2="36" y2="35" stroke="#C8A97E" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M12 13 C16 18, 20 22, 24 24 C28 26, 32 30, 36 35"
            stroke="#C8A97E"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
