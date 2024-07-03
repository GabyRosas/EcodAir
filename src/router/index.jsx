import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../layout/Layout";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
         
            {
                 path: "/about",
                element: <About/>
             },
                       
       
    ]
},
])