import React from "react";
import SideNav from "../../components/sidenav/sidenav.component";
import './homepage.styles.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="todo-sec">
                
            </div>
        </div>
    )
}

export default HomePage;