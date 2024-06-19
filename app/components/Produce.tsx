'use client'
import Header from "./Header"
import Button from "./Button"
import ProduceItem from "./ProduceItem"

const Produce = ()=>{

    const operateContent = (
        <div className="hidden md:flex justify-center items-center gap-4">
            <Button label="Default" onClick={()=>{}} third></Button>
            <Button label="A-Z" onClick={()=>{}} secondry></Button>
            <Button label="List view" onClick={()=>{}} secondry></Button>
        </div>
    )

    const data = [
        {
            id:1,
            cover:'https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
        {
            id:1,
            cover:'https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600',
            title:'Watermelon',
            desc:'Grown in Tracy,CA',
            price:0.89,
            unit:'lb'
        },
    ]

    return(
        <div className=" 
            flex
            flex-col
            p-8
            md:px-16
            lg:px-28
        ">
            <Header title="Produce" desc="Farm fresh - March 21, 2024" operate={operateContent} />

            <div 
                className="
                flex
                flex-wrap
                justify-between
                gap-8
                mt-8
            ">
                {
                data.map((product) =>(
                    <ProduceItem 
                        key={product.id}
                        cover={product.cover}
                        title={product.title}
                        desc={product.desc}
                        price={product.price}
                        unit={product.unit}
                        onClick={()=>{}}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default Produce