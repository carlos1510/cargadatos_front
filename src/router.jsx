import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
    }
]);