'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick:()=>void
    secondry?:boolean
    third?:boolean;
    disabled?:boolean
    icon?:IconType
    fullWidth?:boolean
}

const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    secondry,
    disabled,
    icon:Icon,
    fullWidth,
    third
})=>{
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                flex 
                flex-row 
                justify-center
                items-center 
                gap-3 
                px-6 
                py-3 
                font-semibold
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-80
                ${secondry?'rounded':'rounded-full'}
                ${secondry?'bg-white':'bg-green-800'}
                ${secondry?'text-black':'text-white '}
                ${third?'bg-neutral-500':''}
                ${third?'text-black':''}
                ${third?'rounded':''}
                ${fullWidth?'w-full':'w-auto'}
                ${fullWidth?'text-center':''}
                
        `}>
            {label}
            {
                Icon && (<Icon size={20} ></Icon>)
            }
        </button>
    )
}

export default Button