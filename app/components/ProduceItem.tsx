import Image from "next/image";

interface ProduceItemProps {
    cover?:string;
    title:string;
    desc:string;
    price:number;
    unit:string;
    onClick:()=>void
}

const ProduceItem:React.FC<ProduceItemProps> = ({
    cover,
    title,
    desc,
    price,
    unit,
    onClick
})=>{
    return(
        <div className="
            flex
            flex-wrap
            flex-row
            gap-4
            items-center
            bg-[#edefe4]
            rounded-lg
            shadow
            hover:shadow-lg
            cursor-pointer
        ">
            <div 
                className="
                    flex
                    flex-col
                    
            ">
                <div className="relative min-w-80 h-72">
                    <Image 
                        fill
                        alt="photo"
                        src={cover || '/images/photo.jpg'}
                        style={{
                            objectFit:'cover'
                        }}
                        
                        className="
                            rounded-t-lg
                        "

                    />
                </div>

                {/* description */}
                <div className="flex flex-col justify-between gap-2 p-3">
                    <div className="flex justify-between items-center ">
                        <p className="font-bold">{title}</p>
                        <p className="text-[var(--primary-color)] font-semibold">${price} / {unit}</p>
                    </div>
                    <div className="text-neutral-600 text-sm">{desc}</div>
                </div>

            </div>
        </div>
    )
}

export default ProduceItem