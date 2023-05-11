import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";

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
            }
        ]
    },
]);
export default router;