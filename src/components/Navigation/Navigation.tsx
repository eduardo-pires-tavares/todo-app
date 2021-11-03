import {
  Box,
  Button,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  ListIcon,
  Text
} from '@chakra-ui/react';
import { BsHouse } from 'react-icons/bs';
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { ColorMode } from '..';

export const Navigation = () => {
  return (
    <Flex
      as={'nav'}
      pos={'relative'}
      flexDir="column"
      w={'full'}
      h={'full'}
      alignItems="center"
      color={'whiteAlpha.900'}
      bg="gray.800"
    >
      <Box w={'full'} p={4}>
        <Flex
          flexDir="row"
          justifyContent={'center'}
          alignItems="center"
          h={14}
        >
          <Heading fontSize={'4xl'}>Taskly</Heading>
        </Flex>
        <Button
          _active={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: 'none' }}
          variant="ghost"
          top={7}
          left={'75%'}
          pos={'absolute'}
        >
          <HamburgerIcon />
        </Button>
      </Box>
      <ColorMode />
      <UnorderedList ml={0} p={0} mt={16} spacing={14} styleType={'none'}>
        <ListItem>
          <Link to="/">
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon as={BsHouse} />
              <Text as={'span'}>Tasks</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/Login">
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon as={AiOutlineUser} color={'whiteAlpha.900'} />
              <Text as={'span'}>Login</Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/SignUp">
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon as={AiOutlineLogin} color={'whiteAlpha.900'} />
              <Text as={'span'}>Sign Up</Text>
            </Flex>
          </Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
