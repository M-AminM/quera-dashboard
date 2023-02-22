import React, { useState } from "react";
import { useSelector } from "react-redux";
import { studentValue } from "@/slices/studentsSlice";
import StudentsList from "./StudentsList";
import Search from "@/components/Base/Search";

interface StudentProps extends React.PropsWithChildren {}
const Students: React.FunctionComponent<StudentProps> = () => {
  const { students } = useSelector(studentValue);
  const [filterData, setFilterData] = useState([]);

  return (
    <div className="px-8 pt-2 pb-8 md:p-2">
      <Search data={students} setFilterData={setFilterData} />
      <StudentsList filterData={filterData} />
    </div>
  );
};

export default Students;
