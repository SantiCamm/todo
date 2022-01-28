export interface Todo {
    id: string,
    text: string,
    completed: boolean
}

export interface TodoProps {
    todo : Todo
  }

export type State = {
    todos: Todo[];
}

export type Action = {
    type: "ADD_TRANSACTION", payload: Todo
} | { type: "DELETE_TRANSACTION", payload: string }

export interface GlobalProviderProps {
    children: React.ReactNode;
}