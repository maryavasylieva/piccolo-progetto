import axios from "axios";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError
} from "./todoActions";

axios.defaults.baseURL = "http://localhost:5678";

export const getTodos = () => dispatch => {
  dispatch(getTodosRequest());

  return axios
    .get("/todo")
    .then(({ data }) => dispatch(getTodosSuccess(data.todos)))
    .catch(err => dispatch(getTodosError(err)));
};

export const addTodo = credentials => dispatch => {
  dispatch(addTodoRequest());
  const todo = { task: credentials };
  return axios
    .post("/todo", todo)
    .then(({ data }) => dispatch(addTodoSuccess(data.todo)))
    .catch(err => dispatch(addTodoError(err)));
};

export const deleteTodo = credentials => dispatch => {};
