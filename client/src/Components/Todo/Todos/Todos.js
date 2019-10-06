import React from 'react';
import PropTypes from 'prop-types';
import TodoSectionContainer from '../TodoSection/TodoSectionContainer';
import css from './Todos.module.css';

const Todos = ({ todos }) =>
  todos.length > 0 && (
    <ul className={css.list}>
      {todos.map(todo => (
        <li key={todo._id} className={css.item}>
          <TodoSectionContainer {...todo} />
        </li>
      ))}
    </ul>
  );

Todos.defaultProps = {
  todos: [],
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default Todos;
