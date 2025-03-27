import React ,{useEffect} from 'react'

const navbab = ({color}) => {
    useEffect(() => {
        alert("I Will run every time")
      }, )
    useEffect(() => {
        alert("I Will run on first time")
      }, [])

    useEffect(() => {
      alert("I will run on when color was changed")
    }, [color])

    useEffect(() => {
        return ()=>{
            alert("This component was unmounted")
        }
      }, [])
    
  return (
    <div>
      I am navbar of {color}
    </div>
  )
}

export default navbab
