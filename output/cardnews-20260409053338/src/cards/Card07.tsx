import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card07: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 12;
  const BODY_IN = 22;
  const ITEM1_IN = 30;
  const ITEM2_IN = 40;
  const ITEM3_IN = 50;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const item1Opacity = interpolate(frame, [ITEM1_IN, ITEM1_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const item2Opacity = interpolate(frame, [ITEM2_IN, ITEM2_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const item3Opacity = interpolate(frame, [ITEM3_IN, ITEM3_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const itemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 20,
    marginBottom: 20,
  };

  const numStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: 36,
    color: "rgba(74,124,158,0.9)",
    minWidth: 44,
    lineHeight: 1.4,
  };

  const itemTextStyle: React.CSSProperties = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 400,
    fontSize: 34,
    color: "rgba(255,255,255,0.88)",
    lineHeight: 1.55,
  };

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <Img
        src={staticFile("card-07.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div style={{ position: "absolute", inset: 0, background: POPEYE.overlay.closing }} />

      {/* Top label */}
      <div style={{ position: "absolute", top: 80, left: 80, opacity: bodyOpacity }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.7)",
          borderBottom: "2px solid rgba(74,124,158,0.8)",
          paddingBottom: 6,
        }}>
          WHAT TO WATCH
        </span>
      </div>

      {/* Bottom text block */}
      <div style={{ position: "absolute", bottom: 100, left: 80, right: 80 }}>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: 56,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: "#FFFFFF",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 28,
        }}>
          지금, 우리가{"\n"}봐야 할 것
        </h2>

        {/* Watch items */}
        <div style={{ ...itemStyle, opacity: item1Opacity }}>
          <span style={numStyle}>01</span>
          <span style={itemTextStyle}>이슬라마바드 협상 (4월 10일~) 결과</span>
        </div>
        <div style={{ ...itemStyle, opacity: item2Opacity }}>
          <span style={numStyle}>02</span>
          <span style={itemTextStyle}>이스라엘 레바논 작전 지속 여부</span>
        </div>
        <div style={{ ...itemStyle, opacity: item3Opacity }}>
          <span style={numStyle}>03</span>
          <span style={itemTextStyle}>이란 핵프로그램 사찰 합의 가능성</span>
        </div>

        <div style={{
          marginTop: 28,
          fontFamily: "'Noto Sans KR', sans-serif",
          fontWeight: 400,
          fontSize: 32,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.6,
          opacity: item3Opacity,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 24,
        }}>
          2주의 휴전이 진짜 평화의 시작이 될 수 있을까?
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
        7 / 7
      </div>
    </AbsoluteFill>
  );
};
