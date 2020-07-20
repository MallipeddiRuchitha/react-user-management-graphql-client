import React, { useState } from "react";

import { Button } from "@material-ui/core";

const CustomButton = ({ value,handleClick }) => {
  return (
    <div data-testid="button">
    <Button variant="contained" color="primary" onClick={handleClick}>
      {value}
    </Button>
    </div>
  );
};
export default CustomButton;
