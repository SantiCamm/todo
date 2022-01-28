import { createContext, useReducer } from "react"
import TodosReducer from "./TodosReducer"
import { GlobalProviderProps, State, Action } from "../utils/Interfaces"

const initialState = {
    todos: []
}

export const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>
}>({ state: initialState, dispatch: () => { } });

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [state, dispatch] = useReducer(TodosReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
    )
}