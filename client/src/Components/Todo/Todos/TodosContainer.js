import Todos from './Todos';
import { connect } from 'react-redux';
import { addTaskList, sortTaskItem } from '../../../redux/todo/todoOperations';
import { todos } from '../../../redux/todo/todoSelectors';

const mSTP = state => ({
  todos: todos(state),
});

const mDTP = {
  addTaskList,
  sortTaskItem,
};

export default connect(
  mSTP,
  mDTP,
)(Todos);
