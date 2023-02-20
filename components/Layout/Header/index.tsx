import React from "react";
import { BiMenu } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BsChatLeft } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

interface Props {
  isOpen?: boolean;
  theme?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ isOpen, theme, setIsOpen, setTheme }) => {
  return (
    <header className="p-4 flex justify-between w-full">
      <span className="cursor-pointer">
        <BiMenu size={20} color={false ? "#FF4A59" : "#03C9D7"} />
      </span>
      <div className="flex gap-6">
        <SlBasket
          className="cursor-pointer"
          size={20}
          color={false ? "#FF4A59" : "#03C9D7"}
        />
        <BsChatLeft
          className="cursor-pointer"
          size={20}
          color={false ? "#FF4A59" : "#03C9D7"}
        />
        <IoMdNotificationsOutline
          className="cursor-pointer"
          size={20}
          color={false ? "#FF4A59" : "#03C9D7"}
        />
        <MdLightMode
          className="cursor-pointer"
          size={20}
          color={false ? "#FF4A59" : "#03C9D7"}
        />
      </div>
    </header>
  );
};

export default Header;
