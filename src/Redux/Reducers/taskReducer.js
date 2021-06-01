import { v4 as uuidv4 } from "uuid";
import { ADD_TASK } from "../constants/action-type";

const initialState = {
    tasks: [
        {
            id: uuidv4(),
            description: "Task 1dtjdjjjjjjjjjjjjjjjjj",
            isDone: false,
        },
        {
            id: uuidv4(),
            description: "Task 1dtjdjjjjjjjjjjjjjjjjj",
            isDone: false,
        },
        {
            id: uuidv4(),
            description: "Task 1dtjdjjjjjjjjjjjjjjjjj",
            isDone: false,
        },
    ],
};

function taskReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            console.log(payload);
            return {
                task: [
                    ...state.tasks,
                    {
                        id: uuidv4(),
                        description: payload.description,
                        isDone: false,
                    },
                ],
            };
        default:
            return state;
    }
}
export default taskReducer;
