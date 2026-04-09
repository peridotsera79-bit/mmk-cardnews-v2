import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card06: React.FC<CardProps> = ({ durationInFrames }) => {
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
      <div style={{ width: "100%", height: "55%", overflow: "hidden", position: "relative" }}>
        <Img
          src={staticFile("card-06.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: imgOpacity }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "45%",
          padding: "44px 72px 80px 72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: POPEYE.colors.background,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.12em",
            color: "#D4563A",
            marginBottom: 16,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.headline.fontFamily,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          한국 경제 충격
        </div>
        <h2
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1.3,
            color: POPEYE.colors.primary,
            opacity: titleOpacity,
            marginBottom: 16,
          }}
        >
          원유 95%가{"\n"}이 해협을 지난다
        </h2>
        <p
          style={{
            fontSize: 33,
            fontWeight: 400,
            color: "rgba(26,26,26,0.75)",
            lineHeight: 1.6,
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.body.fontFamily,
          }}
        >
          봉쇄 장기화 시 제조업 생산비 12% 상승,
          성장률 1.7%로 하락(OECD). 전문가들:
          "전쟁 끝나도 유가는 돌아오지 않는다."
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: 3,
            color: "rgba(0,0,0,0.25)",
            fontFamily: POPEYE.typography.body.fontFamily,
          }}
        >
          6 / 7
        </div>
      </div>
    </AbsoluteFill>
  );
};
