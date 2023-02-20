import React from "react";
import { Box } from "@mui/material";
import Pie from "../Chart/Pie";

interface Props {
  height: string;
}

const PieChart: React.FC<Props> = ({ height }) => {
  return (
    <Box m="20px">
      <Box height={height}>
        <Pie />
      </Box>
    </Box>
  );
};

export default PieChart;