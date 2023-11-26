import { useState } from "react"

export default function Btn(){
    const [maincoursecount,setcountmaincourse]=useState(0)

    console.log(maincoursecount);
            return(
            <div  className="h-[20%] w-[40%] border border-black ml-24 flex flex-wrap rounded-xl">
                <button disabled={maincoursecount==0} className="text-black h-full w-[28%] text-xl" onClick={()=>setcountmaincourse(maincoursecount-1)}>
                    -
                </button>
                <div  className="text-black h-full w-[46%]  flex flex-wrap justify-center items-center">
                    {maincoursecount}
                </div>
                <button className="text-black h-full w-[26%] text-xl" onClick={()=>setcountmaincourse(maincoursecount+1)}>
                    +
                </button>


            </div>
    )
}