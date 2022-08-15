import React, { useState, useEffect } from 'react'
import RestaurantCard from 'Components/Feed/Restaurant/Card'
import { Link } from "react-router-dom";
import 'Components/Feed/Home/style.css'

const testData = [
    {
        id: 1,
        name: 'restourant 1',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
        description: 'At (RN), we’re serving up more than (TF). In fact, (RN) Famous (recipe) is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it’s topped with (RN) signature herb-garlic butter, then carved tableside.'
    },
    {
        id: 2,
        name: 'restourant 2',
        image: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=',
        description: ' (RN) specializes in delicious food featuring fresh ingredients and masterful preparation by the (RN) culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, (RN’s) lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.'
    },
    {
        id: 3,
        name: 'restourant 3',
        image: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123',
        description: 'The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! '
    },
    {
        id: 4,
        name: 'restourant 4',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80',
        description: '(RN) is a comfortable, brasserie-style restaurant offering everything you love about ___ cuisine without the attitude. (RN) features classic ___ dishes such as ____ and ____, as well as fresh salads and juicy hamburgers made with fresh-ground beef.'
    }
]
function useCustom(startValue){
    return function(target, key){
        console.log({target, key, startValue});
    }
}


function Home() {
  const [restaurants, setRestaurants] = useState([])

  @useCustom('start');


  useEffect(() => {
    setRestaurants(testData)
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="home-scroll-feed">
            {restaurants.map((restaurant => (
                <Link style={{textDecoration: 'none', color: 'black'}} key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                    <RestaurantCard image={restaurant.image} name={restaurant.name} description={restaurant.description} />
                </Link>
            )))}
        </div>
    </div>
  )
}

export default Home