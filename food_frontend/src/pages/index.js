// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import food from '../../public/food.avif'
// const inter = Inter({ subsets: ['latin'] })
import { useRouter } from "next/router"
export default function Home() {
  let route=useRouter()
  return (
      <main className='h-[85%] w-[100%] flex flex-wrap
      flex-row justify-center items-center'>
        <div className="h-[57%] w-[45%] border border-gray-600 rounded-3xl  
        flex flex-col flex-wrap justify-center items-center  gap-4 shadow-xl
          ">
            <h1 className="text-black pr-20">"Nothing bring people together 
              <p>like good food"</p></h1>
            <button className="h-[20%] text-black w-[30%]  shadow-xl border border-black mr-40" 
            onClick={()=>route.push('/menu')}>
              View Menu
            </button>
        </div>
          <div className='h-60  w-60 border flex flex-wrap flex-col justify-center items-center  border-gray-500 rounded-full bg-gray-100 relative right-[130px]'>
            <h1 className="text-black text-xl text-center">Welcome To our Resturant</h1>
          </div>
      </main>
  )
}
