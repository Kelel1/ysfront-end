import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  const IMAGE = 'https://res.cloudinary.com/kelel/image/upload/v1650761677/a5acbqq6bupgnksbzwxk.jpg'
  
const Card = (props) => {

    return (

        
              <Center py={12}>
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}>
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'200px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: `url(${IMAGE})`,
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}>
                    <Image
                      rounded={'lg'}
                      height={230}
                      width={282}
                      objectFit={'cover'}
                      src={IMAGE}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      Item
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                     Name: {props.name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={700} fontSize={'xl'}>
                        Price: ${props.price}
                      </Text>
                      <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={700} fontSize={'xl'}>
                        Inventory: {props.inventoryCount}
                      </Text>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={700} fontSize={'xl'}>
                        Total on Hold: {props.totalOnHold}
                      </Text>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                      <Text fontWeight={700} fontSize={'xl'}>
                        Description: {props.description}
                      </Text>
                    </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            );
          
    

}

export default Card;

