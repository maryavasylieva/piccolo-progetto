import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

const TodoForm = ({ onSubmit, onInputChange, value, onCancel, list }) => {
  const placeholder = list ? 'Add new list' : 'Add new task';
  return (
    <form action="GET" onSubmit={onSubmit}>
      {list ? (
        <input
          type="text"
          value={value}
          onChange={onInputChange}
          placeholder={placeholder}
          autoFocus
        />
      ) : (
        <Textarea
          value={value}
          onChange={onInputChange}
          autoFocus
          placeholder={placeholder}
        />
      )}
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

TodoForm.defaultProps = {
  isAdding: false,
  onSubmit: () => null,
  onInputChange: () => null,
  value: '',
  onCancel: () => null,
  list: false,
};

TodoForm.propTypes = {
  isAdding: PropTypes.bool,
  list: PropTypes.bool,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  onCancel: PropTypes.func,
};

export default TodoForm;
