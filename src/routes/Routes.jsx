import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "checkout/:id",
                element: <PrivateRoutes><Checkout /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-doctor-server-ochre-nine.vercel.app/services/${params.id}`)

            },
            {
                path: "bookings",
                element: <PrivateRoutes><Bookings /></PrivateRoutes>
            }
        ]
    },
]);
export default router;