import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { todos } from "../../../redux/todo/todoSelectors";

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

const mSTP = state => ({
  todos: todos(state)
});

export default connect(mSTP)(TodoList);
