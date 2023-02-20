import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiPieChart, FiBarChart } from "react-icons/fi";
import { BsKanban, BsBoxSeam } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

export const links = [
  {
    title: "داشبورد",
    links: [
      {
        url: "ecommerce",
        name: "تجارت الکترونیک",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "صفحات",
    links: [
      {
        url: "orders",
        name: "سفارشات",
        icon: <AiOutlineShoppingCart />,
      },
      {
        url: "employees",
        name: "کارمندان",
        icon: <IoMdContacts />,
      },
      {
        url: "customers",
        name: "مشتریان",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "برنامه ها",
    links: [
      {
        url: "calendar",
        name: "تقویم",
        icon: <AiOutlineCalendar />,
      },
      {
        url: "kanban",
        name: "تابلوی راهنما",
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: "نمودار ها",
    links: [
      {
        url: "line",
        name: "خطی",
        icon: <AiOutlineStock />,
      },
      {
        url: "area",
        name: "سطحی",
        icon: <AiOutlineAreaChart />,
      },

      {
        url: "bar",
        name: "میله ای",
        icon: <AiOutlineBarChart />,
      },
      {
        url: "pie",
        name: "دایره ای",
        icon: <FiPieChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-9%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];
