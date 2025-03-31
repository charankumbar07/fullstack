import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setform] = useState({name:"",phone:""})

  const handelclike = ()=>{
    alert("Button clicked")
  }


  const handlechanged = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form);
  }
  
  return (
    <>
      <button className="btn" onClick={handelclike}>Click Me</button>
      <input type="text" name='name' value={form.name?form.name:""} onChange={handlechanged}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handlechanged}/>
    </>
  )
}

export default App
