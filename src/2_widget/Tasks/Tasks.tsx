import React from 'react';
import TaskList from "@/src/3_features/taskList/TaskList";
import {getTasks} from "@/src/4_entities/task/model";

const Tasks = () => {
    return (
        <div>
            <TaskList/>
        </div>
    );
};

export default Tasks;