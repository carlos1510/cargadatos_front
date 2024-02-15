import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login/Login";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);