import { axiosPrivate } from '../api/axios';
import useAuth from './useAuth';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from './useAppDispatch';
import { fetchLoginWithToken, fetchUserData } from '../redux/Slices/authSlice';

const useTokenToLogin = () => {
  const { isAuthenticated, loading } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const dispatch = useAppDispatch();
  if (!isAuthenticated && !loading) {
    if (cookies.refresh) {
      const requestIntercept = axiosPrivate.interceptors.request.use(
        (config) => {
          config.headers['Authorization'] = `Bearer ${cookies?.refresh}`;
          return config;
        },
        (error) => Promise.reject(error)
      );
      const req = dispatch(fetchLoginWithToken(cookies.refresh));
      req.then((res) => {
        dispatch(fetchUserData(res.payload.access));
      });
      return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
      };
    }
  }
  return;
};

export default useTokenToLogin;
