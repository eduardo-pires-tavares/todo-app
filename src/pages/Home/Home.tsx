import {
  Heading,
  Text,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  Flex
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Illustration } from 'src/components';
import { RoutesPath } from 'src/router';

export const Home = () => {
  return (
    <Flex
      w="100vw"
      bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
      justifyContent="center"
    >
      <VStack
        py={{ base: 4, md: 12 }}
        spacing={{ base: 8, md: 10 }}
        textAlign="center"
        align="center"
        maxW="5xl"
        justifyContent="center"
      >
        <Heading
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          fontWeight="600"
          lineHeight="110%"
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        >
          Tracking tasks{' '}
          <Text as="span" color="yellow.400">
            made easy
          </Text>
        </Heading>
        <Text
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          maxW="3xl"
          lineHeight="200%"
        >
          Never miss a task. Keep track of your objectives and receive smart
          reminders in appropriate times. Read your{' '}
          <Text fontWeight="600" as="span" color="yellow.400">
            Taskly
          </Text>{' '}
          every morning.
        </Text>
        <HStack spacing={6}>
          <Button
            rounded={'full'}
            px={6}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            bg={'yellow.400'}
            _hover={{ bg: 'yellow.500' }}
          >
            Get started
          </Button>
          <Link to={RoutesPath.SignUp}>
            <Button rounded={'full'} px={6} fontWeight="600">
              Sign Up
            </Button>
          </Link>
        </HStack>
        <Flex w={'full'} justifyContent="center" align="center">
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </VStack>
    </Flex>
  );
};
