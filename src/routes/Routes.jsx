import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Checkout from "../pages/Checkout/Checkout";

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
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            }
        ]
    },
]);
export default router;