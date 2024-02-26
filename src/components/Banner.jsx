import { SlBasket } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import Swal from "sweetalert2";
const Banner = ({ selectData, basketFunction }) => {
    return (
        <section className="w-full mt-[30px] grid grid-cols-2">
            <img
                className="max-w-[100%] h-[400px] w-[400px]"
                src={`${selectData.image}`}
                alt=""
            />
            <div className="flex flex-col py-[20px] px-[30px]">
                <h2 className="text-[30px]">{selectData.category}</h2>
                <p className="text-[#222] text-[14px] mt-[15px]">
                    {selectData.description}
                </p>
                <span className="text-[40px] mt-[15px]">
                    {selectData.price}
                    {"$"}
                </span>
                <div className="flex w-full justify-between items-center mt-[40px] mx-[20px]">
                    <span className="flex items-center gap-[5px]">
                        {selectData.rating.rate}
                        <AiFillStar className="text-[gold] text-[18px]" />
                    </span>
                    <span className="flex items-center">
                        {selectData.rating.count} things
                    </span>
                    <SlBasket
                        id={selectData.id}
                        className="text-[24px] text-[red] cursor-pointer active:opacity-[0.6]"
                        onClick={() => {
                            basketFunction(selectData);

                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Product added to cart",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
