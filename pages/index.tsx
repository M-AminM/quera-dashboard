import React, { useEffect } from "react";
import Ecommerce from "@/components/Main/Ecommerce";
import { useDispatch } from "react-redux";
import { fetchStudents } from "@/slices/studentsSlice";

interface HomeProps extends React.PropsWithChildren {}
const Home: React.FunctionComponent<HomeProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return <Ecommerce />;
};
export default Home;
