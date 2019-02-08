import React from "react";
import PropTypes from "prop-types";

import {
  RectBG,
  RectNegative,
  RectPositive
} from "./HorizontalBarChart.styles";

const barChartPropTypes = {
  size: PropTypes.shape({
    sizeX: PropTypes.string.isRequired,
    sizeY: PropTypes.string.isRequired
  }),
  bar: PropTypes.shape({
    positionX: PropTypes.string,
    positionY: PropTypes.string,
    height: PropTypes.string.isRequired,
    value: PropTypes.string
  })
};

const barChartDefaultProps = {
  size: {
    sizeX: 300,
    sizeY: 200
  },
  bar: {
    positionX: 0,
    positionY: 0,
    value: 0
  }
};

const HorizontalBarProgressiveChart = ({ size: { sizeX, sizeY }, bar }) => {
  const RectValue = bar.value < 0 ? RectNegative : RectPositive;
  return (
    <svg width={sizeX} height={sizeY}>
      <RectBG
        rx={"5"}
        ry={"15"}
        x={bar.positionX}
        y={bar.positionY}
        height={bar.height}
        width={"100%"}
      />
      <RectValue
        rx={"5"}
        ry={"15"}
        x={bar.positionX}
        y={bar.positionY}
        height={bar.height}
        width={Math.abs(bar.value)}
      />
    </svg>
  );
};

export default HorizontalBarProgressiveChart;

HorizontalBarProgressiveChart.propType = barChartPropTypes;

HorizontalBarProgressiveChart.defaultProps = {
  size: {
    sizeX: 300,
    sizeY: 200
  },
  bar: {
    positionX: 0,
    positionY: 0,
    value: 0
  }
};

const HorizontalBalancingBarChart = ({ size: { sizeX, sizeY }, bar }) => {
  const RectValue = bar.value < 0 ? RectNegative : RectPositive;
  const barMedian = parseInt(sizeX) / 2;
  const barX = barMedian - parseInt(bar.width) / 2 + bar.value;
  return (
    <svg width={sizeX} height={sizeY}>
      <RectBG
        rx={"5"}
        ry={"15"}
        x={bar.positionX}
        y={bar.positionY}
        height={bar.height}
        width={"100%"}
      />
      <RectValue
        rx={"5"}
        ry={"1"}
        x={barX}
        y={bar.positionY}
        height={bar.height}
        width={bar.width}
      />
    </svg>
  );
};

HorizontalBalancingBarChart.propType = {
  ...barChartPropTypes,
  bar: {
    ...barChartPropTypes.bar,
    width: PropTypes.string.isRequired
  }
};

HorizontalBalancingBarChart.defaultProps = {
  ...barChartDefaultProps,
  bar: {
    ...barChartDefaultProps.bar,
    width: 20
  }
};

export { HorizontalBarProgressiveChart, HorizontalBalancingBarChart };
