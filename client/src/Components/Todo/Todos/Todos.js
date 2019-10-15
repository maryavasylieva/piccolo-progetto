import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoSectionContainer from '../TodoSection/TodoSectionContainer';
import css from './Todos.module.css';
import TodoForm from '../TodoForm/TodoForm';

class Todos extends Component {
  static defaultProps = {
    addTaskList: () => null,
    todos: [],
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    addTaskList: PropTypes.func,
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

    this.setState({ isAdding: false, inputValue: '' });
  };

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    this.props.sortTaskItem({
      startID: source.droppableId,
      endID: destination.droppableId,
      startIndex: source.index,
      EndIndex: destination.index,
      draggableId,
      type,
    });
  };

  render() {
    const { isAdding, inputValue } = this.state;
    const { todos } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <Droppable
            droppableId="all-todo-lists"
            direction="horizontal"
            type="list"
          >
            {provided => (
              <ul
                className={css.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((todo, index) => (
                  <li key={todo._id} className={css.item}>
                    <TodoSectionContainer {...todo} index={index} />
                  </li>
                ))}
                {provided.placeholder}
                <li key="addNext" className={css.item}>
                  {isAdding ? (
                    <TodoForm
                      list
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
                </li>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

export default Todos;
