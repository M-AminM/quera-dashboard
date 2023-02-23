import AreaChart from "@/components/Charts/Area";
import React from "react";

interface AreaPageProps extends React.PropsWithChildren {}
const AreaPage: React.FunctionComponent<AreaPageProps> = () => {
  return <AreaChart height="80vh" />;
};

export default AreaPage;
