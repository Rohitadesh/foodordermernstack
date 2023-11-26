import Link from "next/link"
import axios from "axios"
import { useState } from "react"
const Login = () =>{
    const [login,setlogin]=useState({})
    const login_form={}
    const formsubmition = (e) =>{
        e.preventDefault()
         let formdata= new FormData(e.currentTarget)
         // formdata.get("email")
         // console.log(formdata)
         console.log(formdata)
         for(let [name,value] of formdata){
           login_form[name]=value
         }
         console.log(login_form)
         setlogin(login_form)
         axios.post('http://localhost:5000/login',login)
         .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
     } 
    return(
        <main className='h-[85%] overflow-auto w-[100%]  
        flex flex-col flex-wrap justify-center items-center gap-2'>
            <h1 className="text-xl text-black">Login</h1>
            <form action="/post" onSubmit={formsubmition} className="h-[80%] w-[35%] b grid grid-rows-3 border border-black rounded-xl">
                <div className="h-full w-full flex flex-wrap flex-col gap-4 justify-center items-center">
                    <h1 className="text-xl text-black">Email</h1>
                    <input type="text" name="email" className="rounded-md border border-black h-[20%] w-[60%] text-black " />
                </div>
                <div className="h-full w-full flex flex-wrap flex-col gap-4 justify-center items-center ">
                <h1 className="text-xl text-black">Password</h1>
                    <input type="text" name="password" className="rounded-md h-[20%] w-[60%] text-black border border-black" />
                </div>
                <div className=" h-full w-full  gap-4 flex flex-wrap  flex-col items-center justify-center    ">
                    <button className="rounded-md h-[20%] border border-black w-[30%] text-black">SignIn</button>
                    <Link href='/signup' className="text-black underline">SignUP</Link>
                </div>

            </form>
        
        
        
        </main>
    )
}

export default Login