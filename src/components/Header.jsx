import { SlBasket } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import React from "react";
import { NavLink, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-[#222] text-[24px] font-semibold select-none">
                <NavLink to="/">
                    <span className="">Online</span>{" "}
                    <span className="text-green-500">Shop</span>
                </NavLink>
            </h1>
            <ul className="flex items-center gap-[100px]">
                <li>
                    <NavLink
                        to="/basket-page"
                        className="flex bg-green-300 text-[white]  py-[10px] px-[15px] rounded-[10px] justify-center items-center"
                    >
                        <SlBasket className="text-[24px]" />
                    </NavLink>
                </li>
                <li>
                    <NavLink className="flex  justify-center items-center">
                        <AiOutlineLogout className="text-[24px] text-[crimson]" />
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
