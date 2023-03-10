import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./sidebar.module.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme?: boolean;
}

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen, theme }) => {
  const router = useRouter();
  const { pathname } = router;

  const activeLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg  text-white bg-cyan-500 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <section
        className={` z-20 absolute duration-100 ease-in right-0 top-0   ${
          isOpen ? "w-full" : ""
        }  `}
        style={{ direction: "rtl" }}
      >
        <div onClick={() => setIsOpen(!isOpen)} className={styles.blur}></div>
        <div
          className={`${
            isOpen ? "w-56" : "w-0"
          } duration-100 ease-in bg-white dark:bg-darkMode `}
        >
          <div className="py-4 pr-4 ">
            <div className="flex flex-col h-screen overflow-auto">
              <div className="flex justify-between">
                <h1 className="font-bold pb-8 dark:text-white">ادمین</h1>
                <span
                  className="pt-1.5 block  pl-4 dark:color-white cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MdOutlineCancel color="#000" />
                </span>
              </div>
              {links.map((data, index) => {
                return (
                  <div className="w-52" key={index}>
                    <h2 className="text-sm font-medium text-gray ">
                      {data.title}
                    </h2>
                    {data.links.map((link, index) => {
                      //   console.log(link.name === pathname);

                      return (
                        <Link
                          href={`/${link.url}`}
                          key={index}
                          className={`${
                            pathname === `/${link.url}`
                              ? activeLink
                              : normalLink
                          }`}
                        >
                          <span
                            className={`${
                              index === 7 ? "mb-10" : ""
                            } dark:text-white`}
                          >
                            {link.icon}
                          </span>
                          <span className="dark:text-white">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
