import React, { Component } from "react";
import axios from "axios";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

class Todo extends Component {
  state = { isAdding: false, todoInput: "", todos: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5678/todo")
      .then(({ data }) => this.setState({ todos: data.todos }));
  }

  handleTodoAddClick = () => this.setState({ isAdding: true });

  handleTodoInputChange = ({ target: { value } }) =>
    this.setState({ todoInput: value });

  handleTodoSubmit = e => {
    e.preventDefault();

    if (this.state.todoInput.trim().length === 0) return;

    axios
      .post("http://localhost:5678/todo", { task: this.state.todoInput })
      .then(({ data }) =>
        this.setState(state => ({ todos: [...state.todos, data.todo] }))
      );

    this.setState({ todoInput: "", isAdding: false });
  };

  render() {
    const { isAdding, todoInput, todos } = this.state;
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
        <TodoList todos={todos} />
      </section>
    );
  }
}

export default Todo;
