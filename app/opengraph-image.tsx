import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Digital Kavin — Digital Marketing & Paid Ads Specialist in Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0B0B0F",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#2DD4BF", letterSpacing: 4, display: "flex" }}>
          DIGITAL MARKETER · CHENNAI
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, display: "flex" }}>
          Digital Kavin
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.7)", marginTop: 20, display: "flex" }}>
          SEO · Paid Ads · AI Automation · Web Development
        </div>
      </div>
    ),
    { ...size }
  );
}
