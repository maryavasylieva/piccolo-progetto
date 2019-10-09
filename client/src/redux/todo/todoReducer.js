import { combineReducers } from 'redux';
import { Actions_Types } from './todoActions';

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case Actions_Types.GET_TODOS_SUCCESS:
      return payload.todos;

    case Actions_Types.ADD_TASK_ITEM_SUCEESS:
      return [...state, payload.taskItem];

    case Actions_Types.ADD_TODO_SUCCESS:
    case Actions_Types.DELETE_TODO_SUCCESS:
      return state.map(el => {
        if (el._id === payload.todo._id) {
          el.todos = payload.todo.todos;
        }

        return el;
      });

    case Actions_Types.DELETE_TASK_LIST_SUCCESS:
      return state.filter(todo => todo._id !== payload.id);
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case Actions_Types.GET_TODOS_ERROR:
    case Actions_Types.ADD_TASK_ITEM_ERROR:
    case Actions_Types.DELETE_TASK_LIST_ERROR:
    case Actions_Types.DELETE_TODO_ERROR:
      return payload.err;

    case Actions_Types.GET_TODOS_SUCCESS:
    case Actions_Types.ADD_TASK_ITEM_SUCEESS:
    case Actions_Types.DELETE_TASK_LIST_SUCCESS:
    case Actions_Types.DELETE_TODO_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ tasks, error });
