import {
  Flex,
  FlexProps,
  Heading,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { ColorMode } from '..';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('gray.800', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.800', 'gray.900')}
      justifyContent="space-between"
      {...rest}
    >
      <Heading color={'yellow.200'} fontSize={'4xl'}>
        Taskly.
      </Heading>
      <Flex alignItems="center">
        <ColorMode
          _hover={{
            bg: 'yellow.200',
            color: 'gray.800'
          }}
          mr="2"
        />
        <IconButton
          variant="outline"
          color="whiteAlpha.900"
          onClick={onOpen}
          _hover={{
            bg: 'yellow.200',
            color: 'gray.800'
          }}
          _active={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Flex>
    </Flex>
  );
};
