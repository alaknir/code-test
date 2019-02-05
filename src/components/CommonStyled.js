import styled from "grid-styled";
const PRICE_FONT_COLOR = "#4e9e9b";
const PRIMARY_LABEL_COLOR = "#CACACA";

export const ScriptPrice = styled("label")`
  font-size: 22px;
  color: ${PRICE_FONT_COLOR};
`;

export const BuySellButton = styled("button")`
  border: 1px solid orange;
  border-radius: 5px;
  background-color: #fff;
`;

export const LabelSmall = styled("label")`
  color: ${PRIMARY_LABEL_COLOR};
  font-size: 10px;
`;

export const LabelSmallBold = styled(LabelSmall)`
  font-weight: bold;
`;
