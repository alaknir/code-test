import React from "react";
import { Flex, Box } from "grid-styled";

import {
  LabelSmall,
  LabelSmallBold,
  StyledBoxRightAligned
} from "../CommonStyled";

const PercentageValue = ({ label, value }) => (
  <Flex>
    <Box width={3 / 4}>
      <LabelSmall>{label}</LabelSmall>
    </Box>
    <StyledBoxRightAligned width={1 / 4}>
      <LabelSmallBold>{value}</LabelSmallBold>
    </StyledBoxRightAligned>
  </Flex>
);

export default PercentageValue;
