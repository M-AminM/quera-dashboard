import React from "react";
import { Box } from "@mui/material";
import Area from "../Chart/Area";

interface Props {
  isOpen: boolean;
  height: string;
}

const AreaChart: React.FC<Props> = ({ isOpen, height }) => {
  const dynamicWidth: string = "calc(100vw - " + "220px" + ")";

  return (
    <Box>
      <Box height={height}>
        <Area />
      </Box>
    </Box>
  );
};

export default AreaChart;
