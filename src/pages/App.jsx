import { BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
import "../styles/App.css";
import { getRoutes } from "../layout/routes/index";
import { flowStore,persistor } from "../redux/flowStore";
import LazyLoader from "../components/lazyLoader";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { NodeContextProvider } from "../nodecontext/nodeContext";

function App() {
  const userRole =typeof window !== "undefined" ? sessionStorage.getItem("ur") : null;
  const routeType = userRole !== null ? userRole : 0;
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

  return (
    <>
        {/* <ActivityController> */}
        <Provider store={flowStore}>
        <PersistGate loading={null} persistor={persistor}>
          <NodeContextProvider>
        <LazyLoader>{router}</LazyLoader>
        </NodeContextProvider>
      </PersistGate>
    </Provider>
        {/* </ActivityController> */}
    </>
  );
}

export default App;
