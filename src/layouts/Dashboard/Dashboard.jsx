import React from "react";
import { Flex, Box } from "grid-styled";

import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";

const Dashboard = () => (
  <div>
    This is Dashboard
    <Flex>
      <Box w={3 / 4}>
        <LeftContainer />
      </Box>
      <Box w={1 / 4}>
        <RightContainer />
      </Box>
    </Flex>
  </div>
);

export default Dashboard;
