import React, { Component } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import PropTypes from 'prop-types';
import TodoList from '../TodoList/TodoList';
import AddTaskBTN from '../AddTaskBTN/AddTaskBTN';
import css from './TodoSection.module.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class Todo extends Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    index: PropTypes.number.isRequired,
  };

  state = { isAdding: false, todoInput: '' };

  handleTodoAddClick = () => this.setState({ isAdding: true });

  handleCancelEdit = () => this.setState({ isAdding: false });

  handleTodoInputChange = ({ target: { value } }) =>
    this.setState({ todoInput: value });

  handleTodoSubmit = e => {
    e.preventDefault();

    if (this.state.todoInput.trim().length === 0) return;

    this.props.addTodo({ task: this.state.todoInput, id: this.props._id });
    this.setState({ todoInput: '', isAdding: false });
  };

  render() {
    const { isAdding, todoInput } = this.state;
    const { title, todos, _id: id, index } = this.props;
    return (
      <section className={css.todoSection}>
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <div
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
            >
              <Droppable droppableId={String(id)}>
                {provided => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <h3>{title}</h3>
                    <button
                      type="button"
                      onClick={() => this.props.deleteTaskList(id)}
                    >
                      Delete task list
                    </button>
                    {todos.length > 0 && (
                      <TodoList
                        isAdding={isAdding}
                        handleTodoAddClick={this.handleTodoAddClick}
                        todos={todos}
                        listID={id}
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
                      <AddTaskBTN
                        handleTodoAddClick={this.handleTodoAddClick}
                      />
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          )}
        </Draggable>
      </section>
    );
  }
}

export default Todo;
