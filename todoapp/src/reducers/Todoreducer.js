import { ADD_TODO, CLEAR_TODO, TOGGLE_TODO} from "../actions/Todoaction";


const initialState = {
      todos:[
        {
        id : Date.now(),
        task: 'eat food',
        completed: false
      },
        {
        id : Date.now(),
        task: 'go work',
        completed: true
      },
        {
        id : Date.now(),
        task: 'shopping',
        completed: false
      },
        {
        id : Date.now(),
        task: 'watching a tv ',
        completed: false
      },
        {
        id : Date.now(),
        task: 'learn something',
        completed: true
      },
    ]
};

  export const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TODO:
        return {
          todos :[
            ...state.todos,
            {
              id: action.id,
              task: action.task,
              completed: false
            }
          ]
        };

      case TOGGLE_TODO:
        let s = './s.wav'
        // let play = false
        // let audio = new Audio(s).play;
        // audio.addEventListener('ended', () =>  play == false);
        // audio.removeEventListener('ended', () =>  play= false);  
        console.log(s);
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo,
          ),
        };

        case CLEAR_TODO : 
        return  {...state, todos: state.todos.filter(todo => !todo.completed )}
       

      default:
        return state;
    }
  };



