import { ImageResponse } from "next/og";

export const alt = "Nanosh Hair Style | פאות ותוספות שיער";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0C0A0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Rose glow left */}
        <div
          style={{
            position: "absolute",
            left: "-100px",
            top: "50px",
            width: "600px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(155,94,122,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Gold glow right */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-60px",
            width: "500px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(200,169,126,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          {/* Logo mark — N in circle */}
          <svg
            width="110"
            height="110"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="#C8A97E"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
            <line
              x1="12"
              y1="13"
              x2="12"
              y2="35"
              stroke="#C8A97E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="36"
              y1="13"
              x2="36"
              y2="35"
              stroke="#C8A97E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 13 C16 18, 20 22, 24 24 C28 26, 32 30, 36 35"
              stroke="#C8A97E"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Thin rule */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,169,126,0.4)",
              margin: "20px 0 24px",
            }}
          />

          {/* NANOSH */}
          <div
            style={{
              fontSize: "88px",
              fontWeight: 300,
              color: "#F2E8DC",
              letterSpacing: "0.18em",
              lineHeight: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            NANOSH
          </div>

          {/* HAIR STYLE */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 300,
              color: "#C8A97E",
              letterSpacing: "0.45em",
              marginTop: "14px",
              fontFamily: "Georgia, serif",
            }}
          >
            HAIR STYLE
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "18px",
              color: "rgba(178,164,152,0.7)",
              marginTop: "32px",
              letterSpacing: "0.05em",
              fontFamily: "Arial, sans-serif",
              fontWeight: 300,
            }}
          >
            פאות ותוספות שיער · תל אביב
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
