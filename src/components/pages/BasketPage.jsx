import { FaTrashAlt } from "react-icons/fa";
import React from "react";
import Swal from "sweetalert2";

const BasketPage = ({ basket, deleteData }) => {
    return (
        <>
            <div className="flex w-[100%] items-center justify-around gap-[30px] p-[10px] border-green-500 border-[1px] rounded-[10px]">
                <img
                    className="w-[100px] h-[100px] rounded-[10px]"
                    src={basket.image}
                    alt=""
                />
                <span className="text-[#222] text-[14px]">
                    {basket.category}
                </span>
                <span className="text-[18px]">
                    {basket.price}
                    {"$"}
                </span>
                <span className=" bg-green-500 p-[10px] text-[white] rounded-[5px]">
                    {basket.countEl} things
                </span>
                <FaTrashAlt
                    className="text-[crimson] cursor-pointer"
                    onClick={() => {
                        deleteData(basket.id, basket.countEl);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "item removed from cart",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }}
                />
            </div>
        </>
    );
};

export default BasketPage;
