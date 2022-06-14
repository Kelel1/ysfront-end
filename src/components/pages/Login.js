import { useState } from 'react';
import LoginForm    from '../LoginForm';
import StoreFront   from './StoreFront';


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

  return (
    <div>
      <StoreFront/>
    </div>
  )


}

export default Login;