import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import css from './TodoList.module.css';

const TodoList = ({ todos }) => (
  <ul className={css.list}>
    {todos.map(todo => (
      <li key={todo._id} className={css.item}>
        <TodoItem {...todo} />
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
