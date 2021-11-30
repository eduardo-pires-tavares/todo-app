import {
  Box,
  Flex,
  Heading,
  CloseButton,
  BoxProps,
  useColorModeValue
} from '@chakra-ui/react';
import { ColorMode } from '..';
import { AppRoutes } from '../../router/Router';

import { NavItem } from './NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SideBarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('gray.800', 'gray.900')}
      w={{ base: 'full', md: '200px' }}
      h="full"
      pos="fixed"
      {...rest}
    >
      <Flex h="20" mx="8" alignItems="center" justifyContent="space-between">
        <Heading color={'yellow.200'} fontSize={'4xl'}>
          Taskly.
        </Heading>
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          color="whiteAlpha.900"
          onClick={onClose}
        />
      </Flex>
      <Flex
        h="14"
        mx="4"
        alignItems="center"
        justifyContent="center"
        display={{ base: 'none', md: 'flex' }}
      >
        <ColorMode
          _hover={{
            bg: 'yellow.200',
            color: 'gray.800'
          }}
        />
      </Flex>
      {AppRoutes.map(({ icon, name, path }) => {
        return (
          <NavItem onClick={onClose} key={name} path={path} icon={icon}>
            {name}
          </NavItem>
        );
      })}
      <Flex justifyContent="center"></Flex>
    </Box>
  );
};
