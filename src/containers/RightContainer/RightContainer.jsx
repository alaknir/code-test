import React from "react";
import { Box, Flex } from "grid-styled";

import { DonutChart, Legend } from "../../components";

import {
  CIRCLE_INDICATOR_COLOR,
  CIRCLE_TRACK_COLOR
} from "../../components/DonutChart/DonutChart.styles";
import { LabelMediumBold } from "../../components/CommonStyled";
import { Container } from "./RightContainer.styles";

const RightContainer = () => (
  <Container>
    <LabelMediumBold>Portfolio</LabelMediumBold>
    <Flex>
      <Box width={1 / 2}>
        <DonutChart value={70} valuelabel={"Mutual funds"} size={150} />
      </Box>
      <Box width={1 / 2} pl={30} pt={50}>
        <Legend
          legendsList={[
            {
              label: "Mutual funds",
              value: 10,
              color: CIRCLE_INDICATOR_COLOR
            },
            {
              label: "ETFs",
              value: 10,
              color: CIRCLE_TRACK_COLOR
            }
          ]}
        />
      </Box>
    </Flex>
  </Container>
);

export default RightContainer;
