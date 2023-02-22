import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ordersData } from "@/data";

interface StudentsProps extends React.PropsWithChildren {
  data: any;
}
const AllStudents: React.FunctionComponent<StudentsProps> = ({ data }) => {
  const result = data?.result;
  console.log(result);

  return (
    <section
      className="px-8 pt-2 pb-8 md:p-2 "
    ></section>
  );
};

export default AllStudents;
