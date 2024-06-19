'use client'

import Button from "./Button"

const Hero = ()=>{

    return(
        <div className="">

            {/* first path */}
            <div className="flex flex-col justify-center items-center">
                {/* title */}
                <div className="
                    flex
                    flex-col
                    items-center
                    gap-2
                    md:gap-4
                    lg:gap-8
                    py-12
                    md:py-20
                    lg:py-[121px]
                ">
                    <p className="hero-p">We're <span className="hero-span font-playwrite">farmers,purveyors,</span></p>
                    <p className="hero-p"> and <span className="hero-span font-playwrite">eaters </span>of originically</p>
                    <p className="hero-p">grown food.</p>
                </div>

                <Button label="Browse our shop" onClick={()=>{}} />
            </div>

            {/* image path */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-16 py-20 ">

                <img 
                    src="/images/photo4.jpg" 
                    alt="photo" 
                    className="
                        w-[420px]
                        h-[450px]
                        md:w-[300px]
                        md:h-[380px]
                        lg:w-[400px]
                        lg:h-[580px]
                        rounded-lg
                        object-cover
                "/>

                <div className="
                    relative
                    w-[420px]
                    h-[450px]
                    md:w-[380px]
                    md:h-[300px]
                    lg:w-[520px]
                    lg:h-[400px]
                ">
                    <img 
                        src="/images/photo5.jpg" 
                        alt="photo" 
                        className="
                            rounded-lg
                            object-cover
                        "
                    />
                    <div className="text-sm py-4 md:text-base">
                        
                        <p className="lg:max-w-520px md:max-w-380px max-w-420px">
                            <span className="font-semibold">Central California </span>
                            — The person who grew these was located in Central California and, er, hopefully very well-compensated.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero