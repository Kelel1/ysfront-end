import { Input, Stack, Button, Box } from '@chakra-ui/react';
import { useState, useEffect }       from 'react';
import { useMutation }               from '@apollo/client';
import { LOGIN }                     from '../queries';



const LoginForm = ({ setError, setToken }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [ login, result ] = useMutation(LOGIN, {
            onError: (error) => {
            setError(error.graphQLErrors[0].message)
    }
  })

  useEffect(() => {
    if ( result.data ) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('vendor-token', token)
    }
  }, [result.data]) // eslint-disable-line

  const submit = async (event) => {
    event.preventDefault()
    // Test code to see username, password: To be removed later
    console.log(username, password)

    login({ variables: { username, password } })
  }

  
        return (
           <form onSubmit={submit}>
               <Box border='1px' borderColor='#51bc31' mt={40} mr={40} ml={40} width={410}>
                <div> 
                    <Stack spacing={20} py={5} px={20} >
                        <p>
                        Sorry, user login necessary.
                        </p>
                    </Stack>

                    <Stack spacing={1} width={80} ml={10} mb={10}>
                        <p>Username</p>
                            <Input variant='filled'
                                   value={username}
                                   onChange={({ target }) => setUsername(target.value)}/>
                        <p>Password</p>
                            <Input variant='filled'
                                   type='password'
                                   value={password}
                                   onChange={({ target }) => setPassword(target.value)}/>
                    </Stack>
                    <Button borderRightRadius="0" ml={40} mb={5} type='submit'>Sign In</Button>
                </div>
             </Box>
           </form>
        )
    
}

export default LoginForm;