import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router]);

  const onSubmit = async (data: any) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,

      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("ایمیل یا پسورد وارد شده نادرست است");
    }
  };
  return (
    <section className=" dark:bg-slate-900 bg-zinc-200 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[85vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ورود به حساب کاربری
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  پسورد
                </label>
                <input
                  type="password"
                  {...register("password")}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <Button
                className="dark:bg-red-500 dark:hover:bg-red-600 bg-cyan-500 hover:bg-cyan-600 w-full"
                variant="contained"
                type="submit"
              >
                ورود
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
