import Btn from "@/components/Btn"
const Orders = ({children}) =>{


    return(
        <main className='h-[85%]  w-[100%] border border-solid border-pink-500 
        flex flex-wrap justify-start items-center gap-4 
         overflow-auto'>
        <div className="h-[10%] w-[20%] text-black border border-green-800
        rounded-md shadow-xl
        flex flex-wrap items-center justify-center">
            My orders
        </div>
        <div className="h-[80%] w-[50%] border border-black">
            <div className="h-[20%] w-full border border-green-500">
                <h1 className="text-black text-xl"></h1>
               <Btn />
            </div>
        </div>




        </main>
    )
}

export default Orders