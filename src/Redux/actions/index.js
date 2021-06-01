import {ADD_TASK} from "../constants/action-type";
export const addTask = (payload) => {
  return  {
        type: ADD_TASK, payload
    };
};
