import { Box, Flex, Heading, CloseButton } from '@chakra-ui/react';
import { ColorMode } from '..';
import { AppRoutes } from '../../router/Router';
import { NavItem } from './NavItem';

export const SideBarContent = () => {
  return (
    <Box bg="gray.800" w={{ base: 'full', md: '220px' }} h="full" pos="fixed">
      <Flex
        h="20"
        mx="8"
        alignItems="center"
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        <Heading color={'yellow.200'} fontSize={'4xl'}>
          Taskly.
        </Heading>
        <CloseButton
          color="whiteAlpha.900"
          display={{ base: 'flex', md: 'none' }}
        />
      </Flex>
      <Flex
        h="14"
        alignItems="center"
        mx={{ base: '16', md: '0' }}
        justifyContent={{ base: 'start', md: 'center' }}
      >
        <ColorMode />
      </Flex>
      {AppRoutes.map(({ icon, name, path }) => {
        return (
          <NavItem path={path} icon={icon}>
            {name}
          </NavItem>
        );
      })}
    </Box>
  );
};
