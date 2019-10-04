import React, { Component } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
// import styles from "./Todo.module.css"

class Todo extends Component {
  state = { isAdding: false, todoInput: "" };

  componentDidMount() {
    this.props.getTodos();
  }

  handleTodoAddClick = () => this.setState({ isAdding: true });
  handleCancelEdit = () => this.setState({ isAdding: false });

  handleTodoInputChange = ({ target: { value } }) =>
    this.setState({ todoInput: value });

  handleTodoSubmit = (e) => {
    e.preventDefault();

    if (this.state.todoInput.trim().length === 0) return;

    this.props.addTodo(this.state.todoInput);

    this.setState({ todoInput: "", isAdding: false });
  };

  render() {
    const { isAdding, todoInput } = this.state;
    return (
      <section>
        <button type="button" onClick={this.handleTodoAddClick}>
          Add todo
        </button>
        <TodoList />
        {isAdding && (
          <TodoForm
            // className = {styles.todoForm}
            isAdding={isAdding}
            onSubmit={this.handleTodoSubmit}
            onCancel={this.handleCancelEdit}
            onInputChange={this.handleTodoInputChange}
            value={todoInput}
          />
        )}
        {!isAdding && (
          <button type="button" onClick={this.handleTodoAddClick}>
            Add todo
          </button>
        )}
      </section>
    );
  }
}

export default Todo;
