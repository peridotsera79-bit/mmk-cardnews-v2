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

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <Img
        src={staticFile("card-05.png")}
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
          bottom: 90,
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
          휴전의 균열
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
            marginBottom: 28,
          }}
        >
          휴전을 흔드는{"\n"}3개의 균열
        </h2>
        <div
          style={{
            opacity: bodyOpacity,
            fontFamily: POPEYE.typography.body.fontFamily,
          }}
        >
          {[
            { num: "01", text: "레바논 — 이스라엘 \"레바논은 휴전 대상이 아니다\"" },
            { num: "02", text: "핵 농축 — 미국 \"절대 안 된다\" vs 이란 \"주권 문제\"" },
            { num: "03", text: "검증 — 이란 \"합의 24시간 내 미국이 이미 위반\"" },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#D4563A",
                  marginRight: 16,
                  lineHeight: 1.55,
                  fontFamily: POPEYE.typography.headline.fontFamily,
                  flexShrink: 0,
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.55,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
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
        5 / 7
      </div>
    </AbsoluteFill>
  );
};
