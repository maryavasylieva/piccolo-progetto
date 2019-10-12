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

export const addTaskList = credentials => dispatch => {
  dispatch(todoActions.addTaskItemRequest());
  const todo = { title: credentials, todos: [] };
  return axios
    .post('/todo', todo)
    .then(({ data }) => dispatch(todoActions.addTaskItemSuccess(data.todo)))
    .catch(err => dispatch(todoActions.addTaskItemError(err)));
};

export const addTodo = credentials => dispatch => {
  dispatch(todoActions.addTodoRequest());
  const { task, id } = credentials;
  const todo = { task };
  return axios
    .put(`/todo/${id}`, todo)
    .then(({ data }) => dispatch(todoActions.addTodoSuccess(data)))
    .catch(err => dispatch(todoActions.addTodoError(err)));
};

export const deleteTaskList = credentials => dispatch => {
  dispatch(todoActions.deleteTaskListRequest());
  const todoId = credentials;
  return axios
    .delete(`/todo/${todoId}`)
    .then(({ data }) => dispatch(todoActions.deleteTaskListSuccess(data._id)))
    .catch(err => dispatch(todoActions.deleteTaskListError(err)));
};

export const deleteTodo = ({ listID, taskID }) => dispatch => {
  dispatch(todoActions.deleteTodoRequest());
  return axios
    .put(`/task/${listID}?task=${taskID}`)
    .then(({ data }) => dispatch(todoActions.deleteTodoSuccess(data)))
    .catch(err => dispatch(todoActions.deleteTodoError(err)));
};

export const sortTaskItem = credentials => dispatch => {
  dispatch(todoActions.sortTaskItemsRequest());
  const { startID, endID, startIndex, EndIndex, draggableId } = credentials;
  console.log(credentials);
};
