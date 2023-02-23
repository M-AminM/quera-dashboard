import React, { useEffect, useState } from "react";
import Ecommerce from "@/components/Main/Ecommerce";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/slices/studentsSlice";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const session = useSession();
  console.log(session);
  

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       router.replace("/");
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, [router]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return <Ecommerce />;
};

export default DashboardPage;
