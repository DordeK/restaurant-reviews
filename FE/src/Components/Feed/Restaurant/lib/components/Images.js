/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function Images({images}) {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap:'wrap'}}>
      {images.map(image => <img style={{ border:'1px solid black', height:'300px', width:'300px', margin:'20px'}} src={`data:image/png;base64,${image.image}`}/>)}
    </div>
  )
}

export default Images