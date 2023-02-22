import React, { useState } from "react";
import { useSelector } from "react-redux";
import { studentValue } from "@/slices/studentsSlice";
import StudentsList from "./StudentsList";

interface StudentProps extends React.PropsWithChildren {}
const Students: React.FunctionComponent<StudentProps> = () => {
  const student = useSelector(studentValue);
  const [filterData, setFilterData] = useState([]);
  const { students } = student;

  const chanegHandler = (e: any) => {
    const filterData = students.filter((data: any) =>
      data.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(filterData);
  };

  return (
    <div className="px-8 pt-2 pb-8 md:p-2">
      <div className="pb-4 flex flex-col gap-4 sm:flex-row">
        <p className="text-sm dark:text-white">تمام دانشجویان</p>
        <div>
          <input
            className="px-4 py-1 text-sm rounded-r-xl outline-0"
            placeholder="جستوجو دانشجو"
            onChange={chanegHandler}
          />
          <button className="px-4 py-1 text-sm bg-cyan-500 text-white rounded-l-xl">
            جستوجو
          </button>
        </div>
      </div>
      <div></div>
      <StudentsList filterData={filterData} />
    </div>
  );
};

export default Students;
