import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerators";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.route";
import { adminPaths } from "./admin.routes";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element:  <ProtectedRoute role = "admin"><App></App></ProtectedRoute>,
        children: routeGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element:  <ProtectedRoute role = "faculty"><App></App></ProtectedRoute>,
        children: routeGenerator(facultyPaths)
    },
    {
        path: "/student",
        element:  <ProtectedRoute role = "student"><App></App></ProtectedRoute>,
        children: routeGenerator(studentPaths)
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