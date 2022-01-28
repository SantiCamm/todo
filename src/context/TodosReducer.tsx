import { State, Action } from '../utils/Interfaces'

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return { ...state, todos: [...state.todos, action.payload] };
        case "DELETE_TRANSACTION":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}

export default reducer;