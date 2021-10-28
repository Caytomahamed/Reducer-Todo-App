import React,{useState} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css';


const App = () =>  {
  const data = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'watching tv',
      id: 1528817084359,
      completed: false
    }
  ];
  

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

      <div className='todo'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <TodoForm add={addTask} clear = {clear}/>
        <TodoList lists={appList} completed={completed}/>
      </div>

    );
  }

export default App;
