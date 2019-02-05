import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

import { ScriptPrice } from "../CommonStyled";

const Script = ({ script, price }) => (
  <Box>
    {script}
    <ScriptPrice>{price}</ScriptPrice>
  </Box>
);

Script.propTypes = {
  script: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default Script;
