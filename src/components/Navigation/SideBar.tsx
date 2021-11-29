import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { MobileNav } from './MobileNav';
import { SideBarContent } from './SideBarContent';

export const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log({ isOpen, onOpen, onClose });

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.800', 'gray.900')}
      as="nav"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <SideBarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={false}
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
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={() => onOpen} />
    </Box>
  );
};
