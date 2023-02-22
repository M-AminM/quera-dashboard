import { themeValue } from "@/slices/themeSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { value } = useSelector(themeValue);

  return (
    <div className={`${value ? "dark" : ""}`}>
      <div className=" flex relative bg-zinc-200 dark:bg-slate-900">
        <div className="w-full h-screen overflow-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}
        </div>
        <div
          className="ease-out delay-150 duration-300"
          style={{ transition: "0.5s" }}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
