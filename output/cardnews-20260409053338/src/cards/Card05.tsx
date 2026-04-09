import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card05: React.FC<CardProps> = ({ durationInFrames }) => {
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
          src={staticFile("card-05.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: imgOpacity }}
        />
        {/* Stat badge */}
        <div style={{
          position: "absolute",
          top: 56,
          right: 72,
          opacity: bodyOpacity,
          background: "rgba(74,124,158,0.85)",
          padding: "12px 24px",
          borderRadius: 2,
        }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 36,
            color: "#FFFFFF",
            letterSpacing: "0.02em",
          }}>
            20%
          </div>
          <div style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 400,
            fontSize: 26,
            color: "rgba(255,255,255,0.85)",
            marginTop: 4,
          }}>
            세계 원유 수송
          </div>
        </div>
      </div>

      {/* Text bottom 45% */}
      <div style={{
        width: "100%",
        height: "45%",
        background: POPEYE.colors.background,
        padding: "48px 72px 90px 72px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 52,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: POPEYE.colors.primary,
          opacity: titleOpacity,
          marginBottom: 20,
        }}>
          호르무즈가{"\n"}열릴까?
        </h2>
        <p style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontWeight: 400,
          fontSize: 34,
          color: "rgba(26,26,26,0.75)",
          lineHeight: 1.65,
          opacity: bodyOpacity,
        }}>
          이란은 10개 조항을 제안했다.
          호르무즈 재개통, 제재 해제, 전후 재건 지원.
          이란에게 이 협상은 생존의 문제다.
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
          color: "rgba(0,0,0,0.3)",
        }}>
          5 / 7
        </div>
      </div>
    </AbsoluteFill>
  );
};
