import { combineReducers } from "redux";
import { Actions_Types } from "./todoActions";

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case Actions_Types.GET_TODOS_SUCCESS:
      return payload.todos;

    case Actions_Types.ADD_TODO_SUCCESS:
      return [...state, payload.todo];
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Actions_Types.GET_TODOS_ERROR:
    case Actions_Types.ADD_TODO_ERROR:
      return payload.err;

    case Actions_Types.GET_TODOS_SUCCESS:
    case Actions_Types.ADD_TODO_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ tasks, error });
