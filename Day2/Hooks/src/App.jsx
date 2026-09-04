

import { useState } from 'react'


function App() {
 


// function increaseNumber(){
 
//   count++;
// setCount(count)
// }



  return (
    <>
    {/*<h1>Hello how are you</h1>

    <h1>Counter : {count}</h1>
    <button onClick={increaseNumber}>Increment:{count}</button>*/}
   
   
    </>
  )
}

export default App


export function Counter(){

let [count , setCount] = useState(0);

function Decreces(){
  console.log(count);
  if(count > 0){
  setCount(count-1)
    
  }
}

function increase(){

  // it is stop when comes 10 
  if(count !== 10){
    setCount(count +1)
  }

}
  return(
    <>
    <h1>Increment{count}</h1>
   <button onClick={increase}>increaseNumber</button>
    
   <h1>Decreces</h1>
   <button onClick={Decreces} style={{ margin: '0 10px' }}>Decrease</button>
   <button onClick={() => setCount(0)}>Reset</button>
   
    </>
  )
}



export function TogglePassword(){
 
 let  [showPasswod, setshowPasswod] = useState(false);
 
  return(
    <>
    <h1>Toogle Password</h1>
    <input 
    type={showPasswod ? 'text' : 'password'}
    placeholder='Type Your password'/>
    <button onClick={() => setshowPasswod(!showPasswod)}>{showPasswod ? 'Hide' : 'Show'}</button>
  </>
  
  )
}

export function LiveInput(){
  let [text , setText]= useState('')
  
  return(
   <>
   <h1>Live Input</h1>
   <input type="text"
   value={text}
   onChange={(e) => setText(e.target.value)}
   />


   <button onClick={()=> setText('') }>Clear</button>


  <h3>Real-time Preview: {text ? text : 'Empty'}</h3>
   </>
  )
}

// Liked Components 


export function LikedComponent(){
 let [like , setLike] =   useState(0)

 function addAndRemove(){
  console.log(like);
  
    if(like != 1){
      setLike(like+1)
    }
    else{
     setLike(0)
    }

 }
return(
  <>
<button onClick={addAndRemove}>{like ? '❤️' : '🤍'}({like})</button>
  </>
)

}




