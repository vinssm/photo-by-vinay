
import Login from './components/Login';
import Home from './components/Home'
import Signup from './components/Signup';
import Profile from './components/Profile';
// import createComment from './components/createComment';


export const routes = [
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/Signup",element:<Signup />},
    // {path:"/createComment",element:<createComment />},
    {path:"/Profile",element:<Profile />},
]