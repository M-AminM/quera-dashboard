import React from "react";
import Login from "@/components/Login";

interface LoginPageProps extends React.PropsWithChildren {}
const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  return <Login />;
};

export default LoginPage;
