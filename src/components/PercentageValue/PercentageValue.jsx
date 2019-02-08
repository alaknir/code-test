import React from "react";
import { Flex, Box } from "grid-styled";

import {
  LabelSmall,
  LabelSmallBold,
  StyledBoxRightAligned,
  UpArrow,
  DownArrow
} from "../CommonStyled";

const PercentageValue = ({ label, value, withArrow }) => {
  const Arrow = parseInt(value) > 0 ? UpArrow : DownArrow;
  return (
    <Flex>
      <Box width={3 / 5}>
        <LabelSmall>{label}</LabelSmall>
      </Box>
      <StyledBoxRightAligned width={2 / 5}>
        {withArrow && <Arrow />}
        <LabelSmallBold>{value}</LabelSmallBold>
      </StyledBoxRightAligned>
    </Flex>
  );
};

export default PercentageValue;
