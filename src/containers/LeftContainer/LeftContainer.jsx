import React from "react";
import { Box } from "grid-styled";

import { Script, Button, CostValue, PercentageValue } from "../../components";
import { TableCellBox, TabeRowFlex } from "../../components/CommonStyled";

import data from "../../data/data.json";
const LeftContainer = () => (
  <div>
    {data.map(record => (
      <TabeRowFlex>
        <TableCellBox width="30%">
          <Script script={record.script} price={record.price} />
        </TableCellBox>
        <TableCellBox width="20%">
          <CostValue label={"Quantitiy"} value={record.quantity} />
          <CostValue label={"Avg. Cost"} value={record.avgCost} />
          <CostValue label={"Invested Amt"} value={record.investedAmount} />
        </TableCellBox>
        <TableCellBox width="20%">
          <CostValue
            label={"Market Value"}
            value={record.price}
            isCompletelyBold
          />
          <PercentageValue
            label={"% of portfolio value"}
            value={record.percPortfolioValue}
          />
        </TableCellBox>
        <TableCellBox width="20%">
          <CostValue
            label={"Unrealized P/L"}
            value={record.unrealizedPL}
            isCompletelyBold
          />
          <PercentageValue label={"% return"} value={record.percReturn} />
        </TableCellBox>
        <TableCellBox width="10%">
          <Box>
            <Button>Buy</Button>
          </Box>
          <Box>
            <Button>Sell</Button>
          </Box>
        </TableCellBox>
      </TabeRowFlex>
    ))}
  </div>
);

export default LeftContainer;
