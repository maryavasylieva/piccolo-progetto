import Actions_Types from './todoActionTypes';

// get todos

//
export const getTodosRequest = () => ({
  type: Actions_Types.GET_TODOS_REQUEST,
});

export const getTodosSuccess = todos => ({
  type: Actions_Types.GET_TODOS_SUCCESS,
  payload: { todos },
});

export const getTodosError = err => ({
  type: Actions_Types.GET_TODOS_ERROR,
  payload: { err },
});
//

// add todo

//
export const addTodoRequest = () => ({
  type: Actions_Types.ADD_TODO_REQUEST,
});

export const addTodoSuccess = todo => ({
  type: Actions_Types.ADD_TODO_SUCCESS,
  payload: { todo },
});

export const addTodoError = err => ({
  type: Actions_Types.ADD_TODO_ERROR,
  payload: { err },
});
//

// delete todo

//
export const deleteTodoRequest = () => ({
  type: Actions_Types.DELETE_TODO_REQUEST,
});

export const deleteTodoSuccess = todo => ({
  type: Actions_Types.DELETE_TODO_SUCCESS,
  payload: { todo },
});

export const deleteTodoError = err => ({
  type: Actions_Types.DELETE_TODO_ERROR,
  payload: { err },
});
//

// add task item

//
export const addTaskItemRequest = () => ({
  type: Actions_Types.ADD_TASK_ITEM_REQUEST,
});

export const addTaskItemSuccess = taskItem => ({
  type: Actions_Types.ADD_TASK_ITEM_SUCEESS,
  payload: { taskItem },
});

export const addTaskItemError = err => ({
  type: Actions_Types.ADD_TASK_ITEM_ERROR,
  payload: { err },
});
//

// delete task list

//
export const deleteTaskListRequest = () => ({
  type: Actions_Types.DELETE_TASK_LIST_REQUEST,
});

export const deleteTaskListSuccess = id => ({
  type: Actions_Types.DELETE_TASK_LIST_SUCCESS,
  payload: { id },
});

export const deleteTaskListError = err => ({
  type: Actions_Types.DELETE_TASK_LIST_ERROR,
  payload: { err },
});
//

// sort task items

//
export const sortTaskItemsRequest = () => ({
  type: Actions_Types.SORT_TASK_ITEM_REQUEST,
});

export const sortTaskItemSuccess = todo => ({
  type: Actions_Types.SORT_TASK_ITEM_SUCCESS,
  payload: { todo },
});

export const sortTaskItemError = err => ({
  type: Actions_Types.SORT_TASK_ITEM_ERROR,
  payload: { err },
});
//
