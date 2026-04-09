import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card07: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: POPEYE.colors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 88px",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontSize: 30,
          letterSpacing: "0.15em",
          color: "#D4563A",
          marginBottom: 32,
          opacity: bodyOpacity,
          fontFamily: POPEYE.typography.headline.fontFamily,
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        앞으로의 전망
      </div>
      <h2
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: 52,
          fontWeight: 900,
          lineHeight: 1.35,
          color: POPEYE.colors.primary,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 40,
        }}
      >
        4월 10일,{"\n"}이슬라마바드가{"\n"}분수령이다
      </h2>
      <p
        style={{
          fontSize: 36,
          fontWeight: 400,
          color: "rgba(26,26,26,0.7)",
          lineHeight: 1.7,
          opacity: bodyOpacity,
          fontFamily: POPEYE.typography.body.fontFamily,
          marginBottom: 48,
        }}
      >
        2주의 휴전이 영구 종전으로 이어지려면
        핵 농축 권리와 레바논 전선,
        두 가지 균열이 반드시 좁혀져야 한다.
      </p>
      <div
        style={{
          fontSize: 30,
          color: POPEYE.colors.muted,
          opacity: bodyOpacity,
          fontFamily: POPEYE.typography.body.fontFamily,
          lineHeight: 1.6,
        }}
      >
        출처: Al Jazeera · Fox News · NPR · CNN · 국민일보 · KDI
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
          color: "rgba(0,0,0,0.25)",
          fontFamily: POPEYE.typography.body.fontFamily,
        }}
      >
        7 / 7
      </div>
    </AbsoluteFill>
  );
};
