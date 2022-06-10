import { useState }       from 'react';
import LoginForm                     from '../LoginForm';


const Login = () => {
  const [token, setToken]       = useState(null);
  
  
  if (!token) {
    return (
      <div>
        {/* <Notify errorMessage={errorMessage} /> */}
        <LoginForm
          setToken={setToken}
          // setError={notify}
        />
      </div>
    )
  }


}

export default Login;