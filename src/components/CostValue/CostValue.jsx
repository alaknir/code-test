import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "grid-styled";

import { LabelSmall, LabelSmallBold } from "../CommonStyled";

const CostValue = ({ label, value, isCompletelyBold }) => {
  const LabelComponent = isCompletelyBold ? LabelSmallBold : LabelSmall;
  return (
    <Flex>
      <Box width={1 / 2}>
        <LabelComponent>{label}</LabelComponent>
      </Box>
      <Box width={1 / 2}>
        <LabelSmallBold>{value}</LabelSmallBold>
      </Box>
    </Flex>
  );
};

export default CostValue;

CostValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isCompletelyBold: PropTypes.bool
};
