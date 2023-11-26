import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import Btn from "@/components/Btn"
export default function soup (){
    const [soup,setsoup]=useState([])
    // const [count,setcount]=useState(0)
    useEffect(()=>{
        const get_soup = async () =>{
            try{

                const response = await axios.get('http://localhost:5000/soup')
                const data = response.data
                // console.log(data)
                setsoup(data)
            }
            catch(e){
                console.log(e)
            }
            
        }
        get_soup()


    },[])
    return(
        <main className='h-[85%] overflow-auto w-[100%]  
        flex flex-wrap justify-center items-center grid grid-cols-2 divgrid1'>
            {
                soup.map((element,index)=>{

                    return(
                    
                        <div key={index} className="h-full w-full  flex flex-wrap justify-center items-center">
                            <div  className='h-36 w-36    border flex flex-wrap flex-col justify-center items-center  
                                border-gray-500 rounded-full bg-gray-100 relative left-[80px] overflow-hidden'>
                            <Image src={element.soup_image}   alt={element.soup_title}   loading={"lazy"} fill objectFit="cover"/>
                            </div>
                            <div className="h-[50%] w-[50%] border border-gray-600 rounded-3xl  
                            flex flex-col flex-wrap justify-center items-center  gap-4 shadow-xl">
                                <h1 className="text-md  text-black text-center pl-20">{element.soup_title}</h1>
                                <h1 className="text-md  text-black text-center pl-20">Rs.{element.soup_price}</h1>
                                <Btn />
                            </div>
                        </div>
                    )

                })
                

            }
        
        </main>
    )
}