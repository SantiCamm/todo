import React, { createContext, useReducer } from "react"
import TodosReducer from "./TodosReducer"
import { GlobalProviderProps, State, Action, googleToken, googleLoginFunction, Todo } from "../utils/Interfaces"
import * as api from "../api"

const initialState = {
    todos: [],
    isLoading: true,
}

export const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>
    googleLogin: googleLoginFunction,
    logout: Function,
    getTodos: Function,
    addTodo: Function,
    deleteTodo: Function,
}>({
    state: initialState,
    dispatch: () => { },
    googleLogin: (token, navigate) => { },
    logout: (navigate : Function) => { },
    getTodos: () => { },
    addTodo: (todo: Todo) => { },
    deleteTodo: (todoId: string) => { },
})

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [state, dispatch] = useReducer(TodosReducer, initialState);

    async function googleLogin(token: string, navigate: Function) {
        try {
            const googleUserData = await api.googleLogin({ token });
            dispatch({
                type: "GOOGLE_LOGIN",
                payload: googleUserData.data,
            });
            navigate("/todos")
        } catch (error) {
            console.log(error);
        }
    }

    function logout(navigate : Function) {
        dispatch({
          type: "LOGOUT",
        });
        navigate("/login");
      }

    async function getTodos() {
        try {
            const todos = await api.fetchTodos();
            dispatch({
                type: "GET_TODOS",
                payload: todos.data.data,
            });

        } catch (error) {
            console.log(error)
        }
    }

    async function addTodo(todo: Todo) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const res = await api.addTodo(todo, config);
            dispatch({
                type: "ADD_TODO",
                payload: res.data.data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteTodo(todoId: string) {
        try {
            await api.deleteTodo(todoId);
            dispatch({ type: "DELETE_TODO", payload: todoId })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch,
                googleLogin,
                logout,
                getTodos,
                addTodo,
                deleteTodo,
            }}>{children}</GlobalContext.Provider>
    )
}