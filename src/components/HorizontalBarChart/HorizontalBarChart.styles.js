import styled from "styled-components";

const RECT_COLOR_RED = "#d13912";
const RECT_COLOR_GREEN = "#11a338";
const RECT_BG_COLOR = "#e9eaec";

export const RectBG = styled.rect`
  fill: ${RECT_BG_COLOR};
`;

export const RectPositive = styled.rect`
  fill: ${RECT_COLOR_GREEN};
  transition: stroke-dasharray 0.3s ease;
`;

export const RectNegative = styled.rect`
  fill: ${RECT_COLOR_RED};
  transition: stroke-dasharray 0.3s ease;
`;
