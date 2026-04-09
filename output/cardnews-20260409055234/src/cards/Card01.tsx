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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: POPEYE.overlay.cover,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 72,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.55)",
          ...POPEYE.typography.headline,
          fontSize: 30,
        }}
      >
        CARD NEWS
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 72,
          right: 72,
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 24,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.body.fontFamily,
            fontWeight: 400,
          }}
        >
          2026.04.08
        </div>
        <h2
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 56,
            fontWeight: 900,
            lineHeight: 1.3,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 20,
          }}
        >
          40일간의 전쟁,{"\n"}겨우 2주 멈췄다
        </h2>
        <p
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.55,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.body.fontFamily,
          }}
        >
          미국·이스라엘·이란 조건부 휴전 합의
        </p>
        <div
          style={{
            marginTop: 28,
            display: "inline-block",
            background: "#D4563A",
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "8px 20px",
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.headline.fontFamily,
          }}
        >
          BREAKING
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.35)",
          fontFamily: POPEYE.typography.body.fontFamily,
        }}
      >
        1 / 7
      </div>
    </AbsoluteFill>
  );
};
