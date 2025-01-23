import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../utils/verifyToken";
import { JwtPayload } from "jwt-decode";

type TProtectedRoute = {
    role: string | undefined,
    children: ReactNode
}


const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user ;
    if(token){
        user = verifyToken(token) as JwtPayload;
    }
    console.log(user);


    if (role != undefined && user?.role != role) {
        dispatch(logout())
        return <Navigate to={"/login"} replace={true}></Navigate>
    }
    console.log({ role });
    if (!token) {
        return <Navigate to={"/login"} replace={true}></Navigate>
    }
    return children
};

export default ProtectedRoute;