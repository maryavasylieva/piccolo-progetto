import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ task }) => <p>{task}</p>;

TodoItem.defaultProps = {
  task: ""
};

TodoItem.propTypes = {
  task: PropTypes.string
};

export default TodoItem;
