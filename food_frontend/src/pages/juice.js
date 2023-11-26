import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
const Juice = () =>{
    const [juice,setjuice]=useState([])
    const [juicecount,setcountjuice]=useState(0)
    useEffect(()=>{
        const get_juice = async () =>{
            try{

                const response = await axios.get('http://localhost:5000/juice')
                const data = response.data
                console.log(data)
                setjuice(data)
            }
            catch(e){
                console.log(e)
            }
            
        }
        get_juice()


    },[])
    // console.log(roti)
    return(
        <main className='h-[85%] overflow-auto w-[100%] 
        flex flex-wrap justify-center items-center grid grid-cols-2 divgrid'>
            {
                juice.map((element1,index)=>{

                    return(
                    
                        <div key={index} className="h-full w-full  flex flex-wrap justify-center items-center">
                            <div  className='h-36 w-36    border flex flex-wrap flex-col justify-center items-center  
                                border-gray-500 rounded-full bg-gray-100 relative left-[80px] overflow-hidden'>
                                <Image src={element1.juice_image}   alt={element1.juice_title}   loading={"lazy"} fill objectFit="cover"/>
                            </div>
                            <div className="h-[50%] w-[50%] border border-gray-600 rounded-3xl  
                            flex flex-col flex-wrap justify-center items-center  gap-4 shadow-xl">
                                <h1 className="text-md  text-black text-center pl-20">{element1.juice_title}</h1>
                                <h1 className="text-md  text-black text-center pl-20">Rs.{element1.juice_price}</h1>
                                <div  className="h-[20%] w-[40%] border border-black ml-24 flex flex-wrap rounded-xl">
                                    <button disabled={juicecount==0} className="text-black h-full w-[28%] text-xl" onClick={()=>setcountjuice(juicecount-1)}>
                                        -
                                    </button>
                                    <div  className="text-black h-full w-[46%]  flex flex-wrap justify-center items-center">
                                        {juicecount}
                                    </div>
                                    <button className="text-black h-full w-[26%] text-xl" onClick={()=>setcountjuice(juicecount+1)}>
                                        +
                                    </button>


                                </div>
                            </div>
                        </div>
                    )

                })
                

            }
        
        </main>


    )
}
export default Juice