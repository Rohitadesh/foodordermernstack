import Link from "next/link"
import axios from "axios"
import { useState } from "react"
const SignUP = () =>{
    const [signup,setsignup] = useState({})
  const [check,setcheck]=useState("")
  // const{email,password,confirmPassword}=signup
  // console.log(signup)
  const signin = {}
  // console.log(signup);
  const formsubmition = (e) =>{
     e.preventDefault()
      let formdata= new FormData(e.currentTarget)
      // formdata.get("email")
      // console.log(formdata)
      console.log(formdata)
      for(let [name,value] of formdata){
        signin[name]=value
      }
      // console.log(signin)
      setsignup(signin)
      handlecheck(signin)
      //
      // console.log(signup)
  }
  const handlecheck = (get_value) => {
    console.log(get_value)
    console.log(get_value.password===get_value.confirmpassword)
    if(get_value.password===get_value.confirmpassword && get_value.email.match("@gmail.com")){
      axios.post('http://localhost:5000/register',get_value).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      setcheck("Registered sucessfull ")
    }
    else{
       setcheck("password and confirmpassword didnt match")
    }

  }
 





    
    return(
        <main className="h-[85%] w-[100%] border border-black overflow-y-auto
         flex flex-wrap flex-col justify-center items-center gap-2">

         <h1 className="text-lg text-black">Sign UP</h1>
            <form action='/post' onSubmit={formsubmition} className="h-[80%] w-[37%]  grid grid-rows-4 border border-black rounded-xl">
                <div className="h-full w-full flex flex-wrap flex-col gap-4 justify-center items-center">
                    <h1 className="text-lg text-black">Email</h1>
                    <input type="text" name="email" className="rounded-md border border-black h-[28%] w-[60%] text-black " />
                </div>
                <div className="h-full  w-full flex flex-wrap flex-col gap-4 justify-center items-center ">
                    <h1 className="text-lg text-black">Password</h1>
                    <input type="text" name="password" className="rounded-md h-[28%]  w-[60%] text-black border border-black" />
                </div>
                <div className="h-full w-full flex flex-wrap flex-col gap-4 justify-center items-center ">
                    <h1 className="text-lg text-black">Confirm Password</h1>
                    <input type="text" name="confirmpassword" className="rounded-md h-[28%] w-[60%] text-black border border-black" />
                </div>
                <div className=" h-full w-full  gap-4 flex flex-wrap  flex-col items-center justify-center    ">
                    <button className="rounded-md h-[33%] border border-black w-[30%] text-black">Signup</button>
                    {check==="Registered sucessfull"?<h1 className="text-green-500">{check}</h1>:<h1 className="text-red-500">{check}</h1>}
                 <Link href='/login' className="text-black underline">LoginIn</Link>
                </div>
            </form>
        </main>

    )
}

export default SignUP