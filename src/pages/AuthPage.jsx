import React, {useEffect} from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
  const { user, login, register } = useKindeAuth();
  const navigate = useNavigate()


  useEffect(() => {
    // If the user is logged in, redirect them to /profile
    if (user) {
      navigate('/profile');  // After login, navigate to the profile page
    }
  }, [user, navigate]);

  const handleLogin = () => {
    login();  // The user will be redirected to /profile after login
  };

  const handleRegister = () => {
    register();  // The user will be redirected to /profile after registration
  };


  return (
    <div className='Auth'>
      <h2>JOIN US TODAY</h2>
      <div>
      <button className='authBtn' onClick={handleRegister} type="button">Register</button>
      <button  className='authBtn'  onClick={handleLogin}type="button">Log In</button>
      </div>
    </div>
  );
};

export default AuthPage;
