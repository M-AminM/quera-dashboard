import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-zinc-200 flex relative">
      <div className="w-full h-screen">
        <Header />
        {children}
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
