import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { SetUser } from '../redux/Slices/authSlice';
import { Iuser } from '../types/user';

const useAuth = () => {
  const { auth, isAuthenticated } = useAppSelector((s) => s.Auth);
  const dispatch = useAppDispatch();
  function setAuth(data: Iuser) {
    dispatch(SetUser(data));
  }
  // function handleLogin() {
  //   dispatch(Login);
  // }
  // function handleLogout() {
  //   dispatch(Logout);
  // }
  return {
    auth,
    setAuth,
    isAuthenticated
    // handleLogin,
    // handleLogout
  };
};

export default useAuth;
