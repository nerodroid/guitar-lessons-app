import { HomeOutlined } from "@ant-design/icons";
import React from "react";

const Breadcrumb = ({breadcrumbArray}) => {
    return (
        <div className="flex flex-row items-center">
            <HomeOutlined className="text-md text-gray-500"/>
            {
                breadcrumbArray ? breadcrumbArray.map((breadcrumb, index) => (
                    <p key={index} className="text-gray-500 ml-1 text-md">{"/ " + breadcrumb}</p>
                )) :
                <p className="text-gray-500 ml-1 text-md">{"/ "}</p>
            }
        </div>
    );
};

export default Breadcrumb;
