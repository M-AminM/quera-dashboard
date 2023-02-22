import PieChart from "@/components/Charts/Pie";
import React from "react";

interface PiePage extends React.PropsWithChildren {}
const PiePage: React.FunctionComponent<PiePage> = () => {
  return <PieChart height="80vh" />;
};

export default PiePage;
