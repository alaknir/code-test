import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Box, Flex } from "grid-styled";

import {
  Script,
  Button,
  CostValue,
  PercentageValue,
  HorizontalBarProgressiveChart,
  HorizontalBalancingBarChart,
  Menu
} from "../../components";
import {
  TableCellBox,
  TabeRowFlex,
  IShareComponent,
  BoxTextCenter,
  LabelSmallBold,
  LabelMediumBold,
  FlexVerticalCenter
} from "../../components/CommonStyled";

import {
  getScriptData,
  getIsScriptFetching
} from "../../redux/selectors/index";
import iSharesIcons from "../../icons/iShares.png";

// import data from "../../data/data.json";

const LeftContainer = ({ scriptData }) => (
  <div>
    {scriptData.map((record, index) => (
      <TabeRowFlex>
        <TableCellBox width="30%">
          <Flex>
            <BoxTextCenter width={0.5 / 3}>
              <FlexVerticalCenter>
                <Menu />
              </FlexVerticalCenter>
            </BoxTextCenter>
            <BoxTextCenter width={0.75 / 3} py={10}>
              <Script script={record.script} price={record.price} />
            </BoxTextCenter>
            <Box width={1.75 / 3}>
              <IShareComponent>
                <img src={iSharesIcons} alt={"iSharesIcons"} width="45%" />
                <Box>
                  <LabelMediumBold>{`Product name ${index}`}</LabelMediumBold>
                </Box>
                <LabelSmallBold>{`Product type ${index}`}</LabelSmallBold>
              </IShareComponent>
            </Box>
          </Flex>
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
          <Box mt={2}>
            <HorizontalBarProgressiveChart
              bar={{
                height: 10,
                value: parseInt(record.percPortfolioValue),
                positionX: 0,
                positionY: 0
              }}
              size={{ sizeX: "100%", sizeY: "10px" }}
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
          <Box mt={2}>
            <HorizontalBalancingBarChart
              bar={{
                height: 10,
                width: 10,
                value: parseInt(record.percReturn),
                positionX: 0,
                positionY: 0
              }}
              size={{ sizeX: "170", sizeY: "10px" }}
            />
          </Box>
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
