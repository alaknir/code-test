import React from "react";
import PropTypes from "prop-types";

import {
  DonutCircleTrack,
  DonutCircleIndicator,
  ChartCanvas
} from "./DonutChart.styles";

const DonutChart = props => {
  const halfsize = props.size / 2;
  const radius = halfsize - props.strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (props.value * circumference) / 100;
  const dashval = strokeval + " " + circumference;

  const trackstyle = { strokeWidth: props.strokewidth };
  const indicatorstyle = {
    strokeWidth: props.strokewidth,
    strokeDasharray: dashval
  };
  const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";

  return (
    <ChartCanvas width={props.size} height={props.size} className="donutchart">
      <DonutCircleTrack
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={rotateval}
        style={trackstyle}
      />
      <DonutCircleIndicator
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={rotateval}
        style={indicatorstyle}
      />
    </ChartCanvas>
  );
};

DonutChart.propTypes = {
  value: PropTypes.number, // value the chart should show
  valuelabel: PropTypes.string, // label for the chart
  size: PropTypes.number, // diameter of chart
  strokewidth: PropTypes.number // width of chart line
};

DonutChart.defaultProps = {
  value: 0,
  valuelabel: "Completed",
  size: 116,
  strokewidth: 20
};

export default DonutChart;
