import React from "react";
import { Flex, Box } from "grid-styled";

import { LegendBox } from "./Legend.styles";
import { LabelSmallBold } from "../CommonStyled";

const Legend = ({ legendsList }) => (
  <Box>
    {legendsList.map(({ value, label, color }) => (
      <Flex>
        <LegendBox width={1 / 4} color={color} mb={1} mr={1} />
        <Box width={3 / 4} mb={1} mr={1}>
          <LabelSmallBold>{label}</LabelSmallBold>
        </Box>
      </Flex>
    ))}
  </Box>
);

export default Legend;
