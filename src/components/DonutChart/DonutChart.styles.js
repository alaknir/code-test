import styled from "styled-components";

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
  stroke: #dae2e5;
  stroke-width: 26;
`;

export const DonutCircleIndicator = styled.circle`
  fill: transparent;
  stroke: #009688;
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray 0.3s ease;
`;

export const ChartCanvas = styled.svg`
  margin: 0 auto;
  border-radius: 50%;
  display: block;
`;
