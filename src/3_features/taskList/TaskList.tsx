import React from 'react';
import {getTasks} from "@/src/4_entities/task/model";
import Card from "@/src/4_entities/task/ui/taskCard/Card";


const TaskList = async () => {
    const tasks = await getTasks();

    return (
        <div>
            <div>Tasks list</div>
            {tasks.map((el)=>(
                <Card key={el.id} task={el}/>
            ))}
        </div>
    );
};

export default TaskList;