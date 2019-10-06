export const Actions_Types = {
  GET_TODOS_REQUEST: 'GET_TODOS_REQUEST',
  GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS',
  GET_TODOS_ERROR: 'GET_TODOS_ERROR',
  ADD_TODO_REQUEST: 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_ERROR: 'ADD_TODO_ERROR',
  DELETE_TODO_REQUEST: 'DELETE_TODO_REQUEST',
  DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
  DELETE_TODO_ERROR: 'DELETE_TODO_ERROR',
  ADD_TASK_ITEM_REQUEST: 'ADD_TASK_ITEM_REQUEST',
  ADD_TASK_ITEM_SUCEESS: 'ADD_TASK_ITEM_SUCEESS',
  ADD_TASK_ITEM_ERROR: 'ADD_TASK_ITEM_ERROR',
  DELETE_TASK_LIST_REQUEST: 'DELETE_TASK_LIST_REQUEST',
  DELETE_TASK_LIST_SUCCESS: 'DELETE_TASK_LIST_SUCCESS',
  DELETE_TASK_LIST_ERROR: 'DELETE_TASK_LIST_ERROR',
};

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

export const deleteTodoSuccess = id => ({
  type: Actions_Types.DELETE_TODO_SUCCESS,
  payload: { id },
});

export const deleteTodoError = err => ({
  type: Actions_Types.DELETE_TODO_ERROR,
  payload: { err },
});
//

// add task list

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
