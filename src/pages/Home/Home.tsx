import { AddIcon } from '@chakra-ui/icons';
import {
  Heading,
  Text,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  Flex,
  ScaleFade
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DragAndDropGrid } from 'src/components/DragAndDrop/DragAndDropGrid';
import { NewTodoItem } from 'src/components/TodoItem/NewTodoItem';
import { TodoItem } from 'src/components/TodoItem/TodoItem';
import { MockTodos } from 'src/data/MockData';

export const Home = () => {
  const [showNewTodo, setShowNewTodo] = useState<boolean>(false);
  const [isTodoAdded, setIsTodoAdded] = useState<boolean>(false);

  useEffect(() => {
    if (isTodoAdded && showNewTodo) {
      setIsTodoAdded(false);
      setShowNewTodo(false);
    }
  }, [isTodoAdded, showNewTodo]);

  return (
    <>
      <Flex w="full" justifyContent="center" align="center">
        <VStack
          py={{ base: 4, md: 6 }}
          px={{ base: 4 }}
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
              fontFamily="Verdana"
              rounded={'full'}
              leftIcon={<AddIcon w="3" mt="0.5" mr="1" h="3" />}
              variant="solid"
              px={6}
              color="gray.700"
              bg={'yellow.400'}
              _hover={{ bg: 'yellow.500' }}
              onClick={() => setShowNewTodo(true)}
            >
              Add Task
            </Button>
          </HStack>
          {showNewTodo && !isTodoAdded && (
            <ScaleFade initialScale={0.5} in={showNewTodo}>
              <NewTodoItem setIsTodoAdded={setIsTodoAdded} />
            </ScaleFade>
          )}
        </VStack>
      </Flex>
      {MockTodos.map(({ id, ...args }) => {
        return <TodoItem key={id} id={id} {...args} />;
      })}
    </>
  );
};
