import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiPieChart } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

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
