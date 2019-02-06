import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "grid-styled";

import {
  LabelSmall,
  LabelSmallBold,
  StyledBoxRightAligned
} from "../CommonStyled";

const CostValue = ({ label, value, isCompletelyBold }) => {
  const LabelComponent = isCompletelyBold ? LabelSmallBold : LabelSmall;
  return (
    <Flex>
      <Box width={1 / 2}>
        <LabelComponent>{label}</LabelComponent>
      </Box>
      <StyledBoxRightAligned width={1 / 2}>
        <LabelSmallBold>{value}</LabelSmallBold>
      </StyledBoxRightAligned>
    </Flex>
  );
};

export default CostValue;

CostValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isCompletelyBold: PropTypes.bool
};
