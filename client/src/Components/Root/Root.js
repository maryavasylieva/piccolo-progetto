import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTaskList } from '../../redux/todo/todoOperations';
import TodosContainer from '../Todo/Todos/TodosContainer';
import TodoForm from '../Todo/TodoForm/TodoForm';

class Root extends Component {
  static defaultProps = {
    addTaskList: () => null,
    getTodos: () => null,
  };

  state = {
    isAdding: false,
    inputValue: '',
  };

  handleAddClick = () => this.setState({ isAdding: true });
  handleCancelClick = () => this.setState({ isAdding: false });

  handleInputChange = ({ target: { value } }) =>
    this.setState({ inputValue: value });

  handleFormSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    if (inputValue.trim().length === 0) return console.log('no-no-no');

    this.props.addTaskList(inputValue);
  };

  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    const { isAdding, inputValue } = this.state;
    return (
      <main>
        {isAdding ? (
          <TodoForm
            onSubmit={this.handleFormSubmit}
            value={inputValue}
            onCancel={this.handleCancelClick}
            onInputChange={this.handleInputChange}
          />
        ) : (
          <button type="button" onClick={this.handleAddClick}>
            Add new task list
          </button>
        )}
        <TodosContainer />
      </main>
    );
  }
}

const mDTP = { getTodos, addTaskList };

export default connect(
  null,
  mDTP,
)(Root);
