import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, setError, formState: { errors , isSubmitting} } = useForm();
  const delay = async (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  
  const onSubmit = async (data) =>{ 
    let r = await fetch("http://localhost:3000/",{method:"POST",headers: {
      "Content-Type": "application/json"
    },body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res);
    // if (data.username === "username") {
    //   setError("blocked",{message:"blocked users"})
    // }
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' type="text" {...register("username", {required:{value:true,message:"This fild is required"},minLength:{value:3, message:"min length is 3"},maxLength:{value:8,message:"max length is 8"}})} />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input placeholder='password' type="password" {...register("password",{required:{value:true,message:"This fild is required"} ,minLength:{value:3, message:"min length is 3"},maxLength:{value:8,message:"max length is 8"}})} />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
