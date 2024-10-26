import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from './../Pages/Home/Home';
import Login from './../Authentication/Login/Login';
import SignUp from './../Authentication/Signup/Signup'
import About from './../Pages/About/About'
import Event from './../Pages/Event/Event'
import Contact from './../Pages/Contact/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path:'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'events',
                element: <Event />,
            },
            {
                path: 'contact',
                element: <Contact />,
            }
        ],
    },
]);

export default router;