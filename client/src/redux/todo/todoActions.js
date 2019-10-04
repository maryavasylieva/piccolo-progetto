export const Actions_Types = {
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_ERROR: "GET_TODOS_ERROR",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR: "ADD_TODO_ERROR",
  DELETE_TODO_REQUEST: "DELETE_TODO_REQUEST",
  DELETE_TODO_SUCCESS: "DELETE_TODO_SUCCESS",
  DELETE_TODO_ERROR: "DELETE_TODO_ERROR"
};

// get todos

//
export const getTodosRequest = () => ({
  type: Actions_Types.GET_TODOS_REQUEST
});

export const getTodosSuccess = todos => ({
  type: Actions_Types.GET_TODOS_SUCCESS,
  payload: { todos }
});

export const getTodosError = err => ({
  type: Actions_Types.GET_TODOS_ERROR,
  payload: { err }
});
//

// add todo

//
export const addTodoRequest = () => ({
  type: Actions_Types.ADD_TODO_REQUEST
});

export const addTodoSuccess = todo => ({
  type: Actions_Types.ADD_TODO_SUCCESS,
  payload: { todo }
});

export const addTodoError = err => ({
  type: Actions_Types.ADD_TODO_ERROR,
  payload: { err }
});
//

// delete todo

//
export const deleteTodoRequest = () => ({
  type: Actions_Types.DELETE_TODO_REQUEST
});

export const deleteTodoSuccess = id => ({
  type: Actions_Types.DELETE_TODO_SUCCESS,
  payload: { id }
});

export const deleteTodoError = err => ({
  type: Actions_Types.DELETE_TODO_ERROR,
  payload: { err }
});
//
