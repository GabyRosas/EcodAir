import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AirQuality from "../pages/AirQuality";
import Leyenda from "../pages/Leyenda";
import Credits from "../pages/Credits";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/airquality",
                element: <AirQuality />
            },
            {
                path: "/leyenda",
                element: <Leyenda />
            },
            {
                path: "/credits",
                element: <Credits />
            }
        ]
    }
]);
