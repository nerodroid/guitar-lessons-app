import React from "react";
import { render, fireEvent, screen } from "../../utils/test-utils";
import SideBar from ".";
import { MemoryRouter as Router } from 'react-router-dom';
import { AppstoreAddOutlined } from "@ant-design/icons";

describe("SideBar Component", function () {

    it("Test sidebar component menu item", async () => {
        const sideMenuConfig = [
            {
                title: "Overview",
                route: "/",
                icon: <AppstoreAddOutlined className="sidebar-icon" />
            }
        ]    
        render(
            <Router>
                <SideBar sideMenuConfig={sideMenuConfig} onCollapse={() => {}}/>
            </Router>
        )
        const sideMenuItem = screen.getByText(/Overview/i);
        expect(sideMenuItem).toBeInTheDocument()
    })

    it("Test multiple sidebar menu items", async () => {
        const sideMenuConfig = [
            {
                title: "Item1",
                route: "/",
                icon: <AppstoreAddOutlined className="sidebar-icon" />
            },
            {
                title: "Item2",
                route: "/",
                icon: <AppstoreAddOutlined className="sidebar-icon" />
            }
        ]    
        render(
            <Router>
                <SideBar sideMenuConfig={sideMenuConfig} onCollapse={() => {}}/>
            </Router>
        )
        const items = screen.getAllByTestId('sidebar-item')
        expect(items.length).toBe(2)
    })
});
