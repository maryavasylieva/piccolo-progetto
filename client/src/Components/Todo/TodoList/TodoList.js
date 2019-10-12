import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import css from './TodoList.module.css';

const TodoList = ({ todos, listID }) => (
  <ul className={css.list}>
    {todos.map((todo, index) => (
      <li key={todo._id} className={css.item}>
        <TodoItem listID={listID} {...todo} index={index} />
      </li>
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
