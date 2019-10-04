import React from "react";
import PropTypes from "prop-types";

const TodoForm = ({ isAdding, onSubmit, onInputChange, value }) =>
  isAdding && (
    <form action="GET" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onInputChange} />
      <button type="submit">submit todo</button>
    </form>
  );

TodoForm.defaultProps = {
  isAdding: false,
  onSubmit: () => null,
  onInputChange: () => null,
  value: ""
};

TodoForm.propTypes = {
  isAdding: PropTypes.bool,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string
};

export default TodoForm;
