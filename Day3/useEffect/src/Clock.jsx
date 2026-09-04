import { useEffect, useState } from "react"


function Clock() {
 let [time , setTime ] = useState(new Date().toLocaleTimeString())
 let [show , setshow]=useState(true)

 
 
 useEffect(()=>{
   if(!show) // if show's value is false then that is return empty
     return ;
 const intervalId= setInterval(() => {
  setTime(new Date().toLocaleTimeString())
  console.log("hi");
  
},1000)

return () =>{
  clearInterval(intervalId);
}

},[show])// when [show] show === true hua (Timer Start): flase then stop 
    


  return (
    <>
    
    <button onClick={() => setshow(!show)}>{show ? 'hide' : 'show'}</button>
    {
// agar show ki valuue true hai toh && oprater (<h1>Current Time {time}</h1>) isko return kardega 
      show && <h1>Current Time {time}</h1>
      
    }
    </>
  )

}
export default Clock
