import { Navigate } from "react-router-dom"
import { PrivateRouteProps } from "../utils/Interfaces"


const PrivateRoute = ({ authenticationPath, outlet }: PrivateRouteProps) => {

    const isAuthenticated = !!localStorage.getItem("profile");
    return isAuthenticated ? outlet : <Navigate to={{ pathname: authenticationPath }} />
};

export default PrivateRoute;
