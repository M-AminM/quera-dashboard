import Students from "@/components/Main/Students";
import React from "react";

interface StudentProps extends React.PropsWithChildren {}
const StudentsPage: React.FunctionComponent<StudentProps> = () => {
  return <Students />;
};

export default StudentsPage;
