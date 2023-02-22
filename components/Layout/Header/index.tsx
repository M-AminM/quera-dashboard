import React from "react";
import { BiMenu } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BsChatLeft } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { themeValue, toggle } from "@/slices/themeSlice";

interface HeaderProps extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FunctionComponent<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { value } = useSelector(themeValue);

  return (
    <header className="p-4 flex justify-between w-full">
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
        <button className="cursor-pointer" onClick={() => dispatch(toggle())}>
          {value ? (
            <MdLightMode size={20} color={false ? "#FF4A59" : "#03C9D7"} />
          ) : (
            <MdOutlineDarkMode size={20} color={false ? "#FF4A59" : "#03C9D7"} />
          )}
        </button>
      </div>
      <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BiMenu size={20} color={false ? "#FF4A59" : "#03C9D7"} />
      </span>
    </header>
  );
};

export default Header;
