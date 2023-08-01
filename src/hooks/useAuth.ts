import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { SetUser, handleLogout } from '../redux/Slices/authSlice';
import { Iuser } from '../types/user';

const useAuth = () => {
  const { auth, isAuthenticated, user_id, loading } = useAppSelector((s) => s.Auth);
  const dispatch = useAppDispatch();
  function setAuth(data: Iuser) {
    dispatch(SetUser(data));
  }
  function Logout() {
    dispatch(handleLogout());
  }
  return {
    auth,
    setAuth,
    isAuthenticated,
    user_id,
    loading,
    Logout
  };
};

export default useAuth;
