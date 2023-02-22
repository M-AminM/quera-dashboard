import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { employeesValue, fetchEmployees } from "@/slices/employeesSlice";

const EmployeesList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const employeesData = useSelector(employeesValue);
  const { employees } = employeesData;

  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <TableContainer className="dark:bg-slate-700" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                کارمند
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                آدرس
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
                کد ملی
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                موبایل
              </TableCell>

              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                تاریخ ثبت نام
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                فعالیت
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee: any) => (
              <TableRow
                key={employee._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="dark:text-white " align="right">
                  {employee.fullName}
                </TableCell>
                <TableCell className="dark:text-white  " align="right">
                  {employee.address}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {employee.email}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {employee.nationalId}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {employee.phoneNumber}
                </TableCell>
                <TableCell className="dark:text-white  " align="right">
                  {new Date(employee.registerDate).toLocaleDateString("fa-IR")}
                </TableCell>
                <TableCell className="dark:text-white  " align="right">
                  {employee.isActive ? "فعال" : "غیر فعال"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default EmployeesList;
