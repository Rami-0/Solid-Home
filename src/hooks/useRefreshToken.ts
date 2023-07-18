import { api } from '../api/api_login_register';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await api.get('', {
      withCredentials: true
    });
    console.log(JSON.stringify(auth));
    console.log(response.data.accessToken);
    const newToken: string = response.data.accessToken;
    const first_name: string = response.data.first_name;
    const last_name: string = response.data.last_name;
    const email: string = response.data.email;
    const phone_number: string = response.data.phone_number;
    setAuth({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      accessToken: newToken
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
