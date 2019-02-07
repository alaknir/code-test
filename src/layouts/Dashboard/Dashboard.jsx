import React from "react";
import { Flex, Box } from "grid-styled";

import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import { RightBox } from "./Dashboard.styles";

const Dashboard = () => (
  <div>
    <Flex>
      <Box width={3 / 4} my={10} mx={10}>
        <LeftContainer />
      </Box>
      <RightBox width={1 / 4} my={10} mx={10}>
        <RightContainer />
      </RightBox>
    </Flex>
  </div>
);

export default Dashboard;
