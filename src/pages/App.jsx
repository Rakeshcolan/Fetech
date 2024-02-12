import { BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
import "../styles/App.css";
import { getRoutes } from "../layout/routes/index";
import LazyLoader from "../components/lazyLoader";
import { Provider } from "react-redux";
import { NodeContextProvider } from "../nodecontext/nodeContext";
import store from "../redux/store";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  // const[routerType,setRouterType] = useState(0)
  const userRole =
  typeof window !== "undefined" ? sessionStorage.getItem("ur") : null;
  const routeType =userRole !== null ? userRole : 0
  const router = useRoutes(getRoutes(routeType));
  // Need to delete this code after API Integration
  // const { userInfo = {} } = useSelector(authSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setUserInfo(getUserDetails()));
  // }, []);

  // const { userType = 6, isUserProfileCreated = false } = userInfo;

  // const type = USER_TYPE.find((user) => user.id === userType)?.id;
  // const routeType = isUserProfileCreated ? type : 0;
  // useEffect(()=>{
  //   console.log("working user");
  //   setRouterType( userRole !== null ? userRole : 0)

 
  // },[userRole])

  

  return (
    <>
      <Provider store={store}>
        <NodeContextProvider>
          {/* {router} */}
          <LazyLoader>{router}</LazyLoader>
        </NodeContextProvider>
      </Provider>
    </>
  );
}

export default App;
