import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./sidebar.module.css";

interface SidebarProps extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  }, [router.asPath]);

  const activeLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg  text-white bg-cyan-500 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <section
      className={`${
        isOpen ? "w-full" : ""
      } z-20 absolute duration-100 ease-in right-0 top-0`}
      style={{ direction: "rtl" }}
    >
      <div onClick={() => setIsOpen(!isOpen)} className={styles.blur}></div>
      <div
        className={`${
          isOpen ? "w-56" : "w-0"
        } duration-100 ease-in bg-white  dark:bg-slate-700 `}
      >
        <div className="py-4 pr-4 ">
          <div className="flex flex-col h-screen overflow-auto">
            <div className="flex justify-between">
              <h1 className="font-bold pb-8 dark:text-white">ادمین</h1>
              <span
                className="pt-1.5 block  pl-4 dark:color-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MdOutlineCancel color="#ff4a59" />
              </span>
            </div>
            {links.map((data) => (
              <div className="w-52" key={data.id}>
                <h2 className="text-sm font-medium text-gray-400 ">
                  {data.title}
                </h2>
                {data.links.map((link) => (
                  <Link
                    href={`/${link.url}`}
                    key={link.id}
                    className={`${
                      pathname === `/${link.url}` ? activeLink : normalLink
                    }`}
                  >
                    <span className="dark:text-white">{link.icon}</span>
                    <span className="dark:text-white">{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
