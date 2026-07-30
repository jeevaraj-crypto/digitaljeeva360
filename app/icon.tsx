import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0F",
          color: "#2DD4BF",
          fontSize: 36,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: 12,
        }}
      >
        K
      </div>
    ),
    { ...size }
  );
}
