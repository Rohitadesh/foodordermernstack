import Link from "next/link";
import Image from "next/image";
import foodlogo from  "../../public/food.png"
import { useRouter } from "next/router";
const Navbar = () =>{
    const route =useRouter()
    return(
        <div className="h-[15%] w-[100%]  flex flex-col flex-wrap justify-start">
            <div className="h-full w-[20%] ">
                <Image src={foodlogo} height="auto" width="auto" alt="dfjh" />
            </div>
            <div className="h-full w-[80%]  flex flex-wrap ">
                <div className="h-full w-[20%]  flex flex-col flex-wrap justify-center items-center">
                <Link href="/" className="text-black text-lg hover:text-sky-500 md:italic">Home</Link>
                </div>
                <div className="h-full w-[20%]  flex flex-col flex-wrap justify-center items-center">
                    <Link href="/orders" className="text-black text-lg">Orders</Link>

                </div>
                <div className="h-full w-[40%]  flex flex-wrap justify-center items-center">
                    <input className="h-[50%] w-[70%] rounded-xl border border-black text-black"  type="search" />
                </div>
                <div className="h-full w-[20%]   flex flex-wrap justify-center items-center">
                    <button className="h-[60%] w-28 border border-black text-black rounded-xl" 
                    onClick={()=>route.push('/login')}>SignIn</button>
                </div>
                
            </div>
        </div>
    )
} 
export default Navbar;