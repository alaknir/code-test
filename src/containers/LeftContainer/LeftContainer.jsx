import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Box } from "grid-styled";

import {
  Script,
  Button,
  CostValue,
  PercentageValue,
  HorizontalBarProgressiveChart,
  HorizontalBalancingBarChart
} from "../../components";
import { TableCellBox, TabeRowFlex } from "../../components/CommonStyled";

import {
  getScriptData,
  getIsScriptFetching
} from "../../redux/selectors/index";

// import data from "../../data/data.json";

const LeftContainer = ({ scriptData }) => (
  <div>
    {scriptData.map((record, index) => (
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
          <Box>
            <HorizontalBarProgressiveChart
              bar={{
                height: 15,
                value:
                  (index + 1) % 2 === 0 ? (index + 1) * 10 : -(index + 1) * 10,
                positionX: 0,
                positionY: 0
              }}
              size={{ sizeX: "100%", sizeY: "30px" }}
            />
          </Box>
        </TableCellBox>
        <TableCellBox width="20%">
          <CostValue
            label={"Unrealized P/L"}
            value={record.unrealizedPL}
            isCompletelyBold
          />
          <PercentageValue label={"% return"} value={record.percReturn} />
          <HorizontalBalancingBarChart
            bar={{
              height: 15,
              width: 15,
              value:
                (index + 1) % 2 === 0 ? (index + 1) * 10 : -(index + 1) * 10,
              positionX: 0,
              positionY: 0
            }}
            size={{ sizeX: "170", sizeY: "30px" }}
          />
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

const mapStateToProps = state => ({
  scriptData: getScriptData(state),
  isScriptFetching: getIsScriptFetching(state)
});

LeftContainer.propTypes = {
  scriptData: PropTypes.shape([]).isRequired,
  isScriptFetching: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(LeftContainer);
