import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import { AppstoreAddOutlined, ProfileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const sideMenuConfig = [
    {
        title: "Overview",
        route: "/",
        icon: <AppstoreAddOutlined className="sidebar-icon" />
    },
    {
        title: "News",
        route: "/news",
        icon: <ProfileOutlined className="sidebar-icon" />
    },
    {
        title: "Users",
        route: "/users",
        icon: <TeamOutlined className="sidebar-icon" />
    }
]

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = (isCollapsed) => {
        setIsCollapsed(!isCollapsed)
    }

    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )

    useEffect(() => {
        if (appWindowSize === "full") {
            setIsCollapsed(false)
        } else {
            setIsCollapsed(true)
        }
    }, [appWindowSize]);

    return (
        <div className="flex h-screen">
            <div className={`flex-none ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear"`}>
                <SideBar sideMenuConfig={sideMenuConfig} onCollapse={onCollapse} />
            </div>
            <div className={`flex-1 bg-gray-50 `}>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
