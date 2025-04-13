"use client"
import { submit } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (
    <div className=" w-1/2 m-auto">
      <form ref={ref} action={(e)=>{submit(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="bg-white text-black"/>
        </div>
        <div>
          <label htmlFor="add">Addres</label>
          <input name="add" id="add" type="text" className="bg-white text-black"/>
        </div>
        <div>
          <button className="border border-2 p-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
