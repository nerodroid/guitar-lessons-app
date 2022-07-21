import { ProfileOutlined, FileAddOutlined, TeamOutlined, UsergroupAddOutlined, SettingOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/BreadCrumb";
import ContentHeader from "../../components/ContentHeader";

const overViewTileConfig = [
    {
        title: "All News",
        icon: <ProfileOutlined/>
    },
    {
        title: "Add News",
        icon: <FileAddOutlined/>
    },
    {
        title: "All Users",
        icon: <TeamOutlined/>
    },
    {
        title: "Add Users",
        icon: <UsergroupAddOutlined/>
    },
    {
        title: "Settings",
        icon: <SettingOutlined/>
    }
]

const Overview = () => {
    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )

    return (
        <div>
            <ContentHeader title="Overview" breadcrumbArray={["Overview"]}/>
            <div className={`grid ${appWindowSize === "full" ? "grid-cols-3 gap-4" : appWindowSize === "medium" ? "grid-cols-2 gap-4 " : "grid-cols-1 gap-4 "} ml-5 mt-4 mr-5`}>
                {
                    overViewTileConfig.map((tile, index) => (
                        <div key={index} className="overview-tile">
                            <div className={`flex items-center justify-center text-xl text-gray-700 font-bold`}>
                                {tile.icon}
                            </div>
                            <p className={`${appWindowSize === "full" ? "text-xl" : "text-xs"} font-bold text-gray-700 ml-3`}>
                                {tile.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Overview;
