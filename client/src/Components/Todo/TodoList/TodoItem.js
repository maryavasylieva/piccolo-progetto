import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../redux/todo/todoOperations';

const TodoItem = ({ task, _id: id, deleteTodo, listID }) => (
  <>
    <p>{task}</p>
    <button type="button">edit task</button>
    <button type="button" onClick={() => deleteTodo({ listID, taskID: id })}>
      delete task
    </button>
  </>
);

TodoItem.defaultProps = {
  task: '',
  deleteTodo: () => null,
};

TodoItem.propTypes = {
  task: PropTypes.string,
  _id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func,
};

const mDTP = { deleteTodo };

export default connect(
  null,
  mDTP,
)(TodoItem);
