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

export const AreaBumpData = [
  {
    id: "JavaScript",
    data: [
      {
        x: 2000,
        y: 28,
      },
      {
        x: 2001,
        y: 13,
      },
      {
        x: 2002,
        y: 27,
      },
      {
        x: 2003,
        y: 29,
      },
      {
        x: 2004,
        y: 14,
      },
      {
        x: 2005,
        y: 11,
      },
    ],
  },
  {
    id: "ReasonML",
    data: [
      {
        x: 2000,
        y: 14,
      },
      {
        x: 2001,
        y: 27,
      },
      {
        x: 2002,
        y: 30,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 13,
      },
      {
        x: 2005,
        y: 27,
      },
    ],
  },
  {
    id: "TypeScript",
    data: [
      {
        x: 2000,
        y: 21,
      },
      {
        x: 2001,
        y: 25,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 24,
      },
      {
        x: 2004,
        y: 18,
      },
      {
        x: 2005,
        y: 20,
      },
    ],
  },
  {
    id: "Elm",
    data: [
      {
        x: 2000,
        y: 20,
      },
      {
        x: 2001,
        y: 12,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 11,
      },
      {
        x: 2004,
        y: 10,
      },
      {
        x: 2005,
        y: 21,
      },
    ],
  },
  {
    id: "CoffeeScript",
    data: [
      {
        x: 2000,
        y: 22,
      },
      {
        x: 2001,
        y: 21,
      },
      {
        x: 2002,
        y: 18,
      },
      {
        x: 2003,
        y: 14,
      },
      {
        x: 2004,
        y: 12,
      },
      {
        x: 2005,
        y: 16,
      },
    ],
  },
];

export const PieChartData = [
  {
    id: "elixir",
    label: "elixir",
    value: 418,
    color: "hsl(178, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 540,
    color: "hsl(290, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 108,
    color: "hsl(215, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 501,
    color: "hsl(175, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 412,
    color: "hsl(261, 70%, 50%)",
  },
];
