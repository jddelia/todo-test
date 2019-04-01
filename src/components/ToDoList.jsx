import React,{Component} from 'react';
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering:false
        }
    }

    onMouseOver=()=>{
        this.setState({hovering:true})
    }

    onMouseLeave=()=>{
        this.setState({hovering:false})
    }

    render() {
        const {hovering} = this.state;
        const { todo, onMouseOver, onMouseLeave, removeTodo,onChange} = this.props;
        return (<>
        <li className={todo.completed ? 'strikethrough' : ''} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>{todo.value} {hovering&&<button onClick={(e) => removeTodo(e, todo.id)}>x</button>}<input type="checkbox" onChange={(e) => onChange(e, todo.id)} /></li>
        </>);
    }
}

export default ToDoList;

// const ToDoList = ({ todo, onMouseOver, onMouseLeave, removeTodo }) => {
//     <div>
//         <ul><li class={todo.completed ? 'strikethrough' : ''} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>{todo.value} <button onClick={(e) => this.removeTodo(e, todo.id)}>x</button><input type="checkbox" onChange={(e) => this.onChecked(e, todo.id)} /></li></ul>
//     </div>
// }