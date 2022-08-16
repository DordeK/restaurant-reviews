import React, { useState, useEffect } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantCard from 'Components/Feed/Restaurant/Card'
import { Link } from "react-router-dom";
import 'Components/Feed/Home/style.css'
import axios from 'Components/lib/axios';
import {useNavigate} from 'react-router-dom';
import Loader from 'Components/lib/Loader'
import RatingSlider from 'Components/Feed/Restaurant/lib/components/RatingSlider';

function Home() {
  const navigation = useNavigate()
  const [restaurants, setRestaurants] = useState(null)
  const [page, setPage] = useState(0)
  const [km, setKm] = useState(10)


  useEffect(() => {
    const getRestaurants = async () => {
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
            const {data} = await axios.get(`/restaurants?page=${page}&lat=${position.coords.latitude}&lng=${position.coords.longitude}&radiousKm=${km}`)
            setRestaurants(data)
            return
          });
        }else{
        const {data} = await axios.get(`/restaurants?page=${page}`)
        setRestaurants(data)
      }
    }
    getRestaurants()
  }, [page, km])

  
  const addRestaurant = () => navigation('/addRestaurant')
  if (restaurants === null) return <Loader />
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}>
        <div style={{display: 'flex', justifyContent:'space-between', width:'90%'}}>
          <button style={{ backgroundColor: '#00a8ff'}} className="btnAddRestaurant" onClick={addRestaurant}>add restaurant</button>
          <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems:'center'}}>
            <LogoutIcon style={{position: 'absolute', top: '0', right:'0', fontSize:'40px'}} onClick={() => navigation('/login')}/>
            <RatingSlider setKm={setKm} min={10} max={1000} label='How far away in km' />
            <div onClick={() => setKm(parseInt(document.getElementById('textInput').innerHTML))}>refresh</div>
          </div>
        </div>
        <div className="home-scroll-feed">
            {restaurants.map((restaurant => (
                <Link style={{textDecoration: 'none', color: 'black'}} key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                    <RestaurantCard image={restaurant.Images[0]?.image} name={restaurant.ime} description={restaurant.description} />
                </Link>
            )))}
        </div>
    </div>
  )
}

export default Home