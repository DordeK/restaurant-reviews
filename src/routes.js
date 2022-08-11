import Login from 'Components/Authentication/Login'
import Registration from 'Components/Authentication/Registration'
import Home from 'Components/Feed/Home'


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
    }
]

export default routes