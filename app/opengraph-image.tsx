import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PalJS - Modern GraphQL & Prisma Toolkit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          background: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: "700",
              color: "#ffffff",
              fontFamily: "Arial, sans-serif",
            }}
          >
            PJ
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "-0.025em",
          }}
        >
          PalJS
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.2",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Modern GraphQL & Prisma Toolkit
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            maxWidth: "900px",
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Build powerful APIs, admin interfaces, and full-stack applications
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "50px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
