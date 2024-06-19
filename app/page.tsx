
import Basket from "./components/Basket";
import Hero from "./components/Hero";
import Produce from "./components/Produce";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
   <>
     <Navbar />
     <div className="mt-20">
        <Hero />
     </div>
     <Basket />
     <Produce />
   </>
  );
}
