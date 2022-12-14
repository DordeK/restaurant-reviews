import React from 'react'
import 'Components/Feed/Restaurant/Card/style.css'

function Card({image = '', name, description}) {
  return (
    <div className="restaurant-card">
        <h3>{name}</h3>
        <img style={{width:'500px'}} alt='slika' src={`data:image/png;base64,${image}`} />
        <p>{description}</p>
    </div>
  )
}

export default Card