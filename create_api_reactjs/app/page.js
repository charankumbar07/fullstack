"use client";
import Image from "next/image";

export default function Home() {

  const handle = async ()=>{
    let data={
      name:"Charan",
      Role:"Coder"
    }
    let a = await fetch("/api/add",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let res = await a.json()
    console.log(res);
  }
  return (
    <div>
      <h1>next.js api routes demo</h1>
      <button onClick={handle}>Click Me</button>
    </div>
  );
}
