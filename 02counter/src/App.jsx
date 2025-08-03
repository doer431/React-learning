import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [count , setCount] = useState(15)

  // let count = 0

  // const check = () =>{
  //   if(count == 0){
  //     alert("0 se nechhe nahi jaye ga be");
  //     return 
  //   }else if(count == 20){
  //     alert("20 se uppar nahi jaye ga......");
  //     return 
  //   }
  // }
  const addValue = () => {
    if (count ==20 ){
      alert("20 se uppar nahi jaye ga......");
      return
    }
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // Using (prevCount => prevCount + 1) ensures each setCount sees the latest state,
// especially during batching. Direct setCount(count + 1) uses stale value.

    }
  const removeValue = () =>{
    if( count == 0){
      alert("0 se nechhe nahi jaye ga be");
      return
    }
    setCount( count - 1)
  }

  return (
    <>
    <h2> Chai aur react | userState</h2>
    <p> counter value {count}</p>
    <button onClick={addValue}>Add value {count} </button>  
    <button onClick={removeValue} >Remove value  {count} </button>
    </>
    // setCount(count + 1)
  )
}

export default App
