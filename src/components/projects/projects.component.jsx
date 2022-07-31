import React from "react";
import './projects.styles.css';
import search from '../../assets/project-icons/search.svg';
import profilepic from '../../assets/project-icons/profilepic.svg';
import filter from '../../assets/project-icons/filter.svg';
import TaskCard from "../task-card/task-card.components";
import { default as Tasks } from '../../components/util/tasks.json';

const Projects = ({currentUser}) => {

    let taskArr = Tasks.task;

    return (
        currentUser ? 
        <div className="project">
            <div className="search-sec">
                <div className="search">
                    <img src={search} alt="search" />
                    <p>Search</p>
                </div>
                <div className="profile">
                    <p>Hi {currentUser.username}</p>
                    <img src={profilepic} alt="profile-pic" />
                </div>
            </div>
            <div className="filter-sec">
                <div className="pro-title">
                    <p>Projects</p>
                </div>
                <div className="filter">
                    <img src={filter} alt="filter" />
                    <p>Filter</p>
                </div>
            </div>
            <div className="card-sec">
                <div className="todo section">
                    <div className="wrap">
                        <div className="head-sec">
                            <p className="head-title">To do</p>
                            <div className="count">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="add-sec">
                            <button>+</button>
                        </div>
                        <div className="tasks-sec">
                            {
                                taskArr.map(task => (
                                    <TaskCard id={task.id} title={task.title} desc={task.description} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="inprogress section">
                    <div className="wrap">
                        <div className="head-sec">
                            <p className="head-title">In Progress</p>
                            <div className="count">
                                <p>2</p>
                            </div>
                        </div>
                        <div className="add-sec">
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="completed section">
                    <div className="wrap">
                        <div className="head-sec">
                            <p className="head-title">Completed</p>
                            <div className="count">
                                <p>0</p>
                            </div>
                        </div>
                        <div className="add-sec">
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div>LOADING...</div>
    )
}

export default Projects;