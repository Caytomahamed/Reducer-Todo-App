import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/Todoaction"
import '../App.css'

class TodoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            newTask : ""
        }
    }


    handleChange = (event) => {
        this.setState({
             newTask: event.target.value
        })
           
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTask)
        // {(event.target.value) === "" ? alert('please Enter something') :
        // this.props.add(this.state.newTask)
        // }
        this.setState({
            newTask : ''
        })
    }
   
    render(){
        console.log(this.props.task);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name='newtask'
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    placeholder='To do list '
                    />
                    <button className='add'>Add Todo</button>
                    <button   className='clearBtn'
                     onClick={this.props.clear}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        task: state.task
    }
  }

export default  connect(mapStateToProps, {addTodo})(TodoForm);