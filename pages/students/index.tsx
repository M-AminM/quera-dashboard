import Students from "@/components/Main/Students";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface StudentProps extends React.PropsWithChildren {}

const StudentsPage: React.FunctionComponent<StudentProps> = () => {
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const authorizationToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student/getall", {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": authorizationToken,
        },
      })
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err.response.data));
  }, []);

  const clickHandler = (e: any) => {
    const filterData = data.filter((data: any) =>
      data.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(filterData);
  };

  return (
    <div className="px-8 pt-2 pb-8 md:p-2" style={{ direction: "rtl" }}>
      <div className="pb-4 flex flex-col gap-4 sm:flex-row">
        <p className="text-sm">تمام دانشجویان</p>
        <div>
          <input
            className="px-4 py-1 text-sm rounded-r-xl outline-0"
            placeholder="جستوجو دانشجو"
            onChange={clickHandler}
          />
          <button className="px-4 py-1 text-sm bg-cyan-500 text-white rounded-l-xl">
            جستوجو
          </button>
        </div>
      </div>
      <div></div>
      <Students
        data={data}
        setData={setData}
        filterData={filterData}
        token={authorizationToken}
      />
    </div>
  );
};

export default StudentsPage;

// export async function getStaticProps() {
//   const authorizationToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgxMjE2MTZiZWZjZDNmODQzOTcwODQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI2Mjk4ODV9.RYwyhkF3_nJpFv7O2Wy9lT0TpKRxcC80TCy-M9rnlXA";

//   const res = await axios.get("http://localhost:5000/api/student/getall", {
//     headers: {
//       "Content-Type": "application/json",
//       "X-Auth-Token": authorizationToken,
//     },
//   });
//   const data = res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }
