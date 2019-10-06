import axios from 'axios';
import * as todoActions from './todoActions';

axios.defaults.baseURL = 'http://localhost:5678';

export const getTodos = () => dispatch => {
  dispatch(todoActions.getTodosRequest());

  return axios
    .get('/todo')
    .then(({ data }) => dispatch(todoActions.getTodosSuccess(data.todos)))
    .catch(err => dispatch(todoActions.getTodosError(err)));
};

export const addTodo = credentials => dispatch => {
  dispatch(todoActions.addTodoRequest());
  const todo = { task: credentials };
  return axios
    .post('/todo', todo)
    .then(({ data }) => dispatch(todoActions.addTodoSuccess(data.todo)))
    .catch(err => dispatch(todoActions.addTodoError(err)));
};

export const deleteTodo = credentials => dispatch => {
  dispatch(todoActions.deleteTodoRequest());
  const todoId = credentials;

  return axios
    .delete(`/todo/${todoId}`)
    .then(({ data }) => dispatch(todoActions.deleteTodoSuccess(data._id)))
    .catch(err => dispatch(todoActions.deleteTodoError(err)));
};
