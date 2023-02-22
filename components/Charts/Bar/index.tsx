import React from "react";
import { Box } from "@mui/material";
import Bar from "./Main";

interface BarChartProps extends React.PropsWithChildren {
  height: string;
}
const BarChart: React.FunctionComponent<BarChartProps> = ({ height }) => {
  return (
    <Box height={height}>
      <Bar />
    </Box>
  );
};

export default BarChart;
