import * as React from 'react';
import "./index.css";
import {
    Layout,
    Menu,
    Breadcrumb,
    Avatar,
    Dropdown,
    Badge
} from 'antd';
import {
    LogoutOutlined,
    DownOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    CheckSquareOutlined
} from '@ant-design/icons';
import {
    Link,
    withRouter,
    RouteComponentProps
} from 'react-router-dom';

import {
    GetAccessToken,
    RemoveAccessToken
} from './../../actions/Auth';

const {
    Header,
    Content,
    Footer
} = Layout;
const {
    SubMenu
} = Menu;

export interface IPrimaryMenuProps extends RouteComponentProps {
    children: any;
    logout: any;
    numberOfCarts: any;
    numberOfCheckouts: any;
}

export interface IPrimaryMenuState {
    initial: any;
}

export class PrimaryMenu extends React.Component<IPrimaryMenuProps, IPrimaryMenuState> {
    constructor(props: IPrimaryMenuProps) {
        super(props);

        this.state = {
            initial: "AK"
        }
    }

    componentDidMount = async() => {
        let token = await GetAccessToken();
        if(token == null) {
          this.props.history.push("/");
        }
    };
    

    signOut = () => {
        this.props.logout();
        RemoveAccessToken();
        this.props.history.push("/");
    }

    userMenu = () => {
        return (
            <Menu>
                <Menu.Item

                >
                    <UserOutlined
                        style={{
                            fontSize: 20
                        }}
                    />
                    <span>View Profile</span>
                </Menu.Item>
                <Menu.Item
                    onClick={() => this.signOut()}
                >
                    <LogoutOutlined
                        style={{
                            fontSize: 20
                        }}
                    />
                    <span>Logout</span>
                </Menu.Item>
            </Menu>
        )
    }

    public render() {
        return (
            <Layout className="layout">
                <nav
                    className="navbar navbar-expand-lg navbar-light fixed-top"
                    style={{
                        zIndex: 100,
                        backgroundColor: "#218838",
                        opacity: 0.9
                    }}
                >
                    <div className="container">
                        <div className="logo-title-container" >
                            <img
                                // src={logo}
                                className="logo-style"
                            />
                            <Link
                                className="navbar-brand title-style"
                                to={"/"}
                                style={{
                                    color: "#FFFFFF"
                                }}
                            >Shops</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"/home"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"#"}>Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"#"}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"#"}>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Badge size="default" count={this.props.numberOfCarts}>
                                        <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"/cart"}>
                                            <ShoppingCartOutlined 
                                                style={{
                                                    fontSize: 18
                                                }}
                                            />
                                        </Link>
                                    </Badge>
                                </li>
                                <li className="nav-item">
                                    <Badge size="default" count={this.props.numberOfCheckouts}>
                                        <Link className="nav-link primary-menu-nav-link" style={{ color: "#FFFFFF" }} to={"/checkout"}>
                                            <CheckSquareOutlined 
                                                style={{
                                                    fontSize: 18
                                                }}
                                            />
                                        </Link>
                                    </Badge>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Dropdown
                            overlay={this.userMenu}
                            placement="bottomCenter"
                            arrow
                            className="primary-menu-nav-link"
                            trigger={["click"]}
                        >
                            <span>
                                <Avatar
                                    style={{
                                        backgroundColor: "red",
                                        verticalAlign: 'middle',
                                        cursor: "pointer"
                                    }}
                                    size="large"
                                    gap={2}
                                >
                                    {this.state.initial}
                                </Avatar>
                                <DownOutlined
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        cursor: "pointer",
                                        marginLeft: 5
                                    }}
                                />
                            </span>
                        </Dropdown>
                    </div>
                </nav>
                <Content
                    className="primary-menu-content"
                >
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Shops ©2020 Created by Shops</Footer>
            </Layout>
        );
    }
}

export default withRouter(PrimaryMenu);