

//ACTION TYPE 
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'


let nextOneId = 1;

//ACTION CREATOR 
 export const addTodo = task => {
   return{
     type: "ADD_TODO",
     id: nextOneId++,
     task,
     
   }
   
}

export const toggleTodo = id => {
    return {
      type: "TOGGLE_TODO",
      id
    };
  };

export const clearTodo = id => {
    return {
      type: "CLEAR_TODO",
      id
    };
  };