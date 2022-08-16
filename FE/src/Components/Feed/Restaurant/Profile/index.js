import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Images from 'Components/Feed/Restaurant/lib/components/Images'
import Contact from 'Components/Feed/Restaurant/lib/components/Contact'
import Rating from 'Components/Feed/Restaurant/lib/components/Rating'
import WorkingHours from 'Components/Feed/Restaurant/lib/components/WorkingHours'
import Menu from 'Components/Feed/Restaurant/lib/components/Menu'
import Reviews from 'Components/Feed/Restaurant/lib/components/Reviews'
import AddReview from 'Components/Feed/Restaurant/lib/components/AddReview'
import {useNavigate} from 'react-router-dom';
import axios from 'Components/lib/axios';
import Loader from 'Components/lib/Loader'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ restaurant, setRestaurant ] = useState(null)

  useEffect(() => {
    const getRestaurant = async () => {
      const {data} = await axios.get(`/restaurant/${id}`)
      console.log({data});
      setRestaurant(data)
    }
    getRestaurant()
  }, [id])


  if (restaurant === null ) return <Loader />
  //TODO: show location of restaurant in map
  return (
    <>
      <ArrowBackIcon style={{fontSize:'50px'}} onClick={() => navigate('/home')} />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>{restaurant.ime}</h1>
        <hr style={{width: '100%'}}/>
          <b>{restaurant.description}</b>
        <hr style={{width: '100%'}}/>
        <h3>Restaurant images:</h3>
        <Images images={restaurant.Images} />
        <hr style={{width: '100%'}}/>
        {/* <WorkingHours workingHours={restaurant.workingHours}/> */}
        <h2>RATING</h2>
        <Rating reviews={restaurant.reviews} rating={restaurant.ocena} />
        <hr style={{width: '100%'}}/>
        <h2>Menu's</h2>
        <Images images={restaurant.menu} />
        <hr style={{width: '100%'}}/>
      </div>
      <h2 style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>Reviews:</h2>
      <Reviews reviews={restaurant.reviews} />
      <hr style={{width: '100%'}}/>
      <AddReview  restaurantId={id}/>
    </>
  )
}

export default Profile