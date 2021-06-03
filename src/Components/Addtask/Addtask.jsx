import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/actions";
import "./AddTask.css";

function Addtask() {
    const [newTask, setNewTask] = useState("");
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(addTask({ description: newTask }));
        setNewTask("");
    };
    
    return (
        <div className="addTask-box">
            <h1>Add a new task !</h1>
            <InputGroup
                size="lg"
            >
                <FormControl onChange={handleChange} value={newTask} placeholder="add new task..."  />
                <Button type="reset" onClick={handleSubmit}>
                    Add
                </Button>
            </InputGroup>
            <div className="addTask">
                
            </div>
        </div>
    );
}

export default Addtask;
