import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

import { ScriptPrice, LabelMedium } from "../CommonStyled";

const Script = ({ script = "", price = "" }) => {
  const dollar = price.slice(0, 1);
  const otherText = price.slice(1);
  return (
    <Box>
      <Box>{script}</Box>
      <ScriptPrice>
        <LabelMedium>{dollar}</LabelMedium>
        {otherText}
      </ScriptPrice>
    </Box>
  );
};

Script.propTypes = {
  script: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default Script;
