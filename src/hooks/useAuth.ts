import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { Login, Logout, SetUser } from '../redux/Slices/authSlice';
import { Iuser, IuserCreds } from '../types/user';

const useAuth = () => {
  const { user, isAuthenticated } = useAppSelector((s) => s.Auth);
  const dispatch = useAppDispatch();
  function setUser(data: Iuser | IuserCreds) {
    dispatch(SetUser(data));
  }
  function handleLogin() {
    dispatch(Login);
  }
  function handleLogout() {
    dispatch(Logout);
  }
  return {
    user,
    setUser,
    isAuthenticated,
    handleLogin,
    handleLogout
  };
};

export default useAuth;
