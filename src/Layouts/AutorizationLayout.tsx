import { Outlet } from 'react-router-dom';
import Header from './../components/Header/Header';

const AutorizationLayout = () => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 65px)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className={'PageWrapper'}>
      <Header AuthHeader={true} style={{ position: 'absolute', top: 0 }} />
      <Outlet />
    </main>
  );
};

export default AutorizationLayout;
