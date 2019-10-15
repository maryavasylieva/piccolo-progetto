import { combineReducers } from 'redux';
import Actions_Types from './todoActionTypes';

const tasks = (state = [], { type, payload }) => {
  switch (type) {
    case Actions_Types.GET_TODOS_SUCCESS:
      return payload.todos === null ? [] : payload.todos;

    case Actions_Types.ADD_TASK_ITEM_SUCEESS:
      return [...state, payload.taskItem];

    case Actions_Types.ADD_TODO_SUCCESS:
    case Actions_Types.DELETE_TODO_SUCCESS:
      return state.map(el =>
        el._id === payload.todo._id ? { ...el, todos: payload.todo.todos } : el,
      );

    case Actions_Types.SORT_TASK_ITEM_SUCCESS:
      if (payload.todo.length) return payload.todo;

      return state.map(el =>
        el._id === payload.todo._id ? { ...el, todos: payload.todo.todos } : el,
      );

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
    case Actions_Types.SORT_TASK_ITEM_ERROR:
      return payload.err;

    case Actions_Types.GET_TODOS_SUCCESS:
    case Actions_Types.ADD_TASK_ITEM_SUCEESS:
    case Actions_Types.DELETE_TASK_LIST_SUCCESS:
    case Actions_Types.DELETE_TODO_SUCCESS:
    case Actions_Types.SORT_TASK_ITEM_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ tasks, error });
