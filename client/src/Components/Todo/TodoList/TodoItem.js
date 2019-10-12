import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../redux/todo/todoOperations';
import css from './TodoItem.module.css';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ task, _id: id, deleteTodo, listID, index }) => (
  <Draggable draggableId={String(id)} index={index}>
    {provided => (
      <div
        className={css.TodoItemWrapper}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <p className={css.taskText}>{task}</p>
        <button type="button">edit task</button>
        <button
          type="button"
          onClick={() => deleteTodo({ listID, taskID: id })}
        >
          delete task
        </button>
      </div>
    )}
  </Draggable>
);

TodoItem.defaultProps = {
  task: '',
  deleteTodo: () => null,
};

TodoItem.propTypes = {
  task: PropTypes.string,
  _id: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func,
  index: PropTypes.number.isRequired,
};

const mDTP = { deleteTodo };

export default connect(
  null,
  mDTP,
)(TodoItem);
