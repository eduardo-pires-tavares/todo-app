import { Box, Flex, Heading } from '@chakra-ui/react';
import { HamburgerIcon, EditIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  return (
    <Flex flexDir="column" w="100%" h="100%" alignItems="center" bg="gray.800">
      <Box>
        <Box>
          <Heading>Taskly</Heading>
        </Box>
      </Box>
    </Flex>
  );
};
