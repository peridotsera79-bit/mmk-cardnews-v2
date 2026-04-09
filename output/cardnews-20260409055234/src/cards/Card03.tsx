import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card03: React.FC<CardProps> = ({ durationInFrames }) => {
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
        src={staticFile("card-03.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: POPEYE.overlay.content,
        }}
      />
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
            fontSize: 30,
            letterSpacing: "0.12em",
            color: "#D4563A",
            marginBottom: 20,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.headline.fontFamily,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          호르무즈 해협
        </div>
        <h2
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.3,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 24,
          }}
        >
          세계 원유 30%가{"\n"}이 해협을 지난다
        </h2>
        <p
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.65,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.body.fontFamily,
          }}
        >
          이란은 개전 즉시 호르무즈 해협을 봉쇄했다.
          국제 유가가 폭등했고, 이란은 선박당 최대
          200만 달러의 통행료까지 부과했다.
        </p>
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
        3 / 7
      </div>
    </AbsoluteFill>
  );
};
