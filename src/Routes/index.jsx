import Login from "../Pages/Login";
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);