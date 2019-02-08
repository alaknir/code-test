import styled from "styled-components";
import {
  RECT_COLOR_RED,
  RECT_COLOR_GREEN,
  RECT_BG_COLOR
} from "../CommonStyled";

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
