import React, { Component } from 'react';
import Counter from '../components/ToDoCounter';
import ToDoList from '../components/ToDoList';
import { formatCount } from '../utils';
import {ENTERKEYCODE} from '../constants';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            disabled: true
        }
    }

    formValidation=(input)=>{
        debugger;
        if(!input.trim())
        {
            alert("Please Enter the ToDo Task")
            return;
        }
    }

    handleKeyPress = (e) => {
        const toDos = [...this.state.toDos];
        if (e.charCode == ENTERKEYCODE) {
            if(!e.target.value.trim()){
                alert("Please Enter the ToDo Task")
                return;
            }
            if (toDos.length) {
                var toDoObj = { id: toDos[toDos.length - 1].id + 1, completed: false, value: e.target.value }
            }
            else {
                var toDoObj = { id: 1, completed: false, value: e.target.value }
            }
            toDos.push(toDoObj);
            this.setState({ toDos });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({ disabled: false })
    }

    onChange = (e, todoid) => {
        const toDos = [...this.state.toDos];
        toDos.forEach((todo) => {
            if (todo.id === todoid) {
                todo.completed = !todo.completed;
            }
        })
        this.setState({ toDos });
    }

    removeTodo = (e, todoid) => {
        const toDos = [...this.state.toDos];
        toDos.splice(toDos.findIndex((todo) => todo.id === todoid), 1);
        this.setState({ toDos });
    }

    render() {
        const { disabled, toDos } = this.state;
        return (<>
            To-Do
        <div><input type="text" placeholder="New" onKeyPress={this.handleKeyPress} autoFocus /><button type="submit" onClick={this.onSubmit}>+</button></div>
            {toDos.map((todo) => <ul>
                <ToDoList todo={todo} onChange={this.onChange} removeTodo={this.removeTodo}/>
                </ul>)}
            <Counter count={formatCount(toDos)} />
        </>);
    }
}

export default ToDo;