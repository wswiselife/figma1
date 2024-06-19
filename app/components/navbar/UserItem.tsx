interface UserItemProps {
    onClick:()=>void;
    label:string;
}

const UserItem:React.FC<UserItemProps> =({onClick,label})=>{
    return(
        <div 
            onClick={onClick}
            className="
                w-full
                px-8
                py-4
                text-center
                font-semibold
                rounded-md
                hover:bg-neutral-300
                cursor-pointer
                transition
        ">
            {label}
        </div>
    )
} 

export default UserItem