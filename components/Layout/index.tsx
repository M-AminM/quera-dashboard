import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-zinc-200 flex relative">
      <div className="w-full h-screen overflow-auto">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Layout;
