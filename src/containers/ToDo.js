import React,{Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            toDos: [],
            disabled: true
        }
    }


    handleKeyPress=(e)=>{
        const toDos =[...this.state.toDos];
        if(e.charCode=='13'){
            if(toDos.length){
                var toDoObj = {id:toDos[toDos.length-1].id+1,completed:false,value:e.target.value}
            }
            else{
                var toDoObj = {id:1,completed:false,value:e.target.value}
            }
            toDos.push(toDoObj);
            this.setState({toDos});
        }
   

    }

    onSubmit=(e)=>{
        e.preventDefault();   
        this.setState({disabled:false})
    }

    onChecked=(e,todoid)=>{
        const toDos =[...this.state.toDos];
        toDos.forEach((todo)=>{
            if(todo.id===todoid&&e.target.checked)
            todo.completed=true;
            else
            todo.completed=false;

        })
        this.setState({toDos});        
    }

    removeTodo=(e,todoid)=>{
        const toDos =[...this.state.toDos];
        toDos.splice(toDos.findIndex((todo)=>todo.id===todoid),1);
        this.setState({toDos});
    }

    render() { 
        const {disabled,toDos} = this.state;
        return (<>
        To-Do 
        <div><input type="text" placeholder="New" onKeyPress={this.handleKeyPress} autoFocus/><button type="submit" onClick={this.onSubmit}>+</button></div>
        {toDos.map((todo)=><ul><li>{todo.value} <button onClick={(e)=>this.removeTodo(e,todo.id)}>x</button><input type="checkbox" onChange={(e)=>this.onChecked(e,todo.id)}/></li></ul>)}
        </> );
    }
}
 
export default ToDo;