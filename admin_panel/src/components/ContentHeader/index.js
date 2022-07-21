import React from "react";
import Breadcrumb from "../BreadCrumb";

const ContentHeader = ({title, breadcrumbArray}) => {
    return (
        <div className="bg-white overflow-auto rounded-lg">
            <div>
                <p className="text-3xl mt-5 ml-5 font-bold">{title}</p>
            </div>
            <div className="ml-5 mt-3 mb-2">
                <Breadcrumb breadcrumbArray={breadcrumbArray}/>
            </div>
        </div>
    );
};

export default ContentHeader;
