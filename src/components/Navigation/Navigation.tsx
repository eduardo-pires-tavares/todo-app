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
import { Link, useLocation } from 'react-router-dom';
import { ColorMode } from '..';
import { AppRoutes } from 'src/router';

export const Navigation = () => {
  const { pathname } = useLocation();

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
            <Heading color={'yellow.200'} fontSize={'4xl'}>
              Taskly.
            </Heading>
          </Button>
        </Flex>
      </Box>
      <ColorMode />
      <UnorderedList ml={0} p={0} mt={16} spacing={14} styleType={'none'}>
        {AppRoutes.map((route) => {
          const { name, path, icon } = route;
          return (
            <ListItem key={name}>
              <Link to={path}>
                <Flex direction={'row'} alignItems={'center'}>
                  <ListIcon
                    color={pathname === path ? 'yellow.100' : ''}
                    as={icon}
                  />
                  <Text
                    color={pathname === path ? 'yellow.100' : ''}
                    as={'span'}
                  >
                    {name}
                  </Text>
                </Flex>
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
};
