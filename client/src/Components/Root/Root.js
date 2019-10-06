import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../redux/todo/todoOperations';
import TodosContainer from '../Todo/Todos/TodosContainer';

class Root extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return <TodosContainer />;
  }
}

const mDTP = { getTodos };

export default connect(
  null,
  mDTP,
)(Root);
