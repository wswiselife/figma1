import Image from "next/image";
import { useMemo, useState,useEffect } from "react";

interface BasketItemProps {
    title:string;
    price?:number;
    cover?:string;
    unit?:string;
    onTotalPriceChange: (id: number, total: number) => void;
    id:number
}

const BasketItem:React.FC<BasketItemProps> = ({
    title,
    price,
    cover,
    unit,
    onTotalPriceChange,
    id
})=>{

    const [count,setCount] = useState(1)

    const totalPrice:any = useMemo(()=>{
        if(price){
            return count * (price as number)
        }
    },[count,price])

    const incrementCount = () =>{
        setCount(next =>next<999? next+1 :999)
    }

    const decrementCount = ()=>{
        setCount(prev =>prev>0 ? prev-1 :0)
    }

    useEffect(() => {
        onTotalPriceChange(id, totalPrice);
    }, [totalPrice, id, onTotalPriceChange]);

    return(
        <div className="
            flex
            flex-row
            gap-2
            w-full
            bg-[#edefe4]
            rounded-lg
            shadow
            transition
            hover:shadow-md
        ">
            <div className="w-[122px] h-[122px] relative">
                <Image   
                    fill
                    alt="photo"
                    src={cover || '/images/photo.jpg'}
                    style={{
                        objectFit:'cover'
                    }}
                    
                    className="
                        rounded-l-lg
                    "
                />
            </div> 
            <div className="flex flex-1 flex-col justify-between gap-2 p-4">

                {/* desc */}
                <div className="flex flex-row justify-between items-start">
                    <div className="flex-1">
                        <p className="capitalize font-semibold">{title}</p>
                        <p className="text-neutral-500">${price} / {unit}</p>
                    </div>
                    <div className="font-semibold">${totalPrice?.toFixed(2)}</div>
                </div>

                {/* count */}
                <div className=" ">
                  <button className="flex items-center gap-3 w-auto px-3 py-1 font-semibold bg-white rounded-full">
                        <span onClick={decrementCount}>-</span>
                        <span>{count}</span>
                        <span onClick={incrementCount}>+</span>
                  </button>
                </div>

            </div>
        </div>
    )
}

export default BasketItem