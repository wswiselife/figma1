'use client'
import { useState,useCallback,useMemo } from "react";
import { FiArrowRight } from "react-icons/fi";

import BasketItem from "./BasketItem"
import Button from "./Button"
import Header from "./Header"

const Basket = ()=>{

    const [totalPrices, setTotalPrices] = useState({});

    const updateTotalPrice = useCallback((id:number, total:number) => {
        setTotalPrices(prevPrices => ({ ...prevPrices, [id]: total }));
    }, []);

    const calculateGrandTotal = () => {
        return Object.values(totalPrices).reduce((acc:any, curr) => acc + curr, 0);
    };

    const grandTotal:any = useMemo(() => calculateGrandTotal(), [totalPrices]);

    const data = [
        {
            id:1,
            title:'crimson sweet melon',
            price:1.78,
            unit:"lb",
            cover:'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:2,
            title:'rainier cherries',
            price:3.99,
            unit:"lb",
            cover:'https://images.pexels.com/photos/12735083/pexels-photo-12735083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            title:'bartlett pears',
            price:1.99,
            unit:"ea",
            cover:'https://images.pexels.com/photos/5945903/pexels-photo-5945903.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]

    return(
        <div className="
            flex
            flex-col
            p-8
            md:px-16
            lg:px-28
        ">
            <Header title="Basket" desc={`${data.length} items`} />

            <div className="
                flex 
                justify-center 
                items-start
                flex-wrap
                mt-12
                gap-8
                md:gap-16
                lg:gap-16
            ">
                {/* basket */}
                <div className="
                    flex
                    flex-1
                    flex-col
                    gap-3
                    items-center
                    min-w-[400px]
                ">
                    {
                        data.map((product)=>(

                            <BasketItem 
                                id={product.id}
                                key={product.id}
                                title={product.title} 
                                price={product.price} 
                                unit={product.unit}
                                cover={product.cover}
                                onTotalPriceChange={updateTotalPrice}
                            />
                         
                        ))
                    }
                    
                   
                </div>

                {/* order summary */}
                <div className="w-full md:w-[350px] bg-[#edefe4] rounded-lg p-8 shadow-sm hover:shadow-lg transition">
                    {/* title */}
                    <div className="text-3xl text-center md:text-left font-playwrite">
                        Order summary
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-1
                        py-3
                    ">
                        <div className="flex justify-between items-center">
                            {/* 价格 */}
                            <p>Subtotal</p>
                            <p>${grandTotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Shipping</p>
                            <p>${3.99}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            {/* 税 */}
                            <p>Tax</p>
                            <p>$2.00</p>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <p>Total</p>
                            <p>${(grandTotal + 3.99 + 2.00).toFixed(2)}</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="w-full mt-4">
                        <Button disabled={grandTotal === 0}  label="Check out" onClick={()=>{}} fullWidth icon={FiArrowRight} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Basket