import React from "react";

import Task from "../Task/Task";
import { useSelector } from "react-redux";

function ListTask() {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    return (
        <div>
            {tasks.map((task, index) => (
                <Task task={task} index={index} key={index} />
            ))}
        </div>
    );
}

export default ListTask;
