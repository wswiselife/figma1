'use client'
import { ReactNode } from "react";

interface HeaderProps {
    title:string;
    desc?:string;
    operate?:ReactNode
}

const Header:React.FC<HeaderProps> = ({
    title,
    desc,
    operate
})=>{
    return(
        <div className="
            w-full 
            flex 
            flex-row 
            justify-between 
            items-center
        ">
            {/* header */}
            <div className="
                flex
                items-end
                gap-1
                
            ">
                <div className="text-3xl flex justify-end items-end">{title}</div>
                <div className="text-sm w-25">{desc}</div>
            </div>

            {/* operate */}
            <div>
                {operate}
            </div>
        </div>
    )
}

export default Header