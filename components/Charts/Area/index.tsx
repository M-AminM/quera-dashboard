import React from "react";
import { Box } from "@mui/material";
import Area from "./Main";

interface AreaChartProps extends React.PropsWithChildren {
  isOpen: boolean;
  height: string;
}
const AreaChart: React.FunctionComponent<AreaChartProps> = ({
  isOpen,
  height,
}) => {
  const dynamicWidth: string = "calc(100vw - " + "220px" + ")";

  return (
    <Box height={height}>
      <Area />
    </Box>
  );
};

export default AreaChart;
