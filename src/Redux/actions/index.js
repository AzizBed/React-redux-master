import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../constants/action-type";

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    };
};
export const completeTask = (payload) => {
    return {
        type: COMPLETE_TASK,
        payload,
    };
};
export const editTask = (payload) => {
    return { type: EDIT_TASK, payload };
};
