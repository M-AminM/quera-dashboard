import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

interface StudentsProps extends React.PropsWithChildren {
  data: any;
  filterData: any;
  setData: any;
  token: string;
}
const Students: React.FunctionComponent<StudentsProps> = ({
  data,
  filterData,
  setData,
  token,
}) => {
  const removeStudent = (id: any) => {
    axios
      .delete(`http://localhost:5000/api/student/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        data: {
          id: id,
        },
      })
      .then((res) =>
        setData(data.filter((data: any) => data._id !== res.data.result._id))
      );
  };

  return (
    <section className="" style={{ direction: "rtl" }}>
      <TableContainer className="dark:bg-darkMode" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                دانشجو
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                ایمیل
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                کدملی
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                شماره موبایل
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                تاریخ ثبت نام
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(filterData?.length === 0 ? data : filterData)?.map(
              (data: any, index: number): any => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className="dark:text-white flex justify-end items-center gap-2"
                    align="right"
                  >
                    {data.fullName}
                    <AiFillDelete
                      onClick={() => removeStudent(data._id)}
                      className="cursor-pointer text-lg hover:text-cyan-500 duration-150 ease-in"
                    />
                  </TableCell>
                  <TableCell className="dark:text-white" align="right">
                    {data.email}
                  </TableCell>
                  <TableCell className="dark:text-white" align="right">
                    {data.nationalId}
                  </TableCell>
                  <TableCell className="dark:text-white" align="right">
                    {data.phoneNumber}
                  </TableCell>
                  <TableCell className="dark:text-white  " align="right">
                    {data.registerDate}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Students;
