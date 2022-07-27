import React from "react";
import './task-card.styles.css';
import { useDrag } from "react-dnd";
import cardUser from '../../assets/project-icons/cardUser.svg';

const TaskCard = ({ title, desc, id}) => {

    const [{ opacity }, drag] = useDrag(() => ({
        type:"",
        item: { id },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
    }));

    return (
        <div className="card" ref={drag}>
            <div className="card-wrap">
                <p className="card-title">{title}</p>
                <p className="card-desc">{desc}</p>
                <img src={cardUser} alt="card-user" />
            </div>
        </div>
    )
}

export default TaskCard;