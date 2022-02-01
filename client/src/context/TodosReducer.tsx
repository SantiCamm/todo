import { State, Action } from '../utils/Interfaces'

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "GET_TODOS":
            return { ...state, todos: action.payload, isLoading: false }
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        case "DELETE_TODO":
            return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) };
        case "GOOGLE_LOGIN":
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
            return { ...state, auth: { success: true, user: action.payload } }
        case "LOGOUT":
            localStorage.clear();
            return { ...state, auth: {} };
        default:
            return state;
    }
}

export default reducer;