import { AiOutlineCopyright } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-[black] py-[20px] px-[10px]">
            <h2 className="text-[#222] text-[24px] font-semibold select-none">
                <NavLink to="/">
                    <span className="">Online</span>{" "}
                    <span className="text-green-500">Shop</span>
                </NavLink>
            </h2>
            <div className="flex items-center gap-5 mt-[50px]">
                <NavLink to="https://telegram.com" target="_blank">
                    <TbBrandTelegram className="text-blue-400 text-[24px]" />
                </NavLink>
                <NavLink to="https://instagram.com" target="_blank">
                    <AiOutlineInstagram className="text-red-700 text-[24px]" />
                </NavLink>
                <NavLink to="https://youtube.com" target="_blank">
                    <AiFillYoutube className="text-red-700 text-[24px]" />
                </NavLink>
            </div>
            <span className="flex items-center gap-[5px] mt-[20px]">
                <span className="text-[white]">All rights reserved</span>
                <AiOutlineCopyright className="text-[white]" />
            </span>
        </footer>
    );
};

export default Footer;
