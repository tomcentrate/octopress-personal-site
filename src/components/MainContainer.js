import React from "react";
import Masthead from "./Masthead";
import NavigationSidebar from "./NavigationSidebar";
import SidebarCheckbox from "./SidebarCheckbox"
function MainContainer(children) {
    return <div className="mainContainer">
        <input type="checkbox" className="sidebar-checkbox" id="sidebar-checkbox" />
        <NavigationSidebar />
        <div className="wrap">
            <Masthead/>
            <div className="container content">
                {children}
            </div>
        </div>
        <SidebarCheckbox/>
    </div>;
}
export default MainContainer