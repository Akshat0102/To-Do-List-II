import React, { useEffect, useState } from "react";
import Projects from "../../components/projects/projects.component";
import SideNav from "../../components/sidenav/sidenav.component";
import './homepage.styles.css';
import axios from 'axios';

const HomePage = () => {

    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const getUser = async () => {
            const res = await axios.get('https://todo-taskez.herokuapp.com/user');
            setCurrentUser(res.data.data);
        }
        getUser();
    }, [])

    return (
        currentUser ? 
        <div className="home">
            <div className="side-nav">
                <SideNav />
            </div>
            <div className="todo-sec">
                <Projects currentUser = {currentUser}/>
            </div>
        </div>
        :
        <div>LOADING...</div>
    )
}

export default HomePage;