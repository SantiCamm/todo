export interface Todo {
    _id: string,
    text: string,
    completed: boolean
}

export interface Auth {
    user: string,
    success: boolean,
}

export interface TodoProps {
    todo: Todo
}

export type State = {
    todos: Todo[];
    isLoading: boolean;
}

export interface googleToken {
    token: string;
}

export interface googleLoginFunction {
    (token: string, navigate: Function): void,
}

export type Action =
    { type: "GET_TODOS", payload: Todo[] } |
    { type: "ADD_TODO", payload: Todo } |
    { type: "DELETE_TODO", payload: string } |
    { type: "GOOGLE_LOGIN", payload: googleToken } |
    { type: "LOGOUT"}

export interface GlobalProviderProps {
    children: React.ReactNode;
}

export type PrivateRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

export type PrivateRoutePropsLogin = {
    defaultPath: string;
    outlet: JSX.Element;
};
