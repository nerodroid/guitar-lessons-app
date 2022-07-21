import React from "react";

// hover animation: hover:rounded-lg transition-all duration-300 ease-linear cursor-pointer

const SideBarItem = ({ title, icon, isCollapsed }) => {
    return (
        <div className="flex text-gray-700 bg-white h-14 mt-2 mx-3 rounded-lg shadow-xl font-sans hover:bg-gray-100">
            <div className="flex flex-row items-center justify-center">
                <div className={`w-14 flex items-center justify-center`}>
                    {icon}
                </div>
                {!isCollapsed && <p className="text-base font-bold">{title}</p>}
            </div>
        </div>
    );
};

export default SideBarItem;
