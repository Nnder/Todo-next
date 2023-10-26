import React from 'react';
import TaskList from "@/src/3_features/taskList/TaskList";

const Page = () => {
    return (
        <div>
            <TaskList where={{complete: true}}/>
        </div>
    );
};

export default Page;