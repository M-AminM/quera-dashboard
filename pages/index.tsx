import React, { useEffect } from "react";
import { useRouter } from 'next/router'
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") router.replace("/ecommerce");
  }, [router]);
  return <div></div>;
}
