import React from "react";
import { Box } from "@mui/material";
import Area from "./Main";

interface AreaChartProps extends React.PropsWithChildren {
  height: string;
}
const AreaChart: React.FunctionComponent<AreaChartProps> = ({ height }) => {
  return (
    <Box height={height}>
      <Area />
    </Box>
  );
};

export default AreaChart;
