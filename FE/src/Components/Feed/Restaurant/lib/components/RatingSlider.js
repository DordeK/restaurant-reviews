import React from 'react'

function RatingSlider({ label, min, max }) {
  const updateTextInput = (val) => document.getElementById('textInput').innerHTML=val
  return (        
    <div className="form-group mt-3">
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <label>{label}</label>{  }
            <div id="textInput">5</div>
        </div>
        <input
            onChange={({target:{value}}) => updateTextInput(parseInt(value, 10))}
            name='rating'
            type="range"
            min={min}
            defaultValue={"5"}
            max={max}
            step="1"
            className="form-control mt-1"
            placeholder="Enter password"
        />
    </div>
)
}

export default RatingSlider