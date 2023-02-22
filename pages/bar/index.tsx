import BarChart from "@/components/Charts/Bar";
import React from "react";

interface BarPageProps extends React.PropsWithChildren {}
const BarPage: React.FunctionComponent<BarPageProps> = () => {
  return <BarChart height="80vh" />;
};

export default BarPage;
