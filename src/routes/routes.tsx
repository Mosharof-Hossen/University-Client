import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerators";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },
    {
        path: "/student",
        element: <App></App>,
        children: routeGenerator(adminPaths)
    },

    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
])

export default router;