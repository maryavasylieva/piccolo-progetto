import { connect } from 'react-redux';
import { getTodos, addTodo } from '../../redux/todo/todoOperations';
import Todo from './Todo';

const mDTP = {
  getTodos,
  addTodo,
};

export default connect(
  null,
  mDTP,
)(Todo);
