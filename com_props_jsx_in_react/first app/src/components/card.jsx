import React from 'react'
import "./card.css"
const card = (props) => {
  return (
    <div className='card'>
      <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" alt="" />
      <h1>{props.title}</h1>
      <p>{props.para}</p>
    </div>
  )
}

export default card
