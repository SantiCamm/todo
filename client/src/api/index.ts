import axios from 'axios'
import {Todo, googleToken} from '../utils/Interfaces'

const todosAPI = axios.create({baseURL: "http://localhost:5000"});
const usersAPI = axios.create({baseURL: "http://localhost:5000"});

todosAPI.interceptors.request.use((req) => {
    const data = JSON.parse(localStorage.getItem("profile") || "{}");

    if(!req?.headers) {
        throw new Error(`Expected 'req' and 'req.headers' not to be undefined`);
    }
    
      if (data.token) {
        req.headers.authorization = `Bearer ${
          data.token
        }`;
      }
      return req;
    });

//todosAPI
export const fetchTodos = () => todosAPI.get("/todos")
export const addTodo = (todo : Todo ,config : object) => todosAPI.post("/todos", todo, config);
export const deleteTodo = (todoId : string) => todosAPI.delete(`/todos/${todoId}`)

//usersAPI
export const googleLogin = (token: googleToken) => usersAPI.post("/users/auth", token);