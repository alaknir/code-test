import styled from "styled-components";
import { Box, Flex } from "grid-styled";

const PRICE_FONT_COLOR = "#4e9e9b";
const PRIMARY_LABEL_COLOR = "#9e9e9e";
const LABEL_BOLD_COLOR = "#404040";
const TABLE_CELL_BG_COLOR = "#f9f9f9";
const BUTTON_BORDER_COLOR = "#d67b54";
const BUTTON_FONT_COLOR = "#d67b54";
const BUTTON_BG_COLOR = "#fff";
const ROW_BG_COLOR = "#fff";

export const ScriptPrice = styled.label`
  font-size: 22px;
  color: ${PRICE_FONT_COLOR};
`;

export const BuySellButton = styled.button`
  border: 1px solid ${BUTTON_BORDER_COLOR};
  border-radius: 5px;
  background-color: ${BUTTON_BG_COLOR};
  padding: 6px 30px;
  margin-top: 5px;
  color: ${BUTTON_FONT_COLOR};
  cursor: pointer;
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

export const StyledBoxRightAligned = styled(Box)`
  text-align: right;
`;

export const TableCellBox = styled(Box)`
  background-color: ${TABLE_CELL_BG_COLOR};
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  :first-child {
    margin-left: 10px;
  }
  padding: 5px;
`;

export const TabeRowFlex = styled(Flex)`
  background-color: ${ROW_BG_COLOR};
  padding: 3px;
  margin-bottom: 5px;
  border-radius: 3px;
`;
