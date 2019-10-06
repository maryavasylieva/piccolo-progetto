import { connect } from 'react-redux';
import { addTodo, deleteTaskList } from '../../../redux/todo/todoOperations';
import Todo from './TodoSection';

const mDTP = {
  addTodo,
  deleteTaskList,
};

export default connect(
  null,
  mDTP,
)(Todo);
