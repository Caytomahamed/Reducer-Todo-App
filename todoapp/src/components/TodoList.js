// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React,{useContext} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Todoaction';
import { TodoContext } from '../context/Todocontext';
import Todo from './Todo';

const TodoList = (props) => { 
    const TodoReducerList = props.todos
    const lists = useContext(TodoContext)
    console.log('todoList', props.todos);
    console.log('todoList', TodoReducerList);
    return(
            <div >
               {TodoReducerList.map( list => (
                   <Todo data = {list} key={list.id} completed={props.completed} />
               ))}
            </div>
        )
    }

 const map = state => {
     
    return {
        todos: [
            ...state.todos,
        {
            id:state.id,
            task:state.task,
            completed:state.completed
        }]
        
    }
 }

export default connect(map, {addTodo})(TodoList);