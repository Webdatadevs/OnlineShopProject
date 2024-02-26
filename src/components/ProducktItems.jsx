import { AiFillPlusCircle } from "react-icons/ai";
import React from "react";
import Swal from "sweetalert2";
const ProducktItems = ({ data, basketFunction, count }) => {
    return (
        <div className="flex items-center gap-5 rounded-[5px] border-[1px] border-green-500 p-[10px]">
            <img
                className="max-w-[100%] w-[200px] rounded-[10px]"
                src={data.image}
                alt=""
            />
            <div className="flex flex-col gap-[40px]">
                <span className="text-[#353535]">{data.category}</span>
                <span className="text-[#212121] text-[28px]">
                    {data.price}
                    {"$"}
                </span>
                <button
                    className="flex items-center gap-1 bg-green-500 p-[5px] rounded-[10px] cursor-pointer active:scale-105"
                    onClick={() => {
                        basketFunction(data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Product added to cart",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }}
                >
                    <span className="text-[white]">Add to Basket</span>
                    <AiFillPlusCircle className="text-[red] text-[24px]" />
                </button>
            </div>
        </div>
    );
};

export default ProducktItems;
