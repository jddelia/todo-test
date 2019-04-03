import React, { Component } from 'react';
import Counter from '../components/ToDoCounter';
import ToDoList from '../components/ToDoList';
import { formatCount } from '../utils';
import { ENTER_KEY_CODE } from '../constants';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      toDos: [],
      toDoInput: ""
    };
  }

  handleKeyPress = (e) => {
    const toDos = [...this.state.toDos];

    if (e.charCode === ENTER_KEY_CODE) {
      if (!e.target.value.trim()) {
        alert("Please Enter the ToDo Task");
        return;
      }
        
      let toDoObj;

      if (toDos.length) {
        toDoObj = { 
          id: toDos[toDos.length - 1].id + this.state.toDoInput.length, 
          completed: false, 
          value: e.target.value 
        };
      } else {
        toDoObj = { 
          id: 1, 
          completed: false, 
          value: e.target.value 
        };
      }

      toDos.push(toDoObj);
      this.setState({ toDos });
    }
  }

  onChange = (e, todoId) => {
    const toDos = [...this.state.toDos];

    toDos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });

    this.setState({ toDos });
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  removeTodo = (e, todoId) => {
    const toDos = [...this.state.toDos];

    const newToDos = toDos.filter(toDo => {
      return toDo.id !== todoId;
    });

    this.setState({ toDos: newToDos });
  }

  render() {
    const { toDos, toDoInput } = this.state;
    
    return (
      <>
        <div className="flexItem header">To-Do</div>
        <div className="flexItem">
          <input name="toDoInput" 
            value={toDoInput} 
            onChange={this.onInputChange} 
            type="text" 
            placeholder="New" 
            onKeyPress={this.handleKeyPress} 
            autoFocus />
          <span>+</span>
        </div>
        {toDos.map((todo) => {
          return (
            <ul key={todo.id}>
              <ToDoList todo={todo} 
                onChange={this.onChange} 
                removeTodo={this.removeTodo} />
            </ul>
          );
        })}
        <Counter count={formatCount(toDos)} />
      </>
    );
  }
}

export default ToDo;