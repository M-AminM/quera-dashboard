import React, { useState } from "react";
import { employeesValue } from "@/slices/employeesSlice";
import { useSelector } from "react-redux";
import EmployeesList from "./EmployeesList";
import Search from "@/components/Base/Search";

const Employees = () => {
  const { employees } = useSelector(employeesValue);
  const [filterData, setFilterData] = useState([]);

  return (
    <div className="px-8 pt-2 pb-8 md:p-2">
      <Search data={employees} setFilterData={setFilterData} title="کارمندان" />
      <EmployeesList filterData={filterData} />
    </div>
  );
};

export default Employees;
