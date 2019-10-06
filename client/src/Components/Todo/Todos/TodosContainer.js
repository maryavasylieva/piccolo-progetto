import Todos from './Todos';
import { connect } from 'react-redux';
import { todos } from '../../../redux/todo/todoSelectors';

const mSTP = state => ({
  todos: todos(state),
});

export default connect(mSTP)(Todos);
