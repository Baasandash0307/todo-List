'use client'

import { useState } from "react";
export default function Home() {
  let [counter, setCounter] = useState(0)
  const add = () => {
    setCounter(counter + 1);
  }
  const sub = () => {
    if(counter == 0){
      return false
    }
    setCounter(counter - 1);
  }

  return (
  <div>
      <h1> {counter} </h1>
    <button onClick={add}>Add</button> 
    <br></br>
    <button onClick={sub}>Sub</button>
  </div>
  );
}
