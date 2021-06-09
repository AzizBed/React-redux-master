import React, { useState, useEffect } from "react";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css";
import EditTask from "../EditTask/EditTask";
import { useDispatch } from "react-redux";
import { completeTask } from "../../Redux/actions";

function Task({ task, index }) {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(completeTask({ id: task.id, isDone: !task.isDone }));
    };
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(hours + ":" + min + ":" + sec);
    }, []);
    console.log(currentDate);
    return (
        <div classNam="tak-container">
            <Row>
                <Col>
                    <Toast
                        className="task-box"
                        show={showA}
                        onClose={toggleShowA}
                    >
                        <Toast.Header closeButton={false}>
                            <img
                                src={
                                    "https://image.flaticon.com/icons/png/128/721/721532.png"
                                }
                                className="rounded me-2"
                                width="20px"
                                alt=""
                            />
                            <strong className="mr-auto">
                                Task <span>{index + 1}</span>
                            </strong>
                            <small style={{ marginRight: "20px" }}>
                                {currentDate}{" "}
                            </small>
                            <Button
                                variant={
                                    task.isDone
                                        ? "outline-danger"
                                        : "outline-success"
                                }
                                onClick={handleClick}
                            >
                                <img
                                    src={
                                        task.isDone
                                            ? "https://static.thenounproject.com/png/1022925-200.png"
                                            : "https://freeiconshop.com/wp-content/uploads/edd/task-done-outline.png"
                                    }
                                    alt="done"
                                    width="20px"
                                />
                                {task.isDone ? "Undo" : "Done"}
                            </Button>
                            <EditTask task={task} />
                        </Toast.Header>
                        <Toast.Body
                            style={{
                                textDecoration: task.isDone
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {task.description}
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default Task;
