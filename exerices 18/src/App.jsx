import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [card, setcard] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data);
  }

  useEffect(() => {
    fetchdata()
  }, [])


  return (
    <>
      <div className="container">
        {card.map((card)=>{
          return <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>UserId:{card.userId}</span>
        </div>
        }
        )}
      </div>
    </>
  )
}

export default App
