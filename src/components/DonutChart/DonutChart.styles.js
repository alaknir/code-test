import styled from "styled-components";

export const CIRCLE_TRACK_COLOR = "#ab9049";
export const CIRCLE_INDICATOR_COLOR = "#60b5dc";

export const DonutText = styled.text`
  font-family: "Roboto";
  fill: #607580;
`;

export const DonutTextValue = styled.tspan`
  font-size: 22px;
`;

export const DonutTextPercentage = styled.tspan`
  font-size: 14px;
`;

export const DonutTextLabel = styled.tspan`
  font-size: 9px;
`;

export const DonutCircleTrack = styled.circle`
  fill: transparent;
  stroke: ${CIRCLE_TRACK_COLOR};
  stroke-width: 26;
`;

export const DonutCircleIndicator = styled.circle`
  fill: transparent;
  stroke: ${CIRCLE_INDICATOR_COLOR};
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray 0.3s ease;
`;

export const ChartCanvas = styled.svg`
  margin: 10px;
  border-radius: 50%;
  display: block;
`;
