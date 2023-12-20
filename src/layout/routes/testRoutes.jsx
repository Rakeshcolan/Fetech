import { Outlet } from "react-router-dom";

const TestRoutes =[
    {path:'/',element:(
        <>
        <div>Welcom to Chatnot</div>
        <Outlet/>
        </>
    ),
    children:[
        {path:"/dashboard",element:<div>Fetech Dashboard</div>},
        {path:"/profile",element:<div>Fetech Profile</div>},

    ]},
      
]

export default TestRoutes;