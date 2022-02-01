import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Todos from './pages/Todos';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import PrivateLogin from './routes/PrivateLogin';
import { PrivateRouteProps, PrivateRoutePropsLogin } from "./utils/Interfaces"
import NavBar from './components/NavBar';


const defaultPrivateRouteProps: Omit<PrivateRouteProps, 'outlet'> = {
  authenticationPath: '/login',
};

const defaultPrivateRoutePropsLogin: Omit<PrivateRoutePropsLogin, 'outlet'> = {
  defaultPath: '/todos',
};

function App() {
  const location = useLocation();
  return (
    <>
      {(location.pathname !== "/login") && <NavBar />}
        <Routes>
          <Route path="/todos" element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<Todos />} />} />
          <Route path="/login" element={<PrivateLogin {...defaultPrivateRoutePropsLogin} outlet={<Login />} />} />
        </Routes>
    </>
  );
}

export default App;
