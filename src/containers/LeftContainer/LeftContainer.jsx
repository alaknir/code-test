import React from "react";
import { Flex, Box } from "grid-styled";

import { Script, Button, CostValue, PercentageValue } from "../../components";
import data from "../../data/data.json";
const LeftContainer = () => (
  <div>
    {data.map(record => (
      <Flex>
        <Box width="30%">
          <Script script={record.script} price={record.price} />
        </Box>
        <Box width="20%">
          <CostValue label={"Quantitiy"} value={record.quantity} />
          <CostValue label={"Avg. Cost"} value={record.avgCost} />
          <CostValue label={"Invested Amt"} value={record.investedAmount} />
        </Box>
        <Box width="20%">
          <CostValue
            label={"Market Value"}
            value={record.price}
            isCompletelyBold
          />
          <PercentageValue
            label={"% of portfolio value"}
            value={record.percPortfolioValue}
          />
        </Box>
        <Box width="20%">
          <CostValue
            label={"Unrealized P/L"}
            value={record.unrealizedPL}
            isCompletelyBold
          />
          <PercentageValue label={"% return"} value={record.percReturn} />
        </Box>
        <Box width="10%">
          <Box>
            <Button>Buy</Button>
          </Box>
          <Box>
            <Button>Sell</Button>
          </Box>
        </Box>
      </Flex>
    ))}
  </div>
);

export default LeftContainer;
