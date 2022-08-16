import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import 'Components/Authentication/lib/style.css'
import GoogleMap from 'Components/Publish/Restaurant/GoogleMap';
import { addRestaurant } from 'Components/lib/helpers'
import RatingSlider from 'Components/Feed/Restaurant/lib/components/RatingSlider';

function AddRestaurant() {
    const navigation = useNavigate()
    const [showMap, setShowMap] = useState(false)
    const [location, setLocation] = useState(null)
  return (
    <div className="Auth-form-container">
    {showMap && <GoogleMap setLocation={setLocation} />}
    {showMap && (
      <div 
      style={{fontWeight:'bold', cursor: 'pointer', whiteSpace: 'normal', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid', borderRadius: '20px', width: '300px', margin: '20px', padding: '20px'}}
      onClick={(e) => {
        e.preventDefault()
        setShowMap(false)
      }}
      >
        Select this loaction
      </div>
      )}
    {!showMap && (
    <form onSubmit={(e) => addRestaurant({e, location, navigation})} className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Add Restaurant</h3>
        <div className="form-group mt-3">
          <label>Name of restaurnat</label>
          <input
            name='name'
            required
            type="text"
            className="form-control mt-1"
            placeholder="Enter restaurant name"
          />
        </div>
        <div className="form-group mt-3">
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <label>Location</label>
            <div 
              style={{ cursor: 'pointer', backgroundColor:'black', color:'white', whiteSpace: 'normal', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid', borderRadius: '20px', width: '200px', margin: '10px', padding: '10px'}}
              onClick={(e) => {
                e.preventDefault();
                setShowMap(true)
              }}
            >
              select location
            </div>
          </div>
          {location && <div>Selected location: <br/> <b>Latitude:</b> {location.lat}<br/> <b>Longitude:</b> {location.lng}</div>}
        </div>

        <div className="form-group mt-3">
          <label>Restaurant menu</label>
          <input
            name='menu'
            required
            type="file"
            multiple
            className="form-control mt-1"
            placeholder="Enter restaurant menu"
          />
        </div>

        <div className="form-group mt-3">
          <label>Images</label>
          <input
            name='images'
            multiple
            required
            type="file"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <RatingSlider min={0} max={10} label='Rating' />
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
    )}
  </div>
  )
}

export default AddRestaurant