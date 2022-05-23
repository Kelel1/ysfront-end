import { Input, Stack } from '@chakra-ui/react';

const Login = () => {
    return (
        <Stack spacing={5} htmlSize={5} width={5}>
            <h4>Username</h4>
                <Input variant='filled'/>
            <h4>Password</h4>
                <Input variant='filled'/>
        </Stack>
    )
}

export default Login;