import React, { useEffect } from "react";
import Ecommerce from "@/components/Main/Ecommerce";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/slices/studentsSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return <Ecommerce />;
}
