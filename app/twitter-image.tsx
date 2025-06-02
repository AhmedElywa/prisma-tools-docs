import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PalJS - Modern GraphQL & Prisma Toolkit";
export const size = {
  width: 1200,
  height: 600,
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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              fontWeight: "700",
              color: "#ffffff",
              fontFamily: "Arial, sans-serif",
            }}
          >
            PJ
          </div>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "15px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          PalJS
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            maxWidth: "700px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Modern GraphQL & Prisma Toolkit
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
