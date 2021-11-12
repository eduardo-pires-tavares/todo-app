import { Box } from '@chakra-ui/react';
import { SideBarContent } from './SideBarContent';

export const SideBar = () => {
  return (
    <Box minH="full" bg="gray.800" as="nav">
      <SideBarContent />
    </Box>
  );
};
