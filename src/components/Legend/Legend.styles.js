import styled from "styled-components";
import { Box } from "grid-styled";

export const LegendBox = styled(Box)`
  height: 20px;
  width: 20px;
  ${props => (props.color ? `background-color: ${props.color};` : "")}
`;
