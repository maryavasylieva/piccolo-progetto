import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import AddTaskBTN from '../AddTaskBTN/AddTaskBTN';

class Todo extends Component {
  static defaultProps = {
    title: '',
  };

  state = { isAdding: false, todoInput: '' };

  handleTodoAddClick = () => this.setState({ isAdding: true });

  handleCancelEdit = () => this.setState({ isAdding: false });

  handleTodoInputChange = ({ target: { value } }) =>
    this.setState({ todoInput: value });

  handleTodoSubmit = e => {
    e.preventDefault();

    if (this.state.todoInput.trim().length === 0) return;

    this.props.addTodo(this.state.todoInput);

    this.setState({ todoInput: '', isAdding: false });
  };

  render() {
    const { isAdding, todoInput } = this.state;
    const { title, todos } = this.props;
    return (
      <section>
        <h3>{title}</h3>
        <AddTaskBTN handleTodoAddClick={this.handleTodoAddClick} />
        {todos.length && (
          <TodoList
            isAdding={isAdding}
            handleTodoAddClick={this.handleTodoAddClick}
            todos={todos}
          />
        )}
        {isAdding ? (
          <TodoForm
            onSubmit={this.handleTodoSubmit}
            onCancel={this.handleCancelEdit}
            onInputChange={this.handleTodoInputChange}
            value={todoInput}
          />
        ) : (
          <AddTaskBTN handleTodoAddClick={this.handleTodoAddClick} />
        )}
      </section>
    );
  }
}

export default Todo;
