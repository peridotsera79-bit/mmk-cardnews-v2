import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card02: React.FC<CardProps> = ({ durationInFrames }) => {
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
        src={staticFile("card-02.png")}
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
          2026년 2월 27~28일
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
          외교 타결 하루 전날,{"\n"}폭탄이 먼저 떨어졌다
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
          오만 외무장관이 "돌파구"를 선언한 바로 다음날 아침,
          미국과 이스라엘은 이란 전역에 기습 공습을 단행했다.
          12시간 동안 900회의 폭격이 쏟아졌다.
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
        2 / 7
      </div>
    </AbsoluteFill>
  );
};
