import { Navigate } from "react-router-dom"
import { PrivateRoutePropsLogin } from "../utils/Interfaces"


const PrivateRoute = ({ defaultPath, outlet }: PrivateRoutePropsLogin) => {

    const isAuthenticated= !!localStorage.getItem("profile");
    return isAuthenticated ? <Navigate to={{ pathname: defaultPath }} /> : outlet
};

export default PrivateRoute;
