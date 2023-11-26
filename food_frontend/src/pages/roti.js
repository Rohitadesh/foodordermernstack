import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import Btn from "@/components/Btn"
const Roti = () =>{
    const [roti,setroti]=useState([])
    useEffect(()=>{
        const get_roti = async () =>{
            try{

                const response = await axios.get('http://localhost:5000/roti')
                const data = response.data
                console.log(data)
                setroti(data)
            }
            catch(e){
                console.log(e)
            }
            
        }
        get_roti()


    },[])
    // console.log(roti)
    return(
        <main className='h-[85%] overflow-auto w-[100%]
        flex flex-wrap justify-center items-center grid grid-cols-2 divgrid'>
            {
                roti.map((element1,index)=>{

                    return(
                    
                        <div key={index} className="h-full w-full  flex flex-wrap justify-center items-center">
                            <div  className='h-36 w-36    border flex flex-wrap flex-col justify-center items-center  
                                border-gray-500 rounded-full bg-gray-100 relative left-[80px] overflow-hidden'>
                            <Image src={element1.roti_images}   alt={element1.roti_title}   loading={"lazy"} fill objectFit="cover"/>
                            </div>
                            <div className="h-[50%] w-[50%] border border-gray-600 rounded-3xl  
                            flex flex-col flex-wrap justify-center items-center  gap-4 shadow-xl">
                                <h1 className="text-md  text-black text-center pl-20">{element1.roti_title}</h1>
                                <h1 className="text-md  text-black text-center pl-20">Rs.{element1.roti_price}</h1>
                                <Btn />
                            </div>
                        </div>
                    )

                })
                

            }
        
        </main>


    )
}
export default Roti