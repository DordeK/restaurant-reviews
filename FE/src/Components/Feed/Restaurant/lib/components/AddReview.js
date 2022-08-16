import React from 'react'
import 'Components/Authentication/lib/style.css'
import RatingSlider from 'Components/Feed/Restaurant/lib/components/RatingSlider';
import axios from 'Components/lib/axios'


function AddReview({ restaurantId }) {

  const addReview = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    const rating = e.target.rating.value;
    const images = e.target.images.files;
    const text = e.target.text.value;


    for (var i = 0; i < images.length; i++) formData.append('images[]', images[i])

    formData.append('rating', parseInt(rating, 10))
    formData.append('text', text)
    formData.append('restavracija', restaurantId)
    formData.append('uporabnik', sessionStorage.getItem('user_id'))

    const {data, status} = await axios.post('/review', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if(status === 201 ) window.location.reload();
  }

  return (
    <div style={{display:'block'}} className="Auth-form-container">
        <form  onSubmit={addReview} >
          <div style={{padding:'none'}} className="Auth-form-content">
            <h3 className="Auth-form-title">AddReview</h3>
            <RatingSlider min={0} max={10} label='Rating' />
            <div className="form-group mt-3">
              <label for="text">text</label>
              <textarea cols="40" rows="5" className="form-control mt-1" type="text" id="text" name="text" />
            </div>
            <div className="form-group mt-3">            
              <label for="image">image</label>
              <input className="form-control mt-1" type="file" id="image" name="images" multiple/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddReview