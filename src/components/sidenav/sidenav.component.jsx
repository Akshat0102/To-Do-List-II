import React from "react";
import "./sidenav.styles.css";
import overview from '../../assets/nav-icons/overview.svg';
import stats from '../../assets/nav-icons/stats.svg';
import chat from '../../assets/nav-icons/chat.svg';
import calendar from '../../assets/nav-icons/calendar.svg';
import projects from '../../assets/nav-icons/projects.svg';
import settings from '../../assets/nav-icons/settings.svg';
import logout from '../../assets/nav-icons/logout.svg';
import { useNavigate } from "react-router";

const SideNav = () => {

    const navigate = useNavigate();

    const navigateToAuth = () => {
        const token = localStorage.getItem('token');

        if(token){
            localStorage.removeItem('token');
            navigate("/")
        }
    };

    return (
        <div className="nav">
            <div className="nav-title">
                <p>.taskez</p>
            </div>
            <div className="nav-wrap">
                <div className="nav-menu">
                    <div className="nav-menu-item">
                        <img src={overview} alt="overview" />
                        <p className="nav-sec-text">Overview</p>
                    </div>
                    <div className="nav-menu-item">
                        <img src={stats} alt="stats" />
                        <p className="nav-sec-text">Stats</p>
                    </div>
                    <div className="nav-menu-item">
                        <img src={projects} alt="projects" />
                        <p className="nav-sec-text pro">Projects</p>
                    </div>
                    <div className="nav-menu-item">
                        <img src={chat} alt="chat" />
                        <p className="nav-sec-text">Chat</p>
                    </div>
                    <div className="nav-menu-item">
                        <img src={calendar} alt="calendar" />
                        <p className="nav-sec-text">Calendar</p>
                    </div>
                </div>
                <div className="nav-out">
                    <div className="nav-out-item">
                        <img src={settings} alt="settings" />
                        <p className="nav-sec-text">Settings</p>
                    </div>
                    <div className="nav-out-item">
                        <img src={logout} alt="logout" />
                        <p className="nav-sec-text" onClick={navigateToAuth}>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;