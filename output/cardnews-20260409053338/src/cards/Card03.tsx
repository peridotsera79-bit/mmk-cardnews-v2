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

  const imgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", opacity: fadeOut }}>
      {/* Image top 55% */}
      <div style={{ width: "100%", height: "55%", overflow: "hidden", position: "relative" }}>
        <Img
          src={staticFile("card-03.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: imgOpacity }}
        />
        {/* Chapter label over image */}
        <div style={{
          position: "absolute",
          top: 56,
          left: 72,
          opacity: bodyOpacity,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.75)",
          borderLeft: "3px solid rgba(74,124,158,0.9)",
          paddingLeft: 16,
        }}>
          2026년 2월 28일
        </div>
      </div>

      {/* Text bottom 45% */}
      <div style={{
        width: "100%",
        height: "45%",
        background: POPEYE.colors.primary,
        padding: "52px 72px 90px 72px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: "#FFFFFF",
          opacity: titleOpacity,
          marginBottom: 20,
        }}>
          전쟁,{"\n"}다시 시작됐다
        </h2>
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontWeight: 400,
          fontSize: 34,
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.65,
          opacity: bodyOpacity,
        }}>
          미·이스라엘이 대규모 공습을 재개했다.
          하메네이 최고지도자와 라리자니 협상 책임자 암살.
          이란 지도부에 전례 없는 공백이 생겼다.
        </p>

        {/* Page number in text area */}
        <div style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 4,
          color: "rgba(255,255,255,0.35)",
        }}>
          3 / 7
        </div>
      </div>
    </AbsoluteFill>
  );
};
