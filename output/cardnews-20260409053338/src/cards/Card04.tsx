import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card04: React.FC<CardProps> = ({ durationInFrames }) => {
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
        src={staticFile("card-04.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div style={{ position: "absolute", inset: 0, background: POPEYE.overlay.content }} />

      {/* Chapter label */}
      <div style={{ position: "absolute", top: 80, left: 80, opacity: bodyOpacity }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.6)",
          borderLeft: "3px solid rgba(74,124,158,0.9)",
          paddingLeft: 16,
        }}>
          2026년 4월 8일
        </div>
      </div>

      {/* Bottom text block */}
      <div style={{ position: "absolute", bottom: 110, left: 80, right: 80 }}>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 72,
          lineHeight: 1.05,
          letterSpacing: "0.03em",
          textTransform: "uppercase" as const,
          color: "#FFFFFF",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 28,
        }}>
          WHY{"\n"}PAKISTAN?
        </h2>
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontWeight: 400,
          fontSize: 36,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.65,
          opacity: bodyOpacity,
        }}>
          파키스탄이 중재한 2주 휴전이 성립됐다.
          미국·이란 모두와 외교관계를 유지하는
          파키스탄이 이슬라마바드를 협상 무대로 제공했다.
        </p>
        <div style={{
          marginTop: 24,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: "0.06em",
          color: "rgba(74,124,158,0.95)",
          opacity: bodyOpacity,
        }}>
          4월 10일 이슬라마바드 포괄 협상 예정
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
        color: "rgba(255,255,255,0.4)",
      }}>
        4 / 7
      </div>
    </AbsoluteFill>
  );
};
