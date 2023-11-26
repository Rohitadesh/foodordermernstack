import { Menus } from "@/utlies/menus"
import Image from "next/image"
import { useRouter } from "next/router"
export default function Menu () {
    let route=useRouter()
    return(
        <main className='h-[85%] overflow-auto w-[100%]  
        grid grid-cols-2 divgrid'>
            
           {
            Menus.map((element,index)=>{

                return(
                    <div key={index} className="h-full w-full  flex flex-wrap justify-center items-center">
                        <div  className='h-36 w-36    border flex flex-wrap flex-col justify-center items-center  
                            border-gray-500 rounded-full bg-gray-100 relative left-[80px] overflow-hidden'>
                           <Image src={element.images}   alt={element.title}   loading={"lazy"} fill objectFit="cover"/>
                           </div>
                        <div className="h-[50%] w-[50%] border border-gray-600 rounded-3xl  
                        flex flex-col flex-wrap justify-center items-center  gap-4 shadow-xl">
                            <h1 className="text-xl  text-black text-center pl-8">{element.title}</h1>
                            <button className="w-[30%] ml-8 shadow-xl text-center text-black border
                            border-green-500" onClick={()=>route.push(`${element.path}`)}>View</button>
                        </div>
                        
                    </div>
                )
            })
           } 
            
           
      </main>
    )

}