import { connect } from 'react-redux';
import { addTodo } from '../../../redux/todo/todoOperations';
import Todo from './TodoSection';

const mDTP = {
  addTodo,
};

export default connect(
  null,
  mDTP,
)(Todo);
