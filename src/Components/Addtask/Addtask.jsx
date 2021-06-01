import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/actions";

function Addtask() {
    const [newTask, setNewTask] = useState("");
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(addTask({ description: newTask }));
    };
    return (
        <div>
            <h1>Add a new task !</h1>
            <InputGroup size="lg">
                <FormControl onChange={handleChange} />
                <Button onClick={handleSubmit}>Add</Button>
            </InputGroup>
        </div>
    );
}

export default Addtask;
