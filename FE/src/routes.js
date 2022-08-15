import Login from 'Components/Authentication/Login'
import Registration from 'Components/Authentication/Registration'
import Home from 'Components/Feed/Home'
import RestaurantProfile from 'Components/Feed/Restaurant/Profile'


const routes = [
    {
        url: 'login',
        component: <Login />
    },
    {
        url: 'register',
        component: <Registration />
    },
    {
        url: 'home',
        component: <Home />
    },
    {
        url: 'restaurant/:id',
        component: <RestaurantProfile />
    }
]

export default routes