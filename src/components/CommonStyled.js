import styled from "styled-components";
import { Box, Flex } from "grid-styled";

const PRICE_FONT_COLOR = "#4e9e9b";
const PRIMARY_LABEL_COLOR = "#8a8080";
const LABEL_BOLD_COLOR = "#404040";
const TABLE_CELL_BG_COLOR = "#f9f9f9";
const BUTTON_BORDER_COLOR = "#d67b54";
const BUTTON_FONT_COLOR = "#d67b54";
const BUTTON_BG_COLOR = "#fff";
const ROW_BG_COLOR = "#fff";
const ARROW_SIZE = "5px";
export const RECT_COLOR_RED = "#d13912";
export const RECT_COLOR_GREEN = "#11a338";
export const RECT_BG_COLOR = "#e9eaec";

export const ScriptPrice = styled.label`
  font-size: 18px;
  color: ${PRICE_FONT_COLOR};
  font-weight: bold;
`;

export const BuySellButton = styled.button`
  border: 1px solid ${BUTTON_BORDER_COLOR};
  border-radius: 5px;
  background-color: ${BUTTON_BG_COLOR};
  padding: 5px 0px;
  margin-top: 5px;
  color: ${BUTTON_FONT_COLOR};
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  :active {
    background-color: ${BUTTON_BORDER_COLOR};
    color: ${BUTTON_BG_COLOR};
  }
`;

export const LabelSmall = styled.label`
  color: ${PRIMARY_LABEL_COLOR};
  font-size: 12px;
`;

export const LabelSmallBold = styled(LabelSmall)`
  font-weight: bold;
  color: ${LABEL_BOLD_COLOR};
`;

export const LabelMedium = styled.label`
  color: ${PRIMARY_LABEL_COLOR};
  font-size: medium;
`;

export const LabelMediumBold = styled(LabelMedium)`
  font-weight: bold;
  color: ${LABEL_BOLD_COLOR};
  font-size: medium;
`;

export const StyledBoxRightAligned = styled(Box)`
  text-align: right;
`;

export const TableCellBox = styled(Box)`
  background-color: ${TABLE_CELL_BG_COLOR};
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  :first-child {
    margin-left: 5px;
  }
  padding: 5px;
`;

export const TabeRowFlex = styled(Flex)`
  background-color: ${ROW_BG_COLOR};
  margin-bottom: 5px;
  border-radius: 3px;
`;

export const BoxTextCenter = styled(Box)`
  text-align: center;
`;

export const IShareComponent = styled(Box)``;

export const FlexVerticalCenter = styled(Flex)`
  justify-content: center;
  height: 100%;
`;

const Arrow = styled.span`
  border-style: solid;
  height: 0px;
  width: 0px;
  display: inline-block;
  margin-right: 5px;
`;

export const UpArrow = styled(Arrow)`
  border-color: ${RECT_COLOR_GREEN} transparent;
  border-width: 0px ${ARROW_SIZE} ${ARROW_SIZE} ${ARROW_SIZE};
`;

export const DownArrow = styled(Arrow)`
  border-color: ${RECT_COLOR_RED} transparent;
  border-width: ${ARROW_SIZE} ${ARROW_SIZE} 0px ${ARROW_SIZE};
`;
