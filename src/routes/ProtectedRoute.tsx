import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
    role: string | undefined,
    children: ReactNode
}


const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
    const token = useAppSelector(useCurrentToken);
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    console.log({ user });
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