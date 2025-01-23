import { Layout, Menu, } from 'antd';
import logo from "../../assets/images/logo.png"
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.route';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logout, TUser, useCurrentToken } from '../../redux/features/auth/authSlice';
import { JwtPayload } from 'jwt-decode';
import { verifyToken } from '../../utils/verifyToken';

const { Sider } = Layout;
const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
}

const Sidebar = () => {
    const token = useAppSelector(useCurrentToken);
        const dispatch = useAppDispatch();
        let user ;
        if(token){
            user = verifyToken(token) as JwtPayload;
        }
        console.log(user);

    let sideBarItems;
    switch ((user as TUser)!.role) {
        case userRole.ADMIN:
            sideBarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sideBarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sideBarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;

        default:
            break;
    }

    const handleLogout = () => {
        console.log("ok");
        dispatch(logout());
    }


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{ height:"100vh", position: "sticky", top: "0", left: "0" }}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ display: "flex", justifyContent: "center", justifyItems: "center" }} >
                <img src={logo} alt="" style={{ width: "60px" }} />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sideBarItems}
            />
            <Menu
                theme="dark"
                mode="inline"
                // style={{color:"red"}}
                defaultSelectedKeys={['4']}
                items={[{ key: "Logout", label: <span onClick={() => handleLogout()}>Logout</span> }]}
            />

        </Sider>
    );
};

export default Sidebar;