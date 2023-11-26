export const api_get= async(values)=>{
    let url="http://localhost:5000/soup"
    try{
      let response=await fetch(url,{
          method:'GET',
          headers:{
              'content-type':'application/json ; charset=UTF-8'
          },
          body:JSON.stringify(values)
      })
      let result=await response.json()
      console.log(result)
  }
  catch(error){
      console.log(error)
  }

}  