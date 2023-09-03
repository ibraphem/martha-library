import PageWrapper from "./layout/PageWrapper";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    // const auth = useSelector((state) => state.auth?.user);

    // if (!auth) {
    //   return <Navigate to="/" replace />;
    // }
  
    return <PageWrapper><Outlet /></PageWrapper>;
  }


export default ProtectedRoutes;