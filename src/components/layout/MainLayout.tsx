import { Layout, Menu, MenuProps, } from 'antd';
import logo from "../../assets/images/logo.png"
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;


// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//         key: String(index + 1),
//         icon: React.createElement(icon),
//         label: `nav ${index + 1}`,
//     }),
// );

const items: MenuProps["items"] = [
    {
        key: '1',
        label: "Dashboard"
    },
    {
        key: '2',
        label: "Profile",
        children: [
            {
                key: "21",
                label: "User Profile"
            },
            {
                key: "22",
                label: "Admin Profile"
            }
        ]
    },
]

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
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
                <div style={{display:"flex",justifyContent:"center", justifyItems:"center"}} >
                    <img src={logo} alt="" style={{ width:"60px"}} />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} >
                    <div style={{ textAlign: "center", color: "white" }}>
                        <h1>HSTU</h1>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;