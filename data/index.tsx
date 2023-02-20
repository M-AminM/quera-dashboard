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
    title: "مشتریان",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "محصولات",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "فروش",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-9%",
    title: "بازپرداخت",
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

export const BarData = [
  {
    country: "AD",
    "hot dog": 55,
    "hot dogColor": "hsl(351, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(338, 70%, 50%)",
    sandwich: 102,
    sandwichColor: "hsl(32, 70%, 50%)",
    kebab: 69,
    kebabColor: "hsl(186, 70%, 50%)",
    fries: 22,
    friesColor: "hsl(337, 70%, 50%)",
    donut: 172,
    donutColor: "hsl(20, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 163,
    "hot dogColor": "hsl(341, 70%, 50%)",
    burger: 147,
    burgerColor: "hsl(355, 70%, 50%)",
    sandwich: 17,
    sandwichColor: "hsl(56, 70%, 50%)",
    kebab: 84,
    kebabColor: "hsl(352, 70%, 50%)",
    fries: 85,
    friesColor: "hsl(211, 70%, 50%)",
    donut: 103,
    donutColor: "hsl(346, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 67,
    "hot dogColor": "hsl(103, 70%, 50%)",
    burger: 57,
    burgerColor: "hsl(132, 70%, 50%)",
    sandwich: 39,
    sandwichColor: "hsl(187, 70%, 50%)",
    kebab: 76,
    kebabColor: "hsl(177, 70%, 50%)",
    fries: 200,
    friesColor: "hsl(330, 70%, 50%)",
    donut: 87,
    donutColor: "hsl(226, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 102,
    "hot dogColor": "hsl(12, 70%, 50%)",
    burger: 172,
    burgerColor: "hsl(44, 70%, 50%)",
    sandwich: 134,
    sandwichColor: "hsl(175, 70%, 50%)",
    kebab: 89,
    kebabColor: "hsl(190, 70%, 50%)",
    fries: 102,
    friesColor: "hsl(248, 70%, 50%)",
    donut: 129,
    donutColor: "hsl(274, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 139,
    "hot dogColor": "hsl(305, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(319, 70%, 50%)",
    sandwich: 158,
    sandwichColor: "hsl(332, 70%, 50%)",
    kebab: 26,
    kebabColor: "hsl(167, 70%, 50%)",
    fries: 131,
    friesColor: "hsl(216, 70%, 50%)",
    donut: 67,
    donutColor: "hsl(204, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 61,
    "hot dogColor": "hsl(47, 70%, 50%)",
    burger: 81,
    burgerColor: "hsl(319, 70%, 50%)",
    sandwich: 130,
    sandwichColor: "hsl(267, 70%, 50%)",
    kebab: 114,
    kebabColor: "hsl(223, 70%, 50%)",
    fries: 60,
    friesColor: "hsl(334, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(18, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 151,
    "hot dogColor": "hsl(167, 70%, 50%)",
    burger: 12,
    burgerColor: "hsl(312, 70%, 50%)",
    sandwich: 37,
    sandwichColor: "hsl(340, 70%, 50%)",
    kebab: 56,
    kebabColor: "hsl(225, 70%, 50%)",
    fries: 190,
    friesColor: "hsl(124, 70%, 50%)",
    donut: 65,
    donutColor: "hsl(24, 70%, 50%)",
  },
];
