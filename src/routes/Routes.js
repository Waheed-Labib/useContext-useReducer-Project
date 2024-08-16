import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../pages/all-products/AllProducts";
import TopRated from "../pages/top-rated/TopRated";
import Main from "../layout/main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <AllProducts></AllProducts>,
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>,
            },
            {
                path: "/top-rated",
                element: <TopRated></TopRated>,
            },
        ]
    }
]);

export default router;