import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTaskList } from '../../redux/todo/todoOperations';
import TodosContainer from '../Todo/Todos/TodosContainer';

class Root extends Component {
  static defaultProps = {
    getTodos: () => null,
  };

  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <main>
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
