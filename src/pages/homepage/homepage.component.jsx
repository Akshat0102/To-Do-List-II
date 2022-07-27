import React from "react";
import Projects from "../../components/projects/projects.component";
import SideNav from "../../components/sidenav/sidenav.component";
import './homepage.styles.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="todo-sec">
                <Projects />
            </div>
        </div>
    )
}

export default HomePage;