import React from 'react';
import styles from "./styles.module.css";

type Task = {
    id: number
    title: string
    body: string
    complete: boolean
    endDate: Date
    createdAt: Date
    updated: Date
}

interface CardProps {
    task : Task
}

enum Status {
    completed,
    incomplete,
    late,
}

const status = (task: Task) =>{
    if(task.complete)
        return Status.completed;
    else if(!task.complete && task.endDate < Date.now())
        return Status.late;
    return Status.incomplete;
}

const Card = ({task} : CardProps) => {

    return (
        <div>
            <div>{task.title}</div>
            <div>{status(task)}</div>
        </div>
    );
};

export default Card;