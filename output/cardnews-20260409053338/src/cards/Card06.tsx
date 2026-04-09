import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card06: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const TITLE_IN = 9;
  const BODY_IN = 20;
  const ROW1_IN = 28;
  const ROW2_IN = 38;
  const ROW3_IN = 48;
  const FADE_OUT = 15;

  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [20, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const row1Opacity = interpolate(frame, [ROW1_IN, ROW1_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const row2Opacity = interpolate(frame, [ROW2_IN, ROW2_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const row3Opacity = interpolate(frame, [ROW3_IN, ROW3_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const rowStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    borderLeft: "4px solid rgba(74,124,158,0.8)",
    borderRadius: 4,
    padding: "28px 32px",
    marginBottom: 20,
  };

  const flagStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: 30,
    letterSpacing: "0.08em",
    color: "rgba(74,124,158,0.9)",
    marginBottom: 8,
    textTransform: "uppercase" as const,
  };

  const rowTextStyle: React.CSSProperties = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 400,
    fontSize: 34,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 1.55,
  };

  return (
    <AbsoluteFill style={{
      background: POPEYE.colors.primary,
      opacity: fadeOut,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 80px",
    }}>
      {/* Heading */}
      <div style={{ marginBottom: 48 }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.4)",
          marginBottom: 16,
          opacity: bodyOpacity,
        }}>
          WHY PEACE IS HARD
        </div>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 64,
          lineHeight: 1.1,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: "#FFFFFF",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}>
          세 나라의{"\n"}셈법
        </h2>
      </div>

      {/* Row 1 — USA */}
      <div style={{ ...rowStyle, opacity: row1Opacity }}>
        <div style={flagStyle}>미국 (US)</div>
        <div style={rowTextStyle}>
          동맹 지원 vs 확전 방지 딜레마
        </div>
      </div>

      {/* Row 2 — Israel */}
      <div style={{ ...rowStyle, opacity: row2Opacity }}>
        <div style={flagStyle}>이스라엘 (IL)</div>
        <div style={rowTextStyle}>
          레바논 작전 계속 — 휴전 범위 거부
        </div>
      </div>

      {/* Row 3 — Iran */}
      <div style={{ ...rowStyle, opacity: row3Opacity }}>
        <div style={flagStyle}>이란 (IR)</div>
        <div style={rowTextStyle}>
          핵프로그램 포기는 곧 레짐 약화
        </div>
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
        color: "rgba(255,255,255,0.35)",
      }}>
        6 / 7
      </div>
    </AbsoluteFill>
  );
};
