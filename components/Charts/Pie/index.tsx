import React from "react";
import { Box } from "@mui/material";
import Pie from "./Main";

interface PieChartProps extends React.PropsWithChildren {
  height: string;
}

const PieChart: React.FunctionComponent<PieChartProps> = ({ height }) => {
  return (
    <Box m="20px" height={height}>
      <Pie />
    </Box>
  );
};

export default PieChart;
