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
import { Link, useLocation } from 'react-router-dom';
import { ColorMode } from '..';
import { Routes } from 'src/router';

export const Navigation = () => {
  const { pathname } = useLocation();
  console.log(pathname);
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
          <Button
            _active={{ bg: 'none' }}
            _focus={{ boxShadow: 'none' }}
            _hover={{ bg: 'none' }}
            variant="ghost"
          >
            <Link to={Routes.Home}>
              <Heading color={'yellow.200'} fontSize={'4xl'}>
                Taskly.
              </Heading>
            </Link>
          </Button>
        </Flex>
      </Box>
      <ColorMode />
      <UnorderedList ml={0} p={0} mt={16} spacing={14} styleType={'none'}>
        <ListItem>
          <Link to={Routes.Tasks}>
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon
                color={pathname === Routes.Tasks ? 'yellow.100' : ''}
                as={BsHouse}
              />
              <Text
                color={pathname === Routes.Tasks ? 'yellow.100' : ''}
                as={'span'}
              >
                Tasks
              </Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={Routes.Login}>
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon
                color={pathname === Routes.Login ? 'yellow.100' : ''}
                as={AiOutlineUser}
              />
              <Text
                color={pathname === Routes.Login ? 'yellow.100' : ''}
                as={'span'}
              >
                Login
              </Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={Routes.SignUp}>
            <Flex direction={'row'} alignItems={'center'}>
              <ListIcon
                as={AiOutlineLogin}
                color={pathname === Routes.SignUp ? 'yellow.100' : ''}
              />
              <Text
                color={pathname === Routes.SignUp ? 'yellow.100' : ''}
                as={'span'}
              >
                Sign Up
              </Text>
            </Flex>
          </Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
