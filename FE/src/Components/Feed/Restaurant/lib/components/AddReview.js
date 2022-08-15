import React from 'react'

function AddReview({ restaurantId }) {
  const addReview = () => {

  }

  return (
    <div>
        <form onSubmit={addReview} style={{display: 'flex', flexDirection: 'column'}}>
            <label for="rating">rating</label>
            <input type="text" id="rating" name="rating" />
            <label for="text">text</label>
            <input type="text" id="text" name="text" />
            <label for="image">image</label>
            <input type="text" id="image" name="image" />
        </form>
    </div>
  )
}

export default AddReview