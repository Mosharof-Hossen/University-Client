import { Layout, Menu, } from 'antd';
import logo from "../../assets/images/logo.png"
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.route';

const { Sider } = Layout;

const Sidebar = () => {

    const userRole = {
        ADMIN: "admin",
        FACULTY: "faculty",
        STUDENT: "student"
    }
    const role = "student";
    let sideBarItems;
    switch (role) {
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


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
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
        </Sider>
    );
};

export default Sidebar;