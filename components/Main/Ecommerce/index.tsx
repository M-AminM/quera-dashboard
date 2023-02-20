import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { earningData } from "@/data";
import { Button } from "@mui/material";
import Area from "../Chart/Area";

import { toFarsiNumber } from "@/components/Base/Numbers";
import AreaChart from "../AreaChart";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
// import Area from "../Area/Area";
// import "../../index.css";
// import Pie from "../Pie/Pie";
// import LineChart from "../Line/Line";

interface Props {
  theme?: boolean;
}

const Ecommerce: React.FC<Props> = ({ theme }) => {
  return (
    <section
      className={`px-8 pt-2 pb-8 ${false ? "dark" : ""}`}
      style={{ direction: "rtl" }}
    >
      <div className="flex flex-col gap-2 md:grid md:grid-cols-4 lg:grid-cols-5">
        <div className="bg-white p-4 dark:bg-darkMode ">
          <div className="flex justify-between h-full items-center">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold dark:text-white">درآمد</h2>
              <span className="dark:text-white">
                ${toFarsiNumber("63,448.78")}
              </span>
              <Button
                style={{ backgroundColor: !false ? "#03C9D7" : "#FF4A59" }}
                variant="contained"
              >
                دانلود
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-midBlue w-10 h-10 rounded-full flex justify-center items-center bg-cyan-500 dark:bg-red">
                <BsCurrencyDollar color="#fff" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent col-span-3 lg:col-span-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
            {earningData.map((data, index) => {
              return (
                <div
                  className="bg-white rounded flex flex-col p-4 w-full dark:bg-darkMode"
                  key={index}
                >
                  <div
                    className="rounded-full h-12 w-12 flex justify-center items-center"
                    style={{ background: data.iconBg }}
                  >
                    {data.icon}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <span className="font-bold dark:text-white">
                        {toFarsiNumber(data.amount)}
                      </span>
                      <span className="text-red">{data.percentage}</span>
                    </div>
                    <span className="text-gray">{data.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white col-span-4 lg:col-span-3 dark:bg-darkMode">
          <AreaChart isOpen={false} height="35vh" />
        </div>

        <div className="bg-white col-span-2 dark:bg-darkMode">
          <h2 className="font-semibold p-4 dark:text-white">معاملات اخیر</h2>

          <div className=" border-y-4 border-mainBg">
            <div className="flex justify-between px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue text-sm">01e4dsa</span>
                <span className="dark:text-white text-sm">امین</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="dark:text-white text-sm"></span>
              </div>
              <div className="bg-midBlue px-2 rounded flex justidy-center items-center text-white">
                <p className="text-sm">$43.95</p>
              </div>
            </div>
          </div>

          <div className=" border-b-4 border-mainBg">
            <div className="flex justify-between px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue text-sm">01e4dsa</span>
                <span className="dark:text-white text-sm">johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="dark:text-white text-sm">2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 rounded flex justidy-center items-center text-white">
                <p className="text-sm">$43.95</p>
              </div>
            </div>
          </div>
          <div className=" border-b-4 border-mainBg">
            <div className="flex justify-between px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue text-sm">01e4dsa</span>
                <span className="dark:text-white text-sm">johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="dark:text-white text-sm">2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 rounded flex justidy-center items-center text-white">
                <p className="text-sm">$43.95</p>
              </div>
            </div>
          </div>
          <div className=" border-mainBg">
            <div className="flex justify-between px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue text-sm">01e4dsa</span>
                <span className="dark:text-white text-sm">johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="dark:text-white text-sm">2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 rounded flex justidy-center items-center text-white">
                <p className="text-sm">$43.95</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white col-span-2 dark:bg-darkMode">
          <PieChart height="35vh" />
        </div>
        <div className="bg-white col-span-3 lg:col-span-2 dark:bg-darkMode ">
          <BarChart height="35vh" />
        </div>
        <div className="bg-white p-4 dark:bg-darkMode">
          <h2 className="font-semibold pb-4 dark:text-white">
            به روز رسانی درآمد
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between">
                <h2 className="dark:text-white font-semibold">$93,438</h2>
                <div className="bg-green rounded-full w-10 h-10 flex justify-center items-center">
                  <span className="font-semibold text-sm text-white">23%</span>
                </div>
              </div>
              <span className="text-gray">بودجه</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="dark:text-white font-semibold">$48,487</h2>
              <span className="text-gray">هزینه</span>
            </div>

            <Button
              style={{
                backgroundColor: !false ? "#03C9D7" : "#FF4A59",
                fontSize: "14px",
                fontWeight: "600",
              }}
              variant="contained"
            >
              دانلود گزارش
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
