import React, { useEffect } from "react";
import Ecommerce from "@/components/Main/Ecommerce";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/slices/studentsSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return <Ecommerce />;
};

export default DashboardPage;
