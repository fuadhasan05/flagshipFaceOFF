import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        Component: Layouts,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                hydrateFallbackElement: <p>Loading....</p>,
                loader: () => fetch('../phones.json'),
            },
            {
                path: '/favorites',
                Component: Favorites,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/phone-details/:id',
                element: <PhoneDetails></PhoneDetails>,
                hydrateFallbackElement: <p>Loading....</p>,
                loader: () => fetch('../phones.json'),
            },
        ]

    }
])

export default Routes;