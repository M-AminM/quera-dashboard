import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, studentValue } from "@/slices/studentsSlice";
import { deleteStudent, deleteStudentValue } from "@/slices/removeStudentSlice";

interface StudentsProps extends React.PropsWithChildren {
  filterData: never[];
}
const StudentsList: React.FunctionComponent<StudentsProps> = ({
  filterData,
}) => {
  const student = useSelector(studentValue);
  const remove = useSelector(deleteStudentValue);
  const dispatch = useDispatch();
  const { students } = student;
  const removeStudent = (id: any) => {
    dispatch(deleteStudent(id));
  };

  useEffect(() => {
    dispatch(fetchStudents());
  }, [remove]);

  return (
    <section>
      <TableContainer className="dark:bg-slate-700" component={Paper}>
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
            {(filterData?.length === 0 ? students : filterData)?.map(
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
                    {new Date(data.registerDate).toLocaleDateString("fa-IR")}
                  </TableCell>
                  <TableCell className="dark:text-white  " align="right">
                    {data.isActive ? "فعال" : "غیر فعال"}
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

export default StudentsList;
