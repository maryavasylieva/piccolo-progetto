import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit, onInputChange, value, onCancel }) => (
  <form action="GET" onSubmit={onSubmit}>
    <input type="text" value={value} onChange={onInputChange} />
    <button type="button" onClick={onCancel}>
      Cancel
    </button>
    <button type="submit">Submit</button>
  </form>
);

TodoForm.defaultProps = {
  isAdding: false,
  onSubmit: () => null,
  onInputChange: () => null,
  value: '',
  onCancel: () => null,
};

TodoForm.propTypes = {
  isAdding: PropTypes.bool,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  onCancel: PropTypes.func,
};

export default TodoForm;
