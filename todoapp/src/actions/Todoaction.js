

//ACTION TYPE 
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


let nextOneId =1

//ACTION CREATOR 
 export const addTodo = task => {
   return{
     type: "ADD_TODO",
     id:nextOneId++,
     task,
     completed :false
     
   }
   
}

export const toggleTodo = id => {
    return {
      type: "TOGGLE_TODO",
      id
    };
  };