import React, { useState } from "react";
import taskReducer from "../../Redux/Reducers/taskReducer";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Task({ task, index }) {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    return (
        <div className="task">
            <Row>
                <Col xs={6}>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header style={{ textAlign: "center" }}>
                            <img
                                src="https://image.flaticon.com/icons/png/128/721/721532.png"
                                className="rounded me-2"
                                width="20px"
                                alt=""
                            />
                            <h4 className="me-auto">
                                Task <span>{index + 1} </span>
                            </h4>
                        </Toast.Header>
                        <Toast.Body>{task.description}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default Task;
