import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo._id}>
        <TodoItem {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: []
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
};

export default TodoList;
