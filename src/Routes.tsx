import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
// import ChildComponent from "./components/ChildComponent";
import ParentComponent from "./components/ParentComponent";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:
            <HomePage/>,
        },
        {
            path:"/HelloWorld",
            element:<HelloWorld />,
            children:[
                {
                    path:"ParentComponent", // route for these will always be /HelloWorld/ParentComponent
                    element:<ParentComponent/>
                },
                {
                    path:"Counter",
                    element:<Counter/>
                }
            ]
        },
        {
            path:'*',
            element:<h1>404 Not Found</h1>
        }
    ]
)
export default router;