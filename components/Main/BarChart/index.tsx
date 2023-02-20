import React from "react";
import { Box } from "@mui/material";
import Bar from "../Chart/Bar";

interface Props {
  height: string;
}

const BarChart: React.FC<Props> = ({ height }) => {
  return (
    <Box>
      <Box height={height}>
        <Bar />
      </Box>
    </Box>
  );
};

export default BarChart;
