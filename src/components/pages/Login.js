import { Input, Stack, Button, Box } from '@chakra-ui/react';
import { useState }     from 'react';

const Login = () => {

    const[token, setToken] = useState(null);

    if (!token) {
        return (
           <Box border='1px' borderColor='#51bc31' mt={40} mr={40} ml={40} width={410}>
                <div> 
                    <Stack spacing={20} py={5} px={20} >
                        <p>
                        Sorry, user login necessary.
                        </p>
                    </Stack>

                    <Stack spacing={1} width={80} ml={10} mb={10}>
                        <p>Username</p>
                            <Input variant='filled'/>
                        <p>Password</p>
                            <Input variant='filled'/>
                    </Stack>
                    <Button borderRightRadius="0" ml={40} mb={5}>Sign In</Button>
                </div>
             </Box>
        )
    }
    return (
        <Box border='1px' borderColor='#51bc31'>
        <div> 
            <Stack spacing={1} width={60} px={20}>
                <h4>Username</h4>
                    <Input variant='filled'/>
                <h4>Password</h4>
                    <Input variant='filled'/>
            </Stack>
        </div>
     </Box>
    )
}

export default Login;