import React from "react";
import { Flex, Box } from "grid-styled";

import { LabelSmall, LabelSmallBold } from "../CommonStyled";

const PercentageValue = ({ label, value }) => (
  <Flex>
    <Box width={3 / 4}>
      <LabelSmall>{label}</LabelSmall>
    </Box>
    <Box width={1 / 4}>
      <LabelSmallBold>{value}</LabelSmallBold>
    </Box>
  </Flex>
);

export default PercentageValue;
