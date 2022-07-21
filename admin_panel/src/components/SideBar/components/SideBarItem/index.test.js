import React from "react";
import { render, screen } from "../../../../utils/test-utils";
import SideBarItem from ".";
import { AppstoreAddOutlined } from "@ant-design/icons";

describe("SideBarItem Component", function () {
    it("Test SideBarItem component title", () => {
        render(<SideBarItem title={"title"} icon={<AppstoreAddOutlined className="sidebar-icon" />} isCollapsed={false}/>)
        const sideMenuItem = screen.getByText(/title/i);
        expect(sideMenuItem).toBeInTheDocument()
    })

    it("Test SideBarItem component icon", () => {
        render(<SideBarItem title={"title"} icon={<AppstoreAddOutlined data-testid="icon-test" className="sidebar-icon" />} isCollapsed={false}/>)
        const item = screen.getAllByTestId('icon-test')
        expect(item).toBeTruthy();
    })
});
