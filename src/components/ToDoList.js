import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      hovering: false
    }
  }

  onMouseOver = () => {
    this.setState({ hovering: true })
  }

  onMouseLeave = () => {
    this.setState({ hovering: false })
  }

  render() {
    const { hovering } = this.state;
    const { todo, removeTodo, onChange } = this.props;

    return (
      <>
        <li 
          className={"toDoList" + (todo.completed ? 'strikethrough' : '')} 
          onMouseEnter={this.onMouseOver} 
          onMouseLeave={this.onMouseLeave}>
            {todo.value} {hovering && <button onClick={(e) => removeTodo(e, todo.id)}>x</button>}
            <input type="checkbox" onChange={(e) => onChange(e, todo.id)} />
        </li>
      </>
    );
  }
}

export default ToDoList;

ToDoList.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};


