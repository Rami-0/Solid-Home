import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { Login, Logout } from '../redux/Slices/authSlice';

const useAuth = () => {
  const { user, isAuthenticated } = useAppSelector((s) => s.Auth);
  const dispatch = useAppDispatch();
  function handleLogin() {
    dispatch(Login);
  }
  function handleLogout() {
    dispatch(Logout);
  }
  return {
    user,
    isAuthenticated,
    handleLogin,
    handleLogout
  };
};

export default useAuth;
