import React from 'react';
import ReactFacebookLogin from 'react-facebook-login';

interface LoginProps {
  setIsLoggedIn: any;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const responseFacebook = (response: any) => {
    console.log(response);
    if (response?.accessToken !== undefined) {
      setIsLoggedIn(true);
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ReactFacebookLogin
          appId='560659014986431'
          autoLoad={true}
          fields='name,email,picture'
          onClick={() => {}}
          callback={responseFacebook}
        />
      </div>
    </>
  );
};

export default Login;
