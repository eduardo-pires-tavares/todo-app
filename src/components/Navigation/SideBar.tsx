import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import { MobileNav } from './MobileNav';
import { SideBarContent } from './SideBarContent';

export const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  return (
    <Box
      minH={{ base: 'auto', md: '100vh' }}
      bg={useColorModeValue('gray.800', 'gray.900')}
      as="nav"
      borderRight={{ base: 'unset', md: '1px' }}
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <SideBarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
};
