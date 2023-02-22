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
import { deleteEmployee, deleteEmployeeValue } from "@/slices/removeEmployeeSlice";
import { AiFillDelete } from "react-icons/ai";

const EmployeesList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const employeesData = useSelector(employeesValue);
  const { employees } = employeesData;
  const remove = useSelector(deleteEmployeeValue);

  const removeEmployee = (id: any) => {
    dispatch(deleteEmployee(id));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [remove]);

  const tableCell = [
    { id: 1, title: "کارمند" },
    { id: 2, title: "آدرس" },
    { id: 3, title: "ایمیل" },
    { id: 4, title: "کد ملی" },
    { id: 5, title: "موبایل" },
    { id: 6, title: "تاریخ ثبت نام" },
    { id: 7, title: "فعالیت" },
  ];

  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <TableContainer className="dark:bg-slate-700" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableCell.map((cell) => (
                <TableCell
                  key={cell.id}
                  className="dark:text-white"
                  sx={{ fontWeight: "bold" }}
                  align="right"
                >
                  {cell.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee: any) => (
              <TableRow
                key={employee._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className="dark:text-white flex justify-end items-center gap-2"
                  align="right"
                >
                  {employee.fullName}
                  <AiFillDelete
                    onClick={() => removeEmployee(employee._id)}
                    className="cursor-pointer text-lg hover:text-cyan-500 duration-150 ease-in"
                  />
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
