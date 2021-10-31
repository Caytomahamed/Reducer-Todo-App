import { ADD_TODO } from "../actions/Todoaction";


const initialState = {
      id :  Math.floor(Math.random() * 5000 * 0),
      task :'',
      completed: false
};

  export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
              id: action.id,
              task: action.task,
              completed: action.completed,
        };
      // case 'TOGGLE_TODO':
      //   return {
      //     ...state,
      //     todos: state.todos.map(todo =>
      //       todo.id === action.id
      //         ? {
      //             ...state,
      //             completed: !state.completed,
      //           }
      //         : todo,
      //     ),
      //   };
      default:
        return state;
    }
  };