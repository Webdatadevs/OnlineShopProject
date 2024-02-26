import { BiArrowBack } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Banner from "./components/Banner";
import axios from "axios";
import Main from "./components/Main";
import BasketPage from "./components/pages/BasketPage";
import { NavLink, Route, Routes } from "react-router-dom";
import ProducktItems from "./components/ProducktItems";
import Footer from "./components/Footer";

const App = () => {
    const [data, setData] = useState([]);
    const [selectDataElement, setSelect] = useState([]);
    let [basketData, setBasket] = useState([]);
    const [count, setCount] = useState(0);

    async function axiosFunction() {
        let axioEl = await axios.get(`https://fakestoreapi.com/products/`);
        setData(axioEl.data);
        const sortedData = selectSort(axioEl.data, "price");
        setSelect(sortedData);
        // console.log(axioEl.data);
    }

    function selectSort(data, key) {
        for (let i = 0; i < data.length; i++) {
            let minElementIndex = i;
            for (let j = i + 1; j < data.length; j++) {
                if (data[minElementIndex][key] < data[j][key]) {
                    minElementIndex = j;
                }
            }
            const objArray = [data[minElementIndex]];
            return objArray;
        }
    }

    function basketFunction(selectDataBasket) {
        let isTrue = basketData.find((element) => {
            return element.id === selectDataBasket.id;
        });

        if (!isTrue) {
            setBasket([...basketData, { ...selectDataBasket, countEl: 1 }]);
        } else {
            setBasket(
                basketData.map((element) =>
                    element.id === selectDataBasket.id
                        ? { ...element, countEl: (element.countEl || 0) + 1 }
                        : element
                )
            );
        }
    }
    function deleteDataBasketFunction(idDataBasket, countEl) {
        if (countEl === 1) {
            setBasket(
                basketData.filter((element) => element.id !== idDataBasket)
            );
        } else {
            setBasket(
                basketData.map((element) =>
                    element.id === idDataBasket
                        ? { ...element, countEl: element.countEl - 1 }
                        : element
                )
            );
        }
    }

    useEffect(() => {
        axiosFunction();
    }, []);
    return (
        <>
            <Container>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main>
                                {selectDataElement.map((element, index) => (
                                    <Banner
                                        selectData={element}
                                        key={index}
                                        basketFunction={basketFunction}
                                    />
                                ))}
                                <div className="grid grid-cols-2 gap-[20px] items-center mt-[100px] mb-[50px]">
                                    {data.map((element, index) => (
                                        <ProducktItems
                                            data={element}
                                            key={index}
                                            basketFunction={basketFunction}
                                        />
                                    ))}
                                </div>
                                <Footer />
                            </Main>
                        }
                    />
                    {/* <Route path="/" element={<ProducktItems />} /> */}
                    <Route
                        path="/basket-page"
                        element={
                            <div className="flex flex-col items-start justify-start mt-[30px]">
                                <NavLink
                                    to="/"
                                    className="text-[24px] text-green-500 flex items-center gap-3"
                                >
                                    Back to Home page
                                    <BiArrowBack />
                                </NavLink>
                                <div className="grid grid-cols-1 gap-[15px] w-[100%] mt-[30px]">
                                    {basketData.map((element, index) => (
                                        <BasketPage
                                            basket={element}
                                            key={index}
                                            deleteData={
                                                deleteDataBasketFunction
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </Container>
        </>
    );
};

export default App;
