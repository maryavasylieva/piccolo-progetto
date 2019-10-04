import React, { Component } from "react";
import TodoForm from "./TodoForm/TodoForm";

class Todo extends Component {
  state = { isAdding: false, todoInput: "" };

  handleTodoAddClick = () => this.setState({ isAdding: true });

  handleTodoSubmit = e => {
    e.preventDefault();

    console.log(this.state.todoInput);

    this.setState({ todoInput: "", isAdding: false });
  };

  handleTodoInputChange = ({ target: { value } }) =>
    this.setState({ todoInput: value });

  render() {
    const { isAdding, todoInput } = this.state;
    return (
      <section>
        <button type="button" onClick={this.handleTodoAddClick}>
          Add todo
        </button>
        {isAdding && (
          <TodoForm
            isAdding={isAdding}
            onSubmit={this.handleTodoSubmit}
            onInputChange={this.handleTodoInputChange}
            value={todoInput}
          />
        )}
      </section>
    );
  }
}

export default Todo;
