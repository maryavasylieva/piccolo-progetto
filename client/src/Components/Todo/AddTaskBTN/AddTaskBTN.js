import React from 'react';
import PropTypes from 'prop-types';

const AddTaskBTN = ({ handleTodoAddClick }) => (
  <button type="button" onMouseDown={() => handleTodoAddClick()}>
    Add todo
  </button>
);

AddTaskBTN.defaultProps = {
  handleTodoAddClick: () => null,
};

AddTaskBTN.propTypes = {
  handleTodoAddClick: PropTypes.func,
};

export default AddTaskBTN;
