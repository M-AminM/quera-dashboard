import Orders from "@/components/Main/Orders";
import React from "react";

interface OrdersPageProps extends React.PropsWithChildren {}
const OrdersPage: React.FunctionComponent<OrdersPageProps> = () => {
  return <Orders />;
};

export default OrdersPage;
