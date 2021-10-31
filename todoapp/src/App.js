import React,{useState} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css';
import { TodoContext } from './context/Todocontext';
import  {data}  from './data';

const App = () =>  {

  const [appList,setAppList] = useState(data)

  //ADD NEW TASK 

 const addTask = event => {
    const addNew = {
      task: event,
      id: Date.now(),
      completed: false
    }

    setAppList([...appList, addNew])
  }


  const completed = (id) => {
    const completedTask = appList.map(clickOne => {
      if(clickOne.id === id ){
        return {
          ...clickOne,
          completed:!clickOne.completed
        }
      }
      
        else {
          return clickOne
        }

    })

    setAppList(completedTask)
  }

  const clear = e  =>{
    e.preventDefault();
    let clearOne = appList.slice()
    clearOne =clearOne.filter(one => !one.completed)
    setAppList(clearOne)
  }
console.log(appList);
    return (
      <TodoContext.Provider value={appList}>
      <div className='todo'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <TodoForm />
        <TodoList completed={completed}/>
      </div>
      </TodoContext.Provider>
    );
  }

export default App;
