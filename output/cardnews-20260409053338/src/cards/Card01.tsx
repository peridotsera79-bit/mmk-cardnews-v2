import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card01: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <Img
        src={staticFile("card-01.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div style={{ position: "absolute", inset: 0, background: POPEYE.overlay.cover }} />

      {/* Tag */}
      <div style={{ position: "absolute", top: 72, left: 80, opacity: bodyOpacity }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.9)",
          background: "rgba(74,124,158,0.8)",
          padding: "8px 20px",
          borderRadius: 2,
        }}>
          MIDDLE EAST
        </span>
      </div>

      {/* Bottom text block */}
      <div style={{ position: "absolute", bottom: 110, left: 80, right: 80 }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 32,
          fontWeight: 400,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.12em",
          marginBottom: 20,
          opacity: bodyOpacity,
        }}>
          2026. 04. 09
        </div>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 72,
          lineHeight: 1.1,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: "#FFFFFF",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 28,
        }}>
          이란과{"\n"}이스라엘,{"\n"}다시 전쟁
        </h2>
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontWeight: 400,
          fontSize: 36,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.6,
          opacity: bodyOpacity,
        }}>
          미국이 중재한 휴전,{"\n"}과연 지속될 수 있을까?
        </p>
      </div>

      {/* Page number */}
      <div style={{
        position: "absolute",
        bottom: 48,
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 28,
        fontWeight: 300,
        letterSpacing: 4,
        color: "rgba(255,255,255,0.4)",
      }}>
        1 / 7
      </div>
    </AbsoluteFill>
  );
};
