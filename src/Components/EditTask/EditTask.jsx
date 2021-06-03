import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EditTask.css";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/actions";

function EditTask({ task }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [newDescription, setNewDescription] = useState(task.description);
    const handleSubmit = () => {
        handleClose();
        dispatch(editTask({ id: task.id, newDescription: newDescription }));
    };
    const handleChange = (e) => {
        setNewDescription(e.target.value);
    };

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2145/512/doc_edit-512.png"
                    alt="edit"
                    width="20px"
                />{" "}
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                style={{ backGroundolor: "black" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        defaultValue={task.description}
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditTask;
