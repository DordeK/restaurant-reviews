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



function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ restaurant, setRestaurant ] = useState(null)

  useEffect(() => {
    //TODO: get restaurant details save in ??redux??
    console.log(id)
    setRestaurant({
      name: 'restaurant name',
      reviews: [],
      images: [],
      description: 'The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert! ',
      rating: {
        numberOfReviews:0,
        average:10.0
      },
      menu:{
        title: 'menu title'
      },
      workingHours:{
        monday:0,
        tuesday:0,
        thursday:0,
        wednesday:0,
        friday:0,
        saturday:0,
        sunday:0,
      },
      contact:{
        number: '068 626 212'
      }
    })
  }, [id])
  if (restaurant === null ) return <>loading</>
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>go back</button>
      <h1>{restaurant.name}</h1>
      <hr />
      <>{restaurant.description}</>
      <hr />
      <Images images={restaurant.images} />
      <hr />
      <WorkingHours workingHours={restaurant.workingHours}/>
      <hr />
      <Menu menu={restaurant.menu} />
      <hr />
      <Contact contact={restaurant.contact} />
      <hr />
      <Reviews reviews={restaurant.reviews} />
      <AddReview />
      <hr />
      <Rating rating={restaurant.rating} />
    </div>
  )
}

export default Profile