import React from 'react';
import Card from "@/src/4_entities/task/ui/taskCard/Card";
import Toggle from "@/src/4_entities/task/ui/taskCard/Toggle";
import styles from "./styles.module.css";
import {getTasks} from "@/src/4_entities/task/model";

const TaskList = async (where: any = {}) => {
    const tasks = await getTasks(where);

    return (
        <div className={styles.list}>
            {tasks.map((el,index)=>(
                <Card key={el.id} id={index+1} task={el}>
                    <Toggle task={el} status={el.complete}/>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;