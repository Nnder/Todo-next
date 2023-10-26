import React from 'react';
import styles from "./styles.module.css";
import classNames from "classnames";

import {status, trim} from './model/model';
import Toggle from "@/src/4_entities/task/ui/taskCard/Toggle";


type task = {
    id: number
    title: string
    body: string
    complete: boolean
    endDate: Date
    createdAt: Date
    updated: Date
}

interface CardProps {
    task : task
    id: number
    children: React.ReactNode
}


const Card = async ({task, id, children} : CardProps) => {

    const cardStatus= await status(task);

    return (
        <div className={classNames(styles.task, styles[cardStatus])}>
            <div className={styles.number}>{id}</div>
            <div className={styles.title}>{ await trim(task.title, 60)}</div>
            <div className={styles.checkbox_wrapper}>
                {/*<Toggle task={task} status={cardStatus}/>*/}
                {children}
            </div>
        </div>
    );
};

export default Card;