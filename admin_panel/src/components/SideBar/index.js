import React, { useState, useEffect } from "react";
import SideBarItem from "./components/SideBarItem";
import { AppstoreAddOutlined, ProfileOutlined, TeamOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = ({ sideMenuConfig, onCollapse }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )

    const onSideMenuCollapse = () => {
        setIsCollapsed(!isCollapsed)
        onCollapse(isCollapsed)
    }

    useEffect(() => {
        if (appWindowSize === "full") {
            setIsCollapsed(false)
        } else {
            setIsCollapsed(true)
        }
    }, [appWindowSize]);

    return (
        <div className={`fixed top-0 bottom-0 bg-gray-800 flex flex-col text-white shadow-2xl ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear`}>
            <div className="h-14 mt-2 flex items-center justify-center">
                <img src={logo} className="w-12 h-12" />
            </div>
            <div className="flex items-center justify-end">
                <div className={`bg-white flex -mr-3 items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 object-right`} onClick={onSideMenuCollapse}>
                    {!isCollapsed ? <DoubleLeftOutlined className="text-lg text-gray-900" /> : <DoubleRightOutlined className="text-lg text-gray-900" />}
                </div>
            </div>
            <div className="mt-2">
                {
                    sideMenuConfig.map((sideMenuItem, index) => (
                        <Link data-testid="sidebar-item" to={sideMenuItem.route} key={index}>
                            <SideBarItem title={sideMenuItem.title} icon={sideMenuItem.icon} isCollapsed={isCollapsed} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBar;
